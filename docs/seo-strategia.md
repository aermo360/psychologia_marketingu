# Strategia SEO — psychologiamarketingu.edu.pl

**Wersja:** 1.0
**Data:** 2026-06-19
**Horyzont:** 6 miesięcy (lipiec 2026 — grudzień 2026), z perspektywą 12-miesięczną
**Cel biznesowy:** wypełnić edycję 2026/2027 i zbudować markę programu jako rozpoznawalnego w polskim ekosystemie podyplomowych studiów marketingowych

---

## 1. Stan wyjściowy (baseline)

### 1.1 Metryki domeny

| Metryka | Wartość | Źródło |
|---|---|---|
| Wiek strony | < 90 dni od indeksacji | GSC |
| Domain Rating (Ahrefs) | **0** | Ahrefs |
| Backlinki / domeny linkujące | **0 / 0** | Ahrefs |
| Indeksowane strony | 5 (`/`, `/wykladowcy/`, `/faq/`, `/blog/`, `/polityka-prywatnosci/`) | Sitemap |
| Kliknięcia organiczne (90 dni) | 27 | GSC |
| Wyświetlenia organiczne (90 dni) | 845 | GSC |
| CTR średni | 3,20% | GSC |
| Pozycja średnia | 22,9 | GSC |
| Udział mobile w klikach | 37% (10/27) | GSC |

Domena startuje praktycznie od zera. To dobrze — każda decyzja techniczna i contentowa ma w tym momencie wysoki mnożnik. Stara domena `praktycznymarketing.edu.pl` jest również pusta (0 BL, 1 keyword), więc nie ma czego konsolidować.

### 1.2 Co już ranking — sleeper hits

Top 5 stron wg wyświetleń (90 dni):

| Strona | Imp | Klik | CTR | Pozycja |
|---|---|---|---|---|
| `/` | 686 | 17 | 2,48% | 26,8 |
| `/wykladowcy/` | 122 | 8 | **6,56%** | **5,9** |
| `/polityka-prywatnosci/` | 16 | 1 | 6,25% | 8,8 |
| `/faq/` | 21 | 0 | 0,00% | 8,3 (śr.) |
| `/blog/` | (pusty) | — | — | — |

**Wniosek:** `/wykladowcy/` to ukryty bohater — pozycja ~6 i CTR 6,5%, mimo że strona nie ma `H1` (techniczny brak). Z poprawkami może dawać 2-3× więcej kliknięć.

### 1.3 Realne zapytania, na których nas widać

Top 15 zapytań wg wyświetleń (90 dni, GSC):

| Zapytanie | Imp | Pozycja | Stan |
|---|---|---|---|
| psychologia marketingu studia | 65 | 27,6 | money-keyword, wymaga wybicia w top 10 |
| psychologia marketingu | 22 | 44,3 | money-keyword |
| pwr edu pl | 20 | 5,4 | nawigacyjny PWr |
| marketing studia wrocław | 10 | 27,0 | money-keyword local |
| psychologia perswazji | 10 | 28,1 | informacyjny, blog opportunity |
| psychologia reklamy studia | 10 | 30,5 | money-keyword |
| marketing behawioralny | 9 | 14,2 | **już bardzo blisko top 10** |
| employer branding wrocław | 8 | 42,4 | poza scope programu |
| nowe media studia wrocław | 8 | 23,1 | rozszerzenie |
| www pwr edu pl | 8 | 7,2 | nawigacyjny PWr |
| pwr.edu.pl | 7 | 4,4 | nawigacyjny PWr |
| politechnika wrocławska | 7 | 57,7 | nawigacyjny PWr |
| psychologia w marketingu | 5 | 1,2 | **już top 1 — rozszerzyć** |

### 1.4 Konkurencyjny krajobraz

SERP dla **"studia podyplomowe marketing"** (główny money-keyword, vol. 150/mc, CPC 100 zł):

| Pozycja | Konkurent | DR | Komentarz |
|---|---|---|---|
| 1 | SGH Warszawa | 74 | Strona hub kategorii "Marketing" |
| 2 | Kozminski | 73 | Konkretna strona programu |
| 3 | arturjablonski.com | 58 | **Blog osobisty!** Artykuł krytyczny o studiach podyplomowych |
| 5 | studia-online.pl | 59 | Marketplace |
| 6 | UE Wrocław | 85 | Konkurent geo |
| 7 | UKEN Kraków | 87 | „Social Media & AI Marketing" — sprytne pozycjonowanie |
| 8 | AGH Kraków | 78 | „Marketing internetowy" |
| 9 | Merito Warszawa | 72 | Content marketing & branding |
| 10 | CDV Poznań | 56 | „Nowy marketing" |

**Pwr nie ma żadnej strony w top 11 dla tego zapytania.** Pierwsza realna szansa — wyprzedzić własną uczelnię w wąskiej, dobrze stargetowanej niszy.

SERP dla **"psychologia marketingu"** (vol. 150/mc, ALL keywords KD=0 ale SERP zdominowany przez DR 50-79):
- Top 1 organic: psychologiawpraktyce.pl (artykuł, DR 50, 1 refdomain)
- AI Overview obecny — 10 sitelinków cytowanych. Szansa na **bycie cytowanym przez AI Overview** = ogromna ekspozycja
- Brand collision risk: `psychologiawmarketingu.pl` (DR 3, 33 refdomains) — bardzo podobna domena, niski DR ale niezły profil linków

SERP dla **"neuromarketing"** (vol. 500/mc, KD 0 — najtłustszy keyword w klastrze):
- AI Overview z 10 sitelinków
- Wikipedia DR 97 niewzruszalna (#2)
- Top organic z blogów firmowych (autopay.pl DR 77, harbingers.io, premium-consulting.pl DR 43)
- `vizja.pl/specjalizacja/psychologia-neuromarketing/` — pos 7, DR 66 — **bezpośredni konkurent uczelni**

### 1.5 Audyt techniczny / on-page — kluczowe znaleziska

| Problem | Wpływ | Pilność |
|---|---|---|
| Identyczny meta description na wszystkich podstronach | CTR w SERP, niski sygnał relewancji | **Wysoka** |
| `/wykladowcy/` nie ma `<h1>` | Niedosygnalizowany temat strony, mimo poz. 6 | **Wysoka** |
| Brak schema `Course` dla programu | Brak rich results, brak udziału w „Courses" w Google | Wysoka |
| Brak `FAQPage` schema na `/faq/` | Brak fragmentu rozwijanego w SERP | Wysoka |
| Brak `Person` schema dla wykładowców | Strona o najlepszej pozycji niewykorzystana | Średnia |
| Brak `BreadcrumbList` | Brak ścieżki nawigacyjnej w SERP | Średnia |
| Blog pusty (0 artykułów) | Brak długiego ogona, zerowa siła contentowa | **Krytyczna** |
| Wszystkie atrybuty `alt` na obrazach obecne | OK | — |
| Trailing slashes — rozwiązane | OK | — |
| Sitemap generowany dynamicznie | OK | — |
| Self-host fonty + Material Symbols subset | OK | — |
| H1 strony głównej to nazwa programu, nie keyword | Słabszy sygnał semantyczny | Średnia |

Strukturalnie strona jest zdrowa (Astro static, brak JS bloatu, sensowne `H2/H3` hierarchie, fonty self-host, GDPR cookie consent). Trzy realne problemy: pusty blog, brak strukturalnych danych, identyczne meta tagi.

---

## 2. Plan strategiczny — 6 miesięcy

Trzy fazy nakładające się na siebie. **Quick wins** dają mierzalny wzrost w 30 dni, **Content engine** napędza długi ogon, **Authority** odblokowuje pozycje konkurencyjne.

### Faza 1 — Quick wins (miesiąc 1, lipiec 2026)

Cele: zniwelować techniczne braki on-page, wyciągnąć maksimum z istniejących pozycji, postawić infrastrukturę pod content.

**1.1 On-page tech (1-2 tygodnie):**
- [ ] Dodać `<h1>` do `/wykladowcy/` — np. „Wykładowcy studiów podyplomowych Psychologia komunikacji marketingowej"
- [ ] Customowe meta description per strona (`/wykladowcy/`, `/faq/`, `/blog/`, `/`)
- [ ] `H1` strony głównej — zachować nazwę programu, ale dodać podtytuł `<p class="lead">` z keywordami: „studia podyplomowe", „marketing behawioralny", „Politechnika Wrocławska"
- [ ] Schema `Course` z polami: provider (PWr), name, description, courseMode, hasCourseInstance, educationalCredentialAwarded (świadectwo ukończenia)
- [ ] Schema `FAQPage` na `/faq/` (już mamy strukturę `<details>` w komponencie — wystarczy zmapować do JSON-LD)
- [ ] Schema `Person` per wykładowca na `/wykladowcy/`
- [ ] Schema `BreadcrumbList` na podstronach
- [ ] OG image dedykowany na stronę (obecnie używamy zewnętrznego Unsplash — własny brandowany OG da lepszą rozpoznawalność)

**1.2 Optymalizacja content na obecnych stronach (1 tydzień):**
- [ ] `/wykladowcy/`: dodać tekst wprowadzający (250-400 słów) o sile kadry, połączenie nauka+biznes, konkretni rzeczowi punkty (publikacje, projekty, doświadczenie). Cel: utrzymać poz. 6 i podnieść CTR z 6,5% → 10%.
- [ ] `/`: rozszerzyć opis programu o sekcję „Marketing behawioralny — co to znaczy w praktyce" (300-400 słów). Cel: pociągnąć pozycję 14 → top 10 dla „marketing behawioralny".
- [ ] `/faq/`: dodać kolejne pytania mapujące na zapytania z GSC: „Czy te studia to neuromarketing?", „Co odróżnia program PWr od podobnych w Polsce?", „Jakie kompetencje zyskuje absolwent?"

**1.3 Internal linking baseline (2 dni):**
- [ ] Z `/` dodać kontekstowe linki do `/wykladowcy/` (anchor: „nasi wykładowcy łączą naukę z biznesem") i przyszłe linki do top-3 cornerstone articles na blogu
- [ ] Na `/wykladowcy/` link wsteczny do `/` z anchor „program studiów podyplomowych" + link do `/faq/`

**1.4 GSC / GA setup verification (2 dni):**
- [ ] Sprawdzić, że IndexNow / Bing Webmaster nie jest podpięty — podpiąć
- [ ] Włączyć monitoring core web vitals w GSC (już powinno działać)
- [ ] Stworzyć w GSC alerty na spadki >20% wyświetleń
- [ ] GA4: wydzielić zdarzenie „kliknięcie CTA IRK" (już prowadzi do `irk.usos.pwr.edu.pl` — to **najważniejsza konwersja**)

**KPI fazy 1 (do końca lipca):**
- Wzrost CTR `/wykladowcy/` z 6,5% → 9-10%
- Klin „marketing behawioralny" wszedł w top 10 (z pozycji 14)
- Pierwsze rich results w SERP (Course / FAQ)

### Faza 2 — Content engine (miesiące 2-4, sierpień—październik 2026)

Cele: zbudować autorytet tematyczny przez treść cornerstone + długi ogon. Każdy artykuł celuje w konkretny keyword z GSC/Ahrefs.

**2.1 Cornerstone content (4 wielkie strony):**

Cornerstone = obszerny, autorytatywny artykuł (2500-4000 słów) z mapowaniem na klaster. Cel: top 5 w 6 miesięcy.

| Slug | Target keyword | Vol/mc | KD | Pomocnicze keywords |
|---|---|---|---|---|
| `/blog/psychologia-marketingu/` | psychologia marketingu | 150 | 0 (SERP DR 50-79) | psychologia w marketingu, psychologia reklamy |
| `/blog/neuromarketing/` | neuromarketing | 500 | 0 (SERP DR 43-97) | neuromarketing studia, neuromarketing w praktyce |
| `/blog/marketing-behawioralny/` | marketing behawioralny | 50 | niski | marketing behawioralny studia, behawioralna ekonomia w marketingu |
| `/blog/psychologia-konsumenta/` | psychologia konsumenta | 90 | 0 | psychologia zachowań konsumenckich (50/mc) |

**Struktura każdego cornerstone:**
- TL;DR/krótkie streszczenie (300 słów) — bezpośrednia odpowiedź na pytanie (passage rank → AI Overview)
- Definicja + kontekst akademicki
- 5-8 konkretnych mechanizmów / case studies (autorska wartość)
- Sekcja FAQ z question schema (target: „people also ask" boxes)
- Sekcja „Jak uczymy tego w programie" → CTA do strony głównej + IRK
- Wykres / infografika (UGC potential dla backlink building)
- Bibliografia/źródła (sygnał E-E-A-T)

**2.2 Supporting blog posts (8-12 mniejszych):**

Każdy 1200-1800 słów, długi ogon, link do cornerstone.

Priorytetowe (z GSC):
- Psychologia perswazji w marketingu — 6 zasad Cialdiniego w praktyce
- 7 błędów poznawczych, które wpływają na decyzje zakupowe
- Storytelling oparty na danych — case studies
- Co to jest customer experience design? (CX nie ma jeszcze trafficu, ale jest w `/`)
- Jak prowadzić badania UX — przewodnik dla początkujących
- Mailing behawioralny — segmentacja po decyzjach
- Marketing internetowy w 2026 — co zmieniła AI
- Employer branding w marketingu — case studies polskich firm

**2.3 Hub strony programu:**

Obecnie `/` to jedna strona-katalog. Rozważyć rozbicie:
- [ ] `/program/` — pełen opis programu, mapowane na „studia podyplomowe marketing", „studia podyplomowe psychologia marketingu" (vol. 150 + 70)
- [ ] `/marketing-behawioralny/` — strona ideologii / dlaczego program ma taki profil (cel: ranking dla money-keyword + sygnał semantyczny)
- [ ] `/rekrutacja/` — content na keyword „studia podyplomowe pwr" + szczegóły procesu (CTA do IRK)
- [ ] `/dla-kogo/` — landing na keyword „studia podyplomowe marketing dla menedżerów" / „dla specjalistów"

**2.4 Workflow contentowy (do ustalenia z PWr):**

- Częstotliwość: 1 cornerstone/mies + 2 supporting = **3 artykuły/mies.**
- Autorzy: wykładowcy programu (silny sygnał E-E-A-T — autor z dorobkiem akademickim)
- Każdy wykładowca = autor min. 2 artykułów (po jednym własna ekspertyza, drugi we współpracy)
- Cykl: brief (1 dzień) → draft (3 dni) → review akademicki (2 dni) → SEO copyedit (1 dzień) → publikacja
- Każdy artykuł — własny meta description, OG image z wizerunkiem autora, schema `Article` + `Person` autora

**KPI fazy 2 (do końca października):**
- 4 cornerstone opublikowane, każdy w top 30
- 8-12 supporting article opublikowanych
- Wzrost wyświetleń: 845/90dni → **3000+/90dni**
- Wzrost kliknięć: 27/90dni → **120+/90dni**
- Min. 3 artykuły cytowane w AI Overview dla swoich target keywords
- Min. 1 cornerstone w top 10 dla swojego target

### Faza 3 — Authority building (miesiące 4-6, październik—grudzień 2026)

Cele: zacząć pozyskiwać backlinki, ekspozycję poza własnym blogiem, autorytet poza PWr.

**3.1 Link building — taktyki:**

Priorytety wg easy → hard:

1. **Wewnętrzny ekosystem PWr** (najszybsze wins, jeszcze niewykorzystane):
   - Link z `pwr.edu.pl` (główna), `wz.pwr.edu.pl` (Wydział Zarządzania)
   - Link z `podyplomowe.pwr.edu.pl` (kataloga studiów podyplomowych PWr) — sprawdzić czy istnieje wpis
   - Link z `irk.usos.pwr.edu.pl` (z opisu studiów)
   - Link z profili wykładowców na pwr.edu.pl
   - **Czas:** miesiąc, koszt: 0 (negocjacje wewnętrzne)
   - **Wartość:** każdy z tych domen ma DR 65+

2. **Profile zewnętrzne wykładowców** (każdy wykładowca jako asset):
   - LinkedIn (każdy wykładowca podlinkowany do strony programu)
   - ORCID / ResearchGate / Google Scholar — w bio link do strony programu
   - Profile w branżowych mediach (Marketer+, NowyMarketing, Pulshr) — pozyskanie 1-2 wywiadów / publikacji per wykładowca

3. **Katalogi studiów / agregatory** (łatwe, masowe):
   - studia-online.pl
   - perspektywy.pl
   - otouczelnie.pl
   - studia.pl
   - studiapodyplomowe.info
   - **Wartość:** średnia (linki na ogół `nofollow` lub follow z niskim authority), ale **traffic referral z perspektywy rekrutacyjnej duży**

4. **Branżowe blogi i media** (Polski marketing content):
   - Marketer+ — artykuł autorski wykładowcy z linkiem do programu
   - NowyMarketing — wywiad / artykuł
   - Sprawny Marketing — gościnny post
   - Whitepress — sponsorowane artykuły (jeśli budżet)
   - **Cel:** 5-8 publikacji w 6 miesięcy

5. **PR / akcje wizerunkowe:**
   - Raport „Stan psychologii w polskim marketingu 2026" — autorski badawczy materiał (autorzy: kadra programu) → mass-mailing do redakcji branżowych → linkable asset wysokiej jakości
   - Konferencja / webinar partnerski z polską firmą badawczą
   - Patronaty na konferencjach branżowych (np. „I love marketing")

**3.2 Brand mentions + AI search (Brand Radar w Ahrefs):**

Nowa rzeczywistość SEO 2026 — pozycjonowanie jako odpowiedź w AI Overview, ChatGPT search, Perplexity. Sprawdzić w Ahrefs Brand Radar, czy program już jest wzmiankowany w odpowiedziach AI dla pytań takich jak „najlepsze studia podyplomowe z marketingu w Polsce", „gdzie studiować psychologię konsumenta w PL". Strategia:
- Każdy cornerstone artykuł napisany w stylu "answer-first" (TL;DR na początku)
- Konkretne odpowiedzi na pytania (passage-level optimization)
- Schema markup wszędzie, gdzie się da
- Eksperyment: stworzyć dedykowaną stronę FAQ-typu „Czym wyróżnia się ten program?" — wprost pod AI query

**3.3 Internal linking — drugi etap:**

Po publikacji content engine:
- Każdy cornerstone → minimum 5 supporting + linki kontekstowe do `/program/` i `/wykladowcy/`
- Każdy supporting → 1-2 linki do cornerstone + link do CTA
- Linki kontekstowe z anchor matching target keywords (bez over-optimization)

**KPI fazy 3 (do końca grudnia):**
- DR z 0 → 15-25 (realny cel dla edukacyjnej domeny w 6 miesięcy)
- 30+ refdomains
- Min. 2 wzmianki/cytowania programu w mediach branżowych (Marketer+, NowyMarketing)
- 1 large „raport" jako linkable asset (cel: 20+ refdomains z jednego materiału)
- Pierwsza strona w top 5 dla money-keyword („marketing behawioralny" lub „psychologia konsumenta")

---

## 3. KPI i raportowanie

### 3.1 KPI strategiczne (6 miesięcy)

| Metryka | Baseline | Target 6mc | Sprawdzenie |
|---|---|---|---|
| Organic clicks / 28 dni | ~9 | **80-120** | GSC |
| Organic impressions / 28 dni | ~250 | **2000-3500** | GSC |
| Średnia pozycja | 22,9 | **12-15** | GSC |
| CTR średni | 3,2% | **5-7%** | GSC |
| Top 10 keywordów | 1 (psychologia w marketingu) | **8-12** | Ahrefs |
| Top 3 keywordów | 0 | **2-3** | Ahrefs |
| Domain Rating | 0 | **15-25** | Ahrefs |
| Refdomains | 0 | **30+** | Ahrefs |
| Zindeksowane strony | 5 | **20-25** | GSC |
| Konwersje IRK click | (mierzyć od miesiąca 1) | ustalić baseline + 50% | GA4 |

### 3.2 KPI biznesowe (twarde)

- **Liczba zgłoszeń w IRK z organic**: kluczowy końcowy KPI. Mierzyć przez UTM-y na CTA, GA4 attribution. Cel: edycja 2026/2027 wypełniona, edycja 2027/2028 z lepszym pipelinem.
- **Czas do pierwszego zgłoszenia po wejściu na stronę** (proxy lojalności)
- **Top entry pages dla użytkowników klikających „Rekrutacja"** — co dokładnie konwertuje?

### 3.3 Rytm raportowania

- **Tygodniowo (wewnętrznie):** szybki check GSC top queries / pozycje target. 15 minut.
- **Miesięcznie:** pełen raport z osiągnięć vs. KPI fazy. Korekta planu contentowego.
- **Kwartalnie:** review strategii. Dostosowanie celu na bazie tego, co realnie działa.

---

## 4. Ryzyka i zagrożenia

| Ryzyko | Prawdopodobieństwo | Wpływ | Mitygacja |
|---|---|---|---|
| Wykładowcy nie chcą pisać artykułów | Średnie | Wysoki | Stworzyć skróconą formę „bullet brief + nagranie głosowe", ghostwriter robi szkic |
| Brand collision: psychologiawmarketingu.pl | Niskie | Średni | Brand search monitoring, ewentualnie wykupić wariant domeny |
| Spadek liczby kandydatów na studia podyplomowe (trend ogólnopolski) | Średnie | Wysoki | Dywersyfikacja: ruch na inne CTA (informator, newsletter, webinary) |
| Algorytm Google: następna „core update" zmienia SERP | Wysokie (zawsze) | Średni | Skupić się na E-E-A-T i jakości treści, nie na hack-ach |
| AI Overview kanibalizuje ruch | Wysokie | Wysoki | Strategia „answer-first" + struktura FAQ — być cytowanym, nie tylko klikniętym |
| Brak budżetu na kontent | — | Krytyczne | Wykorzystać kadrę jako autorów (in-house), ograniczyć zewnętrzny copywriting |

---

## 5. Decyzje do podjęcia (przed startem fazy 1)

1. **Kto jest właścicielem strategii po stronie programu?** (potrzebny single point of contact w PWr — najlepiej osoba która już prowadzi rekrutację)
2. **Budżet contentowy** — czy mamy budżet na 3 artykuły/mies. zewnętrznym copywriterem (~3-5k zł/mc), czy idziemy in-house z kadrą?
3. **Czy możemy uzyskać link z `pwr.edu.pl`?** — to najprostsze duże wzmocnienie DR
4. **Czy GA4 jest podpięte do wewnętrznych dashboardów PWr?** — żeby konwersje IRK były widoczne właściwym osobom
5. **OG image branding** — czy mamy do dyspozycji projektanta, czy generujemy „dobry-enough" template?

---

## 6. Załączniki — szczegóły, na które warto patrzeć

### 6.1 Klaster „psychologia + marketing"

Wszystkie target keywords zebrane (Ahrefs Keywords Explorer, GSC):

| Keyword | Vol/mc | KD (Ahrefs) | Obecna pozycja | Priorytet |
|---|---|---|---|---|
| neuromarketing | 500 | 0 (SERP DR 43-97) | — | **S** |
| studia podyplomowe marketing | 150 | 0 | 51,8 | **S** |
| psychologia marketingu | 150 | 0 | 44,3 | **S** |
| marketing studia wrocław | 100 | 0 | 27,0 | **S** |
| psychologia konsumenta | 90 | 0 | 38,0 | **A** |
| psychologia reklamy | 80 | 0 | 20,0 | **A** |
| psychologia marketingu studia | 70 | — | 27,6 | **A** |
| employer branding studia | 60 | — | 42,1 | B (poza scope) |
| psychologia reklamy studia | 60 | — | 30,5 | **A** |
| marketing behawioralny | 50 | niski | 14,2 | **A** (najbliżej top10) |
| psychologia zachowań konsumenckich | 50 | 0 | 76,0 | B |
| psychologia perswazji | 40 | 0 | 28,1 | **A** (blog cornerstone) |
| psychologia w marketingu | 40 | 0 | 1,2 | **utrzymać** |
| marketing internetowy studia wrocław | 40 | — | 37,7 | B |
| neuromarketing studia | 30 | — | — | **A** |

### 6.2 Konkurenci do długoterminowego monitoringu

- **Edukacyjni:** sgh.waw.pl, kozminski.edu.pl, podyplomowe.ue.wroc.pl (geo!), studiapodyplomowe.uken.krakow.pl, podyplomowe.agh.edu.pl, merito.pl, cdv.pl, vizja.pl
- **Treściowi:** arturjablonski.com (DR 58 blog osobisty), psychologiawpraktyce.pl (DR 50), psychologiawmarketingu.pl (brand collision risk), digitalk.pl, mfiles.pl
- **Marketplace'y rekrutacyjne:** studia-online.pl, otouczelnie.pl, perspektywy.pl

Rank tracker w Ahrefs warto skonfigurować dla 30 najważniejszych keywordów z kolumny „priorytet S/A".

### 6.3 Sprawdzone narzędzia / źródła używane

- Google Search Console (`sc-domain:psychologiamarketingu.edu.pl`) — raporty performance, indexing
- Ahrefs project_id `9470746` — Site Explorer, Keywords Explorer, SERP Overview, Rank Tracker (do skonfigurowania)
- GA4 (`G-KJ5FY3DR7Q`)
- Bing Webmaster Tools — do podpięcia
- Brand Radar (Ahrefs) — monitoring obecności w AI search (do skonfigurowania)
