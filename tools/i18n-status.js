#!/usr/bin/env node
/* Report translation coverage for a language across the i18n bundles.
   Heuristic: every MAP entry carries a Dutch ("nl:") key, so the count of
   "nl:" keys is the number of translatable strings; the count of "<code>:"
   keys is how many are translated into that language.

   Usage: node tools/i18n-status.js <code>          (e.g. de, fr, sv) */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const code = (process.argv[2] || '').toLowerCase();
if (!/^[a-z]{2}$/.test(code)) { console.error('Usage: node tools/i18n-status.js <code>'); process.exit(1); }

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/i18n\.js$/.test(e.name)) files.push(full);
  }
})(ROOT);

const keyCount = (s, k) => (s.match(new RegExp("(^|[\\s{,\\[])" + k + ":", 'g')) || []).length;
let totN = 0, totM = 0;
console.log(`\nTranslation coverage for "${code}":\n`);
for (const f of files.sort()) {
  const s = fs.readFileSync(f, 'utf8');
  const N = keyCount(s, 'nl');
  const M = keyCount(s, code);
  totN += N; totM += M;
  const bar = N ? Math.round((M / N) * 100) : 0;
  console.log(`  ${String(M).padStart(3)}/${String(N).padEnd(3)}  ${String(bar).padStart(3)}%  ${path.relative(ROOT, f)}`);
}
console.log(`\n  ${totM}/${totN}  ${totN ? Math.round((totM / totN) * 100) : 0}%  TOTAL (untranslated strings fall back to English)\n`);
