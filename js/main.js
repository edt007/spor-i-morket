/* Menuen er tilgængelig uden JavaScript; med JavaScript foldes den på mobil. */
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#hovedmenu');
const mobileLayout = window.matchMedia('(max-width: 1000px)');

function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  menu.hidden = mobileLayout.matches;
  if (returnFocus) menuButton.focus();
}

function updateMenu() {
  menuButton.hidden = !mobileLayout.matches;
  closeMenu();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
});
mobileLayout.addEventListener('change', updateMenu);
updateMenu();

/* Én visningstilstand styrer både teksten, cirklen og aria-expanded.
   Escape lukker uden at flytte fokus. Touch håndteres i click, så første
   tryk ikke også åbner gennem den fokusbegivenhed, browseren sender. */
const safezones = [...document.querySelectorAll('.safezone')];
let pointerFocus = false;
document.addEventListener('pointerdown', () => { pointerFocus = true; }, true);
document.addEventListener('keydown', () => { pointerFocus = false; }, true);

function setSafezone(button, open) {
  button.setAttribute('aria-expanded', String(open));
  button.querySelector('.safezone-text').hidden = !open;
}

safezones.forEach(button => {
  let pinned = false;
  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') setSafezone(button, true);
  });
  button.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && !pinned && document.activeElement !== button) {
      setSafezone(button, false);
    }
  });
  button.addEventListener('focus', () => {
    if (!pointerFocus) setSafezone(button, true);
  });
  button.addEventListener('blur', () => {
    pinned = false;
    setSafezone(button, false);
  });
  button.addEventListener('click', () => {
    pinned = !pinned;
    setSafezone(button, pinned);
  });
  button.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      pinned = false;
      setSafezone(button, false);
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!button.contains(event.target)) {
      pinned = false;
      setSafezone(button, false);
    }
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileLayout.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu(true);
  }
});
