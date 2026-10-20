import type { ScreenshotId } from '../../data/screenshots';
import type { ScreenshotText } from '../types';

export const screenshots: Record<ScreenshotId, ScreenshotText> = {
	'cycle-table': {
		alt: 'Tableau d’un cycle Billings de 26 jours, en mode sombre\u00a0: tampons jaunes, puis tampons «\u00a0bébé\u00a0» jusqu’au jour sommet, suivis des jours comptés et de tampons verts, avec sensations et observations notées chaque jour.',
		caption: 'Le tableau d’un cycle',
	},
	'temperature-curve': {
		alt: 'Courbe de température d’un cycle de 25 jours, avec le décalage thermique bien visible, au-dessus du tableau où chaque jour affiche sa température.',
		caption: 'La courbe de température',
	},
	'fertilitycare-table': {
		alt: 'Deux cycles FertilityCare en mode sombre, chaque jour noté avec les codes du modèle Creighton (H, MB, 0 AD, 10 KL, 6 CP X3…) et le jour PIC signalé.',
		caption: 'La notation FertilityCare',
	},
	'fertilitycare-entry': {
		alt: 'Saisie FertilityCare d’une journée\u00a0: choix de la gommette, note «\u00a0L B 0 AD\u00a0» validée, cases pour le saignement, les sensations et le test au doigt.',
		caption: 'La saisie FertilityCare',
	},
	'day-entry': {
		alt: 'Saisie d’une journée en mode sombre\u00a0: gommette, sensations et observations à choisir parmi ses propres mots clés, évènements (union, jour sommet, compteur de jours…) et commentaire.',
		caption: 'La saisie d’une journée',
	},
	keywords: {
		alt: 'Réglages des sensations et observations\u00a0: liste des mots clés (sec, humide, collant, pâteux…) avec le nombre de jours qui les utilisent, et champ pour en créer un nouveau.',
		caption: 'Vos propres mots clés',
	},
	'mini-view': {
		alt: 'Vue mini en mode sombre\u00a0: chaque cycle tient sur une seule ligne de gommettes colorées, pour les comparer d’un coup d’œil.',
		caption: 'Plusieurs cycles côte à côte',
	},
	export: {
		alt: 'Page «\u00a0Mes données\u00a0»\u00a0: export des observations sur une période choisie, au format PDF, CSV ou NFP.',
		caption: 'L’export de ses données',
	},
	'pdf-billings': {
		alt: 'Export PDF d’un cycle Billings\u00a0: un tableau avec, pour chaque jour, la date, le tampon, le pic, les unions, les sensations, les observations et le commentaire.',
		caption: 'Le PDF d’un cycle Billings',
	},
	'pdf-fertilitycare': {
		alt: 'Export PDF FertilityCare au format paysage\u00a0: une ligne par cycle, avec pour chaque jour le tampon coloré, le pic, le saignement, la glaire et les commentaires, comme sur un tableau papier.',
		caption: 'Le PDF d’un cycle FertilityCare',
	},
};
