# AGENTS.md

Guide for AI agents (and humans) working on this repository.

## Project

Presentation website of **moncycle.app** (https://www.moncycle.app), a cycle-tracking notebook for natural
family planning methods (Billings, FertilityCare), published by the Tech 4 Fertility association.
Statically generated with [Astro](https://astro.build) 7, no UI framework, no server adapter.
The page content is **French**; the terms of use exist in French (reference version) and English.

Pages: the home page (`/`), the terms of use (`/ToS/term_of_service_fr.html`, `/ToS/term_of_service_en.html`)
and a 404 page. Generated files: `/sitemap.xml`, `/robots.txt`, `/llms.txt`.

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
  components/              One component per section of the home page, plus Icon, IconSprite, EmailLink
    legal/                 TermsFr.astro / TermsEn.astro: the text of the terms of use
  data/                    Content as data (see below), icons, nav, site constants, structured data
  layouts/
    BaseLayout.astro       Home page <head> (SEO, Open Graph, fonts, scripts), skip link, icon sprite
    LegalLayout.astro      Terms of use page shell (own stylesheet, language switch, table of contents)
  pages/
    index.astro            Home page: assembles the section components
    404.astro
    ToS/term_of_service_[lang].astro   Terms of use, one route for both languages
    sitemap.xml.ts  robots.txt.ts  llms.txt.ts   Generated from the site URL
  scripts/                 Browser scripts in TypeScript (main.ts is the entry point)
  styles/
    global.css             Imports the files below, in this order
    layers.css             Declares the cascade layers: tokens, base, components, sections
    tokens.css base.css components.css  sections/*.css   One file per page section
    legal.css              Stylesheet of the terms of use
  utils/html-text.ts       HTML fragment → plain text (used for the FAQ JSON-LD)
```

## Content lives in `src/data/`

- `faq.ts`: the FAQ. The visible FAQ **and** the `FAQPage` JSON-LD are generated from it, so they cannot drift.
  Question and answers are HTML strings (use `&nbsp;` before `?`, `:`, `;` and `%`, as French typography requires).
- `screenshots.ts`: the gallery (image, alt text, caption). Add the PNG to `src/assets/screenshots/` first.
- `features.ts`, `methods.ts`, `tech.ts`, `nav.ts`: the lists rendered by the matching components.
- `icons.ts`: the SVG icons. Use `<Icon name="…" />`; the sprite is emitted once by `IconSprite.astro`.
- `legal.ts`: titles, descriptions, table of contents and `lastmod` of the terms of use.
- `site.ts`: external URLs (`urls`), remote JSON endpoints (`endpoints`), `homeLastmod`.
- `structured-data.ts`: schema.org JSON-LD of the home page (organisation, website, application, FAQ).

Sections without repeated items (hero, steps, Billings history, terms summary…) are plain markup in their component.

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

- `build.format` is `'file'`: `src/pages/ToS/term_of_service_fr.astro` → `dist/ToS/term_of_service_fr.html`.
  Keep these URLs, they are public and listed in the sitemap.
- Internal links and assets are absolute (`/…`): `dist` is meant to be served at the domain root
  (use `npm run preview` locally; opening the HTML from disk does not work).
- The sitemap is a custom endpoint (not `@astrojs/sitemap`) to keep the `/sitemap.xml` URL and the hreflang
  alternates. Update `homeLastmod` (`site.ts`) and `lastmod` (`legal.ts`) when the content changes.
- `llms.txt` is a text template in `src/pages/llms.txt.ts`: keep it consistent with the page content.

## Deployment

GitHub Pages, custom domain from `public/CNAME`. `.github/workflows/deploy.yml` builds on every push and pull
request and deploys the `webpage` branch (repository setting: Pages source = GitHub Actions).

## Conventions

- Everything in the codebase is written in **English**: code, comments, docs, commit messages.
  French only appears as site content (components, `src/data/`, terms of use).
- Do not change the page text, markup or styles unless the task asks for it.
- Terms of use: French is the reference version, English is a courtesy translation. Keep both in sync.
