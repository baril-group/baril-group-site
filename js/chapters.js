/* Chapter animations A–D (build phase P2 — see baril-group-cowork-brief.md §4.2–4.5)
   A: "The Liter"      — circular raw-materials transition
   B: "The Paint Pool" — global what-if globe fill + FOSSIL→RENEWABLE morph
   C: "Clean Air"      — solvent particles dissolve + CSE timeline
   D: "The Short Chain"— supply-line retraction map
   Engine: every [data-scene] element gets a scroll-mapped CSS custom
   property --t (0→1); all visual states derive from --t in CSS.
   Respects prefers-reduced-motion: static end-state (--t = 1). */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Chapter C: build the solvent particle field ---------- */
  const pg = document.getElementById('airParticles');
  if (pg) {
    const NS = 'http://www.w3.org/2000/svg';
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 110; i++) {
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', (20 + Math.random() * 860).toFixed(1));
      c.setAttribute('cy', (20 + Math.random() * 390).toFixed(1));
      c.setAttribute('r', (0.8 + Math.random() * 2.1).toFixed(2));
      c.setAttribute('opacity', (0.18 + Math.random() * 0.45).toFixed(2));
      if (!reduced) {
        c.style.animation =
          'pdrift ' + (7 + Math.random() * 9).toFixed(1) + 's ease-in-out ' +
          (Math.random() * -10).toFixed(1) + 's infinite alternate';
      }
      frag.appendChild(c);
    }
    pg.appendChild(frag);
  }

  /* ---------- Chapter E: the world map ---------- */
  // Coarse land shapes as lat/lon trapezoids: [latTop, latBot, lonTL, lonTR, lonBL, lonBR]
  const LAND = [
    [72,60,-168,-58,-140,-62],[60,48,-128,-56,-124,-60],[48,30,-124,-67,-117,-81], // North America
    [30,8,-115,-88,-86,-77],                                                       // Mexico / Central America
    [82,60,-55,-20,-45,-25],                                                       // Greenland
    [10,-5,-78,-50,-80,-36],[-5,-25,-80,-36,-70,-40],[-25,-55,-70,-40,-72,-67],    // South America
    [70,55,4,32,6,30],[58,50,-7,1,-5,1],[55,43,-9,42,-8,45],[43,36,-9,28,-7,26],   // Europe + UK
    [36,20,-8,35,-16,38],[20,2,-16,44,8,44],[12,3,38,51,40,47],[2,-35,10,40,16,32],// Africa
    [72,55,35,178,38,140],[55,40,46,135,50,125],[40,15,35,60,43,58],               // Russia / Central Asia / Middle East
    [30,8,68,88,75,79],[40,20,95,122,98,110],[20,2,97,109,101,106],                // India / China / Indochina
    [44,32,139,143,130,133],[2,-9,96,141,104,122],                                 // Japan / Indonesia
    [-12,-38,114,152,116,150],[-36,-46,172,176,167,174]                            // Australia / New Zealand
  ];
  const lonX = lon => (lon + 180) / 360 * 1000;
  const latY = lat => (80 - lat) / 140 * 470;
  function isLand(lon, lat) {
    for (const s of LAND) {
      const [t, b, tl, tr, bl, br] = s;
      if (lat > t || lat < b) continue;
      const f = (t - lat) / (t - b);
      if (lon >= tl + (bl - tl) * f && lon <= tr + (br - tr) * f) return true;
    }
    return false;
  }
  // Baril sites: [name, lon, lat, t-activation, labelDx, labelDy, anchor]
  const SITES = [
    ["Moerkapelle · 1982", 4.62, 52.06, 0.05, 12, -24, 'start', 0.22],
    ["'s-Hertogenbosch · 1989", 5.3, 51.7, 0.22, 12, 32, 'start'],
    ["Gliwice · 2005", 18.7, 50.3, 0.38, 16, 2, 'start'],
    ["Baril Coatings USA · 2006", -85.0, 41.6, 0.46, 0, 34, 'middle'],
    ["Etten-Leur · 2007", 4.6, 51.6, 0.54, -16, -6, 'end']
  ];
  // Paint-blot radius around a site as scroll progresses (map px):
  // slow local growth + gradual greening from 2008 (t=.54) + acceleration from 2021 (t=.8)
  function blotRadius(t, t0) {
    if (t <= t0) return 0;
    return 70 * Math.sqrt(t - t0)
      + 150 * Math.pow(Math.max(0, (t - 0.54) / 0.46), 2)
      + 420 * Math.pow(Math.max(0, (t - 0.8) / 0.2), 2.2);
  }
  // piecewise year mapping for the ticker
  const YEARS = [[0,1982],[0.1,1982],[0.22,1989],[0.38,2005],[0.46,2006],[0.54,2007],[0.8,2021],[1,2026]];
  function yearAt(t) {
    for (let i = 1; i < YEARS.length; i++) {
      if (t <= YEARS[i][0]) {
        const [t0, y0] = YEARS[i - 1], [t1, y1] = YEARS[i];
        return Math.round(y0 + (y1 - y0) * ((t - t0) / Math.max(1e-6, t1 - t0)));
      }
    }
    return 2026;
  }
  let mapDots = [], mapPtr = 0, siteEls = [], tlEls = [], yearEl = null;
  const mapHost = document.getElementById('mapDots');
  if (mapHost) {
    const NS = 'http://www.w3.org/2000/svg';
    const sitesPx = SITES.map(s => [lonX(s[1]), latY(s[2]), s[3]]);
    // dot grid
    for (let gy = 8; gy < 470; gy += 13) {
      for (let gx = 6; gx < 1000; gx += 13) {
        const lon = gx / 1000 * 360 - 180, lat = 80 - gy / 470 * 140;
        if (!isLand(lon, lat)) continue;
        // earliest t at which any blot reaches this dot (bisection, radius is monotone in t)
        let tA = 1.01;
        for (const [sx, sy, t0] of sitesPx) {
          const d = Math.hypot(gx - sx, gy - sy);
          if (blotRadius(1, t0) < d) continue;
          let lo = t0, hi = 1;
          for (let i = 0; i < 18; i++) {
            const mid = (lo + hi) / 2;
            if (blotRadius(mid, t0) >= d) hi = mid; else lo = mid;
          }
          if (hi < tA) tA = hi;
        }
        const c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', gx); c.setAttribute('cy', gy); c.setAttribute('r', 3.4);
        c.setAttribute('class', 'map-dot' + (Math.random() < 0.5 ? ' g2' : ''));
        mapHost.appendChild(c);
        mapDots.push({ el: c, tA });
      }
    }
    mapDots.sort((a, b) => a.tA - b.tA);
    // site markers
    const sg = document.getElementById('mapSites');
    SITES.forEach(s => {
      const [name, lon, lat, t0, dx, dy, anchor, until] = s;
      const x = lonX(lon), y = latY(lat);
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'map-site'); g.dataset.at = t0;
      if (until != null) g.dataset.until = until;
      g.innerHTML = `<circle cx="${x}" cy="${y}" r="6"/><circle cx="${x}" cy="${y}" r="6" class="pulse-ring"/>` +
        `<text x="${x + dx}" y="${y + dy}" text-anchor="${anchor}">${name}</text>`;
      sg.appendChild(g);
      siteEls.push(g);
    });
    tlEls = Array.from(document.querySelectorAll('#mapTl li'));
    yearEl = document.getElementById('mapYear');
  }
  function updateMap(t) {
    // activate / deactivate dots around the moving pointer (dots sorted by tA)
    while (mapPtr < mapDots.length && mapDots[mapPtr].tA <= t) { mapDots[mapPtr].el.classList.add('on'); mapPtr++; }
    while (mapPtr > 0 && mapDots[mapPtr - 1].tA > t) { mapPtr--; mapDots[mapPtr].el.classList.remove('on'); }
    for (const g of siteEls) {
      const hasUntil = g.dataset.until != null;
      g.classList.toggle('on', t >= +g.dataset.at && (!hasUntil || t < +g.dataset.until));
      g.classList.toggle('gone', hasUntil && t >= +g.dataset.until);
    }
    for (const li of tlEls) li.classList.toggle('on', t >= +li.dataset.at);
    if (yearEl) {
      const y = String(yearAt(t));
      if (yearEl.textContent !== y) yearEl.textContent = y;
    }
  }

  /* ---------- scroll progress engine ---------- */
  const scenes = Array.from(document.querySelectorAll('[data-scene]'));
  let queued = false;

  // pinned scenes (.scene wrapper taller than viewport): progress through the pin
  function pinnedProgress(el) {
    const r = el.getBoundingClientRect();
    const total = r.height - innerHeight;
    return total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
  }
  // flowing scenes (Chapter C): progress while passing through the viewport
  function flowProgress(el) {
    const r = el.getBoundingClientRect();
    const span = r.height + innerHeight * 0.45;
    return Math.min(1, Math.max(0, (innerHeight * 0.88 - r.top) / span));
  }

  /* ---------- mono counters ---------- */
  // per-scene window in which the counter runs (fractions of --t)
  const tickWindow = { liter: { start: 0.15, span: 0.5 }, air: { start: 0.22, span: 0.28 } };
  function renderTick(tickEl, sceneName, t) {
    const w = tickWindow[sceneName] || { start: 0.15, span: 0.5 };
    const p = Math.min(1, Math.max(0, (t - w.start) / w.span));
    const target = parseInt(tickEl.dataset.count, 10) || 0;
    const pre = tickEl.dataset.prefix || '';
    const suf = tickEl.dataset.suffix || '';
    const text = (p >= 1 ? pre : '') + Math.round(p * target) + suf;
    if (tickEl.textContent !== text) tickEl.textContent = text;
  }

  function update() {
    queued = false;
    for (const s of scenes) {
      const t = s.classList.contains('scene') ? pinnedProgress(s) : flowProgress(s);
      s.style.setProperty('--t', t.toFixed(4));
      if (s.dataset.scene === 'map') updateMap(t);
      const tick = s.querySelector('.tick');
      if (tick) renderTick(tick, s.dataset.scene, t);
    }
  }

  if (reduced) {
    // static, meaningful end state per chapter
    for (const s of scenes) {
      s.style.setProperty('--t', '1');
      if (s.dataset.scene === 'map') updateMap(1);
      const tick = s.querySelector('.tick');
      if (tick) {
        tick.textContent = (tick.dataset.prefix || '') + tick.dataset.count + (tick.dataset.suffix || '');
      }
    }
    return;
  }

  const onScroll = () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  addEventListener('load', onScroll);
  update();
})();
