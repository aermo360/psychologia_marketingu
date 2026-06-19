# Strategia SEO — psychologiamarketingu.edu.pl

**Wersja:** 2.0 (aktualizacja po wdrożeniu Fazy 1 + 2.3)
**Data:** 2026-06-19
**Horyzont:** 6 miesięcy (lipiec 2026 — grudzień 2026), z perspektywą 12-miesięczną
**Cel biznesowy:** wypełnić edycję 2026/2027 i zbudować markę programu jako rozpoznawalnego w polskim ekosystemie podyplomowych studiów marketingowych
**Powiązane:** [seo-briefy-faza2.md](seo-briefy-faza2.md) — gotowe briefy content; źródło prawdy o programie: memory `program-source-of-truth`

---

## 0. Status realizacji

### ✅ Zrealizowane (2026-06-19)

**Faza 1.1 — On-page tech** (commit `1d8a7ca`):
- `<h1>` na `/wykladowcy/` (keyword-rich) · customowe meta description na każdej stronie · lead paragraph na home z keywordami
- Schema: `Course` (home), `FAQPage` (`/faq/`), `Person`/`ItemList` (`/wykladowcy/`), `BreadcrumbList` (podstrony)
- Brandowany OG image 1200×630 (`/og-default.png`, generator `scripts/generate-og.mjs`)

**Faza 1.2 — Optymalizacja treści** (commit `b41e800`):
- `/wykladowcy/` — tekst wprowadzający (~250 słów, kierownik dr Mirosława Krzyścin, filary kadry)
- Home — sekcja „Marketing behawioralny — co to znaczy w praktyce" (~350 słów)
- `/faq/` — +4 pytania (neuromarketing, wyróżniki programu, kompetencje absolwenta, limit/nabór); 8 → 12 pytań

**Faza 1.3 — Internal linking (baseline)** (commit `dfb1677`):
- Linki kontekstowe z home: sekcja Program → `/program/`, sekcja behawioralna → `/marketing-behawioralny/`, „Dla kogo" → `/dla-kogo/`
- Footer — kolumna „Studia" (sitewide linki do 4 hubów + marketing-behawioralny)

**Faza 2.3 — Hub strony programu** (commit `dfb1677`):
- `/program/` (pełny plan, tabela 26 kursów, Course schema) · `/marketing-behawioralny/` (money-keyword) · `/rekrutacja/` · `/dla-kogo/`
- Nawigacja przebudowana (Header desktop+mobile, CTA „Zapisz się"); 9 stron w sitemapie

**Infrastruktura (poza planem SEO, ale wpływa na SEO):**
- Migracja do Astro 6.3.1 · fix trailing-slash HTTPS→HTTP downgrade (nginx) · fix CMS przekierowania na obcą domenę · zgodność treści ze źródłem prawdy (godziny, ECTS, limit 30, edycja 2026/2027)

### ⏳ Otwarte — patrz §2 (kolejność: blokery techniczne → content → authority)

---

## 1. Stan wyjściowy (baseline — pomiar startowy 2026-06-19)

> Metryki sprzed wdrożeń. Efekty zmian on-page materializują się w GSC po 2–6 tygodniach — **kolejny pomiar: ok. 2026-08-01.**

### 1.1 Metryki domeny

| Metryka | Wartość | Źródło |
|---|---|---|
| Domain Rating (Ahrefs) | **0** | Ahrefs |
| Backlinki / domeny linkujące | **0 / 0** | Ahrefs |
| Indeksowane strony (start) | 5 → **9 po 2.3** | Sitemap |
| Kliknięcia organiczne (90 dni) | 27 | GSC |
| Wyświetlenia organiczne (90 dni) | 845 | GSC |
| CTR średni | 3,20% | GSC |
| Pozycja średnia | 22,9 | GSC |
| Udział mobile w klikach | 37% (10/27) | GSC |

Domena startuje praktycznie od zera — każda decyzja techniczna i contentowa ma wysoki mnożnik. Stara domena `praktycznymarketing.edu.pl` również pusta (0 BL), nic do konsolidacji.

### 1.2 Sleeper hits (z czego wyrastamy)

| Strona | Imp (90d) | Pozycja | Uwaga |
|---|---|---|---|
| `/wykladowcy/` | 122 | **5,9** | Najlepsza pozycja; `<h1>` + tekst już dodane (Faza 1.2) — pilnować CTR |
| `/` | 686 | 26,8 | Główny zbieracz wyświetleń |
| `marketing behawioralny` (query) | 9 | **14,2** | Najbliżej top 10; teraz wsparte stroną `/marketing-behawioralny/` |
| `psychologia w marketingu` (query) | 5 | **1,2** | Już #1 — utrzymać |

### 1.3 Realne zapytania (GSC, 90 dni) — skrót

`psychologia marketingu studia` (65 imp, poz. 27,6) · `psychologia marketingu` (22 / 44,3) · `marketing studia wrocław` (10 / 27) · `psychologia reklamy studia` (10 / 30,5) · `marketing behawioralny` (9 / 14,2) · `nowe media studia wrocław` (8 / 23). Pełny klaster keywordów — §6.1.

### 1.4 Konkurencyjny krajobraz

SERP **„studia podyplomowe marketing"** (vol. 150/mc, CPC 100 zł): SGH (DR 74) · Kozminski (73) · arturjablonski.com (**blog osobisty**, 58) · UE Wrocław (85, geo) · UKEN Kraków (87) · AGH (78) · Merito (72) · CDV (56). **PWr nieobecna w top 11** — strona `/program/` celuje właśnie tu.

SERP **„psychologia marketingu"** (vol. 150): #1 organic psychologiawpraktyce.pl (DR 50, 1 refdomain — **do pobicia**); AI Overview obecny; brand-collision `psychologiawmarketingu.pl` (DR 3, 33 refdomains).

SERP **„neuromarketing"** (vol. 500, najtłustszy): AI Overview; Wikipedia DR 97 (#2, niewzruszalna); blogi firmowe DR 43–79; `vizja.pl` (DR 66) — konkurent uczelniany.

### 1.5 Audyt techniczny — status

| Pozycja | Status |
|---|---|
| Identyczne meta description | ✅ naprawione (unikatowe per strona) |
| `/wykladowcy/` bez `<h1>` | ✅ dodane |
| Brak schema `Course` / `FAQPage` / `Person` / `BreadcrumbList` | ✅ wszystkie dodane |
| Trailing slashes / sitemap / self-host fonty / GDPR | ✅ OK |
| **Blog pusty + `noindex` + wykluczony z części sitemapy** | 🔴 **OTWARTE** — blokuje Fazę 2 (patrz §2.1) |
| H1 home = nazwa programu, nie keyword | ✅ złagodzone (lead paragraph z keywordami) |

---

## 2. Plan — co zostało do zrobienia

### 2.1 🔴 Blokery techniczne przed Fazą 2 (priorytet — zrobić najpierw)

- [ ] **Zdjąć `noindex` z bloga** (`/blog/index.astro`, `/blog/[slug].astro`) — bez tego cornerstone'y się nie zaindeksują
- [ ] **Włączyć `/blog/*` do sitemapy** (`astro.config.mjs` — obecnie blog częściowo wykluczony)
- [ ] **Szablon artykułu** `/blog/[slug].astro` — zweryfikować `Article` + `Person`(autor) + `BreadcrumbList`, opcjonalnie `FAQPage` dla cornerstone'ów; spójny CTA do IRK
- [ ] **Strapi — pola artykułu** pod E-E-A-T: autor (imię, rola, bio, zdjęcie), data publikacji/aktualizacji, kategoria, featured image, czas czytania

### 2.2 🔴 Konwersja — link IRK 2026/2027 (poza SEO, ale krytyczne)

- [ ] **Podmienić URL oferty IRK** na edycję 2026/2027 — obecnie CTA prowadzą do `PDS_2025_2026` (Header×2, Footer, Hero, WhatYouLearn, FaqSection, LecturersGrid, schema Course, + 4 nowe strony hub). Czeka na URL od PWr.

### 2.3 Faza 1.4 — GSC / GA / monitoring (1–2 dni)

- [ ] Podpiąć **Bing Webmaster Tools** + IndexNow
- [ ] GA4: wydzielić zdarzenie **„kliknięcie CTA IRK"** (najważniejsza konwersja) + UTM na CTA
- [ ] Skonfigurować **Rank Tracker w Ahrefs** dla 30 keywordów z §6.1 (priorytet S/A)
- [ ] Alerty GSC na spadki >20% wyświetleń

### 2.4 Faza 2 — Content engine (sierpień–październik 2026)

**Pełne briefy (gotowe do pisania): [seo-briefy-faza2.md](seo-briefy-faza2.md).** Tempo: 1 cornerstone + 2 supporting / mies.

**Cornerstone (4 × 2500–4000 słów):**
- [ ] `/blog/psychologia-marketingu/` — *psychologia marketingu* (150/mc) — węzeł centralny, pisać pierwszy
- [ ] `/blog/neuromarketing/` — *neuromarketing* (500/mc, największy)
- [ ] `/blog/marketing-behawioralny/` — *marketing behawioralny* (uwaga: odróżnić intencją od huba `/marketing-behawioralny/` — blog = edukacyjny, hub = komercyjny)
- [ ] `/blog/psychologia-konsumenta/` — *psychologia konsumenta* (90/mc)

**Supporting (8 × 1200–1800 słów) — okazje większe niż w v1.0:**
- [ ] błędy poznawcze (**1300**/mc, KD4) · customer experience (**1500**/mc, KD0) · zasady Cialdiniego / reguła wzajemności (450, KD0) · lejek marketingowy (700, KD0) · storytelling (3900, KD2) · badania UX (150+200, KD0) · AI w marketingu (200) · employer branding (3300, KD6)

**Workflow (do ustalenia z PWr):** autorzy = wykładowcy (E-E-A-T); cykl brief → draft → review akademicki → SEO copyedit → publikacja; każdy artykuł z `Article` + `Person` autora, własny meta + OG.

### 2.5 Faza 3 — Authority / link building (październik–grudzień 2026)

- [ ] **Ekosystem PWr** (najszybsze, koszt 0, DR 65+): linki z `pwr.edu.pl`, `wz.pwr.edu.pl`, `podyplomowe.pwr.edu.pl`, `irk.usos.pwr.edu.pl`, profile wykładowców
- [ ] **Profile wykładowców** jako asset: LinkedIn, ORCID/ResearchGate/Scholar z linkiem; 1–2 publikacje/wywiady per osoba (Marketer+, NowyMarketing, Pulshr)
- [ ] **Katalogi/agregatory** (traffic rekrutacyjny): studia-online.pl, perspektywy.pl, otouczelnie.pl, studia.pl, studiapodyplomowe.info
- [ ] **Media branżowe** (cel 5–8 publikacji): Marketer+, NowyMarketing, Sprawny Marketing, ew. Whitepress
- [ ] **PR / linkable asset:** raport „Stan psychologii w polskim marketingu 2026" (autorzy = kadra) → mailing do redakcji; webinar/patronat
- [ ] **Brand Radar (Ahrefs)** — monitoring obecności w AI Overview / ChatGPT / Perplexity dla „najlepsze studia podyplomowe z marketingu", „gdzie studiować psychologię konsumenta"
- [ ] **Internal linking — etap 2:** każdy cornerstone → ≥5 supporting + linki do `/program/` i `/wykladowcy/`; każdy supporting → 1–2 do cornerstone

---

## 3. KPI

### 3.1 KPI strategiczne (cel: koniec grudnia 2026)

| Metryka | Baseline (06-2026) | Target 6 mc | Źródło |
|---|---|---|---|
| Organic clicks / 28 dni | ~9 | **80–120** | GSC |
| Organic impressions / 28 dni | ~250 | **2000–3500** | GSC |
| Średnia pozycja | 22,9 | **12–15** | GSC |
| CTR średni | 3,2% | **5–7%** | GSC |
| Keywords w top 10 | 1 | **8–12** | Ahrefs |
| Keywords w top 3 | 0 | **2–3** | Ahrefs |
| Domain Rating | 0 | **15–25** | Ahrefs |
| Refdomains | 0 | **30+** | Ahrefs |
| Zindeksowane strony | 9 | **25–30** | GSC |
| Konwersje IRK click | baseline od 1. mies. | +50% | GA4 |

**Najbliższy kamień milowy (do końca lipca):** CTR `/wykladowcy/` 6,5% → 9–10% · „marketing behawioralny" w top 10 (z 14) · pierwsze rich results (Course/FAQ) widoczne w GSC.

### 3.2 KPI biznesowe (twarde)

- **Liczba zgłoszeń w IRK z organic** — końcowy KPI (UTM + GA4 attribution). Cel: edycja 2026/2027 wypełniona.
- Top entry pages użytkowników klikających „Zapisz się" — co konwertuje.

### 3.3 Rytm raportowania

Tygodniowo: szybki check GSC (15 min). Miesięcznie: raport vs KPI + korekta planu content. Kwartalnie: review strategii.

---

## 4. Ryzyka

| Ryzyko | Prawd. | Wpływ | Mitygacja |
|---|---|---|---|
| Wykładowcy nie chcą pisać | Średnie | Wysoki | „Bullet brief + nagranie głosowe", ghostwriter robi szkic |
| Brand collision psychologiawmarketingu.pl | Niskie | Średni | Monitoring brand search, ew. wykup wariantu domeny |
| Spadek kandydatów (trend ogólnopolski) | Średnie | Wysoki | Dywersyfikacja CTA: informator, newsletter, webinary |
| Google core update | Wysokie | Średni | Stawiać na E-E-A-T i jakość, nie na hacki |
| AI Overview kanibalizuje ruch | Wysokie | Wysoki | Styl „answer-first" + FAQ — być cytowanym |
| Brak budżetu na content | — | Krytyczne | Kadra jako autorzy in-house |
| Stale link IRK (2025_2026) | **Pewne dziś** | Wysoki | Pilnie pozyskać URL 2026/2027 (§2.2) |

---

## 5. Decyzje — status

| # | Decyzja | Status |
|---|---|---|
| 1 | Adres na stronie | ✅ Na Grobli 15 (decyzja użytkownika) |
| 2 | Edycja | ✅ 2026/2027 |
| 3 | OG branding | ✅ wygenerowany template (sharp) |
| 4 | **URL oferty IRK 2026/2027** | 🔴 czeka na PWr |
| 5 | **Właściciel strategii po stronie PWr** (single point of contact) | ⏳ do ustalenia |
| 6 | **Budżet content** — 3 art./mies. zewnętrznie (~3–5k zł/mc) vs in-house z kadrą | ⏳ do ustalenia |
| 7 | **Link z `pwr.edu.pl`** — największe szybkie wzmocnienie DR | ⏳ do ustalenia |
| 8 | **GA4 → wewnętrzne dashboardy PWr** (widoczność konwersji IRK) | ⏳ do ustalenia |

---

## 6. Załączniki

### 6.1 Klaster „psychologia + marketing" (target keywords)

| Keyword | Vol/mc | KD | Pozycja (06-2026) | Priorytet | Strona docelowa |
|---|---|---|---|---|---|
| neuromarketing | 500 | 0 | — | **S** | `/blog/neuromarketing/` |
| studia podyplomowe marketing | 150 | 0 | 51,8 | **S** | `/program/` |
| psychologia marketingu | 150 | 0 | 44,3 | **S** | `/blog/psychologia-marketingu/` |
| marketing studia wrocław | 100 | 0 | 27,0 | **S** | `/program/`, `/` |
| psychologia konsumenta | 90 | 0 | 38,0 | **A** | `/blog/psychologia-konsumenta/` |
| psychologia reklamy | 80 | 0 | 20,0 | **A** | cornerstone psychologia-marketingu |
| psychologia marketingu studia | 70 | — | 27,6 | **A** | `/program/` |
| psychologia reklamy studia | 60 | — | 30,5 | **A** | `/program/` |
| marketing behawioralny | 50 | niski | 14,2 | **A** | `/marketing-behawioralny/` |
| psychologia perswazji | 40 | 0 | 28,1 | **A** | supporting Cialdini |
| psychologia w marketingu | 40 | 0 | **1,2** | utrzymać | `/` |
| neuromarketing studia | 30 | — | — | **A** | `/blog/neuromarketing/` |
| studia podyplomowe pwr | — | — | — | **A** | `/rekrutacja/` |
| studia podyplomowe marketing dla menedżerów | — | — | — | **A** | `/dla-kogo/` |

Supporting-keyword (długi ogon) — wolumeny w [seo-briefy-faza2.md](seo-briefy-faza2.md): błędy poznawcze 1300 · customer experience 1500 · storytelling 3900 · employer branding 3300 · lejek marketingowy 700 · reguła wzajemności 450 · efekt zakotwiczenia 300.

### 6.2 Konkurenci do monitoringu

- **Edukacyjni:** sgh.waw.pl, kozminski.edu.pl, podyplomowe.ue.wroc.pl (geo!), studiapodyplomowe.uken.krakow.pl, podyplomowe.agh.edu.pl, merito.pl, cdv.pl, vizja.pl
- **Treściowi:** arturjablonski.com (DR 58), psychologiawpraktyce.pl (DR 50), psychologiawmarketingu.pl (collision), digitalk.pl, mfiles.pl
- **Marketplace'y:** studia-online.pl, otouczelnie.pl, perspektywy.pl

### 6.3 Narzędzia / źródła

- GSC `sc-domain:psychologiamarketingu.edu.pl` · Ahrefs project_id `9470746` · GA4 `G-KJ5FY3DR7Q`
- Do podpięcia: Bing Webmaster Tools, Ahrefs Rank Tracker (30 kw), Brand Radar (AI search)
