/* Renders a single practice case (self-contained, no link to the old site)
   from ../data/cases.json, selected via ?c=<slug>. */
(() => {
  'use strict';
  const root = document.getElementById('case');
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const caseSlug = url => (String(url).match(/\/praktijkcases\/([^/?#]+)/) || [])[1] || '';
  const slug = new URLSearchParams(location.search).get('c') || '';

  function render(c) {
    document.title = 'Baril Coatings — ' + (c.title || 'Praktijkcase');
    const back = el('a', 'back', '← Alle cases'); back.href = './'; root.appendChild(back);
    root.appendChild(el('h1', null, c.title || ''));
    if (c.markets && c.markets.length) { const m = el('div', 'cd-markets'); c.markets.forEach(t => m.appendChild(el('span', null, t))); root.appendChild(m); }
    const imgs = (c.images || []).slice();
    if (imgs.length) { const hero = el('div', 'cd-hero'); const img = document.createElement('img'); img.src = imgs.shift(); img.alt = c.title || ''; hero.appendChild(img); root.appendChild(hero); }
    const body = el('div', 'cd-body');
    const paras = (c.body && c.body.length) ? c.body : (c.intro ? [c.intro] : []);
    paras.forEach(p => body.appendChild(el('p', null, p)));
    root.appendChild(body);
    if (imgs.length) { const g = el('div', 'cd-gallery'); imgs.forEach(src => { const i = document.createElement('img'); i.loading = 'lazy'; i.src = src; i.alt = ''; g.appendChild(i); }); root.appendChild(g); }
  }

  fetch('../data/cases.json', { cache: 'no-cache' })
    .then(r => r.json())
    .then(d => {
      const c = (d.cases || []).find(x => caseSlug(x.url) === slug);
      if (c) render(c);
      else { root.appendChild(el('a', 'back', '← Alle cases')).href = './'; root.appendChild(el('p', 'pempty', 'Case niet gevonden.')); }
    })
    .catch(() => { root.appendChild(el('p', 'pempty', 'Kon de case niet laden.')); });
})();
