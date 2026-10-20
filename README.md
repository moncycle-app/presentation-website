# moncycle.app – presentation website

Static site built with [Astro](https://astro.build): the landing page and the terms of use, in French and English (`/fr/`, `/en/`; the structure is ready for more languages). Published at https://www.moncycle.app/ (GitHub Pages, see `CNAME`).

## Development

Requires Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # astro check + astro build → dist/
npm run preview  # serve dist/
```

Optional `.env` (see `.env.example`): `PUBLIC_NEWS_URL` and `PUBLIC_STATS_URL` point the browser to other JSON sources.

## Structure

```
public/            files served as is: favicons, CNAME, image/preview.png, apple-touch-icon, video/
src/
  assets/          images, screenshots and the font (optimised by Astro)
  components/      one component per section of the page (each takes a `lang` prop)
  data/            language-independent data: screenshots, icons, site constants, structured data
  i18n/            the list of languages (config.ts) and, per language, all the text: UI, sections, FAQ,
                   features, methods, tech links, screenshots texts, terms of use, llms summary
  layouts/         BaseLayout (home pages) and LegalLayout (terms)
  pages/           index (language selector), [lang]/index, [lang]/term_of_service, 404, and generated
                   sitemap.xml, robots.txt, llms.txt, llms-[lang].txt
  scripts/         browser scripts (TypeScript), bundled by Astro
  styles/          global.css (cascade layers: tokens, base, components, sections/*) and legal.css
  utils/
```

## Editing

- **Text**: `src/i18n/<lang>/` (see "Languages" in `AGENTS.md`). The FAQ page and the `FAQPage` JSON-LD are both generated from `faq.ts`.
- **Adding a language**: add it to `src/i18n/config.ts`, copy `src/i18n/en/` and translate it (steps in `AGENTS.md`).
- **Screenshots**: add the PNG to `src/assets/screenshots/`, an entry in `src/data/screenshots.ts` and its texts in each `src/i18n/<lang>/screenshots.ts`.
- **Terms**: text in `src/i18n/<lang>/Terms.astro`; titles, table of contents and `lastmod` in `src/i18n/<lang>/legal.ts`.
- **Sitemap dates**: `homeLastmod` in `src/data/site.ts` and `lastmod` in each `legal.ts`.
- `llms.txt` (English) and `llms-<lang>.txt` are templates in `src/i18n/<lang>/llms.ts`; keep them in sync with the content.

## Deployment

`.github/workflows/deploy.yml` builds on every push and pull request, and deploys the `webpage` branch to GitHub Pages (Settings → Pages → Source: **GitHub Actions**).
