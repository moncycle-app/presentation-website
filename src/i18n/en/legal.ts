import type { LegalPage } from '../types';

// Terms of use and privacy policy. French is the reference version; the text lives in Terms.astro.
export const legal: LegalPage = {
	title: "moncycle.app – Terms of service and privacy policy",
	description: "Terms of service and privacy policy of moncycle.app, the cycle charting application for natural family planning methods.",
	h1: ['moncycle.app', "Terms of service and privacy policy"],
	version: 'Version 2.0 · in effect from 1 November 2026',
	languageLabel: 'Language',
	readThis: 'Read in English (translation)',
	home: '← Back to the home page',
	contents: {
		label: 'Contents',
		title: 'Contents',
		sections: [
			{ id: 'publisher', title: 'Who is behind moncycle.app?' },
			{ id: 'scope', title: 'Purpose and acceptance' },
			{ id: 'service', title: "What the application does (and does not do)" },
			{ id: 'account', title: 'Your account' },
			{ id: 'rules', title: "Rules of use" },
			{ id: 'liability', title: 'Liability' },
			{ id: 'data', title: 'Your personal data (GDPR)' },
			{ id: 'ownership', title: 'Ownership and licences' },
			{ id: 'termination', title: 'Closing an account' },
			{ id: 'changes', title: 'Changes to these terms' },
			{ id: 'law', title: 'Applicable law and disputes' },
			{ id: 'contact', title: 'Contact' },
		],
	},
	footer: 'moncycle.app is an application of Tech 4 Fertility, a French non-profit association (law of 1901) – RNA W271007328.',
	lastmod: '2026-10-23',
};
