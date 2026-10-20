import type { ImageMetadata } from 'astro';

import capture1 from '../assets/screenshots/capture1.png';
import capture2 from '../assets/screenshots/capture2.png';
import capture3 from '../assets/screenshots/capture3.png';
import capture4 from '../assets/screenshots/capture4.png';
import capture5 from '../assets/screenshots/capture5.png';
import capture6 from '../assets/screenshots/capture6.png';
import capture7 from '../assets/screenshots/capture7.png';
import capture8 from '../assets/screenshots/capture8.png';
import capture9 from '../assets/screenshots/capture9.png';
import capture10 from '../assets/screenshots/capture10.png';

export type ScreenshotId = 'cycle-table' | 'temperature-curve' | 'fertilitycare-table' | 'fertilitycare-entry' | 'day-entry' | 'keywords' | 'mini-view' | 'export' | 'pdf-billings' | 'pdf-fertilitycare';

export interface Screenshot {
	id: ScreenshotId;
	image: ImageMetadata;
	/** Landscape screenshot: takes two slots in the strip */
	wide?: boolean;
}

// Screenshots shown in the gallery of the demo section, in display order.
// The alt text and the caption of each one live in src/i18n/<lang>/screenshots.ts.
export const screenshots: Screenshot[] = [
	{ id: 'cycle-table', image: capture1 },
	{ id: 'temperature-curve', image: capture2 },
	{ id: 'fertilitycare-table', image: capture3 },
	{ id: 'fertilitycare-entry', image: capture4 },
	{ id: 'day-entry', image: capture5 },
	{ id: 'keywords', image: capture6 },
	{ id: 'mini-view', image: capture7 },
	{ id: 'export', image: capture8 },
	{ id: 'pdf-billings', image: capture9 },
	{ id: 'pdf-fertilitycare', image: capture10, wide: true },
];
