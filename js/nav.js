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


/* language dropdown toggle (added for 8-language selector) */
(() => {
  'use strict';
  const lt = document.getElementById('langToggle');
  const lm = document.getElementById('langMenu');
  if (!lt || !lm) return;
  const close = () => { lm.classList.remove('open'); lt.setAttribute('aria-expanded', 'false'); };
  lt.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = lm.classList.toggle('open');
    lt.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  lm.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', close));
  document.addEventListener('click', (e) => { if (!e.target.closest('#langflags')) close(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
