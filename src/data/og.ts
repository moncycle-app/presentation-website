// Link preview images (Open Graph / Twitter), one per language: src/assets/og/preview-<lang>.jpg.
// They stay out of the astro:assets pipeline (never converted or resized) and are served byte for byte by
// src/pages/og/[file].ts under a name that contains a hash of their content: platforms cache previews by
// URL, so a new image gets a new URL. Requirements (checked by `npm run test:og`): 1200×630 JPEG, < 300 KB.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Lang } from '../i18n/config';

export const ogImageSize = { width: 1200, height: 630 } as const;
export const ogImageType = 'image/jpeg';

const sourceDir = join(process.cwd(), 'src/assets/og');

export function ogImageData(lang: Lang): Buffer {
	return readFileSync(join(sourceDir, `preview-${lang}.jpg`));
}

/** File name of the preview image of a language, e.g. preview-fr.3f9a2c1d.jpg */
export function ogImageFile(lang: Lang): string {
	const hash = createHash('sha256').update(ogImageData(lang)).digest('hex').slice(0, 8);
	return `preview-${lang}.${hash}.jpg`;
}

export const ogImagePath = (lang: Lang) => `/og/${ogImageFile(lang)}`;
