# CLAUDE.md

## Projekt
Strona internetowa studiów podyplomowych "Praktyczny e-marketing" - Politechnika Wrocławska.
Framework: Astro 7 + Tailwind CSS 4 (frontend) + Strapi 5.49 (headless CMS, backend).

## Komendy
Frontend (`frontend/`):
- `npm run dev` — dev server
- `npm run build` — build produkcyjny (statyczny output do `dist/`)
- `npm run preview` — podgląd builda produkcyjnego
- Brak testera i lintera (brak `test`/`lint` w `package.json`)

Backend (`backend/`, Strapi):
- `npm run develop` — dev server + auto content-type builder
- `npm run build` — build panelu admina
- `npm run start` — start produkcyjny

Wymagania Node: frontend ≥22.12 (Astro 7), backend Node 20 (obraz `node:20-alpine`, wspierany przez Strapi 5.49).

W `Dockerfile`/`Dockerfile.prod` (obu projektów) używamy `npm install`, nie `npm ci` — lockfile generowany na macOS pomija natywne linux-musl bindingi (rolldown/oxide), przez co `npm ci` się wywala w kontenerze. Przy CI na Linuksie można wrócić do `npm ci`.

## Struktura i architektura
- Strony w `frontend/src/pages/` - importują Layout, Header, Footer i sekcję
- Sekcje komponentów w `frontend/src/components/sections/`
- Layout wrapper: `<Layout title="..." noindex={true}>`, main z `class="flex-1"`
- Content Collections: `frontend/src/content.config.ts` (od Astro 6 — legacy lokalizacja `content/config.ts` usunięta). Custom loader (`customStrapiLoader`), sterowany przez `STRAPI_URL` (runtime/Docker) lub `PUBLIC_STRAPI_URL` (build-time). Kolekcje: `lecturers`, `articles`. Kolekcja `modules` została świadomie usunięta — dane programu studiów są statyczne (`CurriculumGrid.astro`, `program.astro`), bo Strapi miał nieaktualne dane. Nie podłączaj tego z powrotem do Strapi bez potwierdzenia.
- Huby SEO programu: `/program/`, `/marketing-behawioralny/`, `/rekrutacja/`, `/dla-kogo/` — treść musi być zgodna ze źródłem prawdy (Claude memory: `program-source-of-truth`; adres Na Grobli 15, edycja 2026/2027).
- `docs/seo-strategia.md` — pełna strategia SEO (baseline GSC/Ahrefs, klastry keywordów, plan fazowy, KPI). Sprawdzać przed każdą zmianą treści/SEO.
- Backend `backend/config/server.ts` i `admin.ts` mają defaulty URL — muszą wskazywać na `https://cms.psychologiamarketingu.edu.pl` (nie legacy `praktycznymarketing`, pozostałość po skopiowaniu repo). `.env` na serwerze powinien to nadpisywać, ale defaulty muszą być poprawne jako fallback.
- Konfiguracja nginx (`/etc/nginx/sites-enabled/psychologiamarketingu` na serwerze Hetzner) leży poza repo — zmiany tam nie są śledzone w git, dokumentuj je tutaj jeśli coś zmienisz.
- `materialy/` — źródłowe materiały niepowiązane z kodem aplikacji: oficjalne logotypy PWr (`logotyp/`), oferta studiów (`.docx`). Stare mockupy HTML/PNG (faq, archive, article, code) i `implementation_plan.md` zostały usunięte — treść już dawno przeniesiona do działających stron Astro, `git log`/`git show` ma historię jeśli potrzebna.

## Konwencje i styl kodu
- Nawigacja: desktop nav w Header + mobile menu (oba muszą być aktualizowane razem)
- Stylowanie: Tailwind CSS z custom colors (primary: #d41111), dark mode support
- Max-width container: `max-w-[1280px] mx-auto px-6 lg:px-20`
- Fonty: Inter Variable self-hosted via `@fontsource-variable/inter` (global.css), Material Symbols z Google (subset URL)
- GDPR: Cookie consent banner (`CookieBanner.astro`) dołączony do `Layout.astro` — GA ładuje się tylko po zgodzie (Consent Mode v2)
- Blog jest LIVE i indeksowany (noindex zdjęty) — ma `BlogPosting` + `BreadcrumbList` schema, jest w sitemapie. Artykuły budują się przy `astro build` (`getStaticPaths` ze Strapi) — po publikacji w CMS wymagany rebuild frontu.
- SEO: każda nowa strona publiczna dostaje custom meta description + odpowiednią schema (`BreadcrumbList` minimum; `Course`/`FAQPage`/`Person` gdzie pasuje) i wpis w sitemapie.

## Workflow
- Praca odbywa się bezpośrednio na `main` — brak procesu PR w historii repo. Commituj małymi, opisowymi commitami.
- Sesje Claude Code mogą tworzyć własne branche (wzorzec `claude/<nazwa>`) — nie usuwaj ich bez potwierdzenia.
- Brak CI/CD w repo — deploy przez `docker compose` na serwerze (Hetzner). Zmiana configu backendu (np. `STRAPI_ADMIN_BACKEND_URL`) wymaga rebuildu (`docker compose up -d --build backend`), bo Strapi wypieka te wartości do builda admina.
- Przed deployem backendu rób backup bazy (`backend/.tmp/data.db.bak.<timestamp>` na serwerze).

## Ograniczenia i pułapki
- Nav: desktop (Header) i mobile menu muszą być aktualizowane razem.
- GA ładuje się wyłącznie po zgodzie w CookieBannerze (Consent Mode v2, domyślnie denied) — nie dodawaj trackerów omijających ten mechanizm.
- Dane programu studiów (godziny, ECTS) są statyczne celowo — nie synchronizuj ich z powrotem ze Strapi.
- nginx: `absolute_redirect off` / `port_in_redirect off` zapobiega HTTPS→HTTP downgrade na trailing-slash redirectach (Cloudflare terminuje TLS, nginx nasłuchuje na `:80`) — nie usuwaj tej konfiguracji. Znane, nieusunięte smelle: `/nonexistent` zwraca 200 zamiast 404 (SPA fallback), `/index.html` zwraca 200 zamiast 301→`/`.
- Backend defaults URL muszą być `https://cms.psychologiamarketingu.edu.pl`, nie legacy domena `praktycznymarketing` — łatwo to przypadkiem cofnąć przy kopiowaniu configu.
- Lockfile frontendu/backendu generowany na macOS — stąd `npm install` zamiast `npm ci` w Dockerfile'ach (patrz Komendy).
- Brak testów i lintera — zmiany weryfikuje się manualnie (`npm run dev`/`preview`) i wzrokowo.

## Decyzje historyczne (skrót)
- 2026-02-11: strona FAQ.
- 2026-02-20/21: aktualizacja programu, statystyk, logotypów PWr; favicon, polityka prywatności, Google Analytics.
- 2026-02-23: pełny audyt bezpieczeństwa/dostępności/SEO (GDPR consent, self-host fontów, sanitize-html, dynamiczny sitemap, Node 20).
- 2026-05-11: upgrade Astro 5→6 (przeniesienie `content/config.ts` → `content.config.ts`, Node 22).
- 2026-05-12: fix nginx trailing-slash HTTPS downgrade (patrz Pułapki).
- 2026-06-19: strategia SEO (`docs/seo-strategia.md`) + Faza 1.1 (schema.org, meta descriptions, OG); fix CMS URL defaults; Faza 2.3 (huby `/program/`, `/marketing-behawioralny/`, `/rekrutacja/`, `/dla-kogo/`); odblokowanie bloga pod SEO (BlogPosting schema, sitemap).
- 2026-06-27: upgrade Astro 6→7 i Strapi 5.33→5.49 (patrz Komendy: `npm install` vs `npm ci`).

Pełne szczegóły każdej zmiany (dokładne pliki, diffy) — `git log`.
