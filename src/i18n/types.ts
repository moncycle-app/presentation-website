// Shapes of the content that exists once per language (src/i18n/<lang>/).
// French is the reference: `Messages` (index.ts) is the type of the French messages, so a language
// that misses or misspells a key does not compile.
import type { IconName } from '../data/icons';

export interface FaqEntry {
	id: string;
	/** HTML (non-breaking spaces as entities) */
	question: string;
	/** HTML blocks (<p> or <ul>), in order */
	answer: string[];
}

export interface Feature {
	icon: IconName;
	/** HTML */
	title: string;
	/** HTML */
	text: string;
}

export interface FeatureGroup {
	title: string;
	features: Feature[];
}

export interface Method {
	name: string;
	compatibility: 'full' | 'partial';
	badge: string;
	/** HTML */
	text: string;
}

export interface TechLink {
	icon: IconName;
	href: string;
	/** HTML */
	title: string;
	/** HTML */
	text: string;
}

export interface ScreenshotText {
	alt: string;
	caption: string;
}

export interface LegalPage {
	title: string;
	description: string;
	/** Heading, one entry per line */
	h1: string[];
	version: string;
	/** Label of the language list, and the text of the link that leads to this language */
	languageLabel: string;
	readThis: string;
	/** Link back to the home page, at the top of the page */
	home: string;
	contents: { label: string; title: string; sections: { id: string; title: string }[] };
	footer: string;
	/** Last modification, for the sitemap */
	lastmod: string;
}
