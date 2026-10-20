import type { ScreenshotId } from '../../data/screenshots';
import type { ScreenshotText } from '../types';

export const screenshots: Record<ScreenshotId, ScreenshotText> = {
	'cycle-table': {
		alt: 'Chart of a 26-day Billings cycle in dark mode: yellow stamps, then “baby” stamps up to the Peak day, followed by the counted days and green stamps, with the sensations and observations recorded each day.',
		caption: 'A cycle chart',
	},
	'temperature-curve': {
		alt: 'Temperature curve of a 25-day cycle, with a clearly visible temperature shift, above the chart where each day shows its temperature.',
		caption: 'The temperature curve',
	},
	'fertilitycare-table': {
		alt: 'Two FertilityCare cycles in dark mode. Each day is recorded with Creighton Model codes (H, MB, 0 AD, 10 KL, 6 CP X3…) and the Peak day is marked.',
		caption: 'FertilityCare notation',
	},
	'fertilitycare-entry': {
		alt: 'FertilityCare entry for one day: choice of sticker, the code “L B 0 AD” confirmed, and boxes for bleeding, sensations and the finger test.',
		caption: 'FertilityCare entry',
	},
	'day-entry': {
		alt: 'Entry for one day in dark mode: stamp, sensations and observations chosen from your own keywords, events (intercourse, Peak day, day count…) and a comment.',
		caption: 'Entering a day',
	},
	keywords: {
		alt: 'Settings for sensations and observations: a list of keywords (dry, moist, sticky, pasty…) with the number of days each one is used, and a field to create a new one.',
		caption: 'Your own keywords',
	},
	'mini-view': {
		alt: 'Mini view in dark mode: each cycle fits on a single row of coloured stamps, so you can compare cycles at a glance.',
		caption: 'Several cycles side by side',
	},
	export: {
		alt: '“My data” page: export of observations for a chosen period, as PDF, CSV or NFP.',
		caption: 'Exporting your data',
	},
	'pdf-billings': {
		alt: 'PDF export of a Billings cycle: a table that shows, for each day, the date, the stamp, the Peak, intercourse, sensations, observations and the comment.',
		caption: 'PDF of a Billings cycle',
	},
	'pdf-fertilitycare': {
		alt: 'FertilityCare PDF export in landscape format: one row per cycle. Each day shows the coloured sticker, the Peak, bleeding, mucus and comments, as on a paper chart.',
		caption: 'PDF of a FertilityCare cycle',
	},
};
