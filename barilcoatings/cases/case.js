/* Renders a single practice case (self-contained, no link to the old site)
   from ../data/cases.json, selected via ?c=<slug>. Multilingual UI (nl/en);
   English by default. The case content exists in Dutch only and stays Dutch;
   only the interface chrome and market labels switch language. */
(() => {
  'use strict';
  const T = {
    nl: { back: '← Alle cases', fallback: 'Praktijkcase', notFound: 'Case niet gevonden.', fail: 'Kon de case niet laden.' },
    en: { back: '← All cases', fallback: 'Case study', notFound: 'Case not found.', fail: 'Could not load the case.' }
  };
  const MARKET_EN = {
    'Constructie & Infra': 'Construction & Infrastructure',
    'Gebouwen & Onderhoud': 'Buildings & maintenance',
    'Industrie & Machinebouw': 'Industry & engineering',
    'Marine & Offshore': 'Marine & Offshore'
  };

  const AVAIL = ['nl', 'en'];
  let lang; try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) { lang = 'en'; }
  if (!AVAIL.includes(lang)) lang = 'en';
  const marketLabel = m => (lang === 'nl') ? m : (MARKET_EN[m] || m);

  const root = document.getElementById('case');
  const flagBox = document.getElementById('langflags');
  let CURRENT = null;

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const caseSlug = url => (String(url).match(/\/praktijkcases\/([^/?#]+)/) || [])[1] || '';
  const slug = new URLSearchParams(location.search).get('c') || '';

  function applyFlags() {
    document.documentElement.lang = lang;
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang)); const cur = flagBox.querySelector('.flag-current'), src = flagBox.querySelector('button[data-lang="' + lang + '"] .flag'); if (cur && src) cur.src = src.getAttribute('src'); }
  }

  function render(c) {
    const t = T[lang];
    root.innerHTML = '';
    document.title = 'Baril Coatings — ' + (c.title || t.fallback);
    const back = el('a', 'back', t.back); back.href = './'; root.appendChild(back);
    root.appendChild(el('h1', null, c.title || ''));
    if (c.markets && c.markets.length) { const m = el('div', 'cd-markets'); c.markets.forEach(x => m.appendChild(el('span', null, marketLabel(x)))); root.appendChild(m); }
    const imgs = (c.images || []).slice();
    if (imgs.length) { const hero = el('div', 'cd-hero'); const img = document.createElement('img'); img.src = imgs.shift(); img.alt = c.title || ''; hero.appendChild(img); root.appendChild(hero); }
    const body = el('div', 'cd-body');
    const paras = (c.body && c.body.length) ? c.body : (c.intro ? [c.intro] : []);
    paras.forEach(p => body.appendChild(el('p', null, p)));
    root.appendChild(body);
    if (imgs.length) { const g = el('div', 'cd-gallery'); imgs.forEach(src => { const i = document.createElement('img'); i.loading = 'lazy'; i.src = src; i.alt = ''; g.appendChild(i); }); root.appendChild(g); }
  }

  function renderMissing() {
    const t = T[lang];
    root.innerHTML = '';
    const back = el('a', 'back', t.back); back.href = './'; root.appendChild(back);
    root.appendChild(el('p', 'pempty', t.notFound));
  }

  applyFlags();
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!AVAIL.includes(lang)) lang = 'en';
    try { localStorage.setItem('baril-coatings-lang', lang); } catch (e) {}
    const lm = document.getElementById('langMenu'), lt = document.getElementById('langToggle');
    if (lm) lm.classList.remove('open'); if (lt) lt.setAttribute('aria-expanded', 'false');
    applyFlags(); if (CURRENT) render(CURRENT); else renderMissing();
  }));

  fetch('../data/cases.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => {
      CURRENT = (d.cases || []).find(x => caseSlug(x.url) === slug) || null;
      if (CURRENT) render(CURRENT); else renderMissing();
    })
    .catch(() => { root.appendChild(el('p', 'pempty', T[lang].fail)); });
})();
