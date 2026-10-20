import type { Messages } from '..';

// Text of the sections of the home page. Same convention as ui.ts: element content may contain HTML,
// attributes (alt, label…) are plain text.
export const home: Messages['home'] = {
	hero: {
		eyebrow: 'Billings · FertilityCare · Temperature',
		title: 'moncycle.app, the women’s cycle tracking notebook for natural family planning methods!',
		lead: 'Every evening, you record the day’s observations: cervical mucus, periods and, if you take it, temperature. The app presents them as a clear chart, readable by you as well as by your teacher or practitioner. It is free, ad-free and makes no predictions.',
		primary: 'Create my account',
		secondary: 'Try the demo',
		small: 'Web app for phone and computer, hosted in France. Developed and distributed by the association Tech&nbsp;4&nbsp;Fertility. The app interface is currently in French only.',
		coupleAlt: 'Drawing of a young couple. The man rests his hand on the woman’s shoulder; she holds her phone and turns to him, smiling.',
		screenshotAlt: 'A Billings cycle chart in moncycle.app: one row per day, with the coloured stamp and the sensations and observations entered.',
	},
	how: {
		title: 'How it works',
		lead: 'There is no app to download from an app store. Once you have learned the method from a teacher or practitioner, a daily entry is all it takes.',
		steps: [
			{ title: 'You create your account', text: 'Choose a pseudonym (your initials are enough), an e-mail address that does not reveal your name, and the method you follow. Then click the confirmation link received by e-mail: your chart is ready.' },
			{ title: 'Every evening, you record the day', text: 'You enter your sensations and observations, your period, your temperature if you take it and, if needed, a comment. Then you pick the coloured stamp that matches the day.' },
			{ title: 'The chart builds up', text: 'Day after day, in the standard notation of the method you chose. If you take your temperature, its curve is displayed above the cycle.' },
			{ title: 'You export or share it', text: 'Export your cycles as PDF, CSV or NFP at any time. If you wish, you can also turn on the automatic sending of each completed cycle by e-mail, to your own address and to five recipients at most: your partner, your teacher or your practitioner.' },
		],
		install: {
			title: 'Install the app on your phone',
			intro: 'moncycle.app is a web app: it is available neither on the App Store nor on Google Play. From your chart, add the page to your home screen: an icon appears, and the app then opens like any other.',
			steps: '<strong>On iPhone</strong>, in Safari: tap the Share button, then “Add to Home Screen”.<br>\n\t\t\t\t<strong>On Android</strong>, in Chrome: open the menu at the top right, then choose “Add to Home screen”.',
			note: 'Tech&nbsp;4&nbsp;Fertility is preparing iPhone and Android apps. Their release will be announced here; until then, the web app remains the only version available.',
			iphoneAlt: 'Safari’s share menu on iPhone, with the “Add to Home Screen” option circled.',
			iphoneCaption: 'iPhone',
			androidAlt: 'Chrome’s menu on Android, with the “Add to Home screen” option circled.',
			androidCaption: 'Android',
		},
	},
	features: {
		title: 'Why choose moncycle.app',
		lead: 'Designed for women and couples who follow a natural family planning method, it replaces the paper notebook without ever interpreting on your behalf.',
		figures: {
			title: 'moncycle.app in figures',
			accounts: { label: 'accounts opened', value: '2,190' },
			cycles: { label: 'cycles recorded', value: '18,000' },
			observations: { label: 'observations noted', value: '372,700' },
			dateBefore: 'Figures rounded as of ',
			dateLabel: 'October&nbsp;19,&nbsp;2026',
			dateAfter: '.',
		},
	},
	demo: {
		title: 'Discover the app',
		lead: 'The easiest way is to try it: two demo accounts are open to everyone, with no sign-up. The app interface is in French.',
		videoCaption: 'Entering a few days, then switching to the mini view (video without sound).',
		accounts: {
			title: 'Try it with a demo account',
			text: 'Pick the account that matches the method you are interested in and log in with the credentials below. These accounts are public: anyone can view and edit them, and they are reset every hour. Do not enter any personal information.',
			billings: 'Billings',
			fertilityCare: 'FertilityCare',
			password: 'Password',
			button: 'Open the login page',
		},
	},
	methods: {
		title: 'Natural family planning methods',
		quote: '“These methods are based on knowing the fertility signs of the female cycle. The couple can thus know precisely the fertile and infertile periods they go through. Depending on their plans for a child, they can know the best moment to give life, or which periods are infertile when they wish to space or limit births.”',
		quoteSource: 'Source: <cite><a href="https://www.methodes-naturelles.fr/" target="_blank" rel="noopener" hreflang="fr">methodes-naturelles.fr</a></cite> (in French, translated)',
		quoteUrl: 'https://www.methodes-naturelles.fr/',
		intro: 'Several methods exist, taught by different associations. Here is how compatible moncycle.app is with the most widespread ones (non-exhaustive list).',
		interpretation: {
			title: 'The interpretation of your chart is yours',
			text: 'moncycle.app neither tries to predict nor to check that the rules of the method are applied, and it does not replace your teacher or practitioner. It is a digital support, just like the paper notebook. If you are discovering natural family planning methods, or if a rule raises a question, turn to a teacher or practitioner of the association that teaches the method you follow.',
		},
	},
	billings: {
		eyebrow: 'History',
		title: 'John and Evelyn Billings, the doctors who learned to read mucus',
		lead: 'The Billings method owes its name to a couple of doctors from Melbourne, Australia. Their work moved cycle tracking from calculating dates to reading the signs of the body.',
		timeline: [
			{ datetime: '1953', label: '1953', text: 'At the request of Father Maurice Catarinich, the neurologist John Billings sets out to look for a natural family planning method. The Ogino-Knaus method, based on a calendar calculation, is judged too imprecise. His intuition: cervical mucus, whose appearance and texture change throughout the cycle, says more than any calculation about the approach of ovulation.' },
			{ datetime: '1964-12', label: 'December 1964', text: 'John Billings publishes his first book, <cite>The Ovulation Method</cite>. His wife Evelyn, also a doctor, proofread the manuscript: this is how she discovers his work.' },
			{ datetime: '1965', label: '1965', text: 'Evelyn Billings now works with him, in particular on cycles that are hard to read. She learns to recognise, in women’s charts, the patterns of dryness and mucus that precede ovulation, but also those that signal the infertile days.' },
			{ datetime: '1972-02-05', label: 'February 5, 1972', text: '<cite>The Lancet</cite> publishes the study by the two Billings, co-signed by H.&nbsp;G.&nbsp;Burger and by the researcher James Brown, who arrived in Melbourne in 1962 to set up the endocrinology unit of the Royal Women’s Hospital. Hormone assays confirm what women were observing: changes in mucus follow the variations of oestrogen and progesterone.' },
		],
		turningPoint: {
			title: 'A turning point',
			paragraphs: [
				'This double validation, through observation and through hormone assays, gave natural family planning methods a scientific basis that no longer relied on date calculation alone. The Billings method inspired the symptothermal method, which combines the observation of mucus with temperature measurement. It is also at the origin of today’s fertility awareness methods, which cross-check several signs of the body.',
				'More than seventy years after John Billings’ first research, knowing how to observe one’s cervical mucus remains one of the foundations of knowing one’s cycle.',
			],
		},
		reference: {
			title: 'The original article',
			citation: 'Billings EL, Brown JB, Billings JJ, Burger HG. <cite>Symptoms and hormonal changes accompanying ovulation</cite>. The Lancet, 1972;1(7745):282-284. <a href="https://doi.org/10.1016/S0140-6736(72)90291-7" target="_blank" rel="noopener">doi:10.1016/S0140-6736(72)90291-7</a>',
			sourcesTitle: 'Sources',
			sources: [
				{ href: 'https://en.wikipedia.org/wiki/John_and_Evelyn_Billings', label: 'John and Evelyn Billings, Wikipedia' },
				{ href: 'https://fr.wikipedia.org/wiki/M%C3%A9thode_Billings', hreflang: 'fr', label: 'Méthode Billings, Wikipedia (French)' },
				{ href: 'https://woombinternational.org/wp-content/uploads/2022/05/Rock-Solid-Science.pdf', label: 'Rock Solid Science, WOOMB International (PDF)' },
				{ href: "https://www.sfsc.fr/pdf/La%20m%C3%A9thode%20de%20l'ovulation%20Billings.pdf", hreflang: 'fr', label: 'La méthode de l’ovulation Billings, SFSC (PDF, French)' },
				{ href: 'https://link.springer.com/article/10.1007/BF01849421', label: 'Fertility awareness in the 1990s: the Billings Ovulation Method, Springer' },
				{ href: 'http://www.cmq.org.uk/CMQ/2015/May/symptothermal_method_of_natural.html', label: 'The Symptothermal Method of Natural Family Planning, Catholic Medical Quarterly' },
			],
		},
	},
	faq: {
		title: 'Frequently asked questions',
		lead: 'Find here the answers to the most common questions. To go further, our <a href="{terms}">terms of use</a> detail how the app works and how your data is protected.',
		warning: '<strong>Disclaimer.</strong> moncycle.app is a recording tool. It is neither a medical device nor a contraceptive; it replaces neither training in a natural family planning method nor the advice of a healthcare professional. For any question about your fertility or the rules of the method, turn to your teacher or practitioner; for any health question, consult a healthcare professional. In an emergency, call your local emergency number (112 in Europe).',
	},
	support: {
		title: 'Support moncycle.app',
		intro: 'moncycle.app is free: no subscription, no ads, no resale of data. It relies entirely on your donations.',
		details: 'They pay for the servers and the e-mail delivery at OVH, the domain name, and the time needed to fix, secure and develop the app over the years. Donations go to Tech&nbsp;4&nbsp;Fertility, the association behind the project.',
		button: 'Donate',
		note: 'Secure payment through HelloAsso, a French donation platform for associations.',
	},
	tech: {
		title: 'Technical information',
		lead: 'moncycle.app is open source software: a web app in HTML, CSS and JavaScript, with no build step, and an HTTP API in PHP backed by a MariaDB database.',
	},
	news: {
		title: 'News',
		button: 'Read more',
	},
	terms: {
		title: 'Terms of use and privacy',
		lead: 'The essentials of our terms of use and privacy policy, compliant with the GDPR.',
		items: [
			'moncycle.app is a <strong>cycle tracking notebook</strong>, a wellness tool. It is neither a medical device nor a contraceptive.',
			'You must be <strong>18&nbsp;years old</strong> and have <strong>been trained</strong> in the natural family planning method you practise. The decisions are yours.',
			'Do not enter <strong>any information that identifies you</strong>, nor <strong>any medical health data</strong>.',
			'Free, with no ads and no tracking: your data is never sold and is hosted in France.',
			'You view, export, edit or delete your data at any time from “My account”.',
			'An account with no activity for 4&nbsp;years is deleted, after a warning.',
		],
		more: 'Please read the <a href="{terms}">full terms of use and privacy policy</a> (version&nbsp;2.0, in force on November&nbsp;1,&nbsp;2026) before creating an account. French is the reference version; the English one is a courtesy translation.',
		alsoAvailable: 'They are also available in:',
	},
};
