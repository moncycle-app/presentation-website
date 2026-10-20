// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.moncycle.app',
  // 'preserve' writes each page as authored: src/pages/[lang]/index.astro → fr/index.html (served as /fr/),
  // src/pages/[lang]/term_of_service.astro → fr/term_of_service.html. ('file' would turn the first into fr.html.)
  build: { format: 'preserve' },
  trailingSlash: 'ignore',
  prefetch: true,
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '100 900',
            style: 'normal',
            display: 'swap',
            src: ['./src/assets/fonts/montserrat-latin-var.woff2'],
          },
        ],
      },
    },
  ],
});
