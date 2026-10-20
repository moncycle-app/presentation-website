export type LegalLang = 'fr' | 'en';

export interface LegalPage {
	lang: LegalLang;
	title: string;
	description: string;
	/** Heading, one entry per line */
	h1: string[];
	version: string;
	/** Link to the other language */
	switchLang: { lang: LegalLang; label: string; text: string };
	contents: { label: string; title: string; sections: { id: string; title: string }[] };
	footer: string;
	/** Last modification, for the sitemap */
	lastmod: string;
}

// Terms of use and privacy policy. French is the reference version; the English one is a courtesy translation.
// The text of each version lives in components/legal/.
export const legalPages: Record<LegalLang, LegalPage> = {
	fr: {
		lang: 'fr',
		title: "moncycle.app – Conditions d'utilisation et politique de confidentialité",
		description: "Conditions d'utilisation et politique de confidentialité de moncycle.app, l'application de suivi de cycle pour les méthodes naturelles.",
		h1: ['moncycle.app', "Conditions d'utilisation et politique de confidentialité"],
		version: 'Version 2.0 · en vigueur au 1er novembre 2026',
		switchLang: { lang: 'en', label: 'Langue', text: 'Read in English' },
		contents: {
			label: 'Sommaire',
			title: 'Sommaire',
			sections: [
				{ id: 'publisher', title: 'Qui est derrière moncycle.app ?' },
				{ id: 'scope', title: 'Objet et acceptation' },
				{ id: 'service', title: "Ce que fait (et ne fait pas) l'application" },
				{ id: 'account', title: 'Votre compte' },
				{ id: 'rules', title: "Règles d'utilisation" },
				{ id: 'liability', title: 'Responsabilité' },
				{ id: 'data', title: 'Vos données personnelles (RGPD)' },
				{ id: 'ownership', title: 'Propriété et licences' },
				{ id: 'termination', title: 'Fin du compte' },
				{ id: 'changes', title: 'Modifications de ces conditions' },
				{ id: 'law', title: 'Droit applicable et litiges' },
				{ id: 'contact', title: 'Contact' },
			],
		},
		footer: 'moncycle.app est une application de Tech 4 Fertility, association loi 1901 – RNA W271007328.',
		lastmod: '2026-10-15',
	},
	en: {
		lang: 'en',
		title: 'moncycle.app – Terms of use and privacy policy',
		description: 'Terms of use and privacy policy of moncycle.app, the cycle tracking app for natural methods.',
		h1: ['moncycle.app', 'Terms of use and privacy policy'],
		version: 'Version 2.0 · in force on November 1st, 2026',
		switchLang: { lang: 'fr', label: 'Language', text: 'Lire en français (version de référence)' },
		contents: {
			label: 'Contents',
			title: 'Contents',
			sections: [
				{ id: 'publisher', title: 'Who is behind moncycle.app?' },
				{ id: 'scope', title: 'Purpose and acceptance' },
				{ id: 'service', title: 'What the app does (and does not do)' },
				{ id: 'account', title: 'Your account' },
				{ id: 'rules', title: 'Rules of use' },
				{ id: 'liability', title: 'Liability' },
				{ id: 'data', title: 'Your personal data (GDPR)' },
				{ id: 'ownership', title: 'Ownership and licences' },
				{ id: 'termination', title: 'Ending your account' },
				{ id: 'changes', title: 'Changes to these terms' },
				{ id: 'law', title: 'Governing law and disputes' },
				{ id: 'contact', title: 'Contact' },
			],
		},
		footer: 'moncycle.app is an application of Tech 4 Fertility, a French non-profit association (loi 1901) – RNA W271007328.',
		lastmod: '2026-10-15',
	},
};
