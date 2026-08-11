# Culoare — referință text

Versiunea vizuală, cu mostre live: [`../brand-book.html#culoare`](../brand-book.html).
Acest fișier există ca să poți copia valori într-un brief, un email sau Canva, fără să deschizi browserul.

---

## Culorile oficiale (din Mini Brand Book)

| Rol | Nume | HEX | RGB | Contrast pe alb |
|---|---|---|---|---|
| Primar / acțiune | **Magenta** | `#A71257` | 167 18 87 | 7.3:1 ✓ AAA |
| Secundar | **Mauve** | `#A98192` | 169 129 146 | 3.4:1 — decorativ |
| Accent | **Nude** | `#DCC4B4` | 220 196 180 | — fundal |
| Neutru | **Crem** | `#FAF4EF` | 250 244 239 | — fundal |
| Neutru | **Bej cald** | `#EDDDD3` | 237 221 211 | — fundal |
| Neutru | **Gri cald** | `#9E9086` | 158 144 134 | 3.1:1 — decorativ |
| Neutru | **Negru moale** | `#2C2521` | 44 37 33 | 15.2:1 ✓ AAA |
| Neutru | **Alb** | `#FFFFFF` | 255 255 255 | — |

---

## Scări extinse

Paleta oficială are 3 culori de brand. Un site are nevoie de stări de hover, borduri, fundaluri soft — de aici scările. **Nuanțele de bază (★) nu s-au schimbat.**

### Magenta
| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 50 | `#FBF0F5` | fundal soft, alerte |
| 100 | `#F5DCE7` | hover pe fundal soft |
| 200 | `#E9B6CC` | borduri de accent |
| 300 | `#D98BAB` | decorativ |
| 400 | `#C55684` | decorativ, gradient |
| **500 ★** | **`#A71257`** | **butoane, linkuri, kickere** |
| 600 | `#8E0F4A` | hover buton primar |
| 700 | `#740C3C` | stare apăsată |
| 800 | `#5A092F` | fundal foarte închis |
| 900 | `#3D0620` | fundal foarte închis |
| light | `#E36D9E` | **dark mode** — 6.0:1 pe fundal închis |

### Mauve
| Treaptă | HEX | Se folosește pentru |
|---|---|---|
| 50 | `#F7F1F3` | fundal soft |
| 200 | `#DFC8D1` | borduri |
| 300 | `#C9A6B4` | decorativ, dark mode |
| **400 ★** | **`#A98192`** | **decorativ, blocuri de culoare** |
| 700 | `#6E5361` | **text mauve accesibil** — 6.9:1 |

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
| 500 ★ | `#9E9086` | **decorativ / iconițe — NU text** |
| 600 | `#7A6A5E` | **text secundar** — 4.8:1 pe crem |
| 700 | `#5A4D44` | text pe fundal deschis |
| 800 | `#3D342E` | fundal închis |
| **900 ★** | `#2C2521` | **text principal** — 15.2:1 |
| 950 | `#1A1513` | fundalul paginii în dark mode |

---

## Semnale

Derivate în aceeași temperatură caldă. Nu folosi verde/roșu standard de sistem — se bat cap în cap cu paleta.

| Semnal | HEX | Fundal soft | Contrast pe alb |
|---|---|---|---|
| Reușit | `#2E7D5B` | `#E4F1EA` | 5.0:1 ✓ |
| Atenție | `#9C5C00` | `#FBEEDC` | 5.3:1 ✓ |
| Eroare | `#B3261E` | `#FBE7E5` | 6.6:1 ✓ |
| Info | `#6E5361` | `#F1E9EC` | 6.9:1 ✓ |

## Niveluri de loialitate

Doar pentru badge-uri de status. Nu ca fundal de secțiune sau culoare de buton.

| Nivel | HEX |
|---|---|
| Bronze | `#A9714B` |
| Silver | `#8C8C94` |
| Gold | `#B58A2E` |
| Diamond | `#6E8FA6` |

## Harta Coafezelor

| Nume | HEX | Rol |
|---|---|---|
| Verde Hartă | `#2E6F5E` | disponibil / verificat / pin pe hartă. **Nu** buton, **nu** titlu, **nu** fundal de secțiune. |
| Verde Hartă soft | `#E3EFEB` | fundal de badge |

---

## Reguli de accesibilitate

**Pragurile WCAG AA:**
- Text normal (sub 24px, sau sub 18px bold): minim **4.5:1**
- Text mare (24px+, sau 18px+ bold): minim **3:1**
- Elemente de interfață și grafice: minim **3:1**

**Cele două capcane ale paletei noastre:**

| Culoare | Contrast pe alb | Verdict |
|---|---|---|
| Gri cald `#9E9086` | 3.1:1 | ❌ **NU pentru text.** Borduri, iconițe decorative, blocuri de culoare. |
| Mauve `#A98192` | 3.4:1 | ❌ **NU pentru text mic.** OK pentru titluri mari peste 24px. |

Pentru text secundar folosește `#7A6A5E` (`--tbe-text-muted`). Arată aproape identic cu gri cald, dar se citește.

**Nu comunica nimic doar prin culoare.** Un badge roșu fără cuvântul „Blocat" nu spune nimic unui utilizator cu daltonism. Mereu culoare + text sau culoare + iconiță.

---

## Proporții

| | Neutre | Magenta | Mauve + Nude |
|---|---|---|---|
| **TBE** | 60% | 30% | 10% |
| **Harta Coafezelor** | 75% | 20% | 5% (verde) |

Regula se aplică pe **ansamblul unei pagini sau al unei campanii**, nu pe fiecare element. Dacă publici 10 postări, cel mult 3 sunt magenta plin.

---

## Perechi verificate — copiază-le liniștit

| Fundal | Text | Contrast |
|---|---|---|
| Alb `#FFFFFF` | Negru moale `#2C2521` | 15.2:1 |
| Crem `#FAF4EF` | Negru moale `#2C2521` | 14.5:1 |
| Crem `#FAF4EF` | Neutral 600 `#7A6A5E` | 4.8:1 |
| Alb `#FFFFFF` | Magenta `#A71257` | 7.3:1 |
| Magenta `#A71257` | Alb `#FFFFFF` | 7.3:1 |
| Nude `#DCC4B4` | Negru moale `#2C2521` | 9.6:1 |
| Negru moale `#2C2521` | Crem `#FAF4EF` | 14.5:1 |
| Neutral 950 `#1A1513` | Magenta light `#E36D9E` | 6.0:1 |
