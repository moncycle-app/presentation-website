import type { LegalPage } from '../types';

// Terms of use and privacy policy. French is the reference version; this English one is a courtesy translation.
// The text lives in Terms.astro.
export const legal: LegalPage = {
	title: 'moncycle.app – Terms of use and privacy policy',
	description: 'Terms of use and privacy policy of moncycle.app, the cycle tracking app for natural methods.',
	h1: ['moncycle.app', 'Terms of use and privacy policy'],
	version: 'Version 2.0 · in force on November 1st, 2026',
	languageLabel: 'Language',
	readThis: 'Read in English',
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
};
