/* Renders Baril Coatings markets from ../data/markets.json, with the practice
   cases for each segment cross-referenced from ../data/cases.json.
   Multilingual (nl/en/pl/ro); English by default. Market texts exist in nl/en;
   pl/ro fall back to the English copy (the project's default language). */
(() => {
  'use strict';
  const T = {
    nl: { eyebrow: 'Markten · Baril Coatings', h1: 'Onze <span class="paint">markten</span>', lead: 'Voor elk segment de juiste bescherming — met de toepassingsgebieden, eigenschappen en praktijkcases die erbij horen.', updated: 'bijgewerkt', cases: n => n + ' praktijkcase' + (n === 1 ? '' : 's') + ' in dit segment', none: 'Geen markten gevonden.', fail: 'Kon de markten niet laden.' },
    en: { eyebrow: 'Markets · Baril Coatings', h1: 'Our <span class="paint">markets</span>', lead: 'The right protection for every segment — with the application areas, properties and case studies that go with it.', updated: 'updated', cases: n => n + ' case stud' + (n === 1 ? 'y' : 'ies') + ' in this segment', none: 'No markets found.', fail: 'Could not load the markets.' },
    pl: { eyebrow: 'Rynki · Baril Coatings', h1: 'Nasze <span class="paint">rynki</span>', lead: 'Odpowiednia ochrona dla każdego segmentu — wraz z obszarami zastosowań, właściwościami i powiązanymi studiami przypadków.', updated: 'zaktualizowano', cases: n => n + (n === 1 ? ' studium przypadku' : ' studia przypadków') + ' w tym segmencie', none: 'Nie znaleziono rynków.', fail: 'Nie udało się załadować rynków.' },
    ro: { eyebrow: 'Piețe · Baril Coatings', h1: 'Piețele <span class="paint">noastre</span>', lead: 'Protecția potrivită pentru fiecare segment — cu domeniile de aplicare, proprietățile și studiile de caz aferente.', updated: 'actualizat', cases: n => n + (n === 1 ? ' studiu de caz' : ' studii de caz') + ' în acest segment', none: 'Nicio piață găsită.', fail: 'Nu s-au putut încărca piețele.' }
  };

  let lang; try { lang = localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) { lang = 'en'; }
  if (!T[lang]) lang = 'en';
  // Market copy exists in nl/en only; everything non-nl uses the English field
  // (falling back to nl if absent), so pl/ro show the English content.
  const L = (o, k) => lang === 'nl' ? o[k] : (o[k + '_en'] != null ? o[k + '_en'] : o[k]);

  const root = document.getElementById('markets');
  const flagBox = document.getElementById('langflags');
  let MD = null, CASES = [];

  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const caseSlug = url => (String(url).match(/\/praktijkcases\/([^/?#]+)/) || [])[1] || '';

  function applyChrome() {
    const t = T[lang];
    document.documentElement.lang = lang;
    const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
    set('t-eyebrow', t.eyebrow); set('t-h1', t.h1); set('t-lead', t.lead);
    const up = document.getElementById('t-updated'); if (up) up.textContent = t.updated;
    if (flagBox) { flagBox.querySelectorAll('button[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang)); const cur = flagBox.querySelector('.flag-current'), src = flagBox.querySelector('button[data-lang="' + lang + '"] .flag'); if (cur && src) cur.src = src.getAttribute('src'); }
  }

  function section(m) {
    const t = T[lang];
    const sec = el('section', 'marketsec'); sec.id = m.slug;
    sec.appendChild(el('h2', null, L(m, 'title') || m.label));
    const desc = L(m, 'description');
    if (desc) sec.appendChild(el('p', 'market-desc', desc));
    const body = L(m, 'body');
    if (body && body.length) {
      const bw = el('div', 'market-body');
      body.forEach(p => bw.appendChild(el('p', null, p)));
      sec.appendChild(bw);
    }
    const rel = CASES.filter(c => (c.markets || []).includes(m.label));
    if (rel.length) {
      const cw = el('div', 'market-cases');
      cw.appendChild(el('h4', null, t.cases(rel.length)));
      const list = el('div', 'market-caselist');
      rel.slice(0, 9).forEach(c => {
        const a = el('a'); a.href = '../cases/case.html?c=' + encodeURIComponent(caseSlug(c.url));
        if (c.image) { const img = document.createElement('img'); img.className = 'mi'; img.loading = 'lazy'; img.src = c.image; img.alt = ''; a.appendChild(img); }
        a.appendChild(el('span', null, c.title || ''));
        list.appendChild(a);
      });
      cw.appendChild(list);
      sec.appendChild(cw);
    }
    return sec;
  }

  function render() {
    root.innerHTML = '';
    if (!MD) return;
    (MD.markets || []).forEach(m => root.appendChild(section(m)));
    if (!MD.markets || !MD.markets.length) root.appendChild(el('p', 'pempty', T[lang].none));
  }

  applyChrome();
  if (flagBox) flagBox.querySelectorAll('button[data-lang]').forEach(b => b.addEventListener('click', () => {
    lang = b.dataset.lang; if (!T[lang]) lang = 'en';
    try { localStorage.setItem('baril-coatings-lang', lang); } catch (e) {}
    const lm = document.getElementById('langMenu'), lt = document.getElementById('langToggle');
    if (lm) lm.classList.remove('open'); if (lt) lt.setAttribute('aria-expanded', 'false');
    applyChrome(); render();
  }));

  Promise.all([
    fetch('../data/markets.json', { cache: 'no-cache' }).then(r => r.json()),
    fetch('../data/cases.json', { cache: 'no-cache' }).then(r => r.json()).catch(() => ({ cases: [] }))
  ]).then(([md, cd]) => {
    MD = md; CASES = cd.cases || [];
    const g = document.getElementById('genDate'); if (g && md.generated) g.textContent = md.generated;
    render();
  }).catch(() => { root.appendChild(el('p', 'pempty', T[lang].fail)); });
})();
