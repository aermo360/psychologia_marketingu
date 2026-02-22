# Historia zmian projektu

## Projekt
Strona internetowa studiów podyplomowych "Praktyczny e-marketing" - Politechnika Wrocławska.
Framework: Astro 5 + Tailwind CSS 4 + Strapi 5 (headless CMS).

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
