// Text of the page chrome: head, header, footer, banners, 404 page, language selector.
// Convention: strings used as element content may contain HTML (entities such as &nbsp;, links);
// strings used as attributes (alt, label…) are plain text.
export const ui = {
	meta: {
		title: 'moncycle.app · carnet de suivi de cycle gratuit pour les méthodes Billings (CBF) et FertilityCare',
		description: 'moncycle.app est une application web gratuite qui permet de noter chaque jour vos observations de glaire cervicale et de température, et de tenir votre tableau selon la méthode Billings ou FertilityCare. Sans publicité, sans prédiction, hébergée en France.',
		socialTitle: 'Votre carnet de cycle, simple et gratuit · moncycle.app',
		socialDescription: 'Notez votre glaire cervicale et votre température, retrouvez votre tableau Billings ou FertilityCare partout. Gratuit, sans publicité ni prédiction.',
		socialImageAlt: 'Carte d’aperçu moncycle.app : « Votre carnet de cycle, simple et gratuit », avec une capture du tableau de l’application',
	},
	// schema.org descriptions (JSON-LD)
	structuredData: {
		organization: 'Association française à but non lucratif (loi de 1901) qui développe et distribue moncycle.app.',
		application: 'Carnet de suivi de cycle féminin pour les méthodes de régulation naturelle des naissances (Billings, FertilityCare, avec ou sans température). Outil de bien-être\u00a0: ni dispositif médical, ni moyen de contraception.',
		operatingSystem: 'Tout navigateur récent (iPhone, Android, ordinateur)',
		browserRequirements: 'Nécessite JavaScript',
		sourceCode: 'moncycle.app (application web et API)',
		features: [
			'Suivi de la glaire cervicale et des règles',
			'Suivi de la température basale (facultatif)',
			'Notation Billings (CBF) et FertilityCare',
			'Export PDF, CSV et NFP',
			'Envoi des cycles terminés par e-mail (option)',
			'Synchronisation entre appareils',
			'Mode sombre',
			'Authentification à deux facteurs (TOTP)',
		],
	},
	skipLink: 'Aller au contenu',
	header: {
		navLabel: 'Navigation principale',
		menu: 'Menu',
		board: 'Mon tableau',
		register: 'Créer mon compte',
		links: [
			{ href: '#how', label: 'Fonctionnement' },
			{ href: '#features', label: 'Fonctionnalités' },
			{ href: '#demo', label: 'Démo' },
			{ href: '#methods', label: 'Méthodes' },
			{ href: '#faq', label: 'Questions' },
			{ href: '#support', label: 'Soutenir' },
			{ href: '#tech', label: 'Technique' },
		],
	},
	language: {
		label: 'Langue',
	},
	// Shown on the pages of the other languages to visitors whose browser prefers this language
	banner: {
		message: 'Ce site est aussi disponible en français.',
		link: 'Lire en français',
		dismiss: 'Fermer',
	},
	newsBanner: {
		label: 'Dernière actualité',
		tag: 'Actualité',
		button: 'Lire l’article',
	},
	footer: {
		about: 'moncycle.app est développée et distribuée par Tech&nbsp;4&nbsp;Fertility, association française à but non lucratif.',
		coupleAlt: 'Le couple dessiné de moncycle.app, en buste, échangeant un sourire.',
		organization: { title: 'Tech 4 Fertility', donate: 'Faire un don', terms: 'Conditions d’utilisation', news: 'Actualités' },
		technical: { title: 'Liens techniques', source: 'Code source', api: 'Documentation de l’API', docker: 'Image Docker', yunohost: 'YunoHost', status: 'État du service' },
		help: {
			title: 'Se faire accompagner',
			links: [
				{ label: 'Centre Billings France', href: 'https://www.methode-billings.com/trouver-un-formateur' },
				{ label: 'Napro France', href: 'https://napro.fr/contacter-une-instructrice/' },
			],
			faq: 'Questions fréquentes',
		},
		contact: { title: 'Nous contacter', emailAlt: 'Adresse e-mail de contact (image)' },
		credits: 'Dessin&nbsp;: <a href="https://by-bm.fr" target="_blank" rel="noopener">by.bm</a>. Hébergement&nbsp;: OVH, en France. Surveillance&nbsp;: updown.io.',
	},
	gallery: {
		title: 'Captures d’écran',
		previous: 'Captures précédentes',
		next: 'Captures suivantes',
		lightbox: 'Capture d’écran agrandie',
		close: 'Fermer',
		lightboxPrevious: 'Capture précédente',
		lightboxNext: 'Capture suivante',
	},
	notFound: {
		title: 'Page introuvable · moncycle.app',
		description: 'Cette page n’existe pas.',
		heading: 'Page introuvable',
		text: 'Cette page n’existe pas.',
		link: 'Retourner à l’accueil',
	},
	// Block of this language on the selector page shown at "/"
	selector: {
		title: 'moncycle.app · carnet de suivi de cycle pour les méthodes Billings (CBF) et FertilityCare',
		description: 'moncycle.app est un carnet de suivi de cycle gratuit pour les méthodes de régulation naturelle des naissances (Billings, FertilityCare). Choisissez votre langue.',
		text: 'Carnet de suivi de cycle gratuit pour les méthodes de régulation naturelle des naissances (Billings, FertilityCare).',
		cta: 'Continuer en français',
	},
};
