'use strict';

const MAX_NAME_LEN = 200;
const DEFAULT_TIERS = ['S','A','B','C','D','E','F'];
const TIER_COLORS = ['#ff6666','#f0a731','#f4d95b','#66ff66','#58c8f4','#5b76f4','#f45bed'];

let unique_id = 0;
let unsaved_changes = false;
const LAYOUT_HORIZONTAL = 0;
const LAYOUT_VERTICAL = 1;
let cur_layout = LAYOUT_HORIZONTAL;

let all_headers = [];
let headers_orig_min_width;
let untiered_images;
let tierlist_div;
let selected_item = null;
let modal_image_viewed;
let modal, modal_image, modal_caption_input, modal_caption_label, modal_close_button;

function reset_row(row) {
  row.querySelectorAll('span.item').forEach((item) => {
    while (item.firstChild) untiered_images.appendChild(item.firstChild);
    item.remove();
  });
}
function hard_reset_list() { tierlist_div.innerHTML = ''; untiered_images.innerHTML = ''; all_headers = []; }
function soft_reset_list() { tierlist_div.querySelectorAll('.row').forEach(reset_row); unsaved_changes = true; }

function clear_selection() {
  if (selected_item) selected_item.classList.remove('selected');
  selected_item = null;
  document.querySelectorAll('.tap-target').forEach(el => el.classList.remove('tap-target'));
}
function mark_tap_targets(on) {
  document.querySelectorAll('.row, .images, #trash').forEach(el => el.classList.toggle('tap-target', !!on));
}
function select_item(item) {
  if (selected_item === item) { clear_selection(); return; }
  clear_selection();
  selected_item = item;
  item.classList.add('selected');
  mark_tap_targets(true);
}
function place_selected_into(container) {
  if (!selected_item) return;
  const items_container = container.querySelector?.('.items') || container;
  if (selected_item.parentNode !== items_container) {
    items_container.appendChild(selected_item);
    unsaved_changes = true;
  }
  clear_selection();
}

window.addEventListener('load', () => {
  modal = document.getElementById('imageModal');
  modal_image = document.getElementById('modalImage');
  modal_caption_input = document.getElementById('modalCaptionInput');
  modal_caption_label = document.getElementById('modalCaptionLabel');
  modal_close_button = document.getElementById('closeModal');
  untiered_images = document.querySelector('.images');
  tierlist_div = document.querySelector('.tierlist');

  for (let i = 0; i < DEFAULT_TIERS.length; ++i) add_row(i, DEFAULT_TIERS[i]);
  recompute_header_colors();
  headers_orig_min_width = all_headers[0]?.[0]?.clientWidth || 100;

  bind_title_events();

  document.getElementById('load-img-input').addEventListener('input', (evt) => {
    for (let file of evt.target.files || []) {
      const reader = new FileReader();
      reader.addEventListener('load', (load_evt) => {
        const img = create_img_with_src(load_evt.target.result);
        img.title = file.name;
        untiered_images.appendChild(wrap_item(img));
        unsaved_changes = true;
      });
      reader.readAsDataURL(file);
    }
    evt.target.value = '';
  });

  document.onpaste = (evt) => {
    const clip_data = evt.clipboardData || evt.originalEvent?.clipboardData;
    for (let item of (clip_data?.items || [])) {
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (load_evt) => {
          untiered_images.appendChild(wrap_item(create_img_with_src(load_evt.target.result)));
          unsaved_changes = true;
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  document.getElementById('reset-list-input').addEventListener('click', () => {
    if (confirm('Reset Tierlist? (this will place all images back in the pool)')) { soft_reset_list(); clear_selection(); }
  });
  document.getElementById('export-input').addEventListener('click', () => {
    const name = prompt('Please give a name to this tierlist');
    if (name) save_tierlist(`${name}.json`);
  });
  document.getElementById('import-input').addEventListener('input', (evt) => {
    if (!evt.target.files?.[0]) return;
    const reader = new FileReader();
    reader.addEventListener('load', (load_evt) => {
      try {
        const parsed = JSON.parse(load_evt.target.result);
        hard_reset_list();
        load_tierlist(parsed);
        clear_selection();
      } catch (e) { alert('Failed to parse data'); }
    });
    reader.readAsText(evt.target.files[0]);
    evt.target.value = '';
  });

  bind_trash_events();
  bind_toggle_layout_events();
  bind_modal_events();
  bind_tap_targets();

  window.addEventListener('beforeunload', (evt) => {
    if (!unsaved_changes) return null;
    const msg = 'You have unsaved changes. Leave anyway?';
    (evt || window.event).returnValue = msg;
    return msg;
  });

  void try_load_tierlist_json();
});

function wrap_item(img) {
  const td = document.createElement('span');
  td.classList.add('item');
  td.appendChild(img);
  td.addEventListener('click', (evt) => {
    if (modal.classList.contains('visible')) return;
    evt.stopPropagation();
    select_item(td);
  });
  return td;
}

function create_img_with_src(src) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.style.userSelect = 'none';
  img.classList.add('draggable', 'zoomable');
  img.draggable = false;
  let lastTap = 0;
  img.addEventListener('click', (evt) => {
    const now = Date.now();
    if (now - lastTap < 350) {
      evt.stopPropagation();
      evt.preventDefault();
      open_modal_for(img);
      clear_selection();
      lastTap = 0;
    } else {
      lastTap = now;
    }
  });
  return img;
}

function bind_tap_targets() {
  document.addEventListener('click', (evt) => {
    if (!selected_item) return;
    const row = evt.target.closest('.row');
    if (row && tierlist_div.contains(row) && !evt.target.closest('.row-buttons') && !evt.target.closest('.header')) {
      place_selected_into(row); return;
    }
    const images = evt.target.closest('.images');
    if (images) { place_selected_into(images); return; }
    if (evt.target.closest('#trash')) return;
    if (!evt.target.closest('.button') && !evt.target.closest('.title')) clear_selection();
  });
}

function open_modal_for(img) {
  modal_image.src = img.src;
  modal_image.alt = img.alt || '';
  modal_image_viewed = img;
  update_modal_caption(img.title || '');
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function save(filename, text) {
  unsaved_changes = false;
  const el = document.createElement('a');
  el.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
  el.setAttribute('download', filename);
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}

function save_tierlist(filename) {
  const serialized_tierlist = { title: document.querySelector('.title-label').innerText, rows: [], untiered: [], untiered_names: [] };
  tierlist_div.querySelectorAll('.row').forEach((row, i) => {
    const header = row.querySelector('.header');
    const rgb = (header.style.backgroundColor || '').replace(/[^\d,]/g, '').split(',');
    const color_hex = (rgb.length >= 3 && rgb[0] !== '') ? rgb_to_hex(rgb[0], rgb[1], rgb[2]) : (TIER_COLORS[i % TIER_COLORS.length]);
    serialized_tierlist.rows.push({ name: row.querySelector('.header label').innerText.substr(0, MAX_NAME_LEN), color: color_hex, imgs: [], img_names: [] });
    row.querySelectorAll('img').forEach((img) => {
      serialized_tierlist.rows[i].imgs.push(img.src);
      serialized_tierlist.rows[i].img_names.push(img.title ?? '');
    });
  });
  untiered_images.querySelectorAll('img').forEach((img) => {
    serialized_tierlist.untiered.push(img.src);
    serialized_tierlist.untiered_names.push(img.title ?? '');
  });
  save(filename, JSON.stringify(serialized_tierlist));
}

function load_tierlist(serialized_tierlist) {
  document.querySelector('.title-label').innerText = serialized_tierlist.title || 'My TierList';
  (serialized_tierlist.rows || []).forEach((ser_row, idx) => {
    const elem = add_row(idx, ser_row.name || '');
    const items_container = elem.querySelector('.items');
    for (let i = 0; i < (ser_row.imgs?.length ?? 0); ++i) {
      const img = create_img_with_src(ser_row.imgs[i]);
      if ((ser_row.img_names?.length ?? 0) > i) img.title = ser_row.img_names[i];
      items_container.appendChild(wrap_item(img));
    }
    elem.querySelector('label').innerText = ser_row.name || '';
    if (ser_row.color) {
      const header = elem.querySelector('.header');
      header.style.backgroundColor = ser_row.color;
      const picker = header.querySelector('.row-color-picker');
      if (picker) picker.value = ser_row.color;
    }
  });
  recompute_header_colors();
  if (serialized_tierlist.untiered?.length) {
    for (let i = 0; i < serialized_tierlist.untiered.length; ++i) {
      const img = create_img_with_src(serialized_tierlist.untiered[i]);
      if ((serialized_tierlist.untiered_names?.length ?? 0) > i) img.title = serialized_tierlist.untiered_names[i];
      untiered_images.appendChild(wrap_item(img));
    }
  }
  unsaved_changes = false;
}

function rgb_to_hex(r, g, b) { return '#' + (1 << 24 | (Number(r)||0) << 16 | (Number(g)||0) << 8 | (Number(b)||0)).toString(16).slice(1); }

function enable_edit_on_click(container, input, label, row_color_input) {
  function change_label() {
    input.style.display = 'none';
    label.innerText = input.value;
    label.style.display = 'inline';
    if (row_color_input !== undefined) {
      container.style.backgroundColor = row_color_input.value;
      row_color_input.style.display = 'none';
    }
    unsaved_changes = true;
  }
  container.addEventListener('click', (evt) => {
    if (selected_item) return;
    if (evt.target.classList.contains('header') && input.style.display === 'inline') {
      change_label();
    } else if (evt.target.closest('label') || evt.target === container) {
      label.style.display = 'none';
      input.value = label.innerText.substr(0, MAX_NAME_LEN);
      input.style.display = 'inline';
      input.select();
      if (row_color_input !== undefined) row_color_input.style.display = 'inline';
    }
  });
  container.addEventListener('keydown', (evt) => { if (evt.keyCode === 13 && input.style.display === 'inline') change_label(); });
  input.addEventListener('blur', () => { if (input.style.display === 'inline') change_label(); });
}

function bind_title_events() {
  document.querySelectorAll('.title').forEach((title) => {
    const label = title.querySelector('label');
    const input = title.querySelector('input');
    if (label && input) enable_edit_on_click(title, input, label);
  });
}

function create_label_input(row, row_idx, row_name) {
  const input = document.createElement('input');
  input.id = `input-tier-${unique_id++}`;
  input.type = 'text';
  const label = document.createElement('label');
  label.htmlFor = input.id;
  label.innerText = row_name;
  const header = row.querySelector('.header');
  all_headers.splice(row_idx, 0, [header, input, label]);
  header.appendChild(label);
  header.appendChild(input);
  const row_color_input = document.createElement('input');
  row_color_input.type = 'color';
  row_color_input.classList.add('row-color-picker');
  row_color_input.value = TIER_COLORS[row_idx % TIER_COLORS.length];
  row_color_input.style.display = 'none';
  header.appendChild(row_color_input);
  enable_edit_on_click(header, input, label, row_color_input);
}

function add_row(index, name) {
  const div = document.createElement('div');
  const header = document.createElement('span');
  const items = document.createElement('span');
  div.classList.add('row');
  header.classList.add('header');
  items.classList.add('items');
  div.appendChild(header); div.appendChild(items);
  const row_buttons = document.createElement('div');
  row_buttons.classList.add('row-buttons');
  const btn_plus_up = document.createElement('input'); btn_plus_up.type='button'; btn_plus_up.value='+'; btn_plus_up.title='Add row above';
  btn_plus_up.addEventListener('click', (evt) => { evt.stopPropagation(); const p=evt.target.closest('.row'); const rows=[...tierlist_div.children]; add_row(rows.indexOf(p), ''); recompute_header_colors(); });
  const btn_rm = document.createElement('input'); btn_rm.type='button'; btn_rm.value='-'; btn_rm.title='Remove row';
  btn_rm.addEventListener('click', (evt) => {
    evt.stopPropagation(); const rows=[...tierlist_div.querySelectorAll('.row')]; if (rows.length < 2) return;
    const p=evt.target.closest('.row'); const idx=rows.indexOf(p);
    if (rows[idx].querySelectorAll('img').length === 0 || confirm(`Remove tier ${rows[idx].querySelector('.header label').innerText}?`)) rm_row(idx);
  });
  const btn_plus_down = document.createElement('input'); btn_plus_down.type='button'; btn_plus_down.value='+'; btn_plus_down.title='Add row below';
  btn_plus_down.addEventListener('click', (evt) => { evt.stopPropagation(); const p=evt.target.closest('.row'); const rows=[...tierlist_div.children]; add_row(rows.indexOf(p)+1, name); recompute_header_colors(); });
  row_buttons.append(btn_plus_up, btn_rm, btn_plus_down);
  div.appendChild(row_buttons);
  const rows = tierlist_div.children;
  if (index >= rows.length) tierlist_div.appendChild(div); else tierlist_div.insertBefore(div, rows[index]);
  create_label_input(div, index, name);
  return div;
}
function rm_row(idx) { const row = tierlist_div.children[idx]; reset_row(row); tierlist_div.removeChild(row); }
function recompute_header_colors() {
  tierlist_div.querySelectorAll('.row').forEach((row, row_idx) => {
    const color = TIER_COLORS[row_idx % TIER_COLORS.length];
    const header = row.querySelector('.header');
    if (!header.style.backgroundColor) header.style.backgroundColor = color;
    const picker = header.querySelector('.row-color-picker');
    if (picker && (!picker.value || picker.value === '#000000')) picker.value = color;
  });
}
function bind_trash_events() {
  const trash = document.getElementById('trash'); if (!trash) return;
  const openSrc = trash.dataset.binOpen || trash.src; const closedSrc = trash.dataset.binClosed || trash.src;
  trash.addEventListener('click', (evt) => {
    if (!selected_item) return; evt.stopPropagation();
    trash.src = openSrc; selected_item.remove(); unsaved_changes = true; clear_selection();
    setTimeout(() => { trash.src = closedSrc; }, 250);
  });
}
function bind_toggle_layout_events() {
  document.getElementById('toggle-layout')?.addEventListener('click', () => set_layout((cur_layout + 1) % 2));
}
function set_layout(layout) {
  const main = document.getElementsByClassName('main-content')[0];
  if (layout === LAYOUT_VERTICAL) main.classList.add('vertical'); else main.classList.remove('vertical');
  cur_layout = layout;
}
function is_url(str) { try { new URL(str); return true; } catch (e) { return false; } }
async function try_load_tierlist_json() {
  const load_from_url = new URLSearchParams(window.location.search).get('url');
  if (load_from_url !== null && is_url(load_from_url)) {
    try {
      let result = await fetch(load_from_url); result = await result.json();
      hard_reset_list(); load_tierlist(result);
    } catch (e) { console.error(e); }
  }
}
function update_modal_caption(new_value) { modal_caption_input.value = new_value; modal_caption_label.innerText = new_value || '(untitled)'; }
function close_modal() {
  if (modal_image_viewed) { modal_image_viewed.title = modal_caption_input.value ?? ''; modal_image_viewed = null; }
  modal.classList.remove('visible'); modal_image.src = ''; update_modal_caption(''); document.body.style.overflow = '';
}
function bind_modal_events() {
  modal_close_button.addEventListener('click', close_modal);
  modal.addEventListener('click', (evt) => { if (evt.target === modal) close_modal(); });
  modal_caption_input.addEventListener('change', () => { if (modal_image_viewed) { modal_image_viewed.title = modal_caption_input.value; update_modal_caption(modal_caption_input.value); } });
  document.addEventListener('keydown', (evt) => { if (evt.key === 'Escape' && modal.classList.contains('visible')) close_modal(); });
}
