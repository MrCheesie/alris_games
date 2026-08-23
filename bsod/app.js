
const triggers = document.querySelectorAll('.bsod-trigger');

triggers.forEach(img => {
  img.addEventListener('click', () => {
    // Check which fullscreen method the browser supports
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { /* Safari support */
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { /* IE11 support */
      img.msRequestFullscreen();
    }
  });
});

// Optional: If they click the fullscreen image again, it drops back to the grid
document.addEventListener('click', (e) => {
  if (document.fullscreenElement && e.target.tagName === 'IMG') {
    document.exitFullscreen();
  }
});
