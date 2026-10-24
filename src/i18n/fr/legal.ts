import type { LegalPage } from '../types';

// Terms of use and privacy policy. French is the reference version; the text lives in Terms.astro.
export const legal: LegalPage = {
	title: "moncycle.app – Conditions d’utilisation et politique de confidentialité",
	socialTitle: "Conditions d’utilisation et confidentialité · moncycle.app",
	description: "Conditions d’utilisation et politique de confidentialité de moncycle.app, l’application de suivi de cycle pour les méthodes naturelles.",
	h1: ['moncycle.app', "Conditions d’utilisation et politique de confidentialité"],
	version: 'Version 2.0 · en vigueur à compter du 1er novembre 2026',
	languageLabel: 'Langue',
	readThis: 'Lire en français (version de référence)',
	home: '← Retour à l’accueil',
	contents: {
		label: 'Sommaire',
		title: 'Sommaire',
		sections: [
			{ id: 'publisher', title: 'Qui est derrière moncycle.app ?' },
			{ id: 'scope', title: 'Objet et acceptation' },
			{ id: 'service', title: "Ce que fait (et ne fait pas) l’application" },
			{ id: 'account', title: 'Votre compte' },
			{ id: 'rules', title: "Règles d’utilisation" },
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
	lastmod: '2026-10-23',
};
