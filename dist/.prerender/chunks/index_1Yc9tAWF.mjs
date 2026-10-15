import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, o as renderComponent, p as renderHead } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
import { t as renderScript } from "./script_dmZmXB2R.mjs";
import "./compiler_CIZUmh8B.mjs";
import { t as $$Footer } from "./Footer_CnmVcNuR.mjs";
//#region src/pages/draw/index.astro
var draw_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Simple Doodle Board</title>${renderHead($$result)}</head><body><div class="toolbar"><input type="color" id="colorPicker" value="#000000"><input type="range" id="lineWidth" min="1" max="20" value="5"><button id="clearBtn">Clear Canvas</button></div><canvas id="paintCanvas"></canvas>${renderScript($$result, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/draw/index.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/draw/index.astro", void 0);
var $$file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/draw/index.astro";
var $$url = "/alris_games/draw";
//#endregion
//#region \0virtual:astro:page:src/pages/draw/index@_@astro
var page = () => draw_exports;
//#endregion
export { page };
