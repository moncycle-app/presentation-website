import type { ScreenshotId } from '../../data/screenshots';
import type { ScreenshotText } from '../types';

export const screenshots: Record<ScreenshotId, ScreenshotText> = {
	'cycle-table': {
		alt: 'Chart of a 26-day Billings cycle, in dark mode: yellow stamps, then “baby” stamps up to the peak day, followed by the counted days and green stamps, with sensations and observations noted every day.',
		caption: 'The chart of a cycle',
	},
	'temperature-curve': {
		alt: 'Temperature curve of a 25-day cycle, with the thermal shift clearly visible, above the chart where each day shows its temperature.',
		caption: 'The temperature curve',
	},
	'fertilitycare-table': {
		alt: 'Two FertilityCare cycles in dark mode, each day recorded with the codes of the Creighton model (H, MB, 0 AD, 10 KL, 6 CP X3…) and the peak day marked.',
		caption: 'FertilityCare notation',
	},
	'fertilitycare-entry': {
		alt: 'FertilityCare entry for one day: stamp choice, the note “L B 0 AD” validated, boxes for bleeding, sensations and the finger test.',
		caption: 'FertilityCare entry',
	},
	'day-entry': {
		alt: 'Entry of a day in dark mode: stamp, sensations and observations to pick from your own keywords, events (intercourse, peak day, day counter…) and comment.',
		caption: 'Entering a day',
	},
	keywords: {
		alt: 'Sensations and observations settings: list of keywords (dry, damp, sticky, pasty…) with the number of days that use them, and a field to create a new one.',
		caption: 'Your own keywords',
	},
	'mini-view': {
		alt: 'Mini view in dark mode: each cycle fits on a single row of coloured stamps, to compare them at a glance.',
		caption: 'Several cycles side by side',
	},
	export: {
		alt: '“My data” page: export of observations over a chosen period, in PDF, CSV or NFP format.',
		caption: 'Exporting your data',
	},
	'pdf-billings': {
		alt: 'PDF export of a Billings cycle: a chart with, for each day, the date, the stamp, the peak, intercourse, sensations, observations and comment.',
		caption: 'The PDF of a Billings cycle',
	},
	'pdf-fertilitycare': {
		alt: 'FertilityCare PDF export in landscape format: one row per cycle, with for each day the coloured stamp, the peak, bleeding, mucus and comments, like on a paper chart.',
		caption: 'The PDF of a FertilityCare cycle',
	},
};
