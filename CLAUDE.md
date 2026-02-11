# Historia zmian projektu

## Projekt
Strona internetowa studiów podyplomowych "Praktyczny e-marketing" - Politechnika Wrocławska.
Framework: Astro 5 + Tailwind CSS 4 + Strapi 5 (headless CMS).

## Konwencje
- Strony w `frontend/src/pages/` - importują Layout, Header, Footer i sekcję
- Sekcje komponentów w `frontend/src/components/sections/`
- Layout wrapper: `<Layout title="...">`, main z `class="flex-1"`
- Nawigacja: desktop nav w Header + mobile menu (oba muszą być aktualizowane razem)
- Stylowanie: Tailwind CSS z custom colors (primary: #d41111), dark mode support
- Max-width container: `max-w-[1280px] mx-auto px-6 lg:px-20`

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
