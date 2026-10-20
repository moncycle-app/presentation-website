import type { Messages } from '..';

// Text of the page chrome: head, header, footer, banners, 404 page, language selector.
// Convention: strings used as element content may contain HTML (entities such as &nbsp;, links);
// strings used as attributes (alt, label…) are plain text.
export const ui: Messages['ui'] = {
	meta: {
		title: 'moncycle.app · free cycle tracking notebook for the Billings and FertilityCare methods',
		description: 'moncycle.app is a free web app to record your cervical mucus and temperature observations every day and keep your chart following the Billings or FertilityCare method. No ads, no predictions, hosted in France. The app interface is currently in French.',
		socialTitle: 'moncycle.app · the cycle tracking notebook for natural family planning methods',
		socialDescription: 'Record your cervical mucus and temperature observations and find your Billings or FertilityCare chart on all your devices. Free, ad-free and without predictions.',
		socialImageAlt: 'Drawing of a smiling couple above the name moncycle.app',
	},
	structuredData: {
		organization: 'French non-profit association (loi of 1901) that develops and distributes moncycle.app.',
		application: 'Women’s cycle tracking notebook for natural family planning methods (Billings, FertilityCare, with or without temperature). A wellness tool: neither a medical device nor a contraceptive. The interface is in French.',
		operatingSystem: 'Any recent browser (iPhone, Android, computer)',
		browserRequirements: 'Requires JavaScript',
		sourceCode: 'moncycle.app (web application and API)',
		features: [
			'Cervical mucus and period tracking',
			'Basal body temperature tracking (optional)',
			'Billings and FertilityCare notation',
			'PDF, CSV and NFP export',
			'Completed cycles sent by e-mail (option)',
			'Synchronisation between devices',
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
	banner: {
		message: 'This site is also available in English.',
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
		coupleAlt: 'The drawn couple of moncycle.app, shown from the chest up, smiling at each other.',
		organization: { title: 'Tech 4 Fertility', donate: 'Donate', terms: 'Terms of use', news: 'News' },
		technical: { title: 'Technical links', source: 'Source code', api: 'API documentation', docker: 'Docker image', yunohost: 'YunoHost', status: 'Service status' },
		help: {
			title: 'Get support',
			links: [
				{ label: 'WOOMB International (Billings)', href: 'https://woombinternational.org/' },
				{ label: 'FertilityCare Centers of America', href: 'https://www.fertilitycare.org/' },
				{ label: 'Centre Billings France (in French)', href: 'https://www.methode-billings.com/trouver-un-formateur' },
				{ label: 'FertilityCare France (in French)', href: 'https://www.fertilitycare.fr/instructrices-et-medecins' },
			],
			faq: 'Frequently asked questions',
		},
		contact: { title: 'Contact us', emailAlt: 'Contact e-mail address (image)' },
		credits: 'Drawing: <a href="https://by-bm.fr" target="_blank" rel="noopener">by.bm</a>. Hosting: OVH, in France. Monitoring: updown.io.',
		licenseAlt: 'Creative Commons BY-NC-SA 4.0 licence',
		licenseDeed: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en',
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
	selector: {
		title: 'moncycle.app · cycle tracking notebook for the Billings and FertilityCare methods',
		description: 'moncycle.app is a free cycle tracking notebook for natural family planning methods (Billings, FertilityCare). Choose your language.',
		text: 'Free cycle tracking notebook for natural family planning methods (Billings, FertilityCare).',
		cta: 'Continue in English',
	},
};
