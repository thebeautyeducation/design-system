# Tipografie — referință text

Versiunea vizuală, cu specimene: [`../brand-book.html#tipografie`](../brand-book.html).

---

## Cele trei familii

| Rol | Font | Grosimi folosite | De ce |
|---|---|---|---|
| **Titluri** | Fraunces | 300 / 400 / 500 / 600 (+ italic) | Serif editorial cu ax optic: la mărimi mari devine fin și contrastat, ca o revistă; la mărimi mici se îngroașă singur ca să rămână lizibil. Italicul e foarte expresiv — e cuvântul accentuat din titluri. |
| **Text & UI** | Inter | 300 / 400 / 500 / 600 / 700 (+ 800 / 900 pentru accente) | Sans neutru, desenat pentru ecran. Foarte lizibil pe telefon, cifre clare, bold real. Nu concurează cu titlul. |
| **Kickere & etichete** | Source Code Pro | 400 / 500 | Monospace. Semnătura tipografică a brandului — supratitlurile majuscule. |

Toate sunt Google Fonts gratuite, licențiate OFL (inclusiv pentru uz comercial). Ambele familii noi au **toate grosimile 100–900**, în roman și italic.

**Unde sunt fișierele:**
- pentru web: [`../assets/fonturi/`](../assets/fonturi/) — format `.woff2`, împărțit în subseturi `latin` și `latin-ext` (vezi „Încărcare" mai jos);
- pentru instalare pe calculator (Canva desktop, Word, Figma, print): [`../../fonturi/`](../../fonturi/) — `.ttf` variabile.

> Până în octombrie 2026 sistemul a folosit Cormorant Garamond + Jost. De ce s-a schimbat: [`decizii.md` § 15](decizii.md).

---

## Scara

| Nivel | Font | Grosime | Mărime | Line-height | Tracking |
|---|---|---|---|---|---|
| Display | Fraunces | 500 | 40 → 72px (fluid) | 1.04 | −0.03em |
| H1 | Fraunces | 500 | 32 → 48px (fluid) | 1.12 | −0.025em |
| H2 | Fraunces | 500 | 26 → 34px (fluid) | 1.18 | −0.02em |
| H3 | Fraunces | 600 | 22px | 1.25 | −0.01em |
| H4 | Fraunces | 600 | 18px | 1.25 | −0.005em |
| Lead | Inter | 400 | 18px | 1.65 | 0 |
| Body | Inter | 400 | **16px** | **1.65** | 0 |
| Small | Inter | 400 | 14px | 1.65 | 0 |
| Caption | Inter | 500 | 12px | 1.5 | 0.01em |
| Butoane | Inter | 500 (600 pe primar) | 14px (12 / 16 pe `.is-sm` / `.is-lg`) | 1 | 0 |
| Kicker | Source Code Pro | 500 | 12px | 1.5 | **0.14em**, MAJUSCULE |

**Tracking pe mărimi** (v2.0): cu cât titlul e mai mare, cu atât literele se strâng; textul mic se lărgește puțin. O singură valoare pentru toate mărimile e greșită undeva. Tokenii: `--ls-display`, `--ls-h1` … `--ls-h4`, `--ls-normal`, `--ls-small`, `--ls-wide` (doar majuscule), `--ls-kicker`.

**Fluid** înseamnă că mărimea se adaptează singură între mobil și desktop, cu `clamp()`. Nu trebuie să scrii media queries pentru tipografie.

### Scara aplicațiilor (Account)

Site-ul folosește scara fluidă de mai sus. Aplicațiile (Contul meu) trăiesc pe telefon, unde lățimea nu variază mult, dar **mărimea de text aleasă de membru** variază. De aceea au o scară fixă, în rem, care urmează setarea telefonului (inclusiv mărimea textului din iPhone):

| Treaptă | rem | px (la 16) | Unde |
|---|---|---|---|
| `--t-2xs` | 0.6875 | 11 | etichete foarte mici |
| `--t-xs` | 0.75 | 12 | caption, pastile de stare |
| `--t-sm` | 0.8125 | 13 | text secundar |
| `--t-base` | 0.875 | 14 | rânduri de listă |
| `--t-md` | 0.9375 | 15 | butoane, titluri de rând |
| `--t-lg` | 1 | 16 | câmpuri (minimul ca iPhone-ul să nu mărească pagina) |
| `--t-xl` | 1.125 | 18 | titluri mici |
| `--t-2xl` | 1.375 | 22 | titlurile secțiunilor |
| `--t-3xl` | 1.75 | 28 | titluri mari |
| `--t-4xl` | 2.125 | 34 | titlul paginii |

Cifrele mari (30–56px) au mărimea lor exactă, în rem. Tracking-ul urmează aceleași reguli ca mai sus. Bara de jos a aplicației rămâne în px (numele filelor trebuie să încapă).

---

## Grosimi — tokeni

| Token | Valoare | Unde |
|---|---|---|
| `--fw-light` | 300 | doar titluri foarte mari pe bannere; nu pe text, se rupe pe ecran |
| `--fw-regular` | 400 | text, italicul accentuat din titluri |
| `--fw-medium` | 500 | titluri H1–Display, butoane, etichete |
| `--fw-semibold` | 600 | H3, H4, titluri de card |
| `--fw-bold` | 700 | **bold în text** (`<b>`, `<strong>`), accente, prețuri pe bannere |
| `--fw-extrabold` | 800 | titluri de banner foarte scurte, cifre mari pe social |
| `--fw-black` | 900 | doar în bannere, 1–3 cuvinte, niciodată în text curent |

`<b>` și `<strong>` primesc automat `--fw-bold` (700).

---

## Reguli

### Text lung
- Minim **16px**, grosime **400**, line-height **1.65**.
- Rânduri de maxim **~68 caractere** — clasa `.tbe-measure`.
- Rânduri mai lungi obosesc ochiul: la sfârșitul rândului nu mai găsești începutul următorului.

### Titluri
- Mereu Fraunces. Niciodată Inter pentru un titlu de secțiune.
- Cuvântul accentuat dintr-un titlu: `<em>` → Fraunces **italic**, grosime 400 (automat). Pe site-ul TBE e și magenta.
- `text-wrap: balance` e activat: titlurile se rup singure echilibrat. Paragrafele au `text-wrap: pretty`: fără un cuvânt singur pe ultimul rând.
- Titlurile de banner: rupe-le **manual**, la sens („Color / Mastery", nu „Color Mas- / tery").

### Kickere
- Doar unde spun ceva: categoria, numărul rubricii, pasul, nivelul. Nu ca decor deasupra fiecărui titlu.
- Unul singur per bloc de conținut.
- Mereu majuscule, mereu cu tracking 0.14em. Fără tracking arată ca o greșeală.
- Text scurt: categoria, nivelul, contextul. Nu propoziții.

### Cifre
- **Cifrele sunt aliniate pe rând peste tot** (`lining-nums`, setat pe `body` prin `--num-default`). Asta a fost problema principală cu Cormorant: cifrele lui „săreau" sub rând.
- Folosește `.tbe-tabular` (`--num-tabular`: cifre aliniate **și** de lățime egală) oriunde cifrele se aliniază pe verticală: tabele, prețuri, statistici, procente. Componentele `.tbe-stat-value`, `.tbe-score-value` și `.tbe-table .is-num` o au deja.
- Fără lățime egală, „1.111" și „8.888" au lățimi diferite și coloana arată strâmb.
- **Fraunces nu are cifre de lățime egală** (fontul complet are doar `case`, `liga`, `ss01`), deci `.tbe-tabular` nu face nimic pe el. Cifrele care se schimbă sub ochi (scorul pe care îl notezi, numărătoarea care se actualizează, prețul care se recalculează) se scriu cu **Inter** + `.tbe-tabular`. Cifrele mari care stau pe loc (statistici, prețul unui plan) pot rămâne în Fraunces.

---

## Ce nu se face

| ❌ | De ce |
|---|---|
| Fraunces sub 14px | Se citește, dar la mărimi mici Inter e mai clar. Fraunces e pentru titluri și citate. |
| Text lung cu Source Code Pro | E monospace. Obosește după două rânduri. |
| Grosime 800–900 în text curent | Strigă. Sunt pentru bannere, pe 1–3 cuvinte. |
| Bold pe text întreg | Bold-ul marchează *un* fragment. Un paragraf bold nu mai evidențiază nimic. |
| Text lung cu MAJUSCULE | Se citește cu ~15% mai lent. Majusculele sunt pentru kickere de 3–5 cuvinte. |
| Peste 3 mărimi într-un banner | Ierarhia dispare când totul strigă. |
| Alt font „pentru variație" | Trei familii sunt deja suficiente. |
| Justificat (`text-align: justify`) | În română, cu cuvinte lungi, creează „râuri" albe urâte. |

---

## Diacritice

Toate trei fonturile au diacriticele românești complete. Folosește:

- **ă î â ș ț** — cu **virguliță** (U+0219, U+021B)
- **NU** ş ţ — cu **sedilă** (caractere turcești, U+015F, U+0163)

Diferența se vede: `ș` are o virgulă dedesubt, `ş` are un cârlig lipit de literă. Windows cu tastatură „Romanian (Programmers)" scrie corect. Dacă textul vine din altă sursă, verifică.

---

## Încărcare (web)

Fiecare familie e împărțită în două fișiere `.woff2`:

| Subset | Ce conține | Când se descarcă |
|---|---|---|
| `latin` | literele de bază, inclusiv â, î, cifre, punctuație | mereu |
| `latin-ext` | ă, ș, ț și restul diacriticelor europene | doar dacă pagina le conține (în română: practic mereu) |

Browserul alege singur, prin `unicode-range`. Un text românesc descarcă ~330 KB pentru toate grosimile, roman + italic (față de ~1,3 MB cu fonturile vechi).

Pe paginile cu text deasupra pliului, preîncarcă cele patru fișiere roman:

```html
<link rel="preload" href="assets/fonturi/Inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonturi/Inter-latin-ext.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonturi/Fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonturi/Fraunces-latin-ext.woff2" as="font" type="font/woff2" crossorigin>
```

---

## În cod

```html
<span class="tbe-kicker">Curs online · Colorimetrie</span>
<h1 class="tbe-h1">De la „ghicesc culoarea" la <em>controlez rezultatul</em>.</h1>
<p class="tbe-lead">Primul curs de colorimetrie al comunității.</p>
<p>Text normal, care moștenește Inter 400 / 16px / 1.65 din body. <strong>Un fragment bold.</strong></p>
<p class="tbe-small tbe-muted">Detaliu secundar.</p>
<span class="tbe-stat-value">3.618</span>
```

Elementele `<h1>`–`<h4>` primesc stilurile automat — nu trebuie să adaugi clasa dacă folosești tagul semantic corect. Clasele `.tbe-h1`–`.tbe-h4` există pentru cazurile în care ai nevoie de aspectul unui H2 pe un element care semantic e altceva.
