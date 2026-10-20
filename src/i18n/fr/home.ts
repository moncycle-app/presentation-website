// Text of the sections of the home page. Same convention as ui.ts: element content may contain HTML,
// attributes (alt, label…) are plain text.
export const home = {
	hero: {
		eyebrow: 'Billings · FertilityCare · Température',
		title: 'moncycle.app, le carnet de suivi de cycle féminin au service des méthodes de régulation naturelle des naissances',
		lead: 'Chaque soir, vous notez vos observations de la journée&nbsp;: glaire cervicale et vos sensations. L’application les présente sous la forme d’un tableau clair, lisible par vous comme par votre moniteur ou votre instructrice. Elle est gratuite, sans publicité et ne fait aucune prédiction.',
		primary: 'Créer mon compte',
		secondary: 'Essayer la démo',
		small: 'Application web pour téléphone et ordinateur, hébergée en France. Développée et distribuée par l’association Tech&nbsp;4&nbsp;Fertility.',
		coupleAlt: 'Dessin d’un jeune couple. L’homme pose la main sur l’épaule de la femme, qui tient son téléphone et se tourne vers lui en souriant.',
		screenshotAlt: 'Tableau d’un cycle Billings dans moncycle.app : une ligne par jour, avec le tampon de couleur, les sensations et les observations saisies.',
	},
	how: {
		title: 'Fonctionnement',
		lead: 'Rien à télécharger depuis un magasin d’applications. Une fois la méthode apprise auprès d’un moniteur ou d’une instructrice, une saisie quotidienne suffit.',
		steps: [
			{ title: 'Vous créez votre compte', text: 'Choisissez la méthode suivie, un pseudonyme (vos initiales suffisent) et une adresse e-mail qui ne révèle pas votre nom. Cliquez ensuite sur le lien de confirmation reçu par e-mail&nbsp;: votre tableau est prêt.' },
			{ title: 'Chaque soir, vous notez la journée', text: 'Vous saisissez vos sensations et vos observations, vos règles, votre température si vous la mesurez et, si nécessaire, un commentaire. Vous choisissez ensuite le tampon de couleur correspondant à la journée.' },
			{ title: 'Le tableau se construit', text: 'Jour après jour, dans la notation officielle de la méthode choisie. Si vous mesurez votre température, sa courbe s’affiche au-dessus du cycle.' },
			{ title: 'Vous l’exportez ou le partagez', text: 'Exportez vos cycles en PDF, CSV ou NFP à tout moment. Vous pouvez aussi activer l’envoi automatique par e-mail de chaque cycle terminé, à votre adresse et à cinq destinataires au plus, comme votre conjoint, votre moniteur ou votre instructrice.' },
		],
		install: {
			title: 'Installer l’application sur votre téléphone',
			intro: 'moncycle.app est une application web&nbsp;: elle n’est disponible ni sur l’App Store, ni sur Google Play. Depuis votre tableau, ajoutez la page à l’écran d’accueil&nbsp;: une icône apparaît, et l’application s’ouvre ensuite comme n’importe quelle autre.',
			steps: '<strong>Sur iPhone</strong>, dans Safari&nbsp;: touchez le bouton Partager, puis «&nbsp;Sur l’écran d’accueil&nbsp;».<br>\n\t\t\t\t<strong>Sur Android</strong>, dans Chrome&nbsp;: ouvrez le menu en haut à droite, puis choisissez «&nbsp;Ajouter à l’écran d’accueil&nbsp;».',
			note: 'Tech&nbsp;4&nbsp;Fertility prépare des applications pour iPhone et Android. Leur sortie sera annoncée ici&nbsp;; en attendant, l’application web reste la seule version disponible.',
			iphoneAlt: 'Menu de partage de Safari sur iPhone, avec l’option « Sur l’écran d’accueil » entourée.',
			iphoneCaption: 'iPhone',
			androidAlt: 'Menu de Chrome sur Android, avec l’option « Ajouter à l’écran d’accueil » entourée.',
			androidCaption: 'Android',
		},
	},
	features: {
		title: 'Pourquoi choisir moncycle.app',
		lead: 'Conçue pour les femmes et les couples qui suivent une méthode de régulation naturelle des naissances, l’application remplace le carnet papier sans jamais interpréter à votre place.',
		figures: {
			title: 'moncycle.app en chiffres',
			// Fallback shown when the API cannot be reached (and in the raw HTML)
			accounts: { label: 'comptes ouverts', value: '2&nbsp;190' },
			cycles: { label: 'cycles enregistrés', value: '18&nbsp;000' },
			observations: { label: 'observations notées', value: '372&nbsp;700' },
			dateBefore: 'Chiffres arrondis, arrêtés au ',
			dateLabel: '19&nbsp;octobre&nbsp;2026',
			dateAfter: '.',
		},
	},
	demo: {
		title: 'Découvrir l’application',
		lead: 'Le plus simple est de l’essayer&nbsp;: deux comptes de démonstration sont accessibles à tous, sans inscription.',
		videoCaption: 'Saisie de quelques journées, puis passage à la vue mini (vidéo sans son).',
		accounts: {
			title: 'Essayer avec un compte de démonstration',
			text: 'Choisissez le compte correspondant à la méthode qui vous intéresse et connectez-vous avec les identifiants ci-dessous. Ces comptes sont publics&nbsp;: chacun peut les consulter et les modifier, et ils sont réinitialisés toutes les heures. N’y saisissez aucune information personnelle.',
			billings: 'Billings',
			fertilityCare: 'FertilityCare',
			password: 'Mot de passe',
			button: 'Ouvrir la page de connexion',
		},
	},
	methods: {
		title: 'Les méthodes de régulation naturelle des naissances',
		quote: '«&nbsp;Ce sont des méthodes basées sur la connaissance des signes de fertilité du cycle féminin. Le couple peut ainsi connaître avec précision les périodes fertiles ou infertiles qu’il traverse. En fonction de son projet d’enfant, il peut ainsi connaitre le meilleur moment pour transmettre la vie, ou quelles sont ses périodes infertiles lorsqu’il souhaite espacer ou limiter les naissances.&nbsp;»',
		quoteSource: 'Source&nbsp;: <cite><a href="https://www.methodes-naturelles.fr/" target="_blank" rel="noopener">methodes-naturelles.fr</a></cite>',
		quoteUrl: 'https://www.methodes-naturelles.fr/',
		intro: 'Plusieurs méthodes existent, enseignées par différentes associations. Voici le niveau de compatibilité de moncycle.app avec les plus répandues en France (liste non exhaustive).',
		interpretation: {
			title: 'L’interprétation de votre tableau vous appartient',
			text: 'moncycle.app ne cherche ni à prédire, ni à vérifier le respect des règles de la méthode, et ne remplace pas votre moniteur ou votre instructrice. C’est un support numérique, au même titre que le carnet papier. Si vous découvrez les méthodes de régulation naturelle des naissances, ou si une règle soulève une question, adressez-vous à un moniteur ou à une instructrice de l’association qui enseigne la méthode que vous suivez.',
		},
	},
	billings: {
		eyebrow: 'Histoire',
		title: 'John et Evelyn Billings, les médecins qui ont appris à lire la glaire',
		lead: 'La méthode Billings doit son nom à un couple de médecins de Melbourne, en Australie. Leurs travaux ont fait passer le suivi du cycle du calcul des dates à la lecture des signes du corps.',
		timeline: [
			{ datetime: '1953', label: '1953', text: 'À la demande du père Maurice Catarinich, le neurologue John Billings entreprend de rechercher une méthode de régulation naturelle des naissances. La méthode Ogino-Knaus, fondée sur un calcul de calendrier, est jugée trop imprécise. Son intuition&nbsp;: la glaire cervicale, dont l’aspect et la texture changent au fil du cycle, renseigne mieux que n’importe quel calcul sur l’approche de l’ovulation.' },
			{ datetime: '1964-12', label: 'Décembre 1964', text: 'John Billings publie son premier livre, <cite lang="en">The Ovulation Method</cite>. Son épouse Evelyn, elle aussi médecin, en a relu le manuscrit&nbsp;: c’est ainsi qu’elle s’intéresse à ses travaux.' },
			{ datetime: '1965', label: '1965', text: 'Evelyn Billings travaille désormais avec lui, en particulier sur les cycles difficiles à lire. Elle apprend à reconnaître, dans les tableaux des femmes, les schémas de sécheresse et de glaire qui précèdent l’ovulation, mais aussi ceux qui signalent les jours infertiles.' },
			{ datetime: '1972-02-05', label: '5 février 1972', text: '<cite lang="en">The Lancet</cite> publie l’étude du couple Billings, cosignée par H.&nbsp;G.&nbsp;Burger et par le chercheur James Brown, arrivé à Melbourne en 1962 pour créer l’unité d’endocrinologie du Royal Women’s Hospital. Les dosages hormonaux confirment ce que les femmes observaient&nbsp;: les changements de la glaire suivent les variations des œstrogènes et de la progestérone.' },
		],
		turningPoint: {
			title: 'Un tournant',
			paragraphs: [
				'Cette double validation, par l’observation et par les dosages hormonaux, a donné aux méthodes de régulation naturelle des naissances une base scientifique qui ne reposait plus sur le seul calcul des dates. La méthode Billings a inspiré la méthode symptothermique, qui associe l’observation de la glaire à la mesure de la température. Les travaux des Billings sont aussi à l’origine des méthodes actuelles d’observation de la fertilité, qui croisent plusieurs signes du corps.',
				'Plus de soixante-dix ans après les premières recherches de John Billings, savoir observer sa glaire cervicale demeure l’un des fondements de la connaissance de son cycle.',
			],
		},
		reference: {
			title: 'L’article original',
			citation: 'Billings EL, Brown JB, Billings JJ, Burger HG. <cite>Symptoms and hormonal changes accompanying ovulation</cite>. The Lancet, 1972;1(7745):282-284. <a href="https://doi.org/10.1016/S0140-6736(72)90291-7" target="_blank" rel="noopener">doi:10.1016/S0140-6736(72)90291-7</a>',
			sourcesTitle: 'Sources',
			sources: [
				{ href: 'https://en.wikipedia.org/wiki/John_and_Evelyn_Billings', hreflang: 'en', label: 'John and Evelyn Billings, Wikipédia (anglais)' },
				{ href: 'https://fr.wikipedia.org/wiki/M%C3%A9thode_Billings', label: 'Méthode Billings, Wikipédia' },
				{ href: 'https://woombinternational.org/wp-content/uploads/2022/05/Rock-Solid-Science.pdf', hreflang: 'en', label: 'Rock Solid Science, WOOMB International (PDF, anglais)' },
				{ href: "https://www.sfsc.fr/pdf/La%20m%C3%A9thode%20de%20l'ovulation%20Billings.pdf", label: 'La méthode de l’ovulation Billings, SFSC (PDF)' },
				{ href: 'https://link.springer.com/article/10.1007/BF01849421', hreflang: 'en', label: 'Fertility awareness in the 1990s: the Billings Ovulation Method, Springer (anglais)' },
				{ href: 'http://www.cmq.org.uk/CMQ/2015/May/symptothermal_method_of_natural.html', hreflang: 'en', label: 'The Symptothermal Method of Natural Family Planning, Catholic Medical Quarterly (anglais)' },
			] as { href: string; hreflang?: string; label: string }[],
		},
	},
	faq: {
		title: 'Questions fréquentes',
		lead: 'Retrouvez ici les réponses aux questions les plus courantes. Pour aller plus loin, nos <a href="{terms}">conditions d’utilisation</a> détaillent le fonctionnement de l’application et la protection de vos données.',
		warning: '<strong>Avertissement.</strong> moncycle.app est un outil de notation. Ce n’est ni un dispositif médical, ni un moyen de contraception&nbsp;; il ne remplace ni la formation à une méthode de régulation naturelle des naissances, ni l’avis d’un professionnel de santé. Pour toute question relative à votre fertilité ou aux règles de la méthode, adressez-vous à votre moniteur ou à votre instructrice&nbsp;; pour toute question médicale, consultez un professionnel de santé. En cas d’urgence, composez le 112.',
	},
	support: {
		title: 'Soutenir moncycle.app',
		intro: 'moncycle.app est gratuite&nbsp;: ni abonnement, ni publicité, ni revente de données. Son fonctionnement repose entièrement sur vos dons.',
		details: 'Ces dons financent les serveurs et l’envoi des e-mails chez OVH, le nom de domaine, ainsi que le temps nécessaire pour corriger, sécuriser et faire évoluer l’application au fil des années. Ils sont versés à Tech&nbsp;4&nbsp;Fertility, l’association qui porte le projet.',
		button: 'Faire un don',
		note: 'Paiement sécurisé via HelloAsso, plateforme française de dons aux associations.',
	},
	tech: {
		title: 'Informations techniques',
		lead: 'moncycle.app est un logiciel open source&nbsp;: une application web en HTML, CSS et JavaScript, sans étape de compilation, et une API HTTP en PHP reposant sur une base de données MariaDB.',
	},
	news: {
		title: 'Actualités',
		button: 'Lire la suite',
	},
	terms: {
		title: 'Conditions d’utilisation et confidentialité',
		lead: 'L’essentiel de nos conditions d’utilisation et de notre politique de confidentialité, conformes au RGPD.',
		items: [
			'moncycle.app est un <strong>carnet de suivi de cycle</strong>, un outil de bien-être. Ce n’est ni un dispositif médical, ni un moyen de contraception.',
			'Vous devez avoir au moins <strong>18&nbsp;ans</strong> et avoir <strong>suivi une formation</strong> à la méthode de régulation naturelle des naissances que vous pratiquez. Les décisions vous appartiennent.',
			'Ne saisissez <strong>aucune information qui vous identifie</strong>, ni <strong>aucune donnée de santé médicale</strong>.',
			'Application gratuite, sans publicité ni pistage&nbsp;: vos données ne sont jamais vendues et sont hébergées en France.',
			'Vous consultez, exportez, modifiez ou supprimez vos données à tout moment depuis «&nbsp;Mon compte&nbsp;».',
			'Un compte sans activité pendant 4&nbsp;ans est supprimé, après avertissement.',
		],
		// {terms} is replaced by the link to the terms of use of the page language
		more: 'Nous vous invitons à lire les <a href="{terms}">conditions d’utilisation et la politique de confidentialité complètes</a> (version&nbsp;2.0, en vigueur à compter du 1<sup>er</sup>&nbsp;novembre&nbsp;2026) avant de créer un compte.',
		alsoAvailable: 'Elles sont également disponibles&nbsp;:',
	},
};
