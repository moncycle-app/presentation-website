# AGENTS.md

Guide for AI agents (and humans) working on this repository.

## Project

Presentation website of **moncycle.app** (https://www.moncycle.app), a cycle-tracking notebook for natural
family planning methods (Billings, FertilityCare), published by the Tech 4 Fertility association.
Statically generated with [Astro](https://astro.build) 7, no UI framework, no server adapter.
The site is **multilingual** (French and English today, built to take more): one home page and one terms of use
page per language. French is the original language and the reference version of the terms of use.
The application itself is French only; the English pages say so.

Pages: a language selector at `/` (the `x-default`, no redirect), the home page of each language (`/fr/`, `/en/`),
the terms of use of each language (`/fr/term_of_service.html`, `/en/term_of_service.html`) and a multilingual
404 page. The former `/ToS/term_of_service_{fr,en}.html` URLs remain as canonical + refresh stubs.
Generated files: `/sitemap.xml`, `/robots.txt`, `/llms.txt` (English) and `/<lang>/llms.txt` (other languages).

## Commands

| Task                         | Command                                     |
| ---------------------------- | ------------------------------------------- |
| Install dependencies         | `npm install`                               |
| Dev server (live reload)     | `npm run dev` → http://localhost:4321/      |
| Production build (`./dist`)  | `npm run build`                             |
| Preview the production build | `npm run preview`                           |
| Type check only              | `npx astro check`                           |

- `npm run build` runs `astro check` then `astro build`: **a passing build means types are valid**.
  Run it before considering a task done.
- `package-lock.json` is committed; only change it through `npm install`.
- `@astrojs/check` does not support TypeScript 7 yet: keep `typescript` on `^6`.
- Node 22 (see `.nvmrc`).
- Optional `.env` (copy `.env.example`): `PUBLIC_NEWS_URL` and `PUBLIC_STATS_URL` point the browser to other
  JSON sources (latest news feed, key figures API).

## Structure

```
public/                    Files served as is, with a fixed URL: favicons, CNAME, image/preview.png,
                           image/apple-touch-icon.png, video/
src/
  assets/
    fonts/                 Montserrat variable font (loaded through the Astro Fonts API)
    images/                Drawings, install screenshots, badge, e-mail image
    screenshots/           capture1…10.png, the app screenshots of the gallery
  components/              One component per section of the home page (each takes a `lang` prop), plus Icon,
                           IconSprite, EmailLink, LanguageSwitcher, LanguageBanner
  data/                    Language-independent data: icons, site constants and URLs, screenshots (images), structured data
  i18n/                    Everything that exists once per language (see "Languages" below)
    config.ts              THE list of languages, default/international languages, path helpers
    index.ts               Registry: getMessages(lang), getTerms(lang)
    types.ts               Shapes of the per-language content
    <lang>/                ui.ts home.ts faq.ts features.ts methods.ts tech.ts screenshots.ts legal.ts llms.ts
                           publisher.ts (Tech 4 Fertility site URL and link in that language)
                           index.ts (assembles them) and Terms.astro (text of the terms of use)
  layouts/
    BaseLayout.astro       <head> (SEO, hreflang, Open Graph, fonts, scripts), skip link, icon sprite
    LegalLayout.astro      Terms of use page shell (own stylesheet, language links, table of contents)
  pages/
    index.astro            Language selector (x-default)
    [lang]/index.astro     Home page of each language: assembles the section components
    [lang]/term_of_service.astro   Terms of use of each language
    ToS/term_of_service_[lang].astro   Former URLs, canonical + refresh stubs (do not add languages)
    404.astro              Multilingual 404
    sitemap.xml.ts  robots.txt.ts  llms.txt.ts  [lang]/llms.txt.ts   Generated from the site URL and the languages
  scripts/                 Browser scripts in TypeScript (main.ts is the entry point); no text lives in them
  styles/
    global.css             Imports the files below, in this order
    layers.css             Declares the cascade layers: tokens, base, components, sections
    tokens.css base.css components.css  sections/*.css   One file per page section
    legal.css              Stylesheet of the terms of use
  utils/html-text.ts       HTML fragment → plain text (used for the FAQ JSON-LD)
```

## Languages

`src/i18n/config.ts` is the single list of languages (`locales`): routes, hreflang links, the switcher, the
sitemap, the language banner and the llms files are all generated from it. Nothing else hard-codes `fr` or `en`:
use `langs`, `otherLangs()`, `homePath()`, `legalPath()` and `alternates()`.

- French is the reference: the `Messages` type is the type of the French messages, so a language that misses or
  misspells a key does not compile (`npm run build` fails).
- Strings used as element content may contain HTML (entities such as `&nbsp;`, links) and are rendered with
  `set:html`; strings used as attributes (`alt`, `label`…) are plain text (use `\u00a0` for a non-breaking space).
  In French use `&nbsp;` before `?`, `:`, `;` and `%`, as the typography requires.
- A component takes `lang` and reads `getMessages(lang)`. Markup is shared; text never lives in a component.
- `ui.ts`: head/meta, header, footer, banners, gallery, 404, selector, structured-data texts.
  `home.ts`: the text of each section. `faq.ts`, `features.ts`, `methods.ts`, `tech.ts`: the lists.
  `screenshots.ts`: alt text and caption of each screenshot (images are in `src/data/screenshots.ts`).
  `legal.ts` + `Terms.astro`: terms of use. `llms.ts`: the llms summary.
- The FAQ page and the `FAQPage` JSON-LD are generated from the same `faq.ts`, so they cannot drift.
- Anchors (`#how`, `#faq`…) and element ids are identical in every language.

### Adding a language

1. Add one line to `locales` in `src/i18n/config.ts`.
2. Copy `src/i18n/en/` to `src/i18n/<lang>/` and translate every file, including `Terms.astro` (courtesy translation
   of the French reference) and `llms.ts`.
3. Register it in `src/i18n/index.ts`.
4. Run `npm run build`: TypeScript lists what is missing. Nothing else changes: the routes, hreflang, sitemap,
   switcher, banner, selector page, 404 and `/<lang>/llms.txt` follow. For a right-to-left language set `dir: 'rtl'`
   and check the styles (logical properties).
5. Adapt what is local: external resources (e.g. where to find a teacher), the licence deed link, date and number
   formats of the fallback key figures.

Every new string must exist in every language.

## Other data in `src/data/`

- `screenshots.ts`: the gallery images (ids, order, `wide`). Add the PNG to `src/assets/screenshots/` first, then
  the alt text and caption in each `src/i18n/<lang>/screenshots.ts`.
- `icons.ts`: the SVG icons. Use `<Icon name="…" />`; the sprite is emitted once by `IconSprite.astro`.
- `site.ts`: external URLs (`urls`), remote JSON endpoints (`endpoints`), `homeLastmod`, `figuresDate`.
- `structured-data.ts`: schema.org JSON-LD (organisation, website, page, application, FAQ), per language.

Sections without repeated items (hero, steps, Billings history, terms summary…) are plain markup in their
component, with their text in `home.ts`.

## Images

- Put images in `src/assets/` and render them with `<Picture>` / `<Image>` from `astro:assets`: Astro generates the
  WebP and responsive sizes, and fingerprints the files. Do not hand-make `-360.webp` style variants.
- `public/` is only for files whose URL must not change (favicons, `CNAME`, Open Graph image, video).
- The e-mail address never appears in clear text in the HTML: use `EmailLink` (an image, replaced by a
  `mailto:` link by `scripts/email.ts`).

## Styles and scripts

- CSS is plain, in cascade layers (`tokens`, `base`, `components`, `sections`); the order of the imports in
  `global.css` is part of the cascade. Colors only through the CSS variables defined in `tokens.css`
  (light and dark themes). No text lives in the CSS.
- Scripts enhance markup that already works without JavaScript (`<html>` gets the `js` class from an inline
  script in `BaseLayout`). Keep it that way. No text lives in the scripts.
- Keep accessibility: `aria-*` attributes, visible focus styles, `prefers-reduced-motion` support.

## Build output

- `build.format` is `'preserve'`: `src/pages/[lang]/index.astro` → `dist/fr/index.html` (served as `/fr/`) and
  `src/pages/[lang]/term_of_service.astro` → `dist/fr/term_of_service.html`. (`'file'` would write `fr.html`.)
  Keep these URLs, they are public and listed in the sitemap.
- SEO is part of the design and the HTML must stay complete without JavaScript: every page is static, with its own
  canonical, `hreflang` alternates (all languages + `x-default` → `/`), `og:locale` and JSON-LD in its language.
  Only the news, the live key figures (static fallback in the HTML) and the e-mail address are filled in by scripts.
- GitHub Pages cannot send redirects, hence `/` is a real selector page and the language banner
  (`LanguageBanner.astro`, `scripts/lang-banner.ts`) only suggests; it never redirects.
- Internal links and assets are absolute (`/…`): `dist` is meant to be served at the domain root
  (use `npm run preview` locally; opening the HTML from disk does not work).
- The sitemap is a custom endpoint (not `@astrojs/sitemap`) to control the hreflang alternates. Update
  `homeLastmod` (`site.ts`) and `lastmod` (each `i18n/<lang>/legal.ts`) when the content changes.
- `/llms.txt` is the English summary (`llmsLang`), `/<lang>/llms.txt` the others, each a template in
  `src/i18n/<lang>/llms.ts`: keep them consistent with the page content.

## Deployment

GitHub Pages, custom domain from `public/CNAME`. `.github/workflows/deploy.yml` builds on every push and pull
request and deploys the `webpage` branch (repository setting: Pages source = GitHub Actions).

## Conventions

- Everything in the codebase is written in **English**: code, comments, docs, commit messages.
  Site content lives in `src/i18n/<lang>/` (French and English, plus any added language).
- Do not change the page text, markup or styles unless the task asks for it.
- Terms of use: French is the reference version, the other languages are courtesy translations. Keep all in sync.
