/* Galleriet ruller kun efter brugerens input. Billederne findes én gang i HTML.
   aria-disabled bevarer knapfokus, når begyndelsen eller slutningen nås. */
const gallery = document.querySelector('#gallery-viewport');
const previousButton = document.querySelector('#gallery-previous');
const nextButton = document.querySelector('#gallery-next');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateGalleryControls() {
  const end = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
  previousButton.setAttribute('aria-disabled', String(gallery.scrollLeft <= 1));
  nextButton.setAttribute('aria-disabled', String(gallery.scrollLeft >= end - 1));
}

function moveGallery(direction) {
  const button = direction < 0 ? previousButton : nextButton;
  if (button.getAttribute('aria-disabled') === 'true') return;
  gallery.scrollBy({
    left: direction * gallery.clientWidth * 0.85,
    behavior: reducedMotion.matches ? 'instant' : 'smooth'
  });
}

previousButton.hidden = false;
nextButton.hidden = false;
previousButton.addEventListener('click', () => moveGallery(-1));
nextButton.addEventListener('click', () => moveGallery(1));
gallery.addEventListener('scroll', updateGalleryControls, { passive: true });
window.addEventListener('resize', updateGalleryControls);
gallery.addEventListener('keydown', event => {
  if (event.target !== gallery) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveGallery(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
updateGalleryControls();
