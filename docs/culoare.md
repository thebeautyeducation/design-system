# Culoare — referință text

Versiunea vizuală, cu mostre live: [`../brand-book.html#culoare`](../brand-book.html).
Acest fișier există ca să poți copia valori într-un brief, un email sau Canva, fără să deschizi browserul.

---

## Culorile oficiale

| Rol | Nume | HEX | RGB | Contrast pe alb |
|---|---|---|---|---|
| Primar / acțiune | **Magenta** | `#A71257` | 167 18 87 | 7.3:1 ✓ AAA |
| Voce editorială | **Prună** | `#6B2A4A` | 107 42 74 | 10.2:1 ✓ AAA |
| Fundal închis | **Negru-prună** | `#2A1520` | 42 21 32 | 17.1:1 ✓ AAA |
| Secundar, decorativ | **Mauve** | `#A98192` | 169 129 146 | 3.4:1 — decorativ |
| Accent | **Nude** | `#DCC4B4` | 220 196 180 | — fundal |
| Neutru | **Crem** | `#FAF4EF` | 250 244 239 | — fundal |
| Neutru | **Bej cald** | `#EDDDD3` | 237 221 211 | — fundal |
| Neutru | **Gri cald** | `#9E9086` | 158 144 134 | 3.1:1 — decorativ |
| Neutru | **Negru moale** | `#2C2521` | 44 37 33 | 15.2:1 ✓ AAA — text |
| Neutru | **Alb** | `#FFFFFF` | 255 255 255 | — |

Prună și negru-prună au intrat în paletă în octombrie 2026 (vezi [`decizii.md` § 16](decizii.md)). Celelalte vin din Mini Brand Book.

---

## Scări extinse

Paleta oficială are câteva culori de bază. Un site are nevoie de stări de hover, borduri, fundaluri soft — de aici scările. **Nuanțele de bază (★) nu se schimbă.**

### Magenta — acțiune
| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 50 | `#FBF0F5` | fundal soft, alerte — **doar pe gri sau crem**, pe alb nu se vede (1.1:1) |
| 100 | `#F5DCE7` | hover pe fundal soft; benzi și etichete **pe alb** |
| 200 | `#E9B6CC` | borduri de accent; **accentul editorial pe fundal închis** (9.8:1 pe negru-prună) |
| 300 | `#D98BAB` | decorativ |
| 400 | `#C55684` | progres secundar, cercul unui pas neînceput — `--tbe-action-muted` (4.2:1 pe alb) |
| **500 ★** | **`#A71257`** | **butoane, linkuri** — tot ce se apasă |
| 600 | `#8E0F4A` | hover buton primar |
| 700 | `#740C3C` | stare apăsată; suprafață de brand (card de puncte, banda copertei) |
| 800 | `#5A092F` | fundal foarte închis |
| 900 | `#3D0620` | fundal foarte închis |
| light | `#E36D9E` | **acțiune în dark mode** — 5.7:1 pe negru-prună |

### Prună — vocea editorială și fundalul închis
Rolul prunei în sistem: **tot ce e expresiv dar nu se dă click.** Cuvântul-accent din titluri, supratitluri, citate, atribuiri, roluri, etichete de tabel și de statistică, linii decorative. E din aceeași familie cu magenta, dar mai stinsă: se citește ca accent, nu ca link. Magenta rămâne curat al acțiunii.

Varianta aproape neagră (900) e **fundalul închis**: story-uri, coperți, footer, toast, tooltip, blocuri inverse. Negrul moale rămâne culoarea textului.

| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 50 | `#F3E7ED` | etichete editoriale, fundal de bloc editorial — `--tbe-editorial-soft` |
| 100 | `#E5D4DB` | — |
| 200 | `#D9C2CB` | **text secundar pe fundal închis** — 10.2:1 — `--tbe-text-muted-on-inverse` |
| 300 | `#C396AA` | linii decorative, bordura citatului — `--tbe-editorial-line` |
| 400–600 | `#A9748C` · `#8F5270` · `#7D3B5D` | decorativ |
| **700 ★** | **`#6B2A4A`** | **text editorial** — 10.2:1 pe alb, 9.4:1 pe crem — `--tbe-editorial` |
| 800 | `#4B1E36` | — |
| **900 ★** | **`#2A1520`** | **fundal închis** — `--tbe-surface-inverse` |
| 950 | `#211018` | fundalul paginii în dark mode |

**Unde se folosește**

| Element | Token |
|---|---|
| Cuvântul-accent din titluri (`h1 em` … `h4 em`) | `--tbe-editorial` |
| Supratitluri (`.tbe-kicker`) | `--tbe-editorial` |
| Roluri, subtitluri italice (`.tbe-role`) | `--tbe-editorial` |
| Atribuiri de citat (`<cite>`) | `--tbe-editorial` |
| Etichete de statistică | `--tbe-editorial` |
| Etichete editoriale („Fix It", „60 min") | text `--tbe-editorial` pe `--tbe-editorial-soft` (8.5:1) |
| Bordura citatului, linii decorative (`.tbe-rule`) | `--tbe-editorial-line` |
| Card editorial (`.tbe-card.is-editorial`, vechiul `.is-mauve`) | `--tbe-editorial-soft` |
| Bloc închis (`.tbe-section.is-inverse`, toast, tooltip) | `--tbe-surface-inverse` |
| Accent pe blocul închis | `--tbe-editorial-on-inverse` (Magenta 200) |
| Text secundar pe blocul închis | `--tbe-text-muted-on-inverse` (Prună 200) |

**Unde NU:** butoane, linkuri, stări de eroare, text lung, borduri de card, fundal de pagină în light mode.

### Mauve — decorativ
Până în octombrie 2026, mauve 700 era vocea editorială. Lângă magenta arăta gri și făcea etichetele să pară dezactivate, așa că rolul a trecut la prună. Mauve rămâne în paletă pentru blocuri de culoare și fundaluri de fotografie.

| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 50 | `#F7F1F3` | fundal decorativ |
| 200 | `#DFC8D1` | decorativ |
| 300 | `#C9A6B4` | decorativ |
| **400 ★** | **`#A98192`** | **decorativ, blocuri de culoare** (3.4:1 — nu text) |
| 700 | `#6E5361` | fostă voce editorială — nu se mai folosește pentru text nou |

### Nude
| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 50 | `#FBF6F2` | fundal foarte deschis |
| 100 | `#F4E9E1` | secțiuni decorative |
| **200 ★** | **`#DCC4B4`** | **blocuri decorative, bannere** |
| 300 | `#C9AA95` | borduri pe nude |
| 400 | `#B08D75` | accent cald |

### Neutre calde
| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 0 ★ | `#FFFFFF` | carduri, suprafețe |
| **50 ★** | `#FAF4EF` | **fundalul paginii (TBE)** |
| 100 | `#F2E9E2` | secțiune alternantă, input-uri |
| 200 ★ | `#EDDDD3` | fundal cald |
| 300 | `#DCCFC4` | **borduri implicite** |
| 400 | `#C0B1A5` | borduri accentuate |
| 500 ★ | `#9E9086` | **decorativ / iconițe — NU text mic**; pasul viitor dintr-un indicator (3.1:1) |
| 600 | `#6B5C51` | **text secundar** — 6.4:1 pe alb, 5.9:1 pe crem, 4.9:1 pe benzile bej și roz — `--tbe-text-muted` |
| 700 | `#5A4D44` | **text secundar mic pe fundal colorat** (roz, crem, gri) — 7.5:1 pe crem — `--tbe-text-muted-strong` |
| 800 | `#3D342E` | — |
| **900 ★** | `#2C2521` | **text principal** — 15.2:1 |
| 950 | `#1A1513` | primitivă; fundalurile închise sunt prună |

---

## Semnale

Derivate în aceeași temperatură caldă. Nu folosi verde/roșu standard de sistem — se bat cap în cap cu paleta.

| Semnal | HEX | Fundal soft | Contrast pe alb |
|---|---|---|---|
| Reușit | `#2E7D5B` | `#E4F1EA` | 5.0:1 ✓ |
| Atenție | `#9C5C00` | `#FBEEDC` | 5.3:1 ✓ |
| Eroare | `#B3261E` | `#FBE7E5` | 6.6:1 ✓ |
| Info | `#6B2A4A` | `#F3E7ED` | 10.2:1 ✓ |

## Niveluri de loialitate

Doar pentru badge-uri de status. Nu ca fundal de secțiune sau culoare de buton.

Fiecare nivel are trei valori, ca să poată fi viu **și** lizibil: glifa poartă culoarea saturată (e un simbol, nu are nevoie de 4.5:1), textul poartă lizibilitatea.

| Nivel | Glifă | Vivid (glifă) | Text | Fundal | Contrast text |
|---|---|---|---|---|---|
| Bronze | ● | `#C97F45` | `#8A5228` | `#F7EBE1` | 6.4:1 ✓ |
| Silver | ◈ | `#9BA5B5` | `#5D6675` | `#EEF1F5` | 5.9:1 ✓ |
| Gold | ★ | `#F0B72A` | `#8A6300` | `#FDF3D9` | 5.4:1 ✓ |
| Diamond | ◆ | `#3FB6E8` | `#1A6E92` | `#E2F3FB` | 5.8:1 ✓ |

Progresia e intenționată: Bronze și Silver rămân calme, Gold și Diamond strălucesc. Nivelul se recunoaște de la distanță — asta e tot rostul meritocrației. Culorile nivelurilor sunt aceleași în toate produsele TBE (Circle, Account, Hartă); nu le înlocui cu tonuri din paletă.

Varianta `.is-tier-solid` (gradient plin) e rezervată profilului, certificatelor și antetului de cont.

## Harta Coafezelor

| Nume | HEX | Rol |
|---|---|---|
| Verde Hartă | `#2E6F5E` | disponibil / verificat / pin pe hartă. **Nu** buton, **nu** titlu, **nu** fundal de secțiune. |
| Verde Hartă soft | `#E3EFEB` | fundal de badge |

### Canale de contact

Excepție documentată de la „magenta = acțiune". Se aplică **exclusiv** butoanelor care predau utilizatoarea unei platforme externe. Vezi [`decizii.md` § 14](decizii.md).

| Canal | HEX | Notă |
|---|---|---|
| Contact (verde) | `#15803D` | 5.0:1 cu text alb. Verdele mai deschis din produsul actual e la 3.3:1 — insuficient. |
| Facebook | `#1877F2` | culoare oficială a platformei |
| Instagram | gradient `#F09433 → #BC1888` | gradientul oficial |
| Google Maps | `#EA4335` | culoare oficială a platformei |

---

## Pe fundal închis

Fundalul închis e **negru-prună `#2A1520`**, nu negru moale: aceeași nuanță ca brandul, deci roz-ul și magenta nu mai par terne pe el.

| Element | Culoare | Contrast |
|---|---|---|
| Text principal | Crem `#FAF4EF` | 15.7:1 |
| Text secundar | Prună 200 `#D9C2CB` | 10.2:1 |
| Cuvânt-accent, supratitlu | Magenta 200 `#E9B6CC` | 9.8:1 |
| Buton | fundal Magenta 50 `#FBF0F5`, text Magenta 700 `#740C3C` | 10.2:1 |
| Element activ dintr-un meniu închis | pastilă Magenta 200, text negru-prună | 9.8:1 — se vede ca formă, nu doar ca grosime de text |

Magenta 500 **nu** se pune pe negru-prună (2.3:1) și nici pe Magenta 700 (1.5:1).

---

## Reguli de accesibilitate

**Pragurile WCAG AA:**
- Text normal (sub 24px, sau sub 18px bold): minim **4.5:1**
- Text mare (24px+, sau 18px+ bold): minim **3:1**
- Elemente de interfață și grafice (bara de progres, cercul unui pas, starea activă): minim **3:1**

**Capcanele paletei noastre:**

| Culoare | Contrast | Verdict |
|---|---|---|
| Gri cald `#9E9086` | 3.1:1 pe alb | ❌ **NU pentru text.** Borduri, iconițe decorative, blocuri de culoare. |
| Mauve `#A98192` | 3.4:1 pe alb | ❌ **NU pentru text mic.** OK pentru titluri mari peste 24px. |
| Magenta 50 `#FBF0F5` | 1.1:1 față de alb | ❌ **Nu ca bandă sau etichetă pe alb** — dispare. Pe alb folosește Magenta 100. |
| Nude 200 `#DCC4B4` | 3.9:1 cu textul secundar | ⚠️ Pe nude, textul (inclusiv cel secundar) e negru moale; pentru text mic pe fundaluri colorate există și `--tbe-text-muted-strong` (`#5A4D44`). |

Pentru text secundar folosește `#6B5C51` (`--tbe-text-muted`). Până în octombrie 2026 era `#7A6A5E`, care trecea pe alb și crem, dar pica pe benzile bej și roz (3.9–4.3:1). Arată aproape identic cu gri cald, dar se citește.

**Nu comunica nimic doar prin culoare.** Un badge roșu fără cuvântul „Blocat" nu spune nimic unui utilizator cu daltonism. Mereu culoare + text sau culoare + iconiță.

---

## Proporții

| | Neutre | Magenta | Prună + Mauve + Nude |
|---|---|---|---|
| **TBE** | 60% | 30% | 10% |
| **Harta Coafezelor** | 75% | 20% | 5% (verde) |

Regula se aplică pe **ansamblul unei pagini sau al unei campanii**, nu pe fiecare element. Dacă publici 10 postări, cel mult 3 sunt magenta plin.

---

## Logo

Simbolul și textul logo-ului au **mereu aceeași culoare**. Logo-ul nu e niciodată bicolor. Variante: color (magenta), negru, alb — vezi [`../brand-book.html#logo`](../brand-book.html).

---

## Perechi verificate — copiază-le liniștit

| Fundal | Text | Contrast |
|---|---|---|
| Alb `#FFFFFF` | Negru moale `#2C2521` | 15.2:1 |
| Crem `#FAF4EF` | Negru moale `#2C2521` | 14.5:1 |
| Crem `#FAF4EF` | Neutral 600 `#6B5C51` | 5.9:1 |
| Bej cald `#EDDDD3` | Neutral 600 `#6B5C51` | 4.9:1 |
| Crem `#FAF4EF` | Neutral 700 `#5A4D44` | 7.5:1 |
| Alb `#FFFFFF` | Magenta `#A71257` | 7.3:1 |
| Magenta `#A71257` | Alb `#FFFFFF` | 7.3:1 |
| Alb `#FFFFFF` | Prună `#6B2A4A` | 10.2:1 |
| Crem `#FAF4EF` | Prună `#6B2A4A` | 9.4:1 |
| Prună 50 `#F3E7ED` | Prună `#6B2A4A` | 8.5:1 |
| Nude `#DCC4B4` | Negru moale `#2C2521` | 9.6:1 |
| Negru-prună `#2A1520` | Crem `#FAF4EF` | 15.7:1 |
| Negru-prună `#2A1520` | Magenta 200 `#E9B6CC` | 9.8:1 |
| Negru-prună `#2A1520` | Prună 200 `#D9C2CB` | 10.2:1 |
| Magenta 700 `#740C3C` | Magenta 50 `#FBF0F5` | 10.2:1 |
| Prună 950 `#211018` | Magenta light `#E36D9E` | 6.0:1 |
