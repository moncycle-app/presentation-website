// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.moncycle.app',
  // Keep the existing URLs: /ToS/term_of_service_fr.html, /ToS/term_of_service_en.html
  build: { format: 'file' },
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
