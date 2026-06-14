/* Mobile navigation toggle (hamburger) for the Baril Group page. */
(() => {
  'use strict';
  const nav = document.getElementById('nav');
  const btn = document.getElementById('navToggle');
  if (!nav || !btn) return;
  const close = () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('.navlinks a').forEach(a => a.addEventListener('click', close));
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
