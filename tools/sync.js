#!/usr/bin/env node
/* Baril Coatings data sync.
   Pulls product, paint-system and case data from the live Baril database
   (data.barilcoatings.com + barilcoatings.com) and writes JSON snapshots the
   modern shell renders from. Run: `node tools/sync.js`. Also run automatically
   by .github/workflows/sync-baril-data.yml. Keeps the original site as the
   source of truth while the shell stays fully restylable. */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'barilcoatings');
const DATA_BASE = 'https://data.barilcoatings.com';
const SITE = 'https://www.barilcoatings.com';
const LINES = ['dualcure', 'steelkote', 'aquaran', 'bariline', 'biobased'];
const PS_LINES = ['dualcure', 'steelkote', 'aquaran', 'bariline', 'biobased', 'marine', 'onderhoud'];
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function get(url, opts) {
  const res = await fetch(url, opts);
  if (!res.ok) { const e = new Error('HTTP ' + res.status + ' ' + url); e.status = res.status; throw e; }
  return res.text();
}
const dec = s => (s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&euml;/g, 'ë').replace(/&eacute;/g, 'é').trim();
function stripTags(html) {
  return (html || '')
    .replace(/<div class="product-related[\s\S]*?<\/div>/gi, '')
    .replace(/<\/(p|div)>/gi, '\n').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

/* ---------------- products ---------------- */
function parseProducts(html) {
  const out = [];
  const parts = html.split(/<div class="product" rel="/).slice(1);
  for (const part of parts) {
    const code = part.slice(0, part.indexOf('"'));
    const bm = part.match(/data-brand="([^"]+)"/);
    const brand = bm ? bm[1] : 'baril';
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
    out.push({ code, name, brand, desc, related });
  }
  return out;
}

async function syncProducts() {
  const byCode = {};
  const order = [];
  const brands = {};
  for (const line of LINES) {
    let nl = '';
    try { nl = await get(`${DATA_BASE}/nl/products/baril/${line === 'biobased' ? 'biobased-coatings' : line + '-products'}`); }
    catch (e) { console.warn('  products nl', line, e.message); continue; }
    let en = '';
    try { en = await get(`${DATA_BASE}/en/products/baril/${line === 'biobased' ? 'biobased-coatings' : line + '-products'}`); } catch (e) { /* en optional */ }
    for (const m of nl.matchAll(/<h3 class="brand" data-brand="([^"]+)" data-color="([^"]+)">([^<]+)<\/h3>/g)) brands[m[1]] = { name: dec(m[3]), color: m[2].trim() };
    const enMap = {}; if (en) parseProducts(en).forEach(p => enMap[p.code] = p);
    for (const p of parseProducts(nl)) {
      if (!byCode[p.code]) { byCode[p.code] = { code: p.code, name: p.name, brand: p.brand, desc: p.desc, related: p.related, cats: [line] }; order.push(p.code); }
      else if (!byCode[p.code].cats.includes(line)) byCode[p.code].cats.push(line);
      const e = enMap[p.code];
      if (e) { byCode[p.code].name_en = e.name; byCode[p.code].desc_en = e.desc; }
    }
    await sleep(150);
  }
  // attributes via server-side filters on all-products
  try {
    const all = await get(`${DATA_BASE}/nl/products/baril/all-products`);
    const opts = [];
    for (const b of all.split(/<div class="filter">/).slice(1)) {
      const g = b.match(/<h3 class="filter-label">([^<]+)<\/h3>/); if (!g) continue;
      const group = dec(g[1]);
      for (const m of b.matchAll(/value="(\d+)" data-filter="(\d+)">\s*<label[^>]*>([^<]+)<\/label>/g)) opts.push({ group, value: m[1], label: dec(m[2] ? m[3] : m[3]) });
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
      } catch (e) { console.warn('  filter', o.label, e.message); }
      await sleep(200);
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
    if (psBlock) {
      for (const sp of psBlock[1].split(/<div class="product">/).slice(1)) {
        const layer = (sp.match(/<span class="index">([^<]+)<\/span>/) || [])[1];
        const prod = (sp.match(/<span class="product-name">([^<]+)<\/span>/) || [])[1];
        const thick = (sp.match(/<div class="thickness">([\s\S]*?)<\/div>/) || [])[1];
        const dry = (sp.match(/<div class="drytime">([\s\S]*?)<\/div>/) || [])[1];
        if (prod) steps.push({ layer: dec(layer), product: dec(prod), thickness: dec(thick), drytime: dec(dry) });
      }
    }
    const totT = part.match(/<div class="summary-thickness">([\s\S]*?)<\/div>/);
    const totD = part.match(/<div class="summary-drytime">([\s\S]*?)<\/div>/);
    if (nm) systems.push({ id, name: dec(nm[1].replace(/<[^>]+>/g, '')), durability: dur ? dec(dur[1]) : '', steps, totalThickness: totT ? dec(totT[1]) : '', totalDrytime: totD ? dec(totD[1]) : '', languages: langs });
  }
  return systems;
}

async function syncPaintsystems() {
  const out = {};
  for (const line of PS_LINES) {
    try {
      const html = await get(`${DATA_BASE}/nl/paintsystems/baril/${line}-paintsystems`);
      const systems = parsePaintsystems(html);
      if (systems.length) out[line] = systems;
      console.log('  paintsystems', line + ':', systems.length);
    } catch (e) { /* line may not exist */ }
    await sleep(150);
  }
  return out;
}

/* ---------------- cases ---------------- */
async function syncCases() {
  const html = await get(`${SITE}/nl/praktijkcases`);
  const cases = [];
  const seen = new Set();
  for (const block of html.split(/<a class="news-item"/).slice(1)) {
    const href = (block.match(/href="([^"]+)"/) || [])[1];
    const title = dec((block.match(/title="([^"]*)"/) || [])[1] || (block.match(/<h2>([\s\S]*?)<\/h2>/) || [])[1] || '');
    const img = (block.match(/<img[^>]+src="([^"]+)"/) || [])[1];
    if (!href || seen.has(href)) continue; seen.add(href);
    cases.push({ title, url: href.startsWith('http') ? href : SITE + href, image: img ? (img.startsWith('http') ? img : SITE + img) : '' });
  }
  return cases;
}

/* ---------------- run ---------------- */
(async () => {
  console.log('Syncing Baril Coatings data…');
  const products = await syncProducts();
  console.log('  products:', products.products.length, '· with EN:', products.products.filter(p => p.name_en).length, '· with attrs:', products.products.filter(p => Object.keys(p.attrs).length).length);
  const paintsystems = await syncPaintsystems();
  const cases = await syncCases();
  console.log('  cases:', cases.length);

  const stamp = new Date().toISOString().slice(0, 10);
  fs.mkdirSync(path.join(ROOT, 'products'), { recursive: true });
  fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'products', 'products.json'),
    JSON.stringify({ generated: stamp, source: 'data.barilcoatings.com', brands: products.brands, attributeGroups: ['Chemie', 'Componenten', 'Glans', 'Ondergrond', 'Productsoort'], products: products.products }, null, 2));
  fs.writeFileSync(path.join(ROOT, 'data', 'paintsystems.json'),
    JSON.stringify({ generated: stamp, source: 'data.barilcoatings.com', systems: paintsystems }, null, 2));
  fs.writeFileSync(path.join(ROOT, 'data', 'cases.json'),
    JSON.stringify({ generated: stamp, source: 'barilcoatings.com', cases }, null, 2));
  console.log('Done →', stamp);
})().catch(e => { console.error(e); process.exit(1); });
