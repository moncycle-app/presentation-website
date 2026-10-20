# Agent notes

- Astro static site, no UI framework. Content is French; keep texts, markup and styles unchanged unless asked.
- Content lives in `src/data/` (FAQ, gallery, features…) and `src/components/`; see README.md for the structure.
- Images go through `astro:assets` (`src/assets/`); `public/` is only for files with a fixed URL.
- Build check: `docker compose exec dev npm run build` (runs `astro check`). Dev server: http://localhost:8007/.
- See CLAUDE.md for the commit message rule.
