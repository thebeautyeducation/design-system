# Design System — The Beauty Education

**v2.0 · octombrie 2026** · Sursa unică de adevăr pentru tot ce se vede: site, bannere, materiale promoționale, aplicații.
Acoperă **The Beauty Education** și sub-brandul **Harta Coafezelor**. Ce s-a schimbat față de v1.0: [`docs/changelog.md`](docs/changelog.md).

---

## Deschide-l acum

Dă dublu-click pe `index.html`. Se deschide în browser, fără instalare, fără server, fără internet.

| Pagină | Ce conține |
|---|---|
| [`index.html`](index.html) | Intrarea. Prezentare generală + cum se instalează. |
| [`brand-book.html`](brand-book.html) | Identitatea: esență, voce, culoare, tipografie, logo, formă, fotografie, semnale, Harta Coafezelor, guvernanță. |
| [`ui.html`](ui.html) | Biblioteca de componente. 21 de secțiuni, fiecare cu exemplu viu și clasele de folosit: controale, carduri, navigație, overlays, iconițe, mișcare și componentele paginilor care vând. |
| [`bannere.html`](bannere.html) | Formate, zone sigure, 6 rețete de layout, variante cromatice, print, specificația **Revistei Coafezelor** (lunar, ~22 pagini), checklist. |

În antetul fiecărei pagini ai două comutatoare:
- **Temă**: light / dark. Vezi cum arată totul pe fundal închis.
- **Brand: TBE / Harta**: comută sub-brandul. Nici o clasă nu se schimbă, doar tokenii.

> **De reținut:** paginile de documentație stau pe **alb**, deliberat — o suprafață neutră pe care culorile brandului se judecă corect. Fundalul **site-ului TBE** rămâne **crem `#FAF4EF`** (`--tbe-bg`), pentru că pe crem cardurile albe ies în relief. Diferența e vizibilă în [`ui.html` § Carduri → „Pe fundalul real de brand"](ui.html).

> **Replici site-ul TBE în WordPress?** Nu lua valorile de umbră de aici. Site-ul **rescrie** umbrele
> (`--shadow-*`) în variante lungi și difuze, în `site.css`. Toate valorile finale — fonturi și umbre pe fiecare
> tip de buton și casetă, cu HEX, alpha și poziții, plus efectul „glass" al navbar-ului — sunt rezolvate în
> [**site → `HANDOFF-SPEC.md`**](https://github.com/thebeautyeducation/site/blob/main/HANDOFF-SPEC.md).
> Design system-ul rămâne sursa pentru culori, tipografie și componente; specul e traducerea lor în valorile de pe site.

---

## Structura folderului

```
design-system/
├── index.html              ← intrarea
├── brand-book.html         ← identitate vizuală
├── ui.html                 ← bibliotecă de componente
├── bannere.html            ← materiale promoționale
│
├── tokens/
│   ├── tokens.css          ← SURSA DE ADEVĂR (culori, fonturi, spațieri)
│   └── tokens.json         ← aceiași tokeni pentru Figma / tooling
│
├── components.css          ← toate componentele
├── site.css                ← doar „ambalajul" paginilor de documentație
├── ds.js                   ← doar comutatoarele și demo-urile din documentație
│
├── assets/
│   ├── fonturi/            ← Fraunces + Inter (.woff2, subseturi latin / latin-ext) + Source Code Pro + licența OFL
│   ├── logo/               ← logo-urile în .svg și .png (color / black / white)
│   ├── icons/              ← 59 de iconițe .svg (Lucide 1.5px + niveluri) + sprite.svg + licența ISC
│   └── foto/               ← fotografii reale pentru paginile de documentație
│
└── docs/
    ├── instalare.md        ← cum îl pui în WordPress, Shopify, Lovable
    ├── culoare.md          ← paleta + accesibilitate, în text
    ├── tipografie.md       ← scara tipografică, în text
    ├── decizii.md          ← ce am decis și de ce
    └── changelog.md        ← ce s-a schimbat de la o versiune la alta
```

---

## Cum îl folosești în cod

Două fișiere, în ordinea asta:

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components.css">
```

Apoi scrii HTML cu clasele din `ui.html`:

```html
<button class="tbe-btn is-primary is-lg">Intră în comunitate</button>
```

Iconițele vin tot din `components.css`:

```html
<span class="tbe-icon" data-icon="check" aria-hidden="true"></span>
```

Pentru Harta Coafezelor, un singur atribut pe `<body>`:

```html
<body data-brand="harta">
```

Instrucțiuni pas cu pas pentru fiecare platformă: [`docs/instalare.md`](docs/instalare.md).

---

## Convenția de denumire

| Formă | Înseamnă | Exemplu |
|---|---|---|
| `.tbe-nume` | O componentă | `.tbe-btn`, `.tbe-card` |
| `.is-nume` | Variantă sau stare | `.is-primary`, `.is-disabled` |
| `--c-*` | Token primitiv (paleta brută) — **nu-l folosi direct în UI** | `--c-magenta-500` |
| `--tbe-*` | Token semantic — **ăsta se folosește** | `--tbe-action`, `--tbe-text` |

De ce contează diferența: `--tbe-action` se schimbă singur în dark mode și pe sub-brand. `--c-magenta-500` rămâne mereu același HEX. Dacă scrii `--c-magenta-500` într-o componentă, aceea se va rupe în dark mode.

---

## Cele cinci reguli

1. **Nici un HEX în cod.** Orice culoare vine din `var(--tbe-…)`. Nu există în tokens → nu se folosește.
2. **Magenta înseamnă acțiune.** Cere click → magenta. Nu cere click → nu e magenta. Un singur buton primar per ecran. Singura excepție: butoanele de contact de pe Hartă, care poartă culoarea platformei externe către care duc.
3. **Prună înseamnă voce editorială.** Tot ce e expresiv dar nu se dă click: cuvântul-accent din titluri, supratitluri, citate, roluri, etichete, linii decorative. Prună (din aceeași familie cu magenta, dar mai stinsă) există tocmai ca magenta să rămână curat al acțiunii. Varianta aproape neagră, negru-prună `#2A1520`, e fundalul închis.
4. **60 / 30 / 10.** 60% neutre, 30% magenta, 10% prună, mauve și nude. Asta face diferența între premium și țipător.
5. **Contrast minim 4.5:1** pentru text normal, 3:1 pentru text mare. Mauve `#A98192` și gri cald `#9E9086` arată bine dar **nu se citesc** — pentru text folosește `--tbe-editorial` și `--tbe-text-muted`.

---

## Ce se schimbă la Harta Coafezelor

Aceleași fonturi, aceleași neutre, același magenta ca acțiune — ca să se vadă că e același ecosistem. Patru diferențe:

| | TBE | Harta Coafezelor |
|---|---|---|
| Fundal | Crem `#FAF4EF` | Alb `#FFFFFF` |
| Colțuri controale | 8px | 4px |
| Colțuri carduri | 20px | 12px |
| Proporții | 60/30/10 | 75/20/5 |
| Semnal propriu | — | Verde Hartă `#2E6F5E` (disponibil / verificat / pin) |

Badge-ul **„Recomandat de The Beauty Education"** rămâne magenta pe orice suprafață, în orice sub-brand. E marca de garanție a ecosistemului.

---

## Cum îl modifici

1. Schimbi în `tokens/tokens.css`.
2. Oglindești în `tokens/tokens.json`.
3. Deschizi `brand-book.html` și `ui.html` și verifici — **în ambele teme și pe ambele branduri**.
4. Dacă ceva s-a stricat, schimbarea era greșită.

Componentă nouă → se adaugă în `components.css` **și** în `ui.html`, în același commit. O componentă care există doar într-o pagină nu există.

---

## Auto-conținut

Folderul funcționează singur. Fonturile (`assets/fonturi/` — Fraunces pentru titluri, Inter pentru text, Source Code Pro pentru kickere) sunt încărcate cu `@font-face`, deci paginile arată corect chiar dacă fonturile nu sunt instalate în sistem — pe orice calculator, online sau offline. Logo-urile sunt în `assets/logo/`, în `.svg` și `.png`.

Ce a rămas în brand kit-ul principal, în afara acestui folder: fișierele sursă `.ai` și `.eps` ale logo-ului (pentru tipar), fonturile în `.ttf` pentru instalare pe calculator (`brand/fonturi/`), `Mini Brand Book.pdf` și dosarul de ecosistem.

## Notă tehnică — fișierele de logo

Cele 9 SVG-uri au pânză pătrată 2000×2000, inclusiv variantele „orizontal" și „vertical". Practic: dimensionează logo-ul după **lățime**, nu după înălțime, și ține cont că o parte din spațiul de respirație e deja inclusă în fișier.

---

> Uz intern TBE / Beautifier.
