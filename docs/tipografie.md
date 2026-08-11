# Tipografie — referință text

Versiunea vizuală, cu specimene: [`../brand-book.html#tipografie`](../brand-book.html).

---

## Cele trei familii

| Rol | Font | Weights | De ce |
|---|---|---|---|
| **Titluri** | Cormorant Garamond | 400 / 500 / 600 | Serif editorial, contrast mare. Dă senzația de premium și de revistă, nu de manual. |
| **Text & UI** | Jost | 300 / 400 / 500 / 600 | Sans geometric, curat, neutru. Nu concurează cu titlul. |
| **Kickere & etichete** | Source Code Pro | 400 / 500 | Monospace. Semnătura tipografică a brandului — supratitlurile majuscule. |

Toate sunt Google Fonts gratuite, licențiate OFL (inclusiv pentru uz comercial). Fișierele variable `.ttf` sunt în [`../../fonturi/`](../../fonturi/) — un singur fișier acoperă toate weight-urile.

---

## Scara

| Nivel | Font | Weight | Mărime | Line-height | Tracking |
|---|---|---|---|---|---|
| Display | Cormorant | 500 | 40 → 72px (fluid) | 1.08 | −0.02em |
| H1 | Cormorant | 500 | 32 → 48px (fluid) | 1.25 | −0.02em |
| H2 | Cormorant | 500 | 26 → 34px (fluid) | 1.25 | −0.02em |
| H3 | Cormorant | 600 | 22px | 1.25 | 0 |
| H4 | Cormorant | 600 | 18px | 1.25 | 0 |
| Lead | Jost | 300 | 18px | 1.8 | 0 |
| Body | Jost | 400 | **16px** | **1.65** | 0 |
| Small | Jost | 400 | 14px | 1.65 | 0 |
| Caption | Jost | 500 | 12px | 1.5 | 0 |
| Kicker | Source Code Pro | 500 | 12px | 1.5 | **0.14em**, MAJUSCULE |

**Fluid** înseamnă că mărimea se adaptează singură între mobil și desktop, cu `clamp()`. Nu trebuie să scrii media queries pentru tipografie.

---

## Reguli

### Text lung
- Minim **16px**, weight **400**, line-height **1.65**.
- Rânduri de maxim **~68 caractere** — clasa `.tbe-measure`.
- Rânduri mai lungi obosesc ochiul: la sfârșitul rândului nu mai găsești începutul următorului.

### Titluri
- Mereu Cormorant. Niciodată Jost pentru un titlu.
- `text-wrap: balance` e activat — titlurile se rup singure echilibrat.
- Titlurile de banner: rupe-le **manual**, la sens („Atelierul / de Bucle", nu „Atelierul de / Bucle").

### Kickere
- Unul singur per bloc de conținut.
- Mereu majuscule, mereu cu tracking 0.14em. Fără tracking arată ca o greșeală.
- Text scurt: categoria, nivelul, contextul. Nu propoziții.

### Cifre
- Folosește `.tbe-tabular` (`font-variant-numeric: tabular-nums`) oriunde cifrele se aliniază pe verticală: tabele, prețuri, statistici, procente.
- Fără asta, „1.111" și „8.888" au lățimi diferite și coloana arată strâmb.

---

## Ce nu se face

| ❌ | De ce |
|---|---|
| Cormorant sub 18px | Serif-ul cu contrast mare se sparge la mărimi mici. Devine ilizibil, mai ales pe ecran. |
| Text lung cu Source Code Pro | E monospace. Obosește după două rânduri. |
| Cormorant weight 700+ | Nu e în paletă. Arată greu și pierde eleganța. |
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

## În cod

```html
<span class="tbe-kicker">Nivel · Fundamentals</span>
<h1 class="tbe-h1">Atelierul de Bucle</h1>
<p class="tbe-lead">Tehnica completă a buclei.</p>
<p>Text normal, care moștenește Jost 400 / 16px / 1.65 din body.</p>
<p class="tbe-small tbe-muted">Detaliu secundar.</p>
```

Elementele `<h1>`–`<h4>` primesc stilurile automat — nu trebuie să adaugi clasa dacă folosești tagul semantic corect. Clasele `.tbe-h1`–`.tbe-h4` există pentru cazurile în care ai nevoie de aspectul unui H2 pe un element care semantic e altceva.
