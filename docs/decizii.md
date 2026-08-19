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

**Alternativa, dacă nu-ți place:** renunți la dark mode complet. E o opțiune validă — un site editorial premium nu e obligat să aibă temă închisă. Dacă alegi asta, treci `color-scheme` pe `light` peste tot și ramurile dark din `light-dark()` nu se mai folosesc.

**Cum e construită tema (v1.0.1):** fiecare token semantic e definit O SINGURĂ dată, cu `light-dark(valoare_light, valoare_dark)`, și se rezolvă din `color-scheme`. Nu mai există un al doilea bloc „dark" de ținut sincron manual (înainte, `[data-theme="dark"]` și `@media (prefers-color-scheme: dark)` erau copii — una divergase deja pe `--shadow-xs`). Comutarea temei = doar `color-scheme`: `light dark` pe `:root` (urmează sistemul), sau `light`/`dark` pe `[data-theme=…]` (forțat). Fallback pe browsere pre-2024 fără `light-dark()`: ramura light.

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

**Excepția, explicită:** variantele compacte `.tbe-btn.is-sm` (36px) sunt gândite pentru bare de unelte dense, unde controlul stă lângă altele și nu e acțiunea principală. Rămân peste pragul AA de 24px (WCAG 2.5.8). Acțiunile principale și navigarea (inclusiv paginația, urcată la 44px) rămân la 44px.

---

## 11 · Umbre calde

**Ce am făcut:** toate umbrele folosesc `rgba(44,37,33,…)` — negru moale — nu negru pur.

**De ce:** o umbră neagră pură pe fundal crem arată murdară, cenușie. Umbra caldă se topește în paletă.

---

---

## 12 · Mauve = vocea editorială

**Problema observată:** după prima versiune, mauve-ul aproape nu se folosea nicăieri. Era în paletă ca „accent secundar", dar nimic concret nu i se atribuia — deci nu apărea.

**Cauza reală:** magenta făcea două munci deodată. Era și culoarea acțiunii (butoane, linkuri), și culoarea decorului (supratitluri, borduri de citat, etichete). Asta slăbea regula centrală: dacă supratitlul e magenta și butonul e magenta, magenta nu mai *înseamnă* nimic.

**Soluția:** mauve preia tot ce e expresiv dar nu se dă click.

| Element | Înainte | Acum |
|---|---|---|
| Supratitluri (kickere) | magenta | mauve `--tbe-editorial` |
| Bordura citatului | magenta | mauve `--tbe-editorial-line` |
| Atribuirea citatului | gri | mauve |
| Etichete de statistică | gri | mauve |
| Roluri, subtitluri italice | — | mauve (`.tbe-role`, nou) |
| Linii decorative | — | mauve (`.tbe-rule`, nou) |
| Fundal bloc editorial | — | mauve diluat (`.tbe-card.is-mauve`, nou) |

Rezultat dublu: mauve-ul are în sfârșit un rost, iar magenta rămâne exclusiv al acțiunii. Regula devine verificabilă cu ochiul — **într-un ecran corect construit, singurele lucruri magenta sunt cele pe care se dă click.**

Se folosește `--tbe-editorial` (mauve 700, 6.9:1), nu mauve-ul oficial 400 — acela rămâne decorativ, la 3.4:1.

---

## 13 · Nivelurile Gold și Diamond strălucesc

**Cerință:** Gold și Diamond arătau prea șterse.

**Problema tehnică:** un galben sau un bleu suficient de vii pentru a „străluci" nu au contrast de text. `#F0B72A` pe alb are 1.9:1 — ilizibil.

**Soluția — separă culoarea de lizibilitate.** Fiecare badge are acum trei valori:

- **glifa** (`★ ◆ ● ◈`) poartă culoarea vie — e un simbol, nu text, deci nu are nevoie de 4.5:1
- **textul** poartă lizibilitatea — versiunea închisă a aceleiași culori
- **fundalul** e un tint foarte diluat

Așa Gold poate fi `#F0B72A` în glifă și `#8A6300` în text (5.4:1). Arată viu și rămâne accesibil.

**Progresia e intenționată:** Bronze și Silver rămân calme, Gold și Diamond strălucesc, iar varianta `.is-tier-solid` (cu gradient) e rezervată profilului și certificatelor. Nivelul se recunoaște de la distanță — ceea ce e tot rostul unui program de meritocrație.

---

## 14 · Excepția canalelor de contact

**Ce am făcut:** pe cardul de coafeză, butonul „Contactează" e verde, iar cercurile de social sunt în culorile Facebook / Instagram / Google Maps.

**De ce încalcă regula „magenta = acțiune":** pentru că nu o încalcă, o completează. Butoanele astea nu execută o acțiune în produsul nostru — **predau utilizatoarea unei platforme externe**. Culoarea canalului spune instant unde ajunge: verde = mesagerie, albastru = Facebook, gradient = Instagram, roșu = hartă. Magenta n-ar putea transmite asta, iar o utilizatoare care nu știe unde ajunge ezită să apese.

**Limita strictă:** excepția se aplică exclusiv handoff-urilor către platforme externe. Orice acțiune care rămâne în ecosistem — abonare, trimitere de coafură, deschidere de tutorial — e magenta.

**Notă de accesibilitate:** verdele din produsul actual e prea deschis pentru text alb (3.3:1). Tokenul `--c-contact` folosește `#15803D`, care ajunge la 5.0:1. Vizual e același verde; funcțional e diferența dintre lizibil și nu.

---

## Ce NU am decis (rămâne pentru tine)

- **Iconițele.** Sistemul nu include un set de iconițe. Recomand un set cu linie subțire (1.5px), colțuri rotunjite — Lucide sau Phosphor Light se potrivesc cu Jost. De stabilit înainte să înceapă designul site-ului.
- **Ilustrațiile.** Dacă vrei ilustrații (stări goale, onboarding), au nevoie de un stil propriu definit.
- **Animațiile de pagină.** Tokenii de durată și easing există; coregrafia (ce intră când, în ce ordine) nu e definită.
- **Beautifier.** Nu e inclus — mi-ai cerut TBE și Harta. Ecommerce-ul are nevoi proprii (carduri de produs, variante, coș, checkout). Se adaugă ca al treilea `data-brand` când vrei.
- **Rootine Plus.** La fel — e orientat spre clientul final, nu spre coafeză, deci probabil are nevoie de o temperatură vizuală mai caldă și mai puțin „profesională".
