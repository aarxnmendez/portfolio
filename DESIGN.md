# The Engineering Gazette — Design & Architecture

Single source of truth for the portfolio project. Originated from the **Stitch** broadsheet mockup (*Digital Broadsheet*); implemented in Astro with native i18n, Tailwind CSS v4, and a component-driven architecture.

---

## 1. Brand & Visual Intent

The design adopts a **high-end digital broadsheet** aesthetic: authoritative journalism meets modern minimalism with a **Brutalist** edge. Information hierarchy is driven by typographic scale, rigid grid lines, and stark monochrome contrast.

**Target audience:** design connoisseurs, editorial directors, and technical collaborators who value clarity and intellectual rigor.

**Emotional tone:** *calculated prestige* — a definitive archive feel. Grayscale imagery, high-density layouts, and narrative structure establish a portfolio that reads like a newspaper, not a generic landing page.

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
| Framework | **Astro 7** | Static output, zero-JS by default |
| Styling | **Tailwind CSS v4** | Via `@tailwindcss/vite`; theme in `src/styles/global.css` |
| Language | **TypeScript** | Content types in `src/data/content.ts`; `@ts-check` in config |
| Package manager | **pnpm** | `pnpm dev`, `pnpm build`, `pnpm preview` |
| Node | **≥ 22.12.0** | See `package.json` engines |

**Key dependencies:** `astro`, `tailwindcss`, `@tailwindcss/vite`

**Dev server:** `pnpm dev` (or `astro dev --background` per project conventions)

---

## 3. Project Structure

```
portfolio/
├── astro.config.mjs          # site URL, i18n locales, Tailwind Vite plugin
├── DESIGN.md                 # This document
├── package.json
├── public/                   # Static assets (favicon, etc.)
└── src/
    ├── data/
    │   └── content.ts        # All portfolio copy (es / en) — single edit point
    ├── components/
    │   ├── Header.astro      # Masthead, nav, language switcher, CV CTA
    │   ├── Hero.astro        # Portrait + headline + biography
    │   ├── SelectedWorks.astro
    │   ├── Timeline.astro
    │   ├── SkillsExtra.astro # Classifieds + Extra! Extra!
    │   ├── Contact.astro
    │   └── Footer.astro
    ├── layouts/
    │   └── BaseLayout.astro  # HTML shell, fonts, hreflang, client scripts
    ├── pages/
    │   ├── index.astro       # Spanish (default) → /
    │   └── en/
    │       └── index.astro   # English → /en
    └── styles/
        └── global.css        # Tailwind @theme, custom utilities, newsprint texture
```

**Principle:** Components are presentational; **all copy lives in** `src/data/content.ts`. Pages only set `lang` and assemble components. Do not hardcode user-facing strings in `.astro` files.

---

## 4. Gestión de Contenido

`src/data/content.ts` is the **single source of truth** for every user-facing string on the site. To change headlines, project descriptions, navigation labels, contact text, or any portfolio copy, edit this file only — never scatter text across components.

### Structure

```ts
export const content: Record<Lang, PortfolioContent> = {
  es: { meta, header, hero, works, timeline, skills, contact, footer },
  en: { meta, header, hero, works, timeline, skills, contact, footer },
};

export function getContent(lang: Lang): PortfolioContent {
  return content[lang];
}
```

### Content map

| Key | Section | Component |
|-----|---------|-----------|
| `meta` | Page title (`<title>`) | Pages / `BaseLayout` |
| `header` | Masthead, nav, CV CTA, language labels | `Header.astro` |
| `hero` | Portrait alt, fig caption, headline, biography | `Hero.astro` |
| `works` | Selected projects grid + link labels | `SelectedWorks.astro` |
| `timeline` | Career / education narrative | `Timeline.astro` |
| `skills` | Classifieds + Extra! Extra! | `SkillsExtra.astro` |
| `contact` | Letter to the editor, email, copy button | `Contact.astro` |
| `footer` | Name, copyright, social links | `Footer.astro` |

### Editing workflow

1. Open `src/data/content.ts`
2. Update the `es` block (Spanish, served at `/`) and the `en` block (English, served at `/en`)
3. Keep both locales in sync when adding or renaming keys
4. Components receive `lang` as a prop and call `getContent(lang)` — no markup changes needed for text-only edits

### TypeScript types

Exported interfaces (`Project`, `TimelineEntry`, `SkillCategory`, `ExtraItem`, `PortfolioContent`, `Lang`) enforce structure. When adding fields, extend the interface first, then fill both locale objects.

---

## 5. Internationalization (i18n)

### 5.1 Routing (Astro native)

Configured in `astro.config.mjs`:

| Locale | Code | URL | Page file |
|--------|------|-----|-----------|
| Spanish (default) | `es` | `/` | `src/pages/index.astro` |
| English | `en` | `/en` | `src/pages/en/index.astro` |

- `defaultLocale: 'es'`
- `prefixDefaultLocale: false` — Spanish has no `/es` prefix

Both pages reuse the **same components**, passing `lang="es"` or `lang="en"`.

### 5.2 Content + routing

- **Copy:** `src/data/content.ts` (see [Gestión de Contenido](#4-gestión-de-contenido))
- **Routing:** Astro native i18n in `astro.config.mjs`
- Components consume text via `getContent(lang)` based on page locale

### 5.3 Language switcher (Header)

Minimal inline control in the masthead meta row:

```
[ EN ] | [ ES ]
```

- Links use `getRelativeLocaleUrl()` from `astro:i18n` (`/` for Spanish, `/en` for English)
- Active locale: `font-bold`
- On click: `localStorage.removeItem('portfolio-lang')` then `localStorage.setItem('preferred-lang', 'es' | 'en')` via `onclick` on each link in `Header.astro`
- Spanish link: `href="/"` · English link: `href="/en"`

### 5.4 Client-side locale detection (soft redirect)

**Why client-side:** Static site (SSG) — no server redirect. Crawlers receive both `/` and `/en` as distinct indexable pages.

**Where it runs:** Only `src/pages/index.astro` (Spanish root `/`). The English page `/en` **never** auto-redirects to `/`.

**Logic** (`<script is:inline>` on root page only):

```js
localStorage.removeItem('portfolio-lang'); // legacy key cleanup

const savedLang = localStorage.getItem('preferred-lang');
const browserLang = navigator.language || '';

if (savedLang === 'en' || (!savedLang && browserLang.startsWith('en'))) {
  window.location.href = '/en';
}
```

| Condition | Behavior |
|-----------|----------|
| `preferred-lang` is `en` | Redirect to `/en` (e.g. user chose English, then visited `/`) |
| No `preferred-lang` + browser language starts with `en` | Soft redirect to `/en` (first visit) |
| `preferred-lang` is `es` | Stay on `/` — auto-detection ignored |
| User visits `/en` directly | No redirect script; English content shown |

**localStorage key:** `preferred-lang` — values `es` or `en`

### 5.5 SEO (hreflang)

`BaseLayout.astro` sets dynamically per page:

- `<html lang="es">` or `<html lang="en">`
- Alternate links for both locales + `x-default` (Spanish root)

Production URLs (via `site` in `astro.config.mjs`):

```html
<link rel="alternate" hreflang="es" href="https://aaronmendez.es/" />
<link rel="alternate" hreflang="en" href="https://aaronmendez.es/en/" />
<link rel="alternate" hreflang="x-default" href="https://aaronmendez.es/" />
```

Absolute URLs are built with `getRelativeLocaleUrl()` + `site`. No server-side redirects — SEO-friendly for Google indexing both versions.

---

## 6. Design System (Implementation)

Values below reflect **what is in code** (`global.css` + components), not the original Stitch YAML export.

### 6.1 Colors

Defined in `@theme` in `src/styles/global.css`:

| Token | Hex | Usage |
|-------|-----|--------|
| `background` / `surface` | `#eae6dc` | Newsprint / cream paper |
| `primary` | `#000000` | Headlines, borders, emphasis |
| `secondary` | `#2d2d2d` | Secondary body, nav links |
| `on-surface` | `#1a1a1a` | Default body text |
| `on-surface-variant` | `#404040` | Footer meta, captions |

**Rules:**

- Strictly monochromatic UI; imagery **grayscale + high contrast**
- No colored accents; hierarchy via black weight and border thickness
- Selection: black background, cream text

### 6.2 Typography

Loaded via Google Fonts in `BaseLayout` (Playfair Display, Inter, Courier Prime, JetBrains Mono).

| Role | Family | Tailwind token | Usage |
|------|--------|----------------|--------|
| Display / headlines | Playfair Display | `font-headline-lg`, `font-headline-md`, `font-display-xl` | Masthead, section titles |
| Body | Inter | `font-body-md`, `font-body-lg` | Paragraphs, long-form |
| Metadata / labels | Courier Prime | `font-label-mono` | Vol/date, nav, tags, buttons |
| Caption | Inter | `font-caption` | Secondary descriptions |

Custom `text-*` scale in `@theme` (e.g. `text-label-mono`, `text-display-xl`) includes line-height, weight, and letter-spacing.

**Editorial accents:** italics on captions and pull-quote-style lines; **drop cap** on biography (`drop-cap` utility in `global.css`).

### 6.3 Spacing

| Token | Value | Tailwind usage |
|-------|-------|----------------|
| `unit` | 4px | Base unit |
| `gutter` | 24px | `gap-gutter`, nav gaps |
| `margin-edge` | 40px | `px-margin-edge` |
| `column-gap` | 32px | Grid column gaps |
| `section-padding` | 80px | `pb-section-padding`, `mb-section-padding` |

### 6.4 Layout

- **Max width:** `max-w-7xl` container with `px-margin-edge`
- **Grid:** 12-column mental model (`md:grid-cols-12`, `md:col-span-*`)
- **Desktop:** multi-column with `column-gap` 32px; sidebars ~5–6 columns
- **Mobile:** single column stack; borders remain to define sections
- **Grid lines:** `border-black`, `border-b-4`, `v-rule` (vertical rule), `border-double-thick` (6px double top)

Do not rely on whitespace alone — **physical borders** separate regions.

### 6.5 Custom CSS utilities (`global.css`)

| Class | Purpose |
|-------|---------|
| `border-double-thick` | 6px double top border |
| `border-double-bottom` | 4px double bottom border |
| `border-dotted-custom` | 1px dotted box (classifieds) |
| `v-rule` | 1px vertical column divider |
| `drop-cap` | Biography opening letter |
| `halftone-container` | Grayscale + radial dot overlay on images |
| `no-scrollbar` | Horizontal nav scroll without visible bar |
| `body::before` | Fixed newsprint texture overlay (40% opacity) |

### 6.6 Elevation & depth

**No shadows, no blur.** Depth via:

- Tonal layering (`bg-black/[0.03]`, hover `bg-black/5` on project cards)
- 1px black borders on all interactive containers
- Border weight (1px vs 4px vs double)

### 6.7 Shapes

- **Border radius:** `0px` everywhere (`--radius-DEFAULT`, `lg`, `xl`); only `full` for pill exceptions if needed
- **Images:** rectangular frames, halftone filter; no rounded or circular crops
- **Buttons:** 1px stroke; hover invert (black fill, white text)

---

## 7. Components (Page Map)

| Component | Section | Content keys in `content.ts` |
|-----------|---------|-------------------------|
| `Header.astro` | Masthead | `header` |
| `Hero.astro` | Front page story | `hero` |
| `SelectedWorks.astro` | Project grid (3 cols) | `works` |
| `Timeline.astro` | Chronological editorial | `timeline` |
| `SkillsExtra.astro` | Classifieds + Extra | `skills` |
| `Contact.astro` | Letter to the editor | `contact` |
| `Footer.astro` | Footer + social links | `footer` |

### Component patterns

- **Buttons:** `font-label-mono`, uppercase, 1px `border-black`; hover `bg-black text-white`
- **Tags/chips:** small bordered rectangles, `text-[9px]` uppercase mono
- **Cards/projects:** bordered articles; JS hover sets `backgroundColor` (also `hover:bg-black/5`)
- **Lists:** index numbers (`01`, `02`) in faded serif + mono badges

---

## 8. Development Conventions

1. **Copy:** Only in `src/data/content.ts` — both `es` and `en` entries required for new strings.
2. **Styles:** Prefer Tailwind utilities; shared vintage effects in `global.css`.
3. **Components:** Accept `lang: Lang` prop; consume text via `getContent(lang)`.
4. **Pages:** Thin wrappers — import `BaseLayout` + components, set `lang`, pass `title` from `getContent(lang).meta`.
5. **i18n URLs:** Use `getRelativeLocaleUrl()` / `getAbsoluteLocaleUrl()` from `astro:i18n`, not hardcoded paths.
6. **Comments:** No emoticons in code comments.
7. **Commits:** Only when explicitly requested.

### Adding a new locale (future)

1. Add locale to `astro.config.mjs` `locales`
2. Add page under `src/pages/<locale>/index.astro`
3. Extend `Lang` type and `content` object in `src/data/content.ts`
4. Update hreflang block in `BaseLayout.astro`

---

## 9. Configuration Reference

### `astro.config.mjs`

```js
site: 'https://aaronmendez.es'   // Production canonical + hreflang base
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routing: { prefixDefaultLocale: false },
}
```

### `localStorage`

| Key | Values | Set by |
|-----|--------|--------|
| `preferred-lang` | `es` \| `en` | Language switcher click in Header |

---

## 10. Stitch → Astro Mapping

| Stitch mockup | Astro implementation |
|---------------|----------------------|
| Single `code.html` | Componentized `.astro` files |
| CDN Tailwind + inline config | Tailwind v4 `@theme` in `global.css` |
| Hardcoded English text | `src/data/content.ts` (es + en) |
| Static `[ EN ] [ ES ]` | Functional switcher + localStorage |
| `#eae6dc` paper | `--color-background: #eae6dc` |
| Courier Prime mono labels | `font-label-mono` theme token |
| Newsprint texture URL | Same pattern overlay in `body::before` |

---

## 11. Related Docs

- [Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [Astro styling / Tailwind](https://docs.astro.build/en/guides/styling/)
- [Tailwind CSS v4 theme](https://tailwindcss.com/docs/theme)
- Project scripts: `CLAUDE.md`, `AGENTS.md`

---

*Last aligned with codebase: Astro 7 + Tailwind 4.3, bilingual es/en routing, broadsheet Stitch aesthetic.*
