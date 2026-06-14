/* CMS content overrides for the Baril Group one-pager.
   Loads content/group.json (edited via /admin) and applies a curated set of
   text + image fields on top of the site's built-in content. Runs AFTER
   i18n.js so it wins over the baseline; if the JSON is missing or invalid,
   nothing changes and the site keeps its authored text. Fully defensive. */
(() => {
  'use strict';
  const FILE = 'content/group.json';
  const LANG_KEY = 'baril-lang';

  const FIELD_MAP = {
    heroEyebrow:      { sel: 'header .eyebrow' },
    heroTitle:        { sel: 'header h1' },
    heroSub:          { sel: '.hero-sub' },
    heroCtaPrimary:   { sel: '.hero-cta .btn-solid' },
    heroCtaSecondary: { sel: '.hero-cta .btn-ghost' },
    heroFoot:         { sel: '.hero-foot span:first-child' },

    missionQuote:     { sel: '.mission-quote' },

    bioH2:        { sel: '#bio h2' },
    bioIntro:     { sel: '#bio .sec-head p:last-child' },
    globeH2:      { sel: '#globe h2' },
    globeIntro:   { sel: '#globe .sec-head p:last-child' },
    safetyH2:     { sel: '#safety h2' },
    safetyIntro:  { sel: '#safety .sec-head p:last-child' },
    localH2:      { sel: '#local h2' },
    localIntro:   { sel: '#local .sec-head p:last-child' },
    worldH2:      { sel: '#world h2' },
    worldIntro:   { sel: '#world .sec-head p:last-child' },

    brandsH2:     { sel: '#brands h2' },
    brandsIntro:  { sel: '#brands .sec-head p:last-child' },
    brand1Tag:    { sel: '.brand .tag', i: 0 },
    brand2Tag:    { sel: '.brand .tag', i: 1 },
    brand3Tag:    { sel: '.brand .tag', i: 2 },
    brand1Desc:   { sel: '.brand > div:first-child > p:not(.tag)', i: 0 },
    brand2Desc:   { sel: '.brand > div:first-child > p:not(.tag)', i: 1 },
    brand3Desc:   { sel: '.brand > div:first-child > p:not(.tag)', i: 2 },

    proofH2:      { sel: '#proof h2' },
    proofIntro:   { sel: '#proof .sec-head p:last-child' },
    renewH2:      { sel: '#renew h2' },
    dataH2:       { sel: '#data h2' },

    footClaim:    { sel: '.foot-claim' },

    imgHero:          { sel: '#heroPhoto', img: 'bg' },
    imgPaintBand:     { sel: '.paint-band img', img: 'src' },
    imgGlobeLab:      { sel: '#globe .chap-media img', i: 0, img: 'src' },
    imgSafetyPainter: { sel: '.air-fig img', img: 'src' },
    imgLocalField:    { sel: '#local .chap-media img', i: 0, img: 'src' },
    imgLocalSolar:    { sel: '#local .chap-media img', i: 1, img: 'src' },
    imgRenewAirmix:   { sel: '.renew-hero img', img: 'src' }
  };

  let data = null;
  const lang = () => {
    try { return localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { return 'en'; }
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
