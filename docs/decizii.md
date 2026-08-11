# Decizii — ce am adăugat peste brand book și de ce

Mini Brand Book-ul definește 3 culori de brand, 5 neutre, 3 fonturi și o scară tipografică. Un design system funcțional are nevoie de mai mult: stări de hover, dark mode, semnale, sub-brand. Mai jos e fiecare decizie pe care am luat-o, ca să știi ce e oficial și ce e adăugat — și ca să poți schimba ușor ce nu-ți place.

**Nimic din brand book nu s-a schimbat.** Toate culorile marcate cu ★ sunt exact cele validate.

---

## 1 · Scări de culoare 50–900

**Ce am făcut:** am generat trepte în jurul fiecărei culori de brand.

**De ce:** un buton are nevoie de o culoare de hover și una de apăsat. Un fundal soft de alertă are nevoie de o nuanță foarte deschisă. Fără scări, fiecare dezvoltator inventează propriile nuanțe și în șase luni ai 14 magenta-uri diferite în cod.

**Cum se schimbă:** treptele sunt derivate din culoarea de bază. Dacă vrei alt hover, schimbi `--c-magenta-600` în `tokens.css`.

---

## 2 · Magenta Light `#E36D9E` pentru dark mode

**Problema:** magenta-ul oficial `#A71257` are 1.3:1 contrast pe fundal închis. Nu se vede. Pur și simplu.

**Soluția:** o variantă mai deschisă a aceleiași culori, folosită **exclusiv** în dark mode. Contrast 6.0:1 pe `#1A1513`.

**Alternativa, dacă nu-ți place:** renunți la dark mode complet. E o opțiune validă — un site editorial premium nu e obligat să aibă temă închisă. Dacă alegi asta, ștergi secțiunea 07 din `tokens.css`.

---

## 3 · Text secundar `#7A6A5E` în loc de gri cald

**Problema:** gri cald `#9E9086` are 3.1:1 contrast pe alb. Sub pragul de 4.5:1 pentru text normal. Textul secundar scris cu el nu se citește de o parte din utilizatori — și pe telefon, în lumină de zi, de nimeni.

**Soluția:** o treaptă mai închisă din aceeași familie caldă, `#7A6A5E`, la 4.8:1. Vizual e aproape identică; funcțional e diferența dintre lizibil și nu.

**Gri cald rămâne oficial** — doar că îl folosim pentru ce e făcut: borduri, iconițe decorative, blocuri de culoare.

Același raționament pentru mauve: `#A98192` rămâne culoarea de brand, dar pentru text mauve există `#6E5361`.

---

## 4 · Culori de semnal

**Ce am făcut:** am definit succes / atenție / eroare / info în temperatura caldă a paletei.

**De ce:** un site cu abonamente, teste și niveluri blocate are nevoie să comunice stări. Verdele și roșul standard de browser (`#008000`, `#FF0000`) sunt reci și saturate — lângă crem și nude arată ca o eroare de design.

**Info-ul e mauve adânc** `#6E5361`, ca să rămână în familie.

---

## 5 · Verde Hartă `#2E6F5E` — singura culoare nouă din sistem

**Ce am făcut:** am adăugat o culoare pentru Harta Coafezelor.

**De ce:** o hartă are nevoie de un semnal de disponibilitate care să nu se confunde cu acțiunea. Dacă „Disponibil azi" e magenta și butonul „Contactează" e tot magenta, utilizatorul nu mai știe unde să apese. Verdele e convenția universală pentru disponibil/verificat — o încălcăm doar dacă avem un motiv bun, și nu avem.

**Limita strictă:** verde **nu** e culoare de brand. Nu se folosește pentru butoane, titluri sau fundaluri de secțiune. Doar pentru: disponibil, verificat, pin pe hartă.

**Dacă nu-ți place:** șterge `--c-harta-*` din `tokens.css` și folosește semnalul de succes `#2E7D5B` în loc. Sunt aproape identice — l-am separat doar ca să poți schimba unul fără celălalt.

---

## 6 · Harta Coafezelor = același sistem, alți tokeni

**Ce am făcut:** nu am creat un al doilea design system. Harta folosește exact aceleași clase CSS; se schimbă doar valorile din spate, printr-un atribut pe `<body>`.

**De ce:** două sisteme separate divergează. Într-un an, butonul din Hartă arată altfel decât cel din TBE și nimeni nu-și amintește de ce. Un sistem cu variații păstrează ecosistemul coerent și îți dă jumătate din muncă de întreținut.

**Cele patru diferențe** (fundal alb, colțuri mai strânse, proporții 75/20/5, verde de disponibilitate) sunt suficiente ca Harta să se simtă ca o unealtă, nu ca o revistă — fără să pară alt brand.

**Badge-ul „Recomandat de TBE" rămâne magenta peste tot.** E marca de garanție a ecosistemului. Recolorat, nu mai înseamnă nimic.

---

## 7 · Sistem de spațiere pe bază de 4px

**Ce am făcut:** 10 trepte fixe, de la 4px la 128px.

**De ce:** fără scară, ajungi cu `padding: 17px` într-un loc și `19px` în altul, și pagina arată „aproape aliniat" fără să știi de ce. Cu scară, orice compoziție se așază singură.

**Regula:** dacă 24px e prea mic și 32px prea mare, problema nu e scara — e altceva în layout.

---

## 8 · Raze de colț diferite per brand

**TBE:** controale 8px, carduri 20px. Generos, moale, editorial.
**Harta:** controale 4px, carduri 12px. Strâns, dens, de aplicație.

**De ce:** raza de colț e unul dintre cele mai puternice semnale de „ce fel de produs e ăsta". Colțurile rotunde generos citesc ca „lifestyle". Colțurile strânse citesc ca „unealtă". Harta e o unealtă.

---

## 9 · Tipografie fluidă

**Ce am făcut:** titlurile folosesc `clamp()` — cresc singure între mobil și desktop.

**De ce:** un H1 de 48px pe telefon ocupă tot ecranul. Un H1 de 32px pe desktop arată timid. Fără fluid, ai nevoie de media queries pentru fiecare nivel; cu fluid, scrii o singură valoare.

**Mărimile din brand book sunt maximele** — pe desktop vezi exact 48px pentru H1, ca în specificație.

---

## 10 · Ținte de atingere 44×44px

**Ce am făcut:** toate butoanele și controalele au minim 44px înălțime.

**De ce:** e pragul recomandat pentru degete pe ecran tactil. Publicul TBE e majoritar pe telefon. Un buton de 32px pe mobil se ratează.

---

## 11 · Umbre calde

**Ce am făcut:** toate umbrele folosesc `rgba(44,37,33,…)` — negru moale — nu negru pur.

**De ce:** o umbră neagră pură pe fundal crem arată murdară, cenușie. Umbra caldă se topește în paletă.

---

---

## ⚠ Problemă de rezolvat: fișierele de logo nu se potrivesc cu paleta

Am descoperit-o inspectând fișierele `.svg` din `brand/logo/`. Nu am schimbat nimic — decizia e a ta.

### 1 · Culorile din logo diferă de paleta oficială

| Element | Culoare în fișierul SVG | Culoare în brand book | Diferență |
|---|---|---|---|
| Logo color | `#A62660` | Magenta `#A71257` | Mai deschis, ușor mai puțin saturat |
| Logo negru | `#191919` | Negru moale `#2C2521` | **Rece** vs. cald — se vede |
| Logo alb | `#F2F2F2` | Alb `#FFFFFF` | Gri foarte deschis |

Izolat, nici una nu sare în ochi. Problema apare când logo-ul stă lângă un buton magenta pe același ecran: două magenta-uri aproape identice citesc ca o greșeală de tipar, nu ca o intenție. La fel, negrul rece al logo-ului lângă textul cald `#2C2521` face logo-ul să pară „lipit din altă parte".

**Trei opțiuni:**

1. **Reexportă logo-urile cu culorile din paletă** (recomandat). Se schimbă doar valorile de fill în fișierele sursă `.ai`. Efort mic, rezolvă definitiv problema. Toate materialele vechi tipărite rămân valabile — diferența e sub pragul la care cineva observă retroactiv.
2. **Schimbă paleta ca să se potrivească logo-ului** — magenta devine `#A62660`. Contrast pe alb: 6.9:1, tot AA. Dezavantaj: contrazice Mini Brand Book-ul validat, deci ar trebui actualizat și acela.
3. **Lasă așa și acceptă discrepanța.** Viabilă dacă logo-ul nu apare niciodată direct lângă suprafețe magenta. Riscant — pe un site apare mereu în antet.

### 2 · Toate SVG-urile au pânză pătrată 2000×2000

Inclusiv variantele „orizontal" și „vertical". Artwork-ul stă centrat într-un pătrat, cu spațiu gol în jur.

**Ce strică:**
- Nu poți dimensiona logo-ul după înălțime (`max-height: 64px` îl face 64×64px cu logo minuscul în mijloc).
- Regula „spațiu de respirație = ½ din înălțimea iconiței" nu se poate aplica — spațiul e deja înăuntrul fișierului, într-o cantitate necontrolată.
- În antetul unui site, logo-ul orizontal ocupă un pătrat, ceea ce împinge navigația și strică alinierea verticală.

**Soluție:** reexport din `.ai` cu pânza strânsă pe artwork (Illustrator: *Object → Artboards → Fit to Artwork Bounds*), separat pentru fiecare configurație. Se face o dată, în aceeași sesiune cu corecția de culoare de mai sus.

Până atunci, paginile de aici afișează logo-urile la lățime fixă, ca soluție de compromis.

---

## Ce NU am decis (rămâne pentru tine)

- **Iconițele.** Sistemul nu include un set de iconițe. Recomand un set cu linie subțire (1.5px), colțuri rotunjite — Lucide sau Phosphor Light se potrivesc cu Jost. De stabilit înainte să înceapă designul site-ului.
- **Ilustrațiile.** Dacă vrei ilustrații (stări goale, onboarding), au nevoie de un stil propriu definit.
- **Animațiile de pagină.** Tokenii de durată și easing există; coregrafia (ce intră când, în ce ordine) nu e definită.
- **Beautifier.** Nu e inclus — mi-ai cerut TBE și Harta. Ecommerce-ul are nevoi proprii (carduri de produs, variante, coș, checkout). Se adaugă ca al treilea `data-brand` când vrei.
- **Rootine Plus.** La fel — e orientat spre clientul final, nu spre coafeză, deci probabil are nevoie de o temperatură vizuală mai caldă și mai puțin „profesională".
