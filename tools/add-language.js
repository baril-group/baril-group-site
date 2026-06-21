#!/usr/bin/env node
/* Add a new interface language to the Baril Group umbrella (the 9-language
   brand/Group system). It performs the three structural steps that are
   otherwise spread across ~30 files:

     1. copies the flag SVG into every site's assets/img/flags/ folder
     2. inserts a <button data-lang="XX"> into every page's #langMenu
     3. extends the hard-coded language allow-list in every i18n bundle

   Translations are NOT required up front: the i18n engine falls back to the
   English DOM text for any selector that has no entry for the new language
   (see js/i18n.js: `if (v == null) return;`). So after running this the new
   language is immediately live and shows English until you fill in the MAP.

   Usage:
     node tools/add-language.js <code> "<Native name>" [flagFile]
     node tools/add-language.js sv "Svenska"            # expects assets/img/flags/sv.svg
     node tools/add-language.js --dry sv "Svenska"      # preview, write nothing

   The data-driven catalogue pages (barilcoatings/products|systems|markten|
   cases) use a separate system limited to languages with source data and are
   deliberately NOT touched — see LANGUAGES.md. */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const rest = args.filter(a => a !== '--dry');
const code = (rest[0] || '').toLowerCase();
const name = rest[1];
const flagFile = rest[2] || code + '.svg';

if (!/^[a-z]{2}$/.test(code) || !name) {
  console.error('Usage: node tools/add-language.js [--dry] <code> "<Native name>" [flagFile]');
  process.exit(1);
}

const rel = p => path.relative(ROOT, p);
const log = (...a) => console.log(...a);
let writes = 0;
const write = (file, content) => { if (!DRY) fs.writeFileSync(file, content); writes++; };

/* ---- 1. flags: copy the new SVG into every assets/img/flags dir ---- */
const flagDirs = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { if (full.endsWith(path.join('assets', 'img', 'flags'))) flagDirs.push(full); else walk(full); }
  }
})(ROOT);

const srcFlag = path.join(ROOT, 'assets', 'img', 'flags', flagFile);
const haveFlag = fs.existsSync(srcFlag);
if (!haveFlag && !DRY) {
  console.error(`\n✗ Flag not found: ${rel(srcFlag)}\n  Add the SVG there first (e.g. copy an existing one), then re-run.`);
  process.exit(1);
}
log('\n1) Flags' + (haveFlag ? '' : '  (source flag missing — would be required for a real run)'));
for (const dir of flagDirs) {
  const dest = path.join(dir, flagFile);
  if (fs.existsSync(dest)) { log('   = exists ', rel(dest)); continue; }
  if (!DRY && haveFlag) fs.copyFileSync(srcFlag, dest);
  writes++; log('   + copy   ', rel(dest));
}

/* ---- 2. menu buttons: insert into every #langMenu ---- */
log('\n2) Language menus (#langMenu)');
const htmlPages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.html')) htmlPages.push(full);
  }
})(ROOT);

const trBtn = /(<button type="button" data-lang="tr" role="menuitem"><img class="flag" src=")([^"]*)(\/flags\/)tr\.svg("[^>]*><span>)[^<]*(<\/span><\/button>)/;
for (const f of htmlPages) {
  let s = fs.readFileSync(f, 'utf8');
  if (!s.includes('data-lang="tr"')) continue;            // not a 9-language menu page
  if (s.includes(`data-lang="${code}"`)) { log('   = exists ', rel(f)); continue; }
  const m = s.match(trBtn);
  if (!m) { log('   ! skip (no tr button matched) ', rel(f)); continue; }
  const prefix = m[2];                                     // e.g. "assets/img" or "../assets/img"
  const trFull = m[0];
  const newBtn = `<button type="button" data-lang="${code}" role="menuitem"><img class="flag" src="${prefix}/flags/${flagFile}" alt="" width="22" height="15"><span>${name}</span></button>`;
  s = s.replace(trFull, trFull + '\n      ' + newBtn);
  write(f, s); log('   + button ', rel(f));
}

/* ---- 3. allow-list in every i18n bundle (appears twice each) ---- */
log('\n3) i18n allow-lists');
const allowOld = "'it', 'tr']";
const allowNew = `'it', 'tr', '${code}']`;
for (const f of htmlPages) { /* noop */ }
const jsFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/i18n\.js$/.test(e.name)) jsFiles.push(full);
  }
})(ROOT);
for (const f of jsFiles) {
  let s = fs.readFileSync(f, 'utf8');
  if (!s.includes(allowOld)) { log('   ! skip (allow-list not found) ', rel(f)); continue; }
  if (s.includes(`'${code}']`) || s.includes(`, '${code}']`)) { log('   = exists ', rel(f)); continue; }
  s = s.split(allowOld).join(allowNew);
  write(f, s); log('   + allow  ', rel(f));
}

log(`\n${DRY ? '[dry-run] would change' : 'Changed'} ${writes} file(s).`);
log(`\nLanguage "${code}" (${name}) is now wired in. It shows English until translated.`);
log(`Next: add the "${code}" key to entries in the i18n MAP files as you translate`);
log(`(run "node tools/i18n-status.js ${code}" to see what is still untranslated).`);
