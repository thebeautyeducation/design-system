# Ce s-a schimbat

## v2.0 · octombrie 2026

Prima versiune după auditul de design din 22 octombrie 2026. Clasele vechi funcționează în continuare; nimic din ce era construit pe v1.0 nu trebuie rescris.

### Fonturi
- **Fraunces + Inter** în locul Cormorant Garamond + Jost. Cifrele sunt aliniate pe rând peste tot. De ce: [`decizii.md` § 15](decizii.md).

### Culoare
- **Paleta prună** (`--c-pruna-50` … `--c-pruna-950`). Prună 700 e vocea editorială (`--tbe-editorial`), negru-prună e fundalul închis (`--tbe-surface-inverse`). Dark mode-ul are fundaluri prună. De ce: [`decizii.md` § 16](decizii.md).
- **Logo-ul are mereu o singură culoare.** Simbolul și textul nu mai apar niciodată în culori diferite.
- **Contrast reparat pe textul mic.** Gri cald nu mai e folosit ca text. `--c-neutral-600` s-a închis la `#6B5C51`, `--tbe-text-subtle` la `#897B71` (doar grafice și decor).
- Stelele de evaluare sunt prună, nu magenta: informează, nu se apasă.
- **Insignele pline de nivel** (`.is-tier-solid`) au text închis din nuanța metalului, ca Gold. Textul alb avea 3.1–3.2:1 pe Bronze, Silver și Diamond; acum minimum 4.9:1. Tokeni noi: `--c-bronze-ink`, `--c-silver-ink`, `--c-gold-ink`, `--c-diamond-ink`, `--c-bronze-light`.
- **Verdele de succes** e mai închis: `#2A7454` în loc de `#2E7D5B`. Pe fundalul lui soft avea 4.3:1, acum 4.9:1 (5.6:1 pe alb).
- Verdele de contact al Hărții e același pe ambele teme; textul magenta pe fundal soft folosește `--tbe-action-on-soft` (tema închisă trecea la limită).

### Iconițe (nou)
- **Un singur set:** Lucide, linie de 1.5px, plus patru simboluri proprii pentru niveluri și o stea plină pentru evaluări. 59 de iconițe în `assets/icons/` (SVG + `sprite.svg`), în CSS ca `.tbe-icon[data-icon="nume"]`.
- Caracterele folosite ca iconițe au dispărut din componente: ⌕ din căutare, 🔒 din traseul EMPIRIA, ● ◈ ★ ◆ din badge-urile de nivel, „+" din acordeon, „/" din firimituri.

### Mișcare
- **Arcuri** (`--ease-spring`, `--ease-spring-bounce`), cu fallback pe `--ease-out` unde browserul nu le știe.
- **Răspuns la apăsare:** butoanele, chips-urile, cardurile interactive și planurile se strâng în 90 ms (`--dur-press`).
- **Intrare și ieșire pe același drum:** fereastra modală, foaia de jos (`.tbe-modal.is-sheet`, nou), notificarea, tooltip-ul, meniul (`.tbe-popover`, nou), acordeonul.
- **Setările telefonului sunt respectate:** mișcare redusă = estompare pe loc; transparență redusă și contrast mărit = suprafețe solide.
- Nicio componentă nu mai folosește `transition: all`.

### Tipografie
- Tracking pe mărimi: titlurile mari se strâng (de la −0.03em la Display până la −0.005em la H4), textul mic se lărgește ușor (+0.01em). Butoanele nu mai au spațiere între litere.
- Line-height pe mărimi: Display 1.04, H1 1.12, H2 1.18.
- Lead-ul are grosime 400 (era 300, prea subțire pe ecrane).
- Paragrafele folosesc `text-wrap: pretty`: fără cuvinte singure pe ultimul rând.
- Kickerele se pun doar unde spun ceva (categorie, număr de rubrică, pas). Nu ca decor deasupra fiecărui titlu.

### Ținte de atingere
- `.tbe-btn.is-sm`, chips-urile, controlul segmentat și elementele de meniu au 44px pe ecrane tactile. Taburile și titlurile de acordeon au minimum 44px peste tot.

### Vânzare (nou)
- Componentele unei pagini care vinde: `.tbe-price`, `.tbe-plans` / `.tbe-plan`, `.tbe-offer`, `.tbe-checklist`, `.tbe-testimonial`, `.tbe-trainer`, `.tbe-curriculum`, `.tbe-trust`, `.tbe-stats`, `.tbe-stickybar`, `.tbe-cta-band`, `.tbe-faq`, plus `.tbe-hero-split` (hero cu fotografie). Exemple vii în [`ui.html` § 21](../ui.html#vanzare).

### Documentație
- Paginile au fotografii reale (`assets/foto/`), nu degradeuri.
- `ui.html` are trei secțiuni noi: Iconițe, Mișcare, Vânzare. Datele din exemple sunt la zi (4.364 de conturi active, Magazinul din Cont, cursuri care se vând azi).
- Textul din Brand Book e rescris mai simplu, cu mai puține liniuțe de pauză.

---

## v1.0 · 2026

Prima versiune: tokeni, componente, Brand Book, bannere, sub-brandul Harta Coafezelor.
