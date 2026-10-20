# moncycle.app – presentation website

Static site built with [Astro](https://astro.build): the landing page (French) and the terms of use (French and English). Published at https://www.moncycle.app/ (GitHub Pages, see `CNAME`).

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
  components/      one component per section of the page; components/legal/ holds the terms text
  data/            content as data: FAQ, screenshots, features, methods, tech links, icons, nav, legal metadata, site constants
  layouts/         BaseLayout (landing page) and LegalLayout (terms)
  pages/           index, 404, ToS/term_of_service_[lang], and generated sitemap.xml, robots.txt, llms.txt
  scripts/         browser scripts (TypeScript), bundled by Astro
  styles/          global.css (cascade layers: tokens, base, components, sections/*) and legal.css
  utils/
```

## Editing

- **FAQ**: edit `src/data/faq.ts`. The page and the `FAQPage` JSON-LD are generated from it.
- **Screenshots**: add the PNG to `src/assets/screenshots/` and an entry in `src/data/screenshots.ts`.
- **Terms**: text in `src/components/legal/TermsFr.astro` and `TermsEn.astro`; titles, table of contents and `lastmod` in `src/data/legal.ts`.
- **Sitemap dates**: `homeLastmod` in `src/data/site.ts` and `lastmod` in `src/data/legal.ts`.
- `llms.txt` is a template in `src/pages/llms.txt.ts`; keep it in sync with the content.

## Deployment

`.github/workflows/deploy.yml` builds on every push and pull request, and deploys the `webpage` branch to GitHub Pages (Settings → Pages → Source: **GitHub Actions**).
