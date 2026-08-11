# Instalare — pas cu pas, pe fiecare platformă

Design system-ul e scris în **CSS variables**. Nu depinde de niciun framework. Peste tot logica e aceeași: încarci `tokens.css`, apoi `components.css`, în ordinea asta.

---

## 1 · WordPress (recomandat: temă copil)

### a) Copiază fișierele

Pune în tema copil:

```
wp-content/themes/tema-copil/
└── design-system/
    ├── tokens/tokens.css
    ├── components.css
    └── fonturi/          ← copiază aici cele 4 .ttf din brand/fonturi/
```

> Fonturile trebuie să fie **pe server**, nu pe calculatorul tău. Copiază-le și ajustează calea din `@font-face` la începutul lui `tokens.css`.

### b) Ajustează calea fonturilor

În `tokens.css`, la început, schimbă `../../fonturi/` în `../fonturi/` (sau în calea reală, dacă ai altă structură). Exemplu:

```css
src: url('../fonturi/Jost%5Bwght%5D.ttf') format('truetype-variations');
```

### c) Încarcă CSS-ul

În `functions.php` al temei copil:

```php
add_action('wp_enqueue_scripts', function () {
    $dir = get_stylesheet_directory_uri() . '/design-system';
    $ver = '1.0.0';

    // ORDINEA CONTEAZĂ: întâi tokens, apoi components
    wp_enqueue_style('tbe-tokens', $dir . '/tokens/tokens.css', [], $ver);
    wp_enqueue_style('tbe-components', $dir . '/components.css', ['tbe-tokens'], $ver);
}, 20);
```

### d) Dacă folosești Elementor / Bricks / Oxygen

Constructoarele vizuale au propriile setări de culoare. Ca să nu se bată cap în cap:

1. În setările globale de culoare ale constructorului, introdu **manual** culorile din paletă (`#A71257`, `#A98192`, `#DCC4B4`, `#FAF4EF`, `#EDDDD3`, `#9E9086`, `#2C2521`).
2. În setările globale de tipografie, setează Cormorant Garamond pentru titluri, Jost pentru text.
3. Folosește clasele `.tbe-*` pentru butoane și carduri în loc de stilurile implicite ale constructorului.

Alternativ, dacă vrei ca tot ce faci în constructor să meargă automat pe tokeni, adaugă în CSS-ul global:

```css
:root {
  --e-global-color-primary: var(--tbe-action);
  --e-global-color-text: var(--tbe-text);
  /* etc., în funcție de constructor */
}
```

### e) Verifică

Deschide site-ul, inspectează un element și caută `--tbe-action` în panoul de stiluri. Dacă apare, tokenii sunt încărcați corect.

---

## 2 · Shopify (Beautifier)

### a) Urcă fișierele

În editorul de temă: **Assets** → adaugă `tokens.css` și `components.css` (Shopify nu acceptă subfoldere în Assets, deci redenumește-le `tbe-tokens.css` și `tbe-components.css`).

Fonturile: **Settings → Files** → încarcă cele 4 `.ttf`. Copiază URL-urile generate și înlocuiește-le în `@font-face`:

```css
src: url('https://cdn.shopify.com/s/files/.../Jost.ttf') format('truetype-variations');
```

### b) Încarcă-le în `theme.liquid`

În `<head>`, înainte de CSS-ul temei:

```liquid
{{ 'tbe-tokens.css' | asset_url | stylesheet_tag }}
{{ 'tbe-components.css' | asset_url | stylesheet_tag }}
```

### c) Leagă-le de setările temei

În `config/settings_schema.json` poți expune culorile ca setări editabile, dar **nu e recomandat** — scopul design system-ului e să existe o singură sursă de adevăr. Dacă cineva schimbă magenta din panoul Shopify, tokenii nu mai reflectă realitatea.

---

## 3 · Lovable (React + Tailwind) — EMPIRIA, Rootine Plus

### a) Pune tokenii în `index.css`

Copiază tot conținutul lui `tokens.css` în `src/index.css`, înaintea directivelor Tailwind.

### b) Mapează în `tailwind.config.js`

```js
export default {
  theme: {
    extend: {
      colors: {
        action:  'var(--tbe-action)',
        surface: 'var(--tbe-surface)',
        ink:     'var(--tbe-text)',
        muted:   'var(--tbe-text-muted)',
        accent:  'var(--tbe-accent)',
        decor:   'var(--tbe-decor)',
        line:    'var(--tbe-border)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body:    ['Jost', 'sans-serif'],
        mono:    ['Source Code Pro', 'monospace'],
      },
      borderRadius: {
        control: 'var(--tbe-radius-control)',
        card:    'var(--tbe-radius-card)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)', md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)', xl: 'var(--shadow-xl)',
      },
    },
  },
}
```

Apoi scrii `bg-action`, `text-muted`, `rounded-card` — și dark mode + sub-brand funcționează automat, fără `dark:` peste tot.

### c) Mesaj pentru agentul Lovable

Când ceri o pagină nouă, dă-i contextul:

> Folosește exclusiv tokenii CSS din `index.css` (`--tbe-*`). Nu scrie HEX-uri. Titluri Cormorant Garamond, text Jost, kickere Source Code Pro majuscule cu tracking 0.14em. Butonul principal e magenta plin, unul singur per ecran. Fundalul paginii e crem `var(--tbe-bg)`, cardurile albe cu radius `var(--tbe-radius-card)`.

---

## 4 · HTML simplu / Webflow / orice altceva

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components.css">
```

Atât. Verifică doar că `@font-face` din `tokens.css` arată spre locul real al fișierelor `.ttf`.

---

## 5 · Alternativă: fonturi de la Google în loc de fișiere locale

Dacă nu vrei să găzduiești fonturile, șterge blocul `@font-face` de la începutul lui `tokens.css` și pune în `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Jost:wght@200..900&family=Source+Code+Pro:wght@200..900&display=swap" rel="stylesheet">
```

Compromis: mai simplu de instalat, dar depinzi de Google și încarci ceva mai lent. Pentru site-ul principal, recomand fișierele locale.

---

## 6 · Dark mode

Funcționează în două feluri, ambele deja incluse:

- **Automat** — urmează preferința sistemului utilizatorului. Nu trebuie să faci nimic.
- **Manual** — pui `data-theme="dark"` sau `data-theme="light"` pe `<html>`. Atributul manual are prioritate.

Comutator simplu:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## 7 · Verificare finală

- [ ] Fonturile se încarcă (titlurile arată serif, nu Times New Roman)
- [ ] `tokens.css` e încărcat înaintea lui `components.css`
- [ ] Un buton `.tbe-btn.is-primary` e magenta
- [ ] Comutarea în dark mode nu sparge nimic
- [ ] Focus-ul se vede la navigarea cu Tab
