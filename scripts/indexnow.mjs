#!/usr/bin/env node
/**
 * indexnow.mjs — zgłasza do IndexNow (Bing, Yandex, Seznam, Naver…) adresy
 * z opublikowanej sitemapy, które są nowe albo mają nowszy <lastmod> niż przy
 * poprzednim przebiegu. Google w IndexNow nie uczestniczy — czyta sitemapę.
 *
 *   node scripts/indexnow.mjs          # nowe i zmienione adresy
 *   node scripts/indexnow.mjs --dry    # tylko pokaż, nic nie wysyłaj
 *   node scripts/indexnow.mjs --all    # cała sitemapa
 *
 * Sitemapę czyta z żywej strony, nie z dist/ — zgłaszamy tylko to, co serwer
 * faktycznie już oddaje. Klucz jest jawny z założenia: plik /<KEY>.txt
 * (w public/) dowodzi jedynie, że zgłaszający kontroluje domenę.
 *
 * Pierwszy przebieg zgłasza całą sitemapę. Stan leży poza repo:
 * $INDEXNOW_STATE_DIR albo ~/.indexnow/<host>.json.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const HOST = 'psychologiamarketingu.edu.pl';
const KEY = 'df47d5263d5db94cb146d39636e4bd4b';
const SITEMAP = `https://${HOST}/sitemap-index.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH = 10_000; // limit protokołu na jedno zgłoszenie
const TIMEOUT = 30_000;

const args = new Set(process.argv.slice(2));
const dry = args.has('--dry');
const all = args.has('--all');

const stateDir = process.env.INDEXNOW_STATE_DIR ?? join(homedir(), '.indexnow');
const stateFile = join(stateDir, `${HOST}.json`);

const unescape = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");

async function get(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT), headers: { 'User-Agent': 'indexnow-submit/1.0' } });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.text();
}

// Indeks sitemap → podmapy → <url>. `seen` chroni przed pętlą w indeksach.
async function collect(url, seen = new Set()) {
  if (seen.has(url)) return [];
  seen.add(url);
  const xml = await get(url);
  if (/<sitemapindex[\s>]/.test(xml)) {
    const out = [];
    for (const [, loc] of xml.matchAll(/<sitemap>[\s\S]*?<loc>\s*([^<\s]+)\s*<\/loc>/g)) {
      out.push(...(await collect(unescape(loc), seen)));
    }
    return out;
  }
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map(([, body]) => ({
      loc: unescape((body.match(/<loc>\s*([^<\s]+)\s*<\/loc>/) ?? [])[1] ?? ''),
      lastmod: (body.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/) ?? [])[1] ?? '',
    }))
    .filter((e) => e.loc);
}

let entries;
try {
  entries = await collect(SITEMAP);
} catch (err) {
  console.error(`IndexNow ${HOST}: nie udało się pobrać sitemapy — ${err.message}`);
  process.exit(1);
}
// IndexNow przyjmuje w jednym zgłoszeniu tylko adresy z hosta, którego dotyczy klucz.
const unique = new Map();
for (const e of entries) if (new URL(e.loc).host === HOST) unique.set(e.loc, e.lastmod);
const urls = [...unique].map(([loc, lastmod]) => ({ loc, lastmod }));
if (urls.length === 0) {
  console.error(`IndexNow ${HOST}: sitemapa nie ma żadnego adresu z tego hosta.`);
  process.exit(1);
}

const state = existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf-8')) : {};
const changed = all ? urls : urls.filter((e) => !(e.loc in state) || e.lastmod > state[e.loc]);

console.log(`IndexNow ${HOST}: ${changed.length} z ${urls.length} adresów do zgłoszenia`);
if (dry || changed.length === 0) {
  changed.slice(0, 20).forEach((e) => console.log(`  ${e.loc}`));
  process.exit(0);
}

// Najpierw upewniamy się, że klucz jest dostępny — bez niego zgłoszenie przepada.
const keyLocation = `https://${HOST}/${KEY}.txt`;
const live = await get(keyLocation).catch(() => '');
if (live.trim() !== KEY) {
  console.error(`IndexNow ${HOST}: klucz niedostępny pod ${keyLocation} — najpierw deploy.`);
  process.exit(1);
}

for (let i = 0; i < changed.length; i += BATCH) {
  const urlList = changed.slice(i, i + BATCH).map((e) => e.loc);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
    signal: AbortSignal.timeout(TIMEOUT),
  });
  // 200 = przyjęte, 202 = przyjęte, weryfikacja klucza w toku.
  if (res.status !== 200 && res.status !== 202) {
    console.error(`IndexNow ${HOST}: odrzucone — HTTP ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  console.log(`  zgłoszono ${urlList.length} adresów (HTTP ${res.status})`);
}

for (const e of changed) state[e.loc] = e.lastmod;
mkdirSync(stateDir, { recursive: true });
writeFileSync(stateFile, JSON.stringify(state, null, 2) + '\n');
