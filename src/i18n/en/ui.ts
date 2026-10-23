// Text of the page chrome: head, header, footer, banners, 404 page, language selector.
// Convention: strings used as element content may contain HTML (entities such as &nbsp;, links);
// strings used as attributes (alt, label…) are plain text.
export const ui = {
	meta: {
		title: 'moncycle.app · free cycle charting notebook for the Billings and FertilityCare methods',
		description: 'moncycle.app is a free web application. Record your cervical mucus and temperature observations each day, and keep your chart according to the Billings or FertilityCare method. No advertising, no predictions, hosted in France.',
		socialTitle: 'moncycle.app · the cycle charting notebook for natural family planning methods',
		socialDescription: 'Record your cervical mucus and temperature observations, and find your Billings or FertilityCare chart on all your devices. Free, with no advertising and no predictions.',
		socialImageAlt: 'Drawing of a smiling couple above the name moncycle.app',
	},
	// schema.org descriptions (JSON-LD)
	structuredData: {
		organization: 'French non-profit association (law of 1901) that develops and distributes moncycle.app.',
		application: 'Cycle charting notebook for women who follow a natural family planning method (Billings, FertilityCare, with or without temperature). Wellness tool: not a medical device and not a method of contraception.',
		operatingSystem: 'Any recent browser (iPhone, Android, computer)',
		browserRequirements: 'Requires JavaScript',
		sourceCode: 'moncycle.app (web application and API)',
		features: [
			'Cervical mucus and period tracking',
			'Basal body temperature tracking (optional)',
			'Billings and FertilityCare notation',
			'PDF, CSV and NFP export',
			'Email delivery of completed cycles (optional)',
			'Sync across devices',
			'Dark mode',
			'Two-factor authentication (TOTP)',
		],
	},
	skipLink: 'Skip to content',
	header: {
		navLabel: 'Main navigation',
		menu: 'Menu',
		board: 'My chart',
		register: 'Create my account',
		links: [
			{ href: '#how', label: 'How it works' },
			{ href: '#features', label: 'Features' },
			{ href: '#demo', label: 'Demo' },
			{ href: '#methods', label: 'Methods' },
			{ href: '#faq', label: 'FAQ' },
			{ href: '#support', label: 'Support' },
			{ href: '#tech', label: 'Technical' },
		],
	},
	language: {
		label: 'Language',
	},
	// Shown on the pages of the other languages to visitors whose browser prefers this language
	banner: {
		message: 'This website is also available in English.',
		link: 'Read in English',
		dismiss: 'Close',
	},
	newsBanner: {
		label: 'Latest news',
		tag: 'News',
		button: 'Read the article',
	},
	footer: {
		about: 'moncycle.app is developed and distributed by Tech&nbsp;4&nbsp;Fertility, a French non-profit association.',
		coupleAlt: 'The drawn couple of moncycle.app, seen from the shoulders up, smiling at each other.',
		organization: { title: 'Tech 4 Fertility', donate: 'Donate', terms: 'Terms of service', news: 'News' },
		technical: { title: 'Technical links', source: 'Source code', api: 'API documentation', docker: 'Docker image', yunohost: 'YunoHost', status: 'Service status' },
		help: {
			title: 'Find guidance',
			links: [
				{ label: 'Centre Billings France', href: 'https://www.methode-billings.com/trouver-un-formateur' },
				{ label: 'FertilityCare France', href: 'https://napro.fr/contacter-une-instructrice/' },
			],
			faq: 'Frequently asked questions',
		},
		contact: { title: 'Contact us', emailAlt: 'Contact email address (image)' },
		credits: 'Drawing: <a href="https://by-bm.fr" target="_blank" rel="noopener">by.bm</a>. Hosting: OVH, in France. Monitoring: updown.io.',
	},
	gallery: {
		title: 'Screenshots',
		previous: 'Previous screenshots',
		next: 'Next screenshots',
		lightbox: 'Enlarged screenshot',
		close: 'Close',
		lightboxPrevious: 'Previous screenshot',
		lightboxNext: 'Next screenshot',
	},
	notFound: {
		title: 'Page not found · moncycle.app',
		description: 'This page does not exist.',
		heading: 'Page not found',
		text: 'This page does not exist.',
		link: 'Back to the home page',
	},
	// Block of this language on the selector page shown at "/"
	selector: {
		title: 'moncycle.app · cycle charting notebook for the Billings and FertilityCare methods',
		description: 'moncycle.app is a free cycle charting notebook for natural family planning methods (Billings, FertilityCare). Choose your language.',
		text: 'Free cycle charting notebook for natural family planning methods (Billings, FertilityCare).',
		cta: 'Continue in English',
	},
};
