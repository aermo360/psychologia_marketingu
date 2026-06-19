# Historia zmian projektu

## Projekt
Strona internetowa studiów podyplomowych "Praktyczny e-marketing" - Politechnika Wrocławska.
Framework: Astro 6 + Tailwind CSS 4 + Strapi 5 (headless CMS).

## Konwencje
- Strony w `frontend/src/pages/` - importują Layout, Header, Footer i sekcję
- Sekcje komponentów w `frontend/src/components/sections/`
- Layout wrapper: `<Layout title="..." noindex={true}>`, main z `class="flex-1"`
- Nawigacja: desktop nav w Header + mobile menu (oba muszą być aktualizowane razem)
- Stylowanie: Tailwind CSS z custom colors (primary: #d41111), dark mode support
- Max-width container: `max-w-[1280px] mx-auto px-6 lg:px-20`
- Fonty: Inter Variable self-hosted via `@fontsource-variable/inter` (global.css), Material Symbols z Google (subset URL)
- GDPR: Cookie consent banner (`CookieBanner.astro`) dołączony do `Layout.astro` — GA ładuje się tylko po zgodzie (Consent Mode v2)
- Blog: strony bloga mają `noindex={true}` — blog jest w przygotowaniu ("wkrótce")

---

## 2026-02-11 - Dodanie strony FAQ

### Nowe pliki:
- `frontend/src/pages/faq.astro` - strona FAQ
- `frontend/src/components/sections/FaqSection.astro` - komponent sekcji FAQ z akordeonem (details/summary)

### Zmodyfikowane pliki:
- `frontend/src/components/Header.astro` - dodano link "FAQ" (`/faq`) do nawigacji desktop i mobile
- `frontend/src/components/Footer.astro` - zmieniono link FAQ z `#` na `/faq`

### Opis:
Strona FAQ zawiera najczęściej zadawane pytania w dwóch kategoriach:
1. **Rekrutacja i Opłaty** (3 pytania) - dokumenty, koszt studiów, terminy rekrutacji
2. **Organizacja Studiów** (3 pytania) - zjazdy weekendowe, forma zaliczenia, platforma e-learningowa

Sidebar zawiera sekcję "Nadal masz pytania?" z danymi kontaktowymi oraz linki do pobrania (Regulamin, Program studiów).

### Pliki źródłowe:
Strona została utworzona na podstawie `faq.html` i `faq.png` z głównego katalogu projektu.

---

## 2026-02-20 - Aktualizacja frontendu: program, statystyki, logotypy

### Nowe pliki:
- `frontend/public/logo-pwr-color.png` i `logo-pwr-white.png` - warianty logo do Header/Footer
- `logotyp/` - folder z kompletem oficjalnych logotypów PWr (PL/EN, pion/poziom, kolor/biel/szary)
- `archive.html`, `article.html` + PNG - szablony podglądowe

### Zmodyfikowane pliki:
- `frontend/src/components/Header.astro` - przełączanie logo kolor/biały w zależności od dark mode
- `frontend/src/components/Footer.astro` - przełączanie logo kolor/biały w zależności od dark mode
- `frontend/src/components/sections/Hero.astro` - usunięto badge "100% Online" i tekst "Wydział Zarządzania", zmieniono etykietę na "Edycja 2026"
- `frontend/src/components/sections/StatsBar.astro` - zaktualizowano: 2 semestry, 190h, 71 ECTS, online + stacjonarny egzamin
- `frontend/src/components/sections/CurriculumGrid.astro` - zaktualizowano do 5 kategorii programu oficjalnego
- `frontend/src/components/sections/GraduateProfile.astro` - poprawiono wielkość liter w "Sylwetka absolwenta"
- `frontend/src/components/sections/FaqSection.astro` - usunięto linki do pobrania (Regulamin, Program)

---

## 2026-02-21 - Favicon, strona polityki prywatności, Google Analytics

### Nowe pliki:
- `frontend/src/pages/polityka-prywatnosci.astro` - strona polityki prywatności (`/polityka-prywatnosci`)
- `frontend/public/favicon.png` - favicon z oficjalnym logo PWr (PL pion kolor v1)

### Zmodyfikowane pliki:
- `frontend/src/layouts/Layout.astro` - dodano Google Analytics (G-KJ5FY3DR7Q), zmieniono favicon
- `frontend/src/components/Header.astro` - powiększono logo (h-12 → h-14), link "Blog" wyłączony z badge "wkrótce"
- `frontend/src/components/sections/Hero.astro` - przycisk "Pobierz informator" wyłączony z badge "wkrótce"
- `frontend/src/components/Footer.astro` - link do `/polityka-prywatnosci`, zastąpiono "Deklaracja dostępności" mapą strony
- `frontend/src/components/sections/FaqSection.astro` - usunięto przycisk "Formularz kontaktowy"
- `frontend/src/components/sections/CurriculumGrid.astro` - dane programu przeniesione ze Strapi do statycznych (Strapi miał nieaktualne dane)

---

## 2026-02-23 - Pełny audyt bezpieczeństwa i jakości — implementacja poprawek

### Nowe pliki:
- `frontend/src/components/CookieBanner.astro` - baner zgody cookie (GDPR) — GA ładuje się dopiero po akceptacji

### Zainstalowane pakiety:
- `@fontsource-variable/inter` - self-hosting czcionki Inter (eliminuje Google Fonts dla body text)
- `sanitize-html` + `@types/sanitize-html` - sanitizacja HTML w artykułach bloga (XSS prevention)
- `@astrojs/sitemap` - dynamiczny sitemap zamiast statycznego pliku

### Usunięte pliki:
- `frontend/public/logo-pwr.png` - nieużywane logo (duplikat)
- `frontend/public/sitemap.xml` - zastąpione dynamicznym sitemapem z @astrojs/sitemap
- `frontend/public/favicon.svg` - stary favicon Astro (już wcześniej zastąpiony przez favicon.png)

### Zmodyfikowane pliki:
- `frontend/src/layouts/Layout.astro` - GA Consent Mode v2 (domyślnie denied), prop `noindex`, self-host Inter, Material Symbols subset URL, HTTPS w Schema.org, dodano `<CookieBanner />`
- `frontend/src/styles/global.css` - import `@fontsource-variable/inter`, zaktualizowane font-family
- `frontend/astro.config.mjs` - site URL HTTP→HTTPS, dodano @astrojs/sitemap (bez /blog), usunięto IP serwera z allowedHosts
- `frontend/src/components/Header.astro` - `aria-expanded` na hamburger button, `min-w/h-[44px]`, `focus-visible:ring`, proper aria-labels, toggle ikony menu/close
- `frontend/src/components/sections/CurriculumGrid.astro` - `sm:grid-cols-2` dla tabletu
- `frontend/src/components/sections/GraduateProfile.astro` - grayscale tylko na md+ (`md:grayscale`)
- `frontend/src/components/sections/Hero.astro` - `fetchpriority="high"` na obrazie LCP
- `frontend/src/components/sections/LecturersGrid.astro` - grayscale tylko na md+ (`md:grayscale`)
- `frontend/src/components/sections/BlogArchive.astro` - usunięto hardcoded artykuły, dodano empty state
- `frontend/src/pages/blog/[slug].astro` - usunięto hardcoded artykuły, sanitize-html, `noindex={true}`, dynamiczny `getStaticPaths()` ze Strapi
- `frontend/src/pages/blog/index.astro` - `noindex={true}`
- `frontend/src/content/config.ts` - usunięto kolekcję `modules` (nieużywana), dodano guard STRAPI_URL
- `frontend/src/pages/polityka-prywatnosci.astro` - zaktualizowano sekcję cookies o informację o zgodzie i cookie consent
- `frontend/Dockerfile.prod` - node:18-alpine → node:20-alpine
- `frontend/entrypoint.sh` - dodano `#!/bin/sh` i `set -e` (fail-fast)

### Opis:
Kompleksowy audyt i naprawa problemów z 10 kategorii: bezpieczeństwo (GDPR/cookie consent, XSS, self-host fonts),
wydajność (fetchpriority, font subset), dostępność (aria-expanded, focus-visible, touch targets),
SEO (HTTPS canonical, dynamiczny sitemap, noindex dla /blog), RWD (tablet breakpoint, mobile grayscale),
stabilność (Node 20, set -e, usunięcie nieużywanych plików).

---

## 2026-05-11 - Aktualizacja do Astro 6

### Przeniesione pliki:
- `frontend/src/content/config.ts` → `frontend/src/content.config.ts` — w Astro 6 wymagana nowa lokalizacja konfiguracji Content Collections (legacy API usunięte)

### Zmodyfikowane pliki:
- `frontend/package.json` — `astro` `^5.16.9` → `^6.3.1`
- `frontend/Dockerfile` — `node:18-alpine` → `node:22-alpine` (Astro 6 wymaga Node ≥ 22.12)
- `frontend/Dockerfile.prod` — `node:20-alpine` → `node:22-alpine`

### Uwagi:
- Build (`astro build`) działa poprawnie na v6.3.1.
- `strapi-community-astro-loader@2.0.6` deklaruje peer `astro@^5` (warning od npm), ale nie jest używany — Content Collections korzystają z własnego `customStrapiLoader`, więc brak realnego wpływu.
- Brak użycia usuniętych API: `Astro.glob`, `<ViewTransitions />`, `entry.render()`, `entry.slug`, client-side `getImage`, `z.string().email()` itp. — migracja była głównie mechaniczna.

---

## 2026-05-12 - Fix HTTPS→HTTP downgrade na trailing-slash redirectach

### Zmodyfikowane pliki (na serwerze, poza repo):
- `/etc/nginx/sites-enabled/psychologiamarketingu` na Hetzner (`157.180.18.130`) — dodano `absolute_redirect off;` i `port_in_redirect off;`. Backup: `psychologiamarketingu.bak.2026-05-11`.

### Problem:
Cloudflare terminuje TLS przed nginxem, który nasłuchuje tylko na `:80`. Auto-redirect nginx z `/faq` → `/faq/` budował absolutną Location ze schematu nasłuchu (`http://…/faq/`), co powodowało downgrade HTTPS→HTTP i dodatkowy round-trip przez Cloudflare. Dotyczyło wszystkich URL-i bez trailing slash (`/faq`, `/wykladowcy`, `/polityka-prywatnosci`, `/blog`).

### Rozwiązanie:
`absolute_redirect off` sprawia, że nginx wysyła Location relative (`/faq/`), więc przeglądarka zachowuje oryginalny schemat (HTTPS) i hosta. Po reloadzie: `/faq` → 301 → `https://…/faq/` (1 redirect, bez downgrade'u).

### Uwagi:
- Astro buduje z `build.format: 'directory'` (default), więc kanoniczne URL-e to wersje z trailing slash — wewnętrzne linki już używają `/faq/`. Redirect jest tylko safety-netem dla wejść z zewnątrz.
- Pozostałe „smelle" niezwiązane z trailing slash (do osobnego zadania): `/nonexistent` zwraca 200 zamiast 404 (SPA fallback `/index.html` w `try_files`), `/index.html` zwraca 200 zamiast 301 → `/`.

---

## 2026-06-19 - SEO: strategia + wdrożenie Fazy 1.1 (on-page tech)

### Nowe pliki:
- `docs/seo-strategia.md` - pełna 6-miesięczna strategia SEO (baseline GSC/Ahrefs, analiza konkurencji z SERP, klastry keywordów, plan 3-fazowy, KPI)
- `frontend/scripts/generate-og.mjs` - generator brandowanego OG image (sharp, 1200×630), reprodukowalny
- `frontend/public/og-default.png` - brandowany OG (logo PWr + tytuł, ciemne tło z czerwonym akcentem)

### Zmodyfikowane pliki:
- `frontend/src/layouts/Layout.astro` - prop `jsonLd` (per-page structured data), OG image domyślnie lokalny `/og-default.png` + rozwiązywany do absolutnego URL, `og:image:width/height`
- `frontend/src/components/sections/Hero.astro` - lead paragraph z keywordami („studia podyplomowe", „Politechnika Wrocławska", „neuromarketing")
- `frontend/src/components/sections/LecturersGrid.astro` - `<h2>Nasza kadra</h2>` → keyword-rich `<h1>`, inline JSON-LD `ItemList`/`Person` per wykładowca
- `frontend/src/components/sections/FaqSection.astro` - refactor do `faqs[]` (jedno źródło prawdy dla HTML i JSON-LD `FAQPage`)
- `frontend/src/pages/index.astro` - customowy meta description + schema `Course` (provider, offers 7600 PLN, courseMode online+onsite, 206h)
- `frontend/src/pages/wykladowcy.astro`, `faq.astro`, `blog/index.astro`, `polityka-prywatnosci.astro` - customowe meta descriptions + `BreadcrumbList`

### Kontekst (baseline z 2026-06-19):
DR=0, 0 backlinków, 27 klików / 845 wyświetleń (90 dni), poz. śr. 22,9. Sleeper hit: `/wykladowcy/` poz. ~6 / CTR 6,5% mimo braku `<h1>`. „marketing behawioralny" już poz. 14. PWr nieobecna w top 11 dla „studia podyplomowe marketing" (vol. 150/mc).

### Uwagi:
- `Person` schema na `/wykladowcy/` zapełnia się tylko na prodzie (dane wykładowców ze Strapi; lokalnie kolekcja pusta → empty state).
- Faza 1.2+ (cornerstone content, link building) — patrz `docs/seo-strategia.md`.

---

## 2026-06-19 - Fix: CMS przekierowywał na cms.praktycznymarketing.edu.pl

### Zmodyfikowane pliki:
- `backend/config/server.ts` — `url` default `http://cms.praktycznymarketing.edu.pl` → `https://cms.psychologiamarketingu.edu.pl`
- `backend/config/admin.ts` — `url` default `http://cms.praktycznymarketing.edu.pl/admin` → `https://cms.psychologiamarketingu.edu.pl/admin`

### Problem:
`cms.psychologiamarketingu.edu.pl` → 302 → `http://cms.praktycznymarketing.edu.pl/admin` (Strapi root `/` redirectuje na panel admina). Defaulty `PUBLIC_URL`/`ADMIN_URL` w configu backendu wskazywały na inny projekt (pozostałość po skopiowaniu repo z praktycznymarketing); na serwerze brak nadpisania w `.env`, więc Strapi używał błędnych defaultów. Przy okazji `http://` powodował downgrade ze schematu (Cloudflare terminuje TLS).

### Rozwiązanie:
Poprawione defaulty na właściwą domenę + `https`. Wymagany rebuild backendu (`docker compose up -d --build backend`) — Strapi wypieka `STRAPI_ADMIN_BACKEND_URL` do bundla admina przy buildzie.

---

## 2026-06-19 - SEO Faza 2.3: hub strony programu (4 nowe strony)

### Nowe pliki:
- `frontend/src/pages/program.astro` + `components/sections/ProgramOverview.astro` — pełny program, tabela 26 kursów (godz+ECTS ze źródła), sylwetka absolwenta, projekt; schema `Course` (url `/program/`). Target: „studia podyplomowe marketing/psychologia marketingu".
- `frontend/src/pages/marketing-behawioralny.astro` + `BehavioralManifesto.astro` — strona-manifest (money-keyword „marketing behawioralny"), głębsza niż sekcja na home.
- `frontend/src/pages/rekrutacja.astro` + `AdmissionsSection.astro` — proces krok-po-kroku, wymagania, opłaty 7600/2 raty, kontakt. Target: „studia podyplomowe pwr".
- `frontend/src/pages/dla-kogo.astro` + `ForWhomSection.astro` — 6 person adresatów (ze źródła). Target: „studia podyplomowe marketing dla menedżerów/specjalistów".

### Zmodyfikowane pliki:
- `frontend/src/components/Header.astro` — nawigacja (desktop+mobile): Program→`/program/`, +Dla kogo, +Rekrutacja; usunięto „Dlaczego my?"/„Kontakt"; CTA „Rekrutacja"→„Zapisz się".
- `frontend/src/components/Footer.astro` — kolumna „Rekrutacja" → „Studia" (linki do 4 hubów + marketing-behawioralny, sitewide).
- `frontend/src/components/sections/BentoCurriculum.astro`, `BehavioralInPractice.astro`, `WhatYouLearn.astro` — linki kontekstowe z home do nowych stron.

### Uwagi:
- Wszystkie nowe strony w sitemapie (9 stron total), breadcrumb schema na każdej.
- Treść zgodna ze źródłem prawdy (memory: `program-source-of-truth`); adres Na Grobli 15, edycja 2026/2027.
- CTA wciąż na ofercie IRK `PDS_2025_2026` — do podmiany, gdy znany URL 2026/2027.

---

## 2026-06-19 - SEO: przygotowanie bloga pod content (Faza 2 — blokery techniczne)

### Zmodyfikowane pliki:
- `frontend/public/robots.txt` — `Sitemap: …/sitemap.xml` → `…/sitemap-index.xml` (Astro generuje index, stary URL dawał 404).
- `frontend/src/pages/blog/[slug].astro` — dodano schema `BlogPosting` (z `author` Person + `publisher`) + `BreadcrumbList`, `description` (excerpt), `image` (featured → OG). Redirect `/blog` → `/blog/`.

### Stan zastany (już OK, bez zmian):
- Blog **nie ma** `noindex` (zdjęte wcześniej); `/blog/*` **jest** w sitemapie (`sitemap()` bez filtra).
- Strapi content-type `article` ma komplet pól E-E-A-T: author_name/role/bio/image_url, publish_date, category, featured_image, read_time, excerpt.

### Uwagi:
- Artykuły budują się przy `astro build` (getStaticPaths ze Strapi) — po publikacji w CMS wymagany rebuild frontu.
- Opcjonalny `FAQPage` dla cornerstone'ów (z briefów) — do dodania przy budowie konkretnych artykułów (wymaga pola FAQ w Strapi).
