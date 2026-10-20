// Text of the sections of the home page. Same convention as ui.ts: element content may contain HTML,
// attributes (alt, label…) are plain text.
export const home = {
	hero: {
		eyebrow: 'Billings · FertilityCare · Temperature',
		title: 'moncycle.app, the women’s cycle charting notebook for natural family planning methods',
		lead: 'Every evening, you record your observations of the day: your cervical mucus and your sensations. The application presents them as a clear chart, easy to read for you and for your teacher or instructor. It is free, has no advertising and makes no predictions.',
		primary: 'Create my account',
		secondary: 'Try the demo',
		small: 'Web application for phones and computers, hosted in France. Developed and distributed by Tech&nbsp;4&nbsp;Fertility, a non-profit association.',
		coupleAlt: 'Drawing of a young couple. The man rests his hand on the woman’s shoulder. She holds her phone and turns towards him with a smile.',
		screenshotAlt: 'Chart of a Billings cycle in moncycle.app: one row per day, with the colour stamp, the sensations and the observations entered.',
	},
	how: {
		title: 'How it works',
		lead: 'There is nothing to download from an app store. Once you have learned the method from a teacher or instructor, one entry a day is enough.',
		steps: [
			{ title: 'You create your account', text: 'Choose the method you follow, a pseudonym (your initials are enough) and an email address that does not reveal your name. Then click the confirmation link that you receive by email: your chart is ready.' },
			{ title: 'Every evening, you record the day', text: 'You enter your sensations and observations, your period, your temperature if you measure it and, if needed, a comment. Then you choose the colour stamp that matches the day.' },
			{ title: 'Your chart takes shape', text: 'Day after day, in the official notation of the method you have chosen. If you measure your temperature, its curve is displayed above the cycle.' },
			{ title: 'You export or share it', text: 'Export your cycles as PDF, CSV or NFP files at any time. You can also turn on automatic email delivery of each completed cycle, to your own address and to up to five recipients, such as your partner, your teacher or your instructor.' },
		],
		install: {
			title: 'Install the application on your phone',
			intro: 'moncycle.app is a web application. It is not available on the App Store or on Google Play. From your chart, add the page to your home screen. An icon appears, and the application then opens like any other app.',
			steps: '<strong>On iPhone</strong>, in Safari: tap the Share button, then “Add to Home Screen”.<br>\n\t\t\t\t<strong>On Android</strong>, in Chrome: open the menu at the top right, then choose “Add to Home screen”.',
			note: 'Tech&nbsp;4&nbsp;Fertility is preparing apps for iPhone and Android. Their release will be announced here. Until then, the web application is the only version available.',
			iphoneAlt: 'Safari share menu on iPhone, with the “Add to Home Screen” option circled.',
			iphoneCaption: 'iPhone',
			androidAlt: 'Chrome menu on Android, with the “Add to Home screen” option circled.',
			androidCaption: 'Android',
		},
	},
	features: {
		title: 'Why choose moncycle.app',
		lead: 'The application is designed for women and couples who follow a natural family planning method. It replaces the paper notebook and never interprets your chart for you.',
		figures: {
			title: 'moncycle.app in figures',
			// Fallback shown when the API cannot be reached (and in the raw HTML)
			accounts: { label: 'accounts opened', value: '2,190' },
			cycles: { label: 'cycles recorded', value: '18,000' },
			observations: { label: 'observations entered', value: '372,700' },
			dateBefore: 'Rounded figures, as of ',
			dateLabel: '19&nbsp;October&nbsp;2026',
			dateAfter: '.',
		},
	},
	demo: {
		title: 'Discover the application',
		lead: 'The easiest way is to try it. Two demo accounts are open to everyone, with no sign-up.',
		videoCaption: 'Entering a few days, then switching to the mini view (video without sound).',
		accounts: {
			title: 'Try a demo account',
			text: 'Choose the account that matches the method you are interested in, and log in with the details below. These accounts are public: anyone can view and change them, and they are reset every hour. Do not enter any personal information in them.',
			billings: 'Billings',
			fertilityCare: 'FertilityCare',
			password: 'Password',
			button: 'Open the login page',
		},
	},
	methods: {
		title: 'Natural family planning methods',
		quote: '“These methods are based on knowledge of the signs of fertility in a woman’s cycle. In this way, the couple can know precisely which fertile or infertile times they are going through. Depending on their wish for a child, they can know the best time to conceive, or which times are infertile when they wish to space or limit births.”',
		quoteSource: 'Source: <cite><a href="https://www.methodes-naturelles.fr/" target="_blank" rel="noopener">methodes-naturelles.fr</a></cite> (translated from French)',
		quoteUrl: 'https://www.methodes-naturelles.fr/',
		intro: 'Several methods exist, and different associations teach them. Here is how compatible moncycle.app is with the most common methods in France (this list is not complete).',
		interpretation: {
			title: 'The interpretation of your chart is yours',
			text: 'moncycle.app does not try to make predictions or to check that you follow the rules of the method. It does not replace your teacher or instructor. It is a digital aid, just like the paper notebook. If you are new to natural family planning, or if you have a question about a rule, contact a teacher or instructor from the association that teaches your method.',
		},
	},
	billings: {
		eyebrow: 'History',
		title: 'John and Evelyn Billings, the doctors who learned to read cervical mucus',
		lead: 'The Billings method is named after a couple of doctors from Melbourne, Australia. Their work moved cycle tracking away from calculating dates and towards reading the signs of the body.',
		timeline: [
			{ datetime: '1953', label: '1953', text: 'At the request of Father Maurice Catarinich, the neurologist John Billings began to search for a natural family planning method. The Ogino-Knaus method, based on calendar calculations, was considered too imprecise. His intuition: cervical mucus, whose appearance and texture change during the cycle, shows the approach of ovulation better than any calculation.' },
			{ datetime: '1964-12', label: 'December 1964', text: 'John Billings published his first book, <cite lang="en">The Ovulation Method</cite>. His wife Evelyn, also a doctor, had proofread the manuscript. This is how she became interested in his work.' },
			{ datetime: '1965', label: '1965', text: 'From then on, Evelyn Billings worked with him, especially on cycles that were difficult to read. In women’s charts, she learned to recognise the patterns of dryness and mucus that come before ovulation, and also the patterns that show the infertile days.' },
			{ datetime: '1972-02-05', label: '5 February 1972', text: '<cite lang="en">The Lancet</cite> published the study by John and Evelyn Billings. It was co-signed by H.&nbsp;G.&nbsp;Burger and by the researcher James Brown, who had come to Melbourne in 1962 to set up the endocrinology unit of the Royal Women’s Hospital. Hormone measurements confirmed what women had observed: changes in the mucus follow the changes in oestrogen and progesterone.' },
		],
		turningPoint: {
			title: 'A turning point',
			paragraphs: [
				'This double confirmation, by observation and by hormone measurements, gave natural family planning methods a scientific basis. They no longer relied only on calculating dates. The Billings method inspired the symptothermal method, which combines mucus observation with temperature measurement. The work of John and Evelyn Billings is also at the origin of today’s fertility awareness methods, which combine several signs of the body.',
				'More than seventy years after John Billings began his research, knowing how to observe one’s cervical mucus remains one of the foundations of understanding one’s cycle.',
			],
		},
		reference: {
			title: 'The original article',
			citation: 'Billings EL, Brown JB, Billings JJ, Burger HG. <cite>Symptoms and hormonal changes accompanying ovulation</cite>. The Lancet, 1972;1(7745):282-284. <a href="https://doi.org/10.1016/S0140-6736(72)90291-7" target="_blank" rel="noopener">doi:10.1016/S0140-6736(72)90291-7</a>',
			sourcesTitle: 'Sources',
			sources: [
				{ href: 'https://en.wikipedia.org/wiki/John_and_Evelyn_Billings', hreflang: 'en', label: 'John and Evelyn Billings, Wikipedia' },
				{ href: 'https://fr.wikipedia.org/wiki/M%C3%A9thode_Billings', label: 'Méthode Billings, Wikipedia (in French)' },
				{ href: 'https://woombinternational.org/wp-content/uploads/2022/05/Rock-Solid-Science.pdf', hreflang: 'en', label: 'Rock Solid Science, WOOMB International (PDF)' },
				{ href: "https://www.sfsc.fr/pdf/La%20m%C3%A9thode%20de%20l'ovulation%20Billings.pdf", label: 'La méthode de l’ovulation Billings, SFSC (PDF, in French)' },
				{ href: 'https://link.springer.com/article/10.1007/BF01849421', hreflang: 'en', label: 'Fertility awareness in the 1990s: the Billings Ovulation Method, Springer' },
				{ href: 'http://www.cmq.org.uk/CMQ/2015/May/symptothermal_method_of_natural.html', hreflang: 'en', label: 'The Symptothermal Method of Natural Family Planning, Catholic Medical Quarterly' },
			] as { href: string; hreflang?: string; label: string }[],
		},
	},
	faq: {
		title: 'Frequently asked questions',
		lead: 'Here you will find answers to the most common questions. To learn more, our <a href="{terms}">terms of service</a> explain how the application works and how your data is protected.',
		warning: '<strong>Important notice.</strong> moncycle.app is a charting tool. It is not a medical device or a method of contraception. It does not replace training in a natural family planning method, nor the advice of a health professional. For any question about your fertility or the rules of your method, contact your teacher or instructor. For any medical question, see a health professional. In an emergency, call 112.',
	},
	support: {
		title: 'Support moncycle.app',
		intro: 'moncycle.app is free: no subscription, no advertising and no sale of data. It depends entirely on your donations.',
		details: 'These donations pay for the servers and the sending of emails at OVH, the domain name, and the time needed to fix, secure and improve the application over the years. They go to Tech&nbsp;4&nbsp;Fertility, the association behind the project.',
		button: 'Donate',
		note: 'Secure payment through HelloAsso, a French donation platform for non-profit associations.',
	},
	tech: {
		title: 'Technical information',
		lead: 'moncycle.app is open-source software: a web application in HTML, CSS and JavaScript, with no build step, and an HTTP API in PHP that uses a MariaDB database.',
	},
	news: {
		title: 'News',
		button: 'Read more',
	},
	terms: {
		title: 'Terms of service and privacy',
		lead: 'The key points of our terms of service and our privacy policy, which comply with the GDPR.',
		items: [
			'moncycle.app is a <strong>cycle charting notebook</strong> and a wellness tool. It is not a medical device or a method of contraception.',
			'You must be at least <strong>18&nbsp;years old</strong> and have <strong>completed training</strong> in the natural family planning method you follow. The decisions are yours.',
			'Do not enter <strong>any information that identifies you</strong> or <strong>any medical health data</strong>.',
			'The application is free, with no advertising and no tracking. Your data is never sold, and it is hosted in France.',
			'You can view, export, change or delete your data at any time from “My account”.',
			'An account with no activity for 4&nbsp;years is deleted, after a warning.',
		],
		// {terms} is replaced by the link to the terms of use of the page language
		more: 'Please read the <a href="{terms}">full terms of service and privacy policy</a> (version&nbsp;2.0, in effect from 1&nbsp;November&nbsp;2026) before you create an account.',
		alsoAvailable: 'They are also available in:',
	},
};
