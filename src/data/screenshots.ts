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

export interface Screenshot {
	image: ImageMetadata;
	alt: string;
	caption: string;
	/** Landscape screenshot: takes two slots in the strip */
	wide?: boolean;
}

// Screenshots shown in the gallery of the demo section, in display order.
export const screenshots: Screenshot[] = [
	{
		image: capture1,
		alt: 'Tableau d’un cycle Billings de 26 jours, en mode sombre\u00a0: tampons jaunes, puis tampons «\u00a0bébé\u00a0» jusqu’au jour sommet, suivis des jours comptés et de tampons verts, avec sensations et observations notées chaque jour.',
		caption: 'Le tableau d’un cycle',
	},
	{
		image: capture2,
		alt: 'Courbe de température d’un cycle de 25 jours, avec le décalage thermique bien visible, au-dessus du tableau où chaque jour affiche sa température.',
		caption: 'La courbe de température',
	},
	{
		image: capture3,
		alt: 'Deux cycles FertilityCare en mode sombre, chaque jour noté avec les codes du modèle Creighton (H, MB, 0 AD, 10 KL, 6 CP X3…) et le jour PIC signalé.',
		caption: 'La notation FertilityCare',
	},
	{
		image: capture4,
		alt: 'Saisie FertilityCare d’une journée\u00a0: choix de la gommette, note «\u00a0L B 0 AD\u00a0» validée, cases pour le saignement, les sensations et le test au doigt.',
		caption: 'La saisie FertilityCare',
	},
	{
		image: capture5,
		alt: 'Saisie d’une journée en mode sombre\u00a0: gommette, sensations et observations à choisir parmi ses propres mots clés, évènements (union, jour sommet, compteur de jours…) et commentaire.',
		caption: 'La saisie d’une journée',
	},
	{
		image: capture6,
		alt: 'Réglages des sensations et observations\u00a0: liste des mots clés (sec, humide, collant, pâteux…) avec le nombre de jours qui les utilisent, et champ pour en créer un nouveau.',
		caption: 'Vos propres mots clés',
	},
	{
		image: capture7,
		alt: 'Vue mini en mode sombre\u00a0: chaque cycle tient sur une seule ligne de gommettes colorées, pour les comparer d’un coup d’œil.',
		caption: 'Plusieurs cycles côte à côte',
	},
	{
		image: capture8,
		alt: 'Page «\u00a0Mes données\u00a0»\u00a0: export des observations sur une période choisie, au format PDF, CSV ou NFP.',
		caption: 'L’export de ses données',
	},
	{
		image: capture9,
		alt: 'Export PDF d’un cycle Billings\u00a0: un tableau avec, pour chaque jour, la date, le tampon, le pic, les unions, les sensations, les observations et le commentaire.',
		caption: 'Le PDF d’un cycle Billings',
	},
	{
		image: capture10,
		alt: 'Export PDF FertilityCare au format paysage\u00a0: une ligne par cycle, avec pour chaque jour le tampon coloré, le pic, le saignement, la glaire et les commentaires, comme sur un tableau papier.',
		caption: 'Le PDF d’un cycle FertilityCare',
		wide: true,
	},
];
