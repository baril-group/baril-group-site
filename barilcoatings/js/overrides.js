/* CMS content overrides for the Baril Coatings one-pager.
   Loads content/coatings.json (edited via /admin) and applies a curated set
   of text + image fields on top of the site's built-in content. Runs AFTER
   i18n.js, so it wins over the baseline; if the JSON is missing or invalid,
   nothing changes and the site keeps its authored text. Fully defensive:
   a problem here can never blank the page. */
(() => {
  'use strict';
  const FILE = 'content/coatings.json';

  // field id -> where it lives in the DOM. Editors never see these selectors.
  const FIELD_MAP = {
    heroEyebrow:      { sel: 'header .eyebrow' },
    heroTitle:        { sel: 'header h1' },
    heroSub:          { sel: '.hero-sub' },
    heroCtaPrimary:   { sel: '.hero-cta .btn-solid' },
    heroCtaSecondary: { sel: '.hero-cta .btn-ghost' },

    aboutQuote:       { sel: '.mission-quote' },

    corrosionH2:      { sel: '#corrosion h2' },
    corrosionIntro:   { sel: '#corrosion .sec-head p:last-child' },
    thinlayerH2:      { sel: '#thinlayer h2' },
    thinlayerIntro:   { sel: '#thinlayer .sec-head p:last-child' },
    bioH2:            { sel: '#bio h2' },
    bioIntro:         { sel: '#bio .sec-head p:last-child' },
    dualcureH2:       { sel: '#dualcure h2' },
    dualcureIntro:    { sel: '#dualcure .sec-head p:last-child' },
    marketsH2:        { sel: '#markets h2' },
    marketsIntro:     { sel: '#markets .sec-head p:last-child' },
    rangesH2:         { sel: '#ranges h2' },
    rangesIntro:      { sel: '#ranges .sec-head p:last-child' },
    proofH2:          { sel: '#proof h2' },
    proofIntro:       { sel: '#proof .sec-head p:last-child' },
    dataH2:           { sel: '#data h2' },

    market1Title:     { sel: '.brand h3', i: 0 },
    market2Title:     { sel: '.brand h3', i: 1 },
    market3Title:     { sel: '.brand h3', i: 2 },
    market4Title:     { sel: '.brand h3', i: 3 },
    market1Text:      { sel: '.brand p:not(.tag)', i: 0 },
    market2Text:      { sel: '.brand p:not(.tag)', i: 1 },
    market3Text:      { sel: '.brand p:not(.tag)', i: 2 },
    market4Text:      { sel: '.brand p:not(.tag)', i: 3 },

    range1Desc:       { sel: '.pillar h4 + p', i: 0 },
    range2Desc:       { sel: '.pillar h4 + p', i: 1 },
    range3Desc:       { sel: '.pillar h4 + p', i: 2 },
    range4Desc:       { sel: '.pillar h4 + p', i: 3 },

    footClaim:        { sel: '.foot-claim' },

    imgHero:          { sel: '#heroPhoto', img: 'bg' },
    imgLab:           { sel: '#bio .chap-media img', i: 0, img: 'src' },
    imgSolar:         { sel: '#bio .chap-media img', i: 1, img: 'src' },
    imgBand:          { sel: '.paint-band img', img: 'src' },
    imgApplicator:    { sel: '.renew-hero img', img: 'src' }
  };

  let data = null;
  const lang = () => {
    try { return localStorage.getItem('baril-coatings-lang') || 'en'; } catch (e) { return 'en'; }
  };

  function apply() {
    if (!data) return;
    const l = lang();
    for (const key in FIELD_MAP) {
      const cfg = FIELD_MAP[key];
      const v = data[key];
      if (v == null) continue;
      let node;
      try { node = document.querySelectorAll(cfg.sel)[cfg.i || 0]; } catch (e) { continue; }
      if (!node) continue;

      if (cfg.img) {
        const src = typeof v === 'string' ? v : (v.src || '');
        if (!src) continue;
        if (cfg.img === 'bg') node.style.backgroundImage = "url('" + src + "')";
        else { node.removeAttribute('srcset'); node.setAttribute('src', src); }
        continue;
      }

      const en = (v.en != null && v.en !== '') ? v.en : null;
      const nl = (v.nl != null && v.nl !== '') ? v.nl : en;
      const next = l === 'nl' ? (nl != null ? nl : en) : en;
      if (next != null && node.innerHTML !== next) node.innerHTML = next;
    }
  }

  // re-apply after the language toggle (which i18n.js handled first)
  const btn = document.getElementById('langSwitch');
  if (btn) btn.addEventListener('click', () => requestAnimationFrame(() => {
    apply();
    if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
  }));

  fetch(FILE, { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : null))
    .then(j => {
      data = j;
      apply();
      if (typeof window.buildRibbon === 'function') requestAnimationFrame(window.buildRibbon);
    })
    .catch(() => { /* keep authored content */ });
})();
