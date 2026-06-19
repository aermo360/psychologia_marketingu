# Briefy SEO — Faza 2 (Content engine)

**Wersja:** 1.0 · **Data:** 2026-06-19 · **Okres realizacji:** sierpień–październik 2026
**Powiązane:** [seo-strategia.md](seo-strategia.md) · źródło prawdy o programie: dokument oferty (memory: `program-source-of-truth`)

---

## Jak korzystać z tego dokumentu

Każdy brief jest samodzielny — copywriter powinien móc napisać artykuł bez dodatkowego researchu. Struktura briefu:
**Meta** (slug, keyword + wolumen + KD, słowa pomocnicze, intencja, długość, autor) → **Kontekst SERP** (kto rankuje, luka) → **Title / Meta description / H1** → **Outline (H2/H3)** → **FAQ** (realne pytania z SERP → schema) → **„Jak uczymy w programie"** (CTA, zgodne ze źródłem) → **Linkowanie wewnętrzne** → **Schema** → **E-E-A-T / źródła** → **Asset wizualny**.

### Zasady wspólne dla wszystkich tekstów
- **Język:** polski, ekspercki ale przystępny. Autor = wykładowca programu (sygnał E-E-A-T) — podpis z imieniem, rolą, mini-bio.
- **Answer-first:** pierwszy akapit (TL;DR, ~300 zn.) to bezpośrednia, samodzielna odpowiedź na główne pytanie → szansa na featured snippet i cytowanie w AI Overview (AI Overview obecny w SERP dla *neuromarketing* i *psychologia marketingu*).
- **Zgodność ze źródłem prawdy:** wszystko, co piszemy o programie (godziny, ECTS, przedmioty, kierownik, tryb), musi się zgadzać z dokumentem oferty. 2 semestry · 206 h · 76 ECTS · online + egzamin stacjonarny · 25 przedmiotów + projekt · limit 30 · kierownik dr Mirosława Krzyścin.
- **CTA:** każdy artykuł kończy sekcją „Jak uczymy tego w programie" z linkiem do `/` i do rekrutacji IRK. ⚠️ Link IRK do potwierdzenia dla edycji 2026/2027 (obecnie `PDS_2025_2026`).
- **Schema:** `Article` + `Person` (autor) + `BreadcrumbList`; cornerstone'y dodatkowo `FAQPage`.
- **Title tag** ≤ 60 znaków, **meta description** ≤ 155 znaków, **jeden H1**.
- **Blog `noindex`:** obecnie strony bloga mają `noindex`. **Przed publikacją Fazy 2 zdjąć `noindex` z bloga i dodać `/blog/*` do sitemapy** (osobne zadanie techniczne — patrz koniec dokumentu).

---

# CZĘŚĆ A — Cornerstone (4 artykuły, 2500–4000 słów)

Cel: top 5 w 6 miesięcy. Każdy to filar klastra tematycznego, do którego linkują supporting posty.

---

## BRIEF C1 — Neuromarketing

| | |
|---|---|
| **Slug** | `/blog/neuromarketing/` |
| **Typ** | Cornerstone |
| **Keyword główny** | neuromarketing — **500/mc**, KD 0 |
| **Słowa pomocnicze** | neuromarketing co to jest (intent „co to"), neuromarketing w praktyce, neuromarketing studia (30), eye tracking (800), neuromarketing przykłady |
| **Intencja** | Informacyjna (definicja + jak działa + przykłady) |
| **Długość** | 3000–4000 słów |
| **Priorytet** | **S — pisać pierwszy** (największy wolumen w klastrze) |

**Kontekst SERP:** AI Overview z 10 sitelinkami (autopay.pl DR77, harbingers.io, trustedshops, wenet, questus). Pozycja #2 organic: Wikipedia DR 97 (nieruszalna — nie walczymy o #1, celujemy w top 5 i w bycie cytowanym w AI Overview). Bezpośredni konkurent uczelniany: `vizja.pl/specjalizacja/psychologia-neuromarketing/` (DR 66). Reszta top 10 to blogi firmowe DR 43–79. **Luka:** brak głębokiego, akademickiego, a zarazem praktycznego materiału od uczelni — to nasza przewaga (E-E-A-T uczelni technicznej).

**Title:** `Neuromarketing — co to jest i jak działa? Metody i przykłady`
**Meta description:** `Czym jest neuromarketing, jakie metody wykorzystuje (fMRI, eye tracking, EEG) i jak firmy stosują go w praktyce. Przewodnik ekspercki PWr.`
**H1:** `Neuromarketing — co to jest, jak działa i gdzie znajduje zastosowanie`

**Outline:**
- **TL;DR** (~300 zn.) — definicja w 2 zdaniach + dla kogo artykuł. (target: snippet/AI Overview)
- **H2: Czym jest neuromarketing?** — definicja, geneza (pogranicze neuronauki, psychologii i marketingu), czym różni się od tradycyjnych badań marketingowych.
- **H2: Jak działa neuromarketing — co bada mózg konsumenta** — uwaga, emocje, pamięć, zaangażowanie.
- **H2: Metody i narzędzia neuromarketingu** (H3: rezonans magnetyczny / fMRI · eye tracking · EEG · GSR / reakcja skórno-galwaniczna · analiza mimiki). Sygnał z danych: „rezonans magnetyczny" i „eye tracking" mocno powiązane z tematem.
- **H2: Neuromarketing w praktyce — przykłady i case studies** — słynny test Pepsi vs Coca-Cola (sygnał „coca cola" 16k powiązań), packaging, ceny, reklamy. 5–8 konkretnych mechanizmów.
- **H2: Neuromarketing a etyka** — granice wpływu, manipulacja vs perswazja.
- **H2: Jak nauczyć się neuromarketingu** → przejście do programu.
- **Sekcja FAQ** (poniżej).
- **Sekcja „Jak uczymy tego w programie"** (poniżej).
- **Bibliografia.**

**FAQ (→ FAQPage schema):**
- Co to jest neuromarketing? (definicja 1-zdaniowa)
- Jakie metody wykorzystuje neuromarketing?
- Czy neuromarketing jest etyczny?
- Gdzie można studiować neuromarketing w Polsce? → naturalne podpięcie programu PKZ

**„Jak uczymy tego w programie":** mechanizmy neuromarketingu są elementem przedmiotu **„Zachowania nabywcze"** (model profilowania psychologicznego i targetowania behawioralnego) — cytat zgodny ze źródłem. Link do `/` + CTA IRK. Zaznaczyć: program to szersze ujęcie (psychologia konsumenta, CX, branding), nie tylko neuromarketing.

**Linkowanie wewnętrzne:** OUT → `/` (program), `/wykladowcy/`, cornerstone `psychologia-konsumenta`, supporting `błędy poznawcze`. IN ← wszystkie supporting z klastra + sekcja „Marketing behawioralny" na home.

**Schema:** Article + Person(autor) + FAQPage + BreadcrumbList.
**E-E-A-T / źródła:** odwołania do badań (np. Lindstrom „Buyology", Ariely, Kahneman), publikacje akademickie. Autor — wykładowca z dorobkiem w temacie zachowań konsumenckich.
**Asset:** infografika „Metody neuromarketingu" (fMRI/eye tracking/EEG/GSR) — linkable asset, potencjał backlinkowy.

---

## BRIEF C2 — Psychologia marketingu

| | |
|---|---|
| **Slug** | `/blog/psychologia-marketingu/` |
| **Typ** | Cornerstone |
| **Keyword główny** | psychologia marketingu — **150/mc**, KD 0 (SERP DR 50–79) |
| **Słowa pomocnicze** | psychologia w marketingu (40, już mamy poz. 1!), psychologia reklamy (80), psychologia marketingu studia (70), psychologia sprzedaży |
| **Intencja** | Informacyjna |
| **Długość** | 3000–4000 słów |
| **Priorytet** | **S** (rdzeń marki, nazwa domeny) |

**Kontekst SERP:** AI Overview obecny. #1 organic: psychologiawpraktyce.pl (artykuł, DR 50, tylko 1 refdomain — **realnie do pobicia**). Dalej merito.pl (uczelnia), studia-online.pl, digitalk.pl (DR 36). **Ryzyko brand-collision:** `psychologiawmarketingu.pl` (DR 3, ale 33 refdomains). **Luka:** najmocniejszy organiczny wynik to słaby linkowo artykuł — autorytatywny materiał uczelni może go wyprzeć. Mamy już poz. 1 dla „psychologia w marketingu" — cornerstone to ugruntuje.

**Title:** `Psychologia marketingu — jak wpływa na decyzje klientów`
**Meta description:** `Czym jest psychologia marketingu i jak wykorzystać mechanizmy psychologiczne w komunikacji marki. Mechanizmy, przykłady i zastosowania — przewodnik PWr.`
**H1:** `Psychologia marketingu — jak rozumienie umysłu klienta zwiększa skuteczność`

**Outline:**
- **TL;DR** — czym jest psychologia marketingu (1 akapit).
- **H2: Czym jest psychologia marketingu?** — definicja, styk psychologii, ekonomii i marketingu (zgodne z charakterystyką programu — „interdyscyplinarny styk marketingu, psychologii, ekonomii i zarządzania").
- **H2: Dlaczego psychologia działa w marketingu — dwa systemy myślenia** — emocje vs analiza, koncepcja „dwóch umysłów".
- **H2: Kluczowe mechanizmy psychologiczne w marketingu** (H3: społeczny dowód słuszności · niedobór · zakotwiczenie · framing · awersja do straty · wzajemność). 6–8 mechanizmów z przykładami → linki do supporting (Cialdini, błędy poznawcze).
- **H2: Psychologia w reklamie i komunikacji marki** — podpięcie „psychologia reklamy" (80).
- **H2: Psychologia sprzedaży i obsługi klienta.**
- **H2: Jak zdobyć wiedzę z psychologii marketingu** → program.
- **FAQ + „Jak uczymy" + Bibliografia.**

**FAQ (realne PAA z SERP):**
- Co robi psycholog w marketingu?
- Czym zajmuje się psycholog marketingu?
- Na czym polega zasada 3-3-3 w marketingu?
- Gdzie studiować psychologię marketingu? → program PKZ

**„Jak uczymy":** to rdzeń całego programu — przywołać przedmioty „Wprowadzenie do psychologii konsumenta", „Techniki wpływu społecznego", „Psychologia reklamy i mediów". CTA do `/`.

**Linkowanie:** OUT → wszystkie 3 pozostałe cornerstone'y + supporting Cialdini, błędy poznawcze. IN ← cała reszta klastra, home. **To węzeł centralny** — najwięcej linków wewnętrznych.
**Schema:** Article + Person + FAQPage + BreadcrumbList.
**Asset:** infografika „X mechanizmów psychologicznych w marketingu".

---

## BRIEF C3 — Marketing behawioralny

| | |
|---|---|
| **Slug** | `/blog/marketing-behawioralny/` |
| **Typ** | Cornerstone |
| **Keyword główny** | marketing behawioralny — **50/mc**, KD niski |
| **Słowa pomocnicze** | marketing behawioralny studia, ekonomia behawioralna (w marketingu), targetowanie behawioralne, marketing behawioralny przykłady |
| **Intencja** | Informacyjna |
| **Długość** | 2500–3500 słów |
| **Priorytet** | **A** — już rankujemy poz. ~14 (GSC), realny szybki awans |

**Kontekst SERP:** niższy wolumen, ale **mamy już widoczność (poz. 14)** i całą markę zbudowaną wokół tego pojęcia (sekcja „Marketing behawioralny — co to znaczy w praktyce" na home). Cornerstone przejmie ranking z home i pchnie w top 10. Niska konkurencja na samym terminie.

**Title:** `Marketing behawioralny — co to jest i jak go stosować`
**Meta description:** `Marketing behawioralny: jak wykorzystać wiedzę o zachowaniach konsumentów do skuteczniejszych decyzji marketingowych. Definicja, mechanizmy, przykłady.`
**H1:** `Marketing behawioralny — decyzje oparte na zachowaniach, nie na intuicji`

**Outline:**
- **TL;DR.**
- **H2: Czym jest marketing behawioralny?** — definicja, korzenie w ekonomii behawioralnej (Kahneman, Thaler).
- **H2: Marketing behawioralny a tradycyjny — różnica w podejściu.**
- **H2: Mechanizmy behawioralne w praktyce** (H3: heurystyki · ograniczona racjonalność · nudge / architektura wyboru · efekt domyślności · framing). Spójne z przedmiotami „Motywacje konsumenckie", „Zachowania nabywcze".
- **H2: Targetowanie behawioralne i personalizacja** — profilowanie, dane, etyka.
- **H2: Przykłady zastosowań** — promocje, ceny, e-commerce, mailing (link do supporting „mailing behawioralny").
- **H2: Jak wdrożyć myślenie behawioralne** → program.
- **FAQ + „Jak uczymy" + Bibliografia.**

**FAQ:**
- Co to jest marketing behawioralny?
- Czym różni się marketing behawioralny od tradycyjnego?
- Czym jest ekonomia behawioralna w marketingu?
- Gdzie nauczyć się marketingu behawioralnego?

**„Jak uczymy":** to filozofia całego programu — „decyzje oparte na wiedzy, nie na intuicji". Przedmioty: „Motywacje konsumenckie", „Zachowania nabywcze", „Promocje konsumenckie". CTA.
**Linkowanie:** OUT → cornerstone psychologia-konsumenta, supporting błędy poznawcze, mailing behawioralny. IN ← home (sekcja behawioralna — **przekierować link z sekcji na ten cornerstone**), supporting.
**Schema:** Article + Person + FAQPage + BreadcrumbList.
**Asset:** diagram „Jak działa decyzja behawioralna" (bodziec → heurystyka → decyzja).

---

## BRIEF C4 — Psychologia konsumenta

| | |
|---|---|
| **Slug** | `/blog/psychologia-konsumenta/` |
| **Typ** | Cornerstone |
| **Keyword główny** | psychologia konsumenta — **90/mc**, KD 0 |
| **Słowa pomocnicze** | psychologia zachowań konsumenckich (50), zachowania konsumenckie, proces decyzyjny konsumenta, potrzeby konsumenta |
| **Intencja** | Informacyjna |
| **Długość** | 2500–3500 słów |
| **Priorytet** | **A** |

**Kontekst SERP:** KD 0, niska konkurencja, temat 1:1 z nazwą kierunku („…i zachowań konsumenckich"). Naturalna przewaga tematyczna.

**Title:** `Psychologia konsumenta — jak klienci podejmują decyzje`
**Meta description:** `Psychologia konsumenta: motywacje, emocje, potrzeby i proces decyzyjny klienta. Jak zrozumieć zachowania konsumenckie i wykorzystać je w marketingu.`
**H1:** `Psychologia konsumenta — co kieruje decyzjami zakupowymi klientów`

**Outline:**
- **TL;DR.**
- **H2: Czym jest psychologia konsumenta?**
- **H2: Proces decyzyjny konsumenta — etapy** — od potrzeby do zakupu i po zakupie.
- **H2: Co wpływa na decyzje konsumenta** (H3: motywacje i potrzeby · emocje · percepcja · postawy · grupy odniesienia). Zgodne z efektami uczenia (PKZ_W1–W4) i przedmiotem „Motywacje konsumenckie".
- **H2: Jak badać zachowania konsumenckie** — link do supporting „badania UX" i „badania zachowań konsumenckich".
- **H2: Psychologia konsumenta w strategii marki** — personalizacja, mapa podróży klienta (link do supporting CX).
- **H2: Jak pogłębić wiedzę** → program.
- **FAQ + „Jak uczymy" + Bibliografia.**

**FAQ:**
- Czym zajmuje się psychologia konsumenta?
- Jakie czynniki wpływają na decyzje zakupowe?
- Czym jest proces decyzyjny konsumenta?
- Czym są zachowania konsumenckie?

**„Jak uczymy":** rdzeń sylwetki absolwenta („wiedza z zakresu psychologii konsumenta, jego motywacji, percepcji, emocji, postaw, potrzeb"). Przedmioty: „Wprowadzenie do psychologii konsumenta", „Motywacje konsumenckie", „Badania zachowań konsumenckich". CTA.
**Linkowanie:** OUT → cornerstone psychologia-marketingu, supporting badania UX, CX. IN ← klaster.
**Schema:** Article + Person + FAQPage + BreadcrumbList.
**Asset:** infografika „Proces decyzyjny konsumenta — 5 etapów".

---

# CZĘŚĆ B — Supporting posts (8 artykułów, 1200–1800 słów)

Każdy linkuje do co najmniej jednego cornerstone. Posortowane wg priorytetu (wolumen × łatwość × dopasowanie do programu). **Dane wolumenów zaktualizowane Ahrefs 2026-06-19 — kilka okazji znacznie mocniejszych niż w strategii.**

| # | Slug | Keyword główny | Vol/mc | KD | Priorytet | Cornerstone |
|---|---|---|---|---|---|---|
| S1 | `/blog/bledy-poznawcze-w-marketingu/` | błędy poznawcze | **1300** | 4 | **S** | psychologia-marketingu |
| S2 | `/blog/customer-experience/` | customer experience | **1500** | 0 | **S** | psychologia-konsumenta |
| S3 | `/blog/zasady-cialdiniego/` | reguła wzajemności / zasady Cialdiniego | 450 / 90 | 0 | **A** | psychologia-marketingu |
| S4 | `/blog/lejek-marketingowy/` | lejek marketingowy | **700** | 0 | **A** | marketing-behawioralny |
| S5 | `/blog/storytelling-w-marketingu/` | storytelling (w marketingu) | 3900* | 2 | **A** | psychologia-marketingu |
| S6 | `/blog/badania-ux/` | badania ux / ux research | 150 / 200 | 0 | **B** | psychologia-konsumenta |
| S7 | `/blog/ai-w-marketingu/` | sztuczna inteligencja w marketingu | 200 | 4 | **B** | neuromarketing |
| S8 | `/blog/employer-branding/` | employer branding | **3300** | 6 | **B** | psychologia-marketingu |

\* „storytelling" 3900 jest szerokie/trudniejsze — celować w long-tail „storytelling w marketingu / w biznesie".

---

## S1 — Błędy poznawcze w marketingu *(najwyższy potencjał long-tail)*
- **Keyword:** błędy poznawcze (**1300/mc**, KD 4) + heurystyki (800), efekt zakotwiczenia (300), zniekształcenia poznawcze.
- **Title:** `Błędy poznawcze w marketingu — 10 mechanizmów, które wpływają na zakupy`
- **Meta:** `Najważniejsze błędy poznawcze i heurystyki, które wpływają na decyzje zakupowe — z przykładami zastosowań w marketingu.`
- **H1:** `Błędy poznawcze, które wpływają na decyzje zakupowe`
- **Outline:** TL;DR (czym są błędy poznawcze) → czym są heurystyki i błędy poznawcze → lista 8–10 (zakotwiczenie · efekt aureoli · społeczny dowód · awersja do straty · efekt posiadania · framing · paradoks wyboru · efekt świeżości) — każdy z przykładem marketingowym → jak świadomie i etycznie je wykorzystywać → CTA.
- **FAQ:** Czym są błędy poznawcze? Czym jest heurystyka? Czym jest efekt zakotwiczenia?
- **Link:** → cornerstone psychologia-marketingu + marketing-behawioralny. **Mocny kandydat na ruch** (1300+800+300 = bardzo szeroki long-tail, niskie KD).

## S2 — Customer experience (CX) *(KD 0, wysoki wolumen)*
- **Keyword:** customer experience (**1500/mc**, KD 0) + cx design (10), mapa podróży klienta (60), doświadczenie klienta.
- **Title:** `Customer experience (CX) — czym jest i jak projektować doświadczenia klienta`
- **Meta:** `Customer experience (CX): czym jest, dlaczego decyduje o lojalności i jak projektować doświadczenia klienta. Mapa podróży, wskaźniki, przykłady.`
- **H1:** `Customer experience — jak projektować doświadczenia, które budują lojalność`
- **Outline:** TL;DR → czym jest CX (a UX) → dlaczego CX decyduje o lojalności → mapa podróży klienta (customer journey) → wskaźniki (NPS, CSAT) → jak projektować CX → CTA.
- **FAQ:** Co to jest customer experience? Czym różni się CX od UX? Co to jest mapa podróży klienta?
- **Link:** → cornerstone psychologia-konsumenta. Zgodne z przedmiotem „Projektowanie doświadczeń konsumentów". **Zastępuje na home odwołanie do CX.**

## S3 — Zasady Cialdiniego / reguła wzajemności
- **Keyword:** reguła wzajemności (450, KD 0) + zasady cialdiniego (90), 6 reguł wpływu, psychologia perswazji (40).
- **Title:** `Zasady Cialdiniego — 6 reguł wpływu w marketingu i sprzedaży`
- **Meta:** `6 reguł wpływu społecznego Roberta Cialdiniego (wzajemność, niedobór, autorytet…) i jak działają w marketingu — z przykładami.`
- **H1:** `6 zasad wpływu Cialdiniego w praktyce marketingowej`
- **Outline:** TL;DR → kim jest Cialdini → 6 reguł (wzajemność · zaangażowanie i konsekwencja · społeczny dowód słuszności · sympatia · autorytet · niedobór), każda z osobnym H3 + przykład → etyka perswazji → CTA.
- **FAQ:** Jakie są zasady Cialdiniego? Na czym polega reguła wzajemności? Czym jest społeczny dowód słuszności?
- **Link:** → cornerstone psychologia-marketingu. Zgodne z przedmiotami „Techniki wpływu społecznego", „Perswazyjność reklamy".

## S4 — Lejek marketingowy *(KD 0)*
- **Keyword:** lejek marketingowy (**700/mc**, KD 0) + lejek sprzedażowy, ścieżka zakupowa, AIDA.
- **Title:** `Lejek marketingowy — etapy, modele i jak go zbudować`
- **Meta:** `Czym jest lejek marketingowy, jakie ma etapy (TOFU/MOFU/BOFU) i jak budować skuteczną ścieżkę zakupową klienta. Praktyczny przewodnik.`
- **H1:** `Lejek marketingowy — od świadomości do lojalności`
- **Outline:** TL;DR → czym jest lejek → etapy (świadomość → zainteresowanie → decyzja → lojalność) → modele (AIDA) → psychologia na każdym etapie (podpięcie behawioralne) → jak mierzyć i optymalizować → CTA.
- **FAQ:** Co to jest lejek marketingowy? Jakie są etapy lejka? Czym różni się lejek marketingowy od sprzedażowego?
- **Link:** → cornerstone marketing-behawioralny.

## S5 — Storytelling w marketingu
- **Keyword:** storytelling (3900, KD 2 — szerokie) → celować long-tail „storytelling w marketingu / w biznesie".
- **Title:** `Storytelling w marketingu — jak budować historie, które sprzedają`
- **Meta:** `Storytelling w marketingu: dlaczego historie angażują, jakie struktury narracyjne działają i jak wykorzystać je w komunikacji marki.`
- **H1:** `Storytelling w marketingu — narracja, która buduje relację z klientem`
- **Outline:** TL;DR → dlaczego mózg kocha historie (psychologia narracji) → struktury (podróż bohatera, problem–rozwiązanie) → storytelling oparty na danych (data storytelling) → przykłady marek → CTA.
- **FAQ:** Czym jest storytelling? Jak stosować storytelling w marketingu? Czym jest data storytelling?
- **Link:** → cornerstone psychologia-marketingu. Zgodne z przedmiotami „Storytelling", „Content marketing".

## S6 — Badania UX *(KD 0)*
- **Keyword:** badania ux (150, KD 0) + ux research (200, KD 0), metody badań ux.
- **Title:** `Badania UX — metody i jak prowadzić badania użytkowników`
- **Meta:** `Badania UX (UX research): jakie metody wybrać, jak prowadzić wywiady, testy użyteczności i analizę. Przewodnik dla początkujących.`
- **H1:** `Badania UX — jak poznać potrzeby użytkowników`
- **Outline:** TL;DR → czym jest UX research → metody jakościowe vs ilościowe → wywiady, testy użyteczności, ankiety, eye tracking → jak zaplanować badanie → CTA.
- **FAQ:** Czym są badania UX? Jakie są metody badań UX? Czym różni się UX research od badań rynku?
- **Link:** → cornerstone psychologia-konsumenta. Zgodne z „Badania zachowań konsumenckich".

## S7 — Sztuczna inteligencja w marketingu
- **Keyword:** sztuczna inteligencja w marketingu (200, KD 4) + AI w marketingu, marketing internetowy (2200, szerokie).
- **Title:** `Sztuczna inteligencja w marketingu — zastosowania i narzędzia 2026`
- **Meta:** `Jak sztuczna inteligencja zmienia marketing: personalizacja, analiza danych, generowanie treści, poznawanie konsumenta. Przegląd zastosowań.`
- **H1:** `Sztuczna inteligencja w marketingu — co zmienia i jak ją wykorzystać`
- **Outline:** TL;DR → gdzie AI realnie pomaga (personalizacja, analityka, content, predykcja) → AI w poznawaniu konsumenta → narzędzia → ograniczenia i etyka → CTA.
- **FAQ:** Jak wykorzystać AI w marketingu? Czy AI zastąpi marketerów? Jakie narzędzia AI dla marketingu?
- **Link:** → cornerstone neuromarketing. Zgodne z przedmiotem „Nowoczesne trendy w pozyskiwaniu wiedzy o konsumentach: AI, marketplace, analityka, VR".

## S8 — Employer branding *(wysoki wolumen, lekko poza rdzeniem)*
- **Keyword:** employer branding (**3300/mc**, KD 6) + employer branding działania, EVP.
- **Title:** `Employer branding — jak budować markę pracodawcy`
- **Meta:** `Employer branding: czym jest marka pracodawcy, jak budować EVP i candidate/employee experience. Strategia i przykłady działań.`
- **H1:** `Employer branding — marka pracodawcy oparta na doświadczeniu pracownika`
- **Outline:** TL;DR → czym jest employer branding → EVP → employee experience jako przedłużenie CX → kanały i działania → mierzenie → CTA.
- **FAQ:** Czym jest employer branding? Co to jest EVP? Jak budować markę pracodawcy?
- **Link:** → cornerstone psychologia-marketingu. Zgodne z przedmiotem „Employee experience i employer branding". **Uwaga:** wysoki wolumen, ale konkurencja employerbrandingowa silna (KD 6) i temat lekko poza rdzeniem — traktować jako poszerzenie, nie priorytet.

---

# Harmonogram produkcji (sierpień–październik 2026)

Tempo wg strategii: **1 cornerstone + 2 supporting / miesiąc**. Kolejność wg priorytetu i zależności linkowych (najpierw cornerstone, potem supporting, które do niego linkują).

| Miesiąc | Cornerstone | Supporting |
|---|---|---|
| **Sierpień** | C2 psychologia-marketingu (węzeł centralny — pisać pierwszy) | S1 błędy poznawcze · S3 Cialdini |
| **Wrzesień** | C1 neuromarketing | S2 customer experience · S5 storytelling |
| **Październik** | C3 marketing-behawioralny · C4 psychologia-konsumenta | S4 lejek · S6 badania UX |
| *(zapas / listopad)* | — | S7 AI w marketingu · S8 employer branding |

**Uzasadnienie kolejności:** C2 (psychologia-marketingu) pierwszy, bo to centralny węzeł linkowania, do którego celuje najwięcej supportów. C1 (neuromarketing) drugi — największy wolumen. C3/C4 razem w październiku (mniejsze, szybkie, mamy już bazę na home).

---

# Zadania techniczne przed startem Fazy 2 (must-have)

1. **Zdjąć `noindex` z bloga** — obecnie `/blog/*` ma `noindex={true}` (blog „w przygotowaniu"). Przed publikacją cornerstone'ów: usunąć noindex z `/blog/index.astro` i `/blog/[slug].astro`.
2. **Dodać `/blog` do sitemapy** — obecnie `@astrojs/sitemap` wyklucza blog (`astro.config.mjs`). Włączyć blog do sitemapy.
3. **Szablon artykułu** — `/blog/[slug].astro` już istnieje (pobiera ze Strapi, sanitize-html, schema). Zweryfikować: `Article` + `Person`(autor) + `BreadcrumbList` + opcjonalnie `FAQPage` dla cornerstone'ów; spójny CTA do IRK.
4. **Strapi — pola artykułu** pod E-E-A-T: autor (imię, rola, bio, zdjęcie), data publikacji/aktualizacji, kategoria, featured image, czas czytania. (Część pól już jest w `content.config.ts`.)
5. **Linkowanie wewnętrzne** — po publikacji każdego cornerstone podpiąć linki z home i z odpowiednich supportów (mapa linków w briefach).
6. **Link IRK 2026/2027** — potwierdzić docelowy URL rekrutacji i podmienić w CTA (dotyczy też sekcji „Jak uczymy" w każdym artykule).

---

# KPI Fazy 2 (do końca października)

- 4 cornerstone + ≥6 supporting opublikowanych i zindeksowanych.
- Wyświetlenia: 845/90 dni → **3000+/90 dni**.
- Kliknięcia: 27/90 dni → **120+/90 dni**.
- ≥3 artykuły w top 30 dla swojego keyworda; ≥1 cornerstone w top 10.
- ≥3 artykuły cytowane w AI Overview (neuromarketing, psychologia marketingu).
- Wszystkie nowe URL-e w sitemapie, 0 błędów indeksacji w GSC.
