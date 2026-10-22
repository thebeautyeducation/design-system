# Decizii — ce am adăugat peste brand book și de ce

Mini Brand Book-ul definește 3 culori de brand, 5 neutre, 3 fonturi și o scară tipografică. Un design system funcțional are nevoie de mai mult: stări de hover, dark mode, semnale, sub-brand. Mai jos e fiecare decizie pe care am luat-o, ca să știi ce e oficial și ce e adăugat — și ca să poți schimba ușor ce nu-ți place.

**Nimic din brand book nu s-a schimbat.** Toate culorile marcate cu ★ din brand book sunt exact cele validate. Singurele adăugate ulterior ca oficiale sunt prună 700 și negru-prună 900 (§ 16, octombrie 2026).

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

**Soluția:** o treaptă mai închisă din aceeași familie caldă, `#7A6A5E`, la 4.8:1 (închisă din nou în octombrie 2026 la `#6B5C51`, ca să treacă și pe benzile bej și roz — § 16). Vizual e aproape identică; funcțional e diferența dintre lizibil și nu.

**Gri cald rămâne oficial** — doar că îl folosim pentru ce e făcut: borduri, iconițe decorative, blocuri de culoare.

Același raționament pentru mauve: `#A98192` rămâne culoarea de brand, dar pentru text mauve exista `#6E5361`. Din octombrie 2026 textul editorial e prună `#6B2A4A` (vezi § 16).

---

## 4 · Culori de semnal

**Ce am făcut:** am definit succes / atenție / eroare / info în temperatura caldă a paletei.

**De ce:** un site cu abonamente, teste și niveluri blocate are nevoie să comunice stări. Verdele și roșul standard de browser (`#008000`, `#FF0000`) sunt reci și saturate — lângă crem și nude arată ca o eroare de design.

**Info-ul e prună** `#6B2A4A` (inițial mauve adânc `#6E5361`; schimbat în octombrie 2026, § 16), ca să rămână în familie.

---

## 5 · Verde Hartă `#2E6F5E` — prima culoare nouă din sistem (a doua e prună, § 16)

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

> **Actualizat în octombrie 2026:** rolul descris mai jos a rămas, dar culoarea lui s-a schimbat din mauve 700 în prună 700. Vezi § 16.

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

## 15 · Tipografia: Fraunces + Inter în locul Cormorant Garamond + Jost (octombrie 2026)

**Ce am făcut:** am înlocuit fontul de titluri (Cormorant Garamond → **Fraunces**) și fontul de text (Jost → **Inter**). Source Code Pro rămâne pentru kickere. Am adăugat tokenii `--fw-bold` (700), `--fw-extrabold` (800), `--fw-black` (900) și tokenii de cifre `--num-default` / `--num-tabular`.

**De ce:**
- **Cifrele.** Cormorant folosește implicit cifre „old-style": 3, 4, 5, 7 și 9 coboară sub rând, ca într-o carte veche. În prețuri și statistici („1.390 lei", „3.618") păreau să sară. Fraunces și Inter au cifre aliniate, iar sistemul le forțează acum explicit pe `body`.
- **Grosimile.** Scara de tokeni mergea doar până la 600 și nu exista un token de bold. Pentru bannere, prețuri și accente era nevoie de bold real. Ambele fonturi noi au toate grosimile 100–900, în roman și italic, iar scara de tokeni acoperă acum 300–900.
- **Lizibilitatea pe telefon.** Inter e desenat pentru ecran: litere deschise, distincție clară între `I`, `l` și `1`. Publicul TBE citește majoritar pe telefon.
- **Păstrăm caracterul.** Fraunces e tot un serif editorial cu contrast mare, ca să rămână senzația de revistă. Are ax optic: la 72px e fin și elegant, la 18px se îngroașă singur ca să nu se spargă — ceva ce Cormorant nu putea.

**Cum s-a ales:** din șase perechi de fonturi Google comparate pe conținut real TBE (titlul Color Mastery, prețul, cifrele oficiale), aleasă de Marius Dobre.

**Performanță:** fonturile sunt în `.woff2`, împărțite pe subseturile `latin` și `latin-ext`. O pagină în română descarcă ~330 KB pentru toate grosimile, față de ~1,3 MB cu fonturile vechi (Cormorant singur avea 1,2 MB).

**Ce nu s-a schimbat:** mărimile, line-height-urile și tracking-ul din scară, culorile, regulile de kicker. Componentele citesc fonturile din tokeni, deci au trecut automat pe noile familii.

---

## 16 · Prună: vocea editorială și fundalul închis (octombrie 2026)

**Ce am făcut:** am adăugat familia **Prună** (`--c-pruna-50` … `--c-pruna-950`) și i-am dat două roluri:

| Rol | Înainte | Acum |
|---|---|---|
| Voce editorială: cuvântul-accent din titluri, kickere, citate, roluri, etichete (`--tbe-editorial`) | mauve 700 `#6E5361` | **prună 700 `#6B2A4A`** |
| Fundal închis: blocuri inverse, footer, story, coperți, toast, tooltip (`--tbe-surface-inverse`) | negru moale `#2C2521` | **negru-prună `#2A1520`** |
| Fundalurile din dark mode | maro (`#1A1513`, `#241E1B`) | **prună închis** (`#211018`, `#2A1A21`) |
| Accent pe fundal închis | mauve 200 | **Magenta 200** `#E9B6CC` (9.8:1) |
| Text secundar pe fundal închis | bej `#B9A99C` / `#C0B1A5` | **Prună 200** `#D9C2CB` (10.2:1) |
| Cuvântul-accent din titluri | culoarea titlului (site-ul îl făcea magenta) | **prună** — magenta înseamnă „se dă click" |
| Info | mauve 700 | prună 700 |

**De ce:** am testat pe pânză o paletă de inspirație (Wine, Blush, Cocoa) față de paleta noastră, pe 12 machete reale (Account, carduri, social, revistă). Paleta străină pierdea la produs și la brand — Wine lângă magenta arăta ca două roșii care nu se potrivesc, iar logo-ul ar fi trebuit mutat. Dar a scos la iveală două slăbiciuni ale paletei noastre:
- **Mauve 700 arăta gri.** Cuvântul-accent din titluri („5 *rezolvări*") nu ieșea în evidență, iar etichetele mauve păreau dezactivate.
- **Negrul moale e maro.** Pe story-uri și coperți, maro cu roz arăta tern.

Soluția: un accent și un negru **din aceeași nuanță cu magenta**. Prună 700 e la 9° de magenta pe roata culorilor și are jumătate din saturația ei — se citește ca accent puternic (10.2:1 pe alb), dar nu ca link. Negru-prună face ca roz-ul și magenta de pe fundalul închis să pară din aceeași familie. Am comparat trei variante (prună, prună intensă, doar magenta existentă); a câștigat prună, aleasă de Marius Dobre.

**Corecturi de contrast adoptate odată cu prună:**
- **Textul secundar s-a închis puțin:** `--c-neutral-600` trece de la `#7A6A5E` la `#6B5C51`. Cel vechi trecea pe alb și crem, dar pica pe benzile bej (3.9:1) și roz (4.0:1) — și pe site, și în documentație. Cel nou: 5.9:1 pe crem, 4.9:1 pe bej și roz.
- `--tbe-text-muted-strong` (`#5A4D44`, 7.5:1 pe crem) — text secundar mic pe fundaluri colorate, unde vrei marjă mai mare.
- `--tbe-action-muted` (Magenta 400, 4.2:1 pe alb) — progres secundar, cercul unui pas neînceput.
- Magenta 50 nu se mai folosește ca bandă sau etichetă pe alb (1.1:1); pe alb, Magenta 100.
- Pasul viitor din `.tbe-steps`, steaua goală din `.tbe-rating` și săgeata din `.tbe-path` folosesc `--tbe-text-subtle` (3.1:1) în loc de bordură (1.9:1).
- **Gri cald scos din textul mic.** `--tbe-text-subtle` (`#9E9086`, 3.1:1) era folosit ca text în ~35 de locuri pe site (etichete, meta, prețul tăiat, beneficiile „nu", numerotări) și în documentație. Toate au trecut pe `--tbe-text-muted`. Gri cald rămâne doar pe separatori („·", „/"), săgeți și iconițe decorative, stele goale, pași viitori și text dezactivat — iar pentru acestea `--tbe-text-subtle` e acum `#897B71`, o treaptă sub gri cald oficial `#9E9086`, care pe crem ajungea la 2.8:1 (sub minimul de 3:1 pentru grafice).
- Elementul activ dintr-un meniu închis e o pastilă Magenta 200, nu doar text mai gros.

**Ce nu s-a schimbat:** magenta `#A71257` (acțiune, logo), Magenta 700 ca suprafață de brand, negrul moale pentru text, crem, nude, culorile nivelurilor de loialitate, regula 60/30/10. Mauve rămâne în paletă ca accent decorativ. Clasa `.tbe-card.is-mauve` funcționează în continuare (alias pentru noul `.is-editorial`).

**Logo-ul:** simbolul și textul au mereu aceeași culoare. Logo-ul nu e niciodată bicolor.

---

## 17 · v2.0: iconițe, mișcare, tipografie pe mărimi, vânzare (octombrie 2026)

Auditul din 22 octombrie 2026 a pus o întrebare: arată sistemul modern, premium, curat, și vinde? Răspunsul sincer a fost „curat da, restul nu încă". Cinci goluri, cinci decizii, aprobate de Marius Dobre.

**1. Iconițe: un singur set, Lucide la 1.5px.** Înainte nu exista niciun set. Componentele foloseau caractere text (⌕, 🔒, ● ◈ ★ ◆, „+", „/"), care arată diferit pe fiecare telefon și nu se aliniază cu textul. Lucide are linia și capetele rotunjite care se potrivesc cu Inter, e gratuit (licență ISC) și are versiune pentru React (`lucide-react`), deci aplicațiile din Lovable pot folosi exact aceleași desene. Linia e coborâtă de la 2px la 1.5px ca să stea lângă Inter fără să pară îngroșată. Simbolurile de nivel sunt desenate de noi, pline, ca să se vadă de la distanță.

**2. Mișcare pe arc.** O curbă clasică (`ease-out`) are o durată fixă: dacă închizi o fereastră la jumătatea deschiderii, sare. Un arc pornește mereu din poziția curentă. Am ales două: unul fără depășire, pentru tot ce se mișcă, și unul cu o mică depășire, doar pentru ce vine din afara ecranului (foaia de jos, bara fixă), unde depășirea spune „a ajuns". Butoanele răspund la apăsare, nu la eliberare: întârzierea dintre deget și reacție e primul lucru care face o aplicație să pară ieftină.

**3. Tracking pe mărimi.** O singură valoare de spațiere între litere e greșită undeva: la 72px literele par depărtate, la 12px par înghesuite. Titlurile mari se strâng, textul mic se lărgește puțin, butoanele rămân la 0 (spațierea pe butoane în litere mici arăta a șablon). Lead-ul trece de la 300 la 400: 300 se rupe pe ecranele obișnuite.

**4. Kickerele doar unde spun ceva.** Un supratitlu deasupra fiecărui titlu („Fișier", „Pe crem", „Confirmare") nu mai e o informație, e un tic. Rămân unde dau context real: categoria unui curs, numărul rubricii, pasul unui traseu.

**5. Stratul de vânzare.** Sistemul avea tot ce trebuie pentru o aplicație și nimic pentru o pagină care vinde un curs. Acum are prețul, alegerea planului, caseta de cumpărare, lista de beneficii, testimonialul, trainerul, programa, rândul de încredere, bara fixă de pe telefon și banda de final. Reguli: magenta doar pe butoane; prețul în negru (nu se apasă); fără numărători inverse, fără „ultimele locuri", fără testimoniale inventate.

**Ce nu s-a schimbat:** culorile, fonturile, raza colțurilor, numele claselor. Clasele vechi funcționează. Lista completă: [`changelog.md`](changelog.md).

---

## Ce NU am decis (rămâne pentru tine)

- **Ilustrațiile.** Dacă vrei ilustrații (stări goale, onboarding), au nevoie de un stil propriu definit.
- **Coregrafia paginilor.** Componentele știu acum să intre și să iasă; ordinea în care apar secțiunile unei pagini la derulare nu e definită și, deocamdată, nu e nevoie.
- **Beautifier.** Nu e inclus — mi-ai cerut TBE și Harta. Ecommerce-ul are nevoi proprii (carduri de produs, variante, coș, checkout). Se adaugă ca al treilea `data-brand` când vrei.
- **Rootine Plus.** La fel — e orientat spre clientul final, nu spre coafeză, deci probabil are nevoie de o temperatură vizuală mai caldă și mai puțin „profesională".
