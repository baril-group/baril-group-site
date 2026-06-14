/* Renders Baril Coatings markets from ../data/markets.json, with the practice
   cases for each segment cross-referenced from ../data/cases.json. */
(() => {
  'use strict';
  const root = document.getElementById('markets');
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };

  function section(m, cases) {
    const sec = el('section', 'marketsec'); sec.id = m.slug;
    sec.appendChild(el('h2', null, m.title || m.label));
    if (m.description) sec.appendChild(el('p', 'market-desc', m.description));
    if (m.body && m.body.length) {
      const body = el('div', 'market-body');
      m.body.forEach(p => body.appendChild(el('p', null, p)));
      sec.appendChild(body);
    }
    const rel = cases.filter(c => (c.markets || []).includes(m.label));
    if (rel.length) {
      const cw = el('div', 'market-cases');
      cw.appendChild(el('h4', null, rel.length + ' praktijkcase' + (rel.length === 1 ? '' : 's') + ' in dit segment'));
      const list = el('div', 'market-caselist');
      rel.slice(0, 9).forEach(c => {
        const a = el('a'); a.href = c.url; a.target = '_blank'; a.rel = 'noopener';
        if (c.image) { const img = document.createElement('img'); img.className = 'mi'; img.loading = 'lazy'; img.src = c.image; img.alt = ''; a.appendChild(img); }
        a.appendChild(el('span', null, c.title || ''));
        list.appendChild(a);
      });
      cw.appendChild(list);
      sec.appendChild(cw);
    }
    if (m.url) {
      const src = el('p', 'market-src');
      const a = el('a', null, 'Lees meer op barilcoatings.com →'); a.href = m.url; a.target = '_blank'; a.rel = 'noopener';
      src.appendChild(a); sec.appendChild(src);
    }
    return sec;
  }

  Promise.all([
    fetch('../data/markets.json', { cache: 'no-cache' }).then(r => r.json()),
    fetch('../data/cases.json', { cache: 'no-cache' }).then(r => r.json()).catch(() => ({ cases: [] }))
  ]).then(([md, cd]) => {
    const g = document.getElementById('genDate'); if (g && md.generated) g.textContent = md.generated;
    const cases = cd.cases || [];
    (md.markets || []).forEach(m => root.appendChild(section(m, cases)));
    if (!md.markets || !md.markets.length) root.appendChild(el('p', 'pempty', 'Geen markten gevonden.'));
  }).catch(() => { root.appendChild(el('p', 'pempty', 'Kon de markten niet laden.')); });
})();
