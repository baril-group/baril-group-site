#!/usr/bin/env node
/* Baril Coatings data sync.
   Pulls product, paint-system, market and case data from the live Baril site
   (data.barilcoatings.com + barilcoatings.com) into JSON snapshots the modern
   shell renders from. Run: `node tools/sync.js`. Also run by
   .github/workflows/sync-baril-data.yml. The original site stays the source of
   truth; the shell stays fully restylable. */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'barilcoatings');
const DATA_BASE = 'https://data.barilcoatings.com';
const SITE = 'https://www.barilcoatings.com';
const LINES = ['dualcure', 'steelkote', 'aquaran', 'bariline', 'biobased'];
const PROD_LANGS = ['nl', 'en', 'pl', 'ro'];
const PS_LINES = ['dualcure', 'steelkote', 'aquaran', 'bariline', 'biobased', 'marine', 'onderhoud'];
const SEGMENTS = [
  { slug: 'constructie-infra', caseSlug: 'constructie-infra', label: 'Constructie & Infra', enSlug: 'construction-infrastructure' },
  { slug: 'gebouwen-onderhoud', caseSlug: 'gebouw-onderhoud', label: 'Gebouwen & Onderhoud', enSlug: 'building-maintenance' },
  { slug: 'industrie-machinebouw', caseSlug: 'industrie-machinebouw', label: 'Industrie & Machinebouw', enSlug: 'industry-engineering' },
  { slug: 'marine-offshore', caseSlug: 'marine-offshore', label: 'Marine & Offshore', enSlug: 'marine-offshore' }
];
// The English market pages have no meta description; these curated EN intros
// mirror the NL descriptions and are re-applied on every sync.
const MARKET_DESC_EN = {
  'constructie-infra': 'For construction and infrastructure steelwork, Baril offers the DualCure, SteelKote & Bariline coatings — durable, with excellent adhesion and corrosion resistance.',
  'gebouwen-onderhoud': "For buildings & maintenance, Baril offers the environmentally friendly biobased painter's paint Copperant and the solvent-free, water-based Roboton floor coatings.",
  'industrie-machinebouw': 'For industry and engineering, Baril offers the DualCure, SteelKote & Aquaran coatings — for a durable finish and optimal protection.',
  'marine-offshore': 'For Marine & Offshore, Baril offers a broad range of high-solids and solvent-free coatings for the durable protection of steel under heavy loads.'
};
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function get(url, opts) {
  const res = await fetch(url, opts);
  if (!res.ok) { const e = new Error('HTTP ' + res.status + ' ' + url); e.status = res.status; throw e; }
  return res.text();
}
const dec = s => (s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&euml;/g, 'ë').replace(/&eacute;/g, 'é').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
function stripTags(html) {
  return (html || '')
    .replace(/<div class="product-related[\s\S]*?<\/div>/gi, '')
    .replace(/<\/(p|div)>/gi, '\n').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}
const lineSlug = line => line === 'biobased' ? 'biobased-coatings' : line + '-products';

/* ---------------- products (multilingual) ---------------- */
function parseProducts(html) {
  const out = [];
  for (const part of html.split(/<div class="product" rel="/).slice(1)) {
    const code = part.slice(0, part.indexOf('"'));
    const bm = part.match(/data-brand="([^"]+)"/);
    let name = code;
    const pd = part.match(/<div class="product-data">([\s\S]*?)<\/div>/);
    if (pd) {
      const spans = [...pd[1].matchAll(/<span(?:\s+class="([^"]*)")?[^>]*>([\s\S]*?)<\/span>/g)];
      const ns = spans.find(s => !(s[1] || '').includes('product-code'));
      if (ns) name = dec(ns[2].replace(/<[^>]+>/g, ''));
    }
    const dm = part.match(/<div class="product-desc hide"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<div class="product-link-datasheet"/);
    const desc = dm ? stripTags(dm[1]) : '';
    const related = [...part.matchAll(/<span class="related">([^<]+)<\/span>/g)].map(m => dec(m[1]));
    const ss = part.match(/<div class="product-link-safetysheet"[\s\S]*?<\/form>/);
    const sds = ss ? [...ss[0].matchAll(/name="language\[\]" value="([a-z]{2}_[A-Z]{2})"/g)].map(m => m[1]) : [];
    out.push({ code, name, brand: bm ? bm[1] : 'baril', desc, related, sds });
  }
  return out;
}

async function syncProducts() {
  const byCode = {}, order = [], brands = {};
  for (const line of LINES) {
    for (const lang of PROD_LANGS) {
      let html;
      try { html = await get(`${DATA_BASE}/${lang}/products/baril/${lineSlug(line)}`); }
      catch (e) { if (lang === 'nl') console.warn('  products', line, e.message); continue; }
      if (lang === 'nl') for (const m of html.matchAll(/<h3 class="brand" data-brand="([^"]+)" data-color="([^"]+)">([^<]+)<\/h3>/g)) brands[m[1]] = { name: dec(m[3]), color: m[2].trim() };
      for (const p of parseProducts(html)) {
        if (!byCode[p.code]) { byCode[p.code] = { code: p.code, brand: p.brand, related: p.related, cats: [line] }; order.push(p.code); }
        else if (!byCode[p.code].cats.includes(line)) byCode[p.code].cats.push(line);
        const rec = byCode[p.code];
        if (lang === 'nl') { rec.name = p.name; rec.desc = p.desc; rec.sds = p.sds; }
        else { rec['name_' + lang] = p.name; rec['desc_' + lang] = p.desc; }
      }
      await sleep(120);
    }
  }
  // attributes via server-side filters on all-products
  try {
    const all = await get(`${DATA_BASE}/nl/products/baril/all-products`);
    const opts = [];
    for (const b of all.split(/<div class="filter">/).slice(1)) {
      const g = b.match(/<h3 class="filter-label">([^<]+)<\/h3>/); if (!g) continue;
      const group = dec(g[1]);
      for (const m of b.matchAll(/value="(\d+)" data-filter="(\d+)">\s*<label[^>]*>([^<]+)<\/label>/g)) opts.push({ group, value: m[1], label: dec(m[3]) });
    }
    for (const o of opts) {
      if (o.group === 'Merken') continue;
      try {
        const html = await get(`${DATA_BASE}/nl/products/baril/all-products`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'filter[]=' + encodeURIComponent(o.value) });
        for (const m of html.matchAll(/class="product" rel="([^"]+)"/g)) {
          const c = m[1]; if (!byCode[c]) continue;
          (byCode[c].attrs ||= {}); (byCode[c].attrs[o.group] ||= []);
          if (!byCode[c].attrs[o.group].includes(o.label)) byCode[c].attrs[o.group].push(o.label);
        }
      } catch (e) { /* skip */ }
      await sleep(180);
    }
  } catch (e) { console.warn('  attributes:', e.message); }
  const products = order.map(c => byCode[c]);
  products.forEach(p => { if (!p.attrs) p.attrs = {}; });
  return { brands, products };
}

/* ---------------- paint systems ---------------- */
function parsePaintsystems(html) {
  const systems = [];
  for (const part of html.split(/<div class="paintsystem" rel="/).slice(1)) {
    const id = part.slice(0, part.indexOf('"'));
    const nm = part.match(/<h3 class="paintsystem-name">\s*<span>([\s\S]*?)<\/span>/);
    const dur = part.match(/<div class="paintsystem-durability">([\s\S]*?)<\/div>/);
    const langs = [...part.matchAll(/<a href="(https:\/\/data\.barilcoatings\.com\/([a-z]{2})\/paintsystems\/datasheet\/\d+)"[^>]*>([^<]+)<\/a>/g)].map(m => ({ lang: m[2], label: dec(m[3]), url: m[1] }));
    const steps = [];
    const psBlock = part.match(/<div class="paintsystem-products">([\s\S]*?)<div class="paintsystem-summary">/);
    if (psBlock) for (const sp of psBlock[1].split(/<div class="product">/).slice(1)) {
      const layer = (sp.match(/<span class="index">([^<]+)<\/span>/) || [])[1];
      const prod = (sp.match(/<span class="product-name">([^<]+)<\/span>/) || [])[1];
      const thick = (sp.match(/<div class="thickness">([\s\S]*?)<\/div>/) || [])[1];
      const dry = (sp.match(/<div class="drytime">([\s\S]*?)<\/div>/) || [])[1];
      if (prod) steps.push({ layer: dec(layer), product: dec(prod), thickness: dec(thick), drytime: dec(dry) });
    }
    const totT = part.match(/<div class="summary-thickness">([\s\S]*?)<\/div>/);
    const totD = part.match(/<div class="summary-drytime">([\s\S]*?)<\/div>/);
    if (nm) systems.push({ id, name: dec(nm[1].replace(/<[^>]+>/g, '')), durability: dur ? dec(dur[1]) : '', steps, totalThickness: totT ? dec(totT[1]) : '', totalDrytime: totD ? dec(totD[1]) : '', languages: langs });
  }
  return systems;
}
async function syncPaintsystems() {
  const out = {};
  const EXTRA = ['en', 'pl', 'ro'];
  for (const line of PS_LINES) {
    let base;
    try { base = parsePaintsystems(await get(`${DATA_BASE}/nl/paintsystems/baril/${line}-paintsystems`)); }
    catch (e) { await sleep(120); continue; }
    if (!base.length) { await sleep(120); continue; }
    const byId = Object.fromEntries(base.map(s => [s.id, s]));
    for (const lang of EXTRA) {
      try {
        for (const s of parsePaintsystems(await get(`${DATA_BASE}/${lang}/paintsystems/baril/${line}-paintsystems`))) {
          const b = byId[s.id]; if (!b) continue;
          if (s.name) b['name_' + lang] = s.name;
          if (s.durability) b['durability_' + lang] = s.durability;
          (s.steps || []).forEach((st, i) => { if (b.steps[i]) { if (st.layer) b.steps[i]['layer_' + lang] = st.layer; if (st.product) b.steps[i]['product_' + lang] = st.product; } });
        }
      } catch (e) { /* language variant missing */ }
      await sleep(120);
    }
    out[line] = base; console.log('  paintsystems', line + ':', base.length, '· EN:', base.filter(s => s.durability_en || s.name_en).length);
  }
  return out;
}

/* ---------------- markets ---------------- */
async function syncMarkets() {
  const markets = [];
  for (const seg of SEGMENTS) {
    try {
      const html = await get(`${SITE}/nl/markten/${seg.slug}`);
      const title = dec((html.match(/<title>([^<]+)<\/title>/) || [])[1] || seg.label).replace(/\s*[|–-]\s*Baril.*$/i, '');
      const description = dec((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
      const image = (html.match(/<meta property="og:image" content="([^"]*)"/) || [])[1] || '';
      const paras = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => stripTags(m[1])).filter(t => t.length > 50);
      const seen = new Set(); const body = paras.filter(t => !seen.has(t) && seen.add(t)).slice(0, 8);
      const mk = { slug: seg.slug, label: seg.label, title, description, image: image.startsWith('http') ? image : (image ? SITE + image : ''), body, url: `${SITE}/nl/markten/${seg.slug}` };
      // English copy (separate slug on the live site); pl/ro fall back to this.
      if (seg.enSlug) {
        try {
          const enHtml = await get(`${SITE}/en/markets/${seg.enSlug}`);
          mk.title_en = dec((enHtml.match(/<title>([^<]+)<\/title>/) || [])[1] || title).replace(/\s*[|–-]\s*Baril.*$/i, '');
          mk.description_en = MARKET_DESC_EN[seg.slug] || '';
          const enParas = [...enHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => stripTags(m[1])).filter(t => t.length > 50);
          const enSeen = new Set(); mk.body_en = enParas.filter(t => !enSeen.has(t) && enSeen.add(t)).slice(0, 8);
        } catch (e) { console.warn('  market EN', seg.enSlug, e.message); }
      }
      markets.push(mk);
      console.log('  market', seg.slug + ':', body.length, 'paragrafen', mk.body_en ? '(+EN ' + mk.body_en.length + ')' : '');
    } catch (e) { console.warn('  market', seg.slug, e.message); }
    await sleep(120);
  }
  return markets;
}

/* ---------------- cases (+ market tags) ---------------- */
const caseSlug = url => (url.match(/\/praktijkcases\/([^/?#]+)/) || [])[1] || '';
async function syncCases() {
  const html = await get(`${SITE}/nl/praktijkcases`);
  const cases = []; const bySlug = {}; const seen = new Set();
  for (const block of html.split(/<a class="news-item"/).slice(1)) {
    const href = (block.match(/href="([^"]+)"/) || [])[1];
    const title = dec((block.match(/title="([^"]*)"/) || [])[1] || (block.match(/<h2>([\s\S]*?)<\/h2>/) || [])[1] || '');
    const img = (block.match(/<img[^>]+src="([^"]+)"/) || [])[1];
    if (!href || seen.has(href)) continue; seen.add(href);
    const c = { title, url: href.startsWith('http') ? href : SITE + href, image: img ? (img.startsWith('http') ? img : SITE + img) : '', markets: [] };
    cases.push(c); bySlug[caseSlug(c.url)] = c;
  }
  // tag each case with the market segment(s) that list it
  for (const seg of SEGMENTS) {
    try {
      const segHtml = await get(`${SITE}/nl/praktijkcases/${seg.caseSlug}`);
      for (const m of segHtml.matchAll(/<a class="news-item"[^>]*href="([^"]+)"/g)) {
        const c = bySlug[caseSlug(m[1])];
        if (c && !c.markets.includes(seg.label)) c.markets.push(seg.label);
      }
    } catch (e) { /* skip */ }
    await sleep(120);
  }
  // pull each case's own text + images so the shell is self-contained
  for (const c of cases) {
    try {
      const h = await get(c.url);
      c.intro = dec((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
      const paras = [...h.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => stripTags(m[1])).filter(t => t.length > 40);
      const seenP = new Set(); c.body = paras.filter(t => !seenP.has(t) && seenP.add(t)).slice(0, 14);
      const imgs = [...h.matchAll(/src="(\/_cache\/_public\/[^"]+)"/g)].map(m => SITE + m[1]);
      c.images = [...new Set(imgs)].slice(0, 12);
    } catch (e) { c.body = c.body || []; c.images = c.images || []; }
    await sleep(90);
  }
  return cases;
}

/* ---------------- run ---------------- */
(async () => {
  console.log('Syncing Baril Coatings data…');
  const products = await syncProducts();
  console.log('  products:', products.products.length, '· EN:', products.products.filter(p => p.name_en).length, '· PL:', products.products.filter(p => p.name_pl).length, '· RO:', products.products.filter(p => p.name_ro).length, '· attrs:', products.products.filter(p => Object.keys(p.attrs).length).length);
  const paintsystems = await syncPaintsystems();
  const markets = await syncMarkets();
  const cases = await syncCases();
  console.log('  cases:', cases.length, '· tagged:', cases.filter(c => c.markets.length).length);

  const stamp = new Date().toISOString().slice(0, 10);
  fs.mkdirSync(path.join(ROOT, 'products'), { recursive: true });
  fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'products', 'products.json'),
    JSON.stringify({ generated: stamp, source: 'data.barilcoatings.com', languages: PROD_LANGS, brands: products.brands, attributeGroups: ['Chemie', 'Componenten', 'Glans', 'Ondergrond', 'Productsoort'], products: products.products }, null, 2));
  fs.writeFileSync(path.join(ROOT, 'data', 'paintsystems.json'), JSON.stringify({ generated: stamp, source: 'data.barilcoatings.com', systems: paintsystems }, null, 2));
  fs.writeFileSync(path.join(ROOT, 'data', 'markets.json'), JSON.stringify({ generated: stamp, source: 'barilcoatings.com', markets }, null, 2));
  fs.writeFileSync(path.join(ROOT, 'data', 'cases.json'), JSON.stringify({ generated: stamp, source: 'barilcoatings.com', cases }, null, 2));
  console.log('Done →', stamp);
})().catch(e => { console.error(e); process.exit(1); });
