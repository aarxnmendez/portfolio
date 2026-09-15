# The Engineering Gazette: Design & Architecture

Single source of truth for the portfolio project. Originated from the **Stitch** broadsheet mockup (*Digital Broadsheet*); implemented in Astro with native i18n, Tailwind CSS v4, and a component-driven architecture.

---

## 1. Brand & Visual Intent

The design adopts a **high-end digital broadsheet** aesthetic: authoritative journalism meets modern minimalism with a **Brutalist** edge. Information hierarchy is driven by typographic scale, rigid grid lines, and stark monochrome contrast.

**Target audience:** design connoisseurs, editorial directors, and technical collaborators who value clarity and intellectual rigor.

**Emotional tone:** *calculated prestige*, a definitive archive feel. Grayscale imagery, high-density layouts, and narrative structure establish a portfolio that reads like a newspaper, not a generic landing page.

**Visual pillars (from Stitch, preserved in implementation):**

- Cream newsprint background, black ink, no shadows
- Double borders and hairline rules as structural dividers
- Serif mastheads + monospace metadata
- Halftone / grayscale photography
- Square corners everywhere (0px radius)

---

## 2. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Astro 7** | Static output (SSG), minimal client JS |
| Styling | **Tailwind CSS v4** | Via `@tailwindcss/vite`; theme in `src/styles/global.css` |
| Language | **TypeScript** | Content types in `src/data/portfolioData.ts`; `@ts-check` in config |
| SEO | **@astrojs/sitemap** | Sitemap generated at build time |
| Package manager | **pnpm** | `pnpm dev`, `pnpm build`, `pnpm preview` |
| Node | **≥ 22.12.0** | See `package.json` engines |

**Key dependencies:** `astro`, `tailwindcss`, `@tailwindcss/vite`, `@astrojs/sitemap`, `sharp`

**Dev server:** `pnpm dev` (or `astro dev --background` per `AGENTS.md` / `CLAUDE.md`)

**Production host:** static `dist/` on Apache/Plesk (`https://aaronmendez.es`), with `public/.htaccess` copied into the deploy root.

---

## 3. Project Structure

```
portfolio/
├── astro.config.mjs          # site URL, i18n locales, sitemap, Tailwind Vite plugin
├── DESIGN.md                 # This document
├── package.json
├── public/
│   ├── .htaccess             # Apache 404 + cache headers (Plesk)
│   ├── robots.txt
│   ├── images/               # Portrait, project covers
│   └── …                     # Favicons, og-image, web manifest
└── src/
    ├── data/
    │   ├── portfolioData.ts  # Single source of truth for copy, types, SEO helpers
    │   └── content.ts        # Re-exports only (backward compatibility)
    ├── components/
    │   ├── Header.astro      # Masthead, nav, language switcher, scroll spy
    │   ├── Hero.astro
    │   ├── SelectedWorks.astro
    │   ├── Classifieds.astro
    │   ├── Timelines.astro
    │   ├── TimelineItem.astro
    │   ├── EditorialExtra.astro
    │   ├── Contact.astro
    │   └── Footer.astro
    ├── layouts/
    │   └── BaseLayout.astro  # HTML shell, SEO, JSON-LD, fonts, skip link
    ├── pages/
    │   ├── index.astro       # Spanish (default) → /
    │   ├── 404.astro         # Custom not found (bilingual via client script)
    │   └── en/
    │       └── index.astro   # English → /en
    └── styles/
        └── global.css
```

**Principle:** Components are presentational. **All main site copy lives in** `src/data/portfolioData.ts`. Pages set `lang` and assemble components. Avoid hardcoding user-facing strings in `.astro` files except the dedicated 404 strings (see [§5.6](#56-página-404-bilingüe)).

---

## 4. Arquitectura de datos y contenido

### 4.1 Fuente de verdad: `portfolioData.ts`

`src/data/portfolioData.ts` is the **only place to edit** portfolio copy, personal links, structured data helpers, and TypeScript shapes.

| Export | Role |
|--------|------|
| `portfolioContent` | `Record<Lang, PortfolioContent>` with full `es` and `en` trees |
| `getContent(lang)` | Returns the content object for a locale |
| `personal` | Shared email, GitHub, LinkedIn, CV path |
| `personStructuredData` | Shared name, `alumniOf`, plus `byLang` for localized JSON-LD fields |
| `getPersonStructuredData(lang)` | `jobTitle` and `knowsAbout` per locale for Schema.org |
| Types (`Lang`, `Project`, `PortfolioContent`, …) | Enforce structure when adding fields |

```ts
export const portfolioContent: Record<Lang, PortfolioContent> = {
  es: { meta, header, hero, works, classifieds, timelines, editorial, extra, contact, footer },
  en: { meta, header, hero, works, classifieds, timelines, editorial, extra, contact, footer },
};

export function getContent(lang: Lang): PortfolioContent {
  return portfolioContent[lang];
}
```

### 4.2 `content.ts` (compatibilidad)

`src/data/content.ts` does **not** hold data. It re-exports symbols from `portfolioData.ts` for older imports.

- Prefer: `import { getContent, … } from '../data/portfolioData'`
- Deprecated alias: `content` → use `portfolioContent` instead

New code should import from `portfolioData.ts` directly.

### 4.3 Content map

| Key | Section | Component |
|-----|---------|-----------|
| `meta` | `<title>`, description, keywords | Pages / `BaseLayout` |
| `header` | Masthead, nav labels, `navAriaLabel` | `Header.astro` |
| `hero` | Portrait, headline, lead, CTA labels | `Hero.astro` |
| `works` | Featured projects | `SelectedWorks.astro` |
| `classifieds` | Technology columns | `Classifieds.astro` |
| `timelines` | Education + work history | `Timelines.astro`, `TimelineItem.astro` |
| `editorial` | About narrative | `EditorialExtra.astro` |
| `extra` | Highlights (certifications, learning) | `EditorialExtra.astro` |
| `contact` | Email, copy button, aria labels | `Contact.astro` |
| `footer` | Copyright, social links | `Footer.astro` |

### 4.4 Editing workflow

1. Open `src/data/portfolioData.ts`
2. Update the `es` block (served at `/`) and the `en` block (served at `/en`)
3. Keep both locales in sync when adding or renaming keys
4. Extend interfaces first, then fill both locale objects
5. Components receive `lang` and call `getContent(lang)`

---

## 5. Internationalization (i18n)

### 5.1 Routing (Astro native)

Configured in `astro.config.mjs`:

| Locale | Code | URL | Page file |
|--------|------|-----|-----------|
| Spanish (default) | `es` | `/` | `src/pages/index.astro` |
| English | `en` | `/en` | `src/pages/en/index.astro` |

- `defaultLocale: 'es'`
- `prefixDefaultLocale: false` (Spanish has no `/es` prefix)

Both home pages reuse the **same components**, passing `lang="es"` or `lang="en"`.

### 5.2 Content + routing

- **Copy:** `src/data/portfolioData.ts` (see [§4](#4-arquitectura-de-datos-y-contenido))
- **Routing:** Astro i18n in `astro.config.mjs`
- Components consume text via `getContent(lang)` from the page locale

### 5.3 Language switcher (Header)

Minimal inline control in the masthead meta row:

```
[ EN ] | [ ES ]
```

- Links: `/` for Spanish, `/en` for English
- Active locale: `font-bold`
- On click: `localStorage.removeItem('portfolio-lang')` then `localStorage.setItem('preferred-lang', 'es' | 'en')` on each link in `Header.astro`

### 5.4 Client-side locale detection (soft redirect)

**Why client-side:** Static site (SSG). Crawlers receive both `/` and `/en` as distinct pages.

**Where it runs:** Only `src/pages/index.astro` (Spanish root `/`). The English page `/en` does **not** auto-redirect to `/`.

```js
localStorage.removeItem('portfolio-lang');

const savedLang = localStorage.getItem('preferred-lang');
const browserLang = navigator.language || '';

if (savedLang === 'en' || (!savedLang && browserLang.startsWith('en'))) {
  window.location.href = '/en';
}
```

| Condition | Behavior |
|-----------|----------|
| `preferred-lang` is `en` | Redirect to `/en` |
| No `preferred-lang` + browser language starts with `en` | Soft redirect to `/en` (first visit) |
| `preferred-lang` is `es` | Stay on `/` |
| User visits `/en` directly | No redirect script |

**localStorage key:** `preferred-lang` with values `es` or `en`

### 5.5 SEO (hreflang, Open Graph, JSON-LD)

`BaseLayout.astro` per page:

- `<html lang="es">` or `<html lang="en">`
- Canonical URL and `hreflang` alternates for both locales + `x-default` (Spanish root)
- Open Graph and Twitter meta, `og-image.png`
- **Person** JSON-LD via `getPersonStructuredData(lang)` (`jobTitle` and `knowsAbout` localized)

Production base (`site` in `astro.config.mjs`):

```html
<link rel="alternate" hreflang="es" href="https://aaronmendez.es/" />
<link rel="alternate" hreflang="en" href="https://aaronmendez.es/en/" />
<link rel="alternate" hreflang="x-default" href="https://aaronmendez.es/" />
```

`public/robots.txt` points to `https://aaronmendez.es/sitemap-index.xml`.

### 5.6 Página 404 bilingüe

**File:** `src/pages/404.astro` → static `404.html` at build time.

**Layout:** Uses `BaseLayout` with `lang="es"` and Spanish default copy in the HTML (masthead-style kicker, headline, editorial paragraph, single CTA). No Header/Footer on this page.

**Client script** (`<script is:inline>`): after load, if English is detected, text and link targets update in the DOM.

English is used when **either**:

1. `window.location.pathname` starts with `/en` (e.g. mistyped URL under the English prefix), or
2. `localStorage.getItem('preferred-lang') === 'en'`

Unlike the home redirect, the 404 script does **not** use `navigator.language`.

| Element | Spanish (default HTML) | English (script) |
|---------|------------------------|------------------|
| Kicker | Extra - Edición especial | Extra - Special edition |
| Headline | Página no encontrada | PAGE NOT FOUND |
| Body | Editorial paragraph in Spanish | Matching paragraph in English |
| CTA | Volver al inicio → `/` | BACK TO HOME → `/en/` |

The script also sets `document.documentElement.lang = 'en'` and `document.title` for the English case.

**Apache:** `ErrorDocument 404 /404.html` in `public/.htaccess` serves this file on missing routes (see [§9](#9-despliegue-apache--plesk)).

---

## 6. Design System (Implementation)

Values reflect **what is in code** (`global.css` + components).

### 6.1 Colors

Defined in `@theme` in `src/styles/global.css`:

| Token | Hex | Usage |
|-------|-----|--------|
| `background` / `surface` | `#eae6dc` | Newsprint / cream paper |
| `primary` | `#000000` | Headlines, borders, emphasis |
| `secondary` | `#2d2d2d` | Secondary body, nav links |
| `on-surface` | `#1a1a1a` | Default body text |
| `on-surface-variant` | `#404040` | Footer meta, captions |

### 6.2 Typography

Google Fonts in `BaseLayout`: Playfair Display, Inter, Courier Prime.

| Role | Family | Usage |
|------|--------|--------|
| Display / headlines | Playfair Display | Masthead, section titles |
| Body | Inter | Paragraphs |
| Metadata / labels | Courier Prime | Vol/date, nav, tags, buttons |

**Editorial accents:** drop cap on first about paragraph (`drop-cap` in `global.css`).

### 6.3 Layout & utilities

- Container: `max-w-7xl`, section borders, `v-rule`, halftone portrait, vintage buttons (`btn-vintage`)
- Sticky nav with scroll spy in `Header.astro`
- Details: `src/styles/global.css`

---

## 7. Components (Page Map)

| Component | Section | Content keys in `portfolioData.ts` |
|-----------|---------|----------------------------------|
| `Header.astro` | Masthead + nav | `header` |
| `Hero.astro` | Hero | `hero` |
| `SelectedWorks.astro` | Featured project | `works` |
| `Classifieds.astro` | Technologies | `classifieds` |
| `Timelines.astro` | Education + experience | `timelines` |
| `EditorialExtra.astro` | About + highlights | `editorial`, `extra` |
| `Contact.astro` | Email + copy | `contact` |
| `Footer.astro` | Footer | `footer` |

**Client JS in components:** nav scroll spy (`Header`), copy email (`Contact`). Root Spanish page: locale redirect script. `404.astro`: bilingual copy script.

---

## 8. Development Conventions

1. **Copy:** `src/data/portfolioData.ts`, both `es` and `en` for new strings.
2. **Imports:** use `portfolioData.ts`; avoid new dependencies on `content.ts`.
3. **Styles:** Tailwind utilities + shared rules in `global.css`.
4. **Components:** `lang: Lang` prop + `getContent(lang)`.
5. **Pages:** thin wrappers around `BaseLayout` and sections.
6. **i18n URLs:** `getRelativeLocaleUrl()` from `astro:i18n` where needed.
7. **Comments:** no emoticons in code comments.
8. **Commits:** only when explicitly requested by the maintainer.

### Adding a new locale (future)

1. Add locale in `astro.config.mjs` `locales`
2. Add `src/pages/<locale>/index.astro`
3. Extend `Lang` and `portfolioContent` in `portfolioData.ts`
4. Update hreflang and JSON-LD helpers in `BaseLayout.astro` if required

---

## 9. Despliegue Apache / Plesk

Static output lives in `dist/` after `pnpm build`. Upload `dist` contents to the vhost document root on Plesk.

**`public/.htaccess`** is copied to `dist/.htaccess` automatically.

### Error pages

```apache
ErrorDocument 404 /404.html
```

Missing URLs return the built `404.html` (from `src/pages/404.astro`).

### Cache (`mod_expires`)

When `mod_expires` is enabled on the server:

| MIME types | Policy |
|------------|--------|
| Images (jpg, jpeg, png, svg+xml, x-icon, webp) | 1 year |
| `font/woff2` | 1 year |
| `text/css`, `application/javascript` | 1 month |

HTML is not given long cache headers in this file (typical for SPA-like updates on redeploy).

Verify on Plesk that `AllowOverride` permits `.htaccess` and that `mod_expires` is loaded if you rely on browser caching.

---

## 10. Configuration Reference

### `astro.config.mjs`

```js
site: 'https://aaronmendez.es',
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routing: { prefixDefaultLocale: false },
},
integrations: [sitemap()],
```

### `localStorage`

| Key | Values | Set by |
|-----|--------|--------|
| `preferred-lang` | `es` \| `en` | Language switcher in Header; read by `/` redirect and 404 script |

Legacy key `portfolio-lang` is removed on language switch and on Spanish home load.

---

## 11. Stitch → Astro Mapping

| Stitch mockup | Astro implementation |
|---------------|----------------------|
| Single `code.html` | Componentized `.astro` files |
| CDN Tailwind | Tailwind v4 `@theme` in `global.css` |
| Hardcoded copy | `src/data/portfolioData.ts` (es + en) |
| Static `[ EN ] [ ES ]` | Switcher + `preferred-lang` |
| `#eae6dc` paper | `--color-background: #eae6dc` |
| Newsprint texture | `body::before` overlay in `global.css` |

---

## 12. Related Docs

- [Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [Astro styling / Tailwind](https://docs.astro.build/en/guides/styling/)
- [Tailwind CSS v4 theme](https://tailwindcss.com/docs/theme)
- Project scripts: `CLAUDE.md`, `AGENTS.md`
- User-facing summary: `README.md`

---

*Last aligned with codebase: Astro 7, Tailwind 4.3, bilingual es/en, `portfolioData.ts` content layer, bilingual 404, Apache `.htaccess` for Plesk.*
