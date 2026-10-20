import { faq } from './faq';
import { publisherName, siteName, urls } from './site';
import { htmlToText } from '../utils/html-text';

/** schema.org description of the organisation, the site and the application (home page). */
export function siteGraph(site: URL, screenshotUrl: string) {
	const root = new URL('/', site).href;
	const organization = { '@id': `${root}#tech4fertility` };
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${root}#tech4fertility`,
				name: publisherName,
				url: urls.tech4fertility,
				description: `Association française à but non lucratif (loi de 1901) qui développe et distribue ${siteName}.`,
				address: {
					'@type': 'PostalAddress',
					streetAddress: '15A rue Valentin Gaumont',
					postalCode: '27200',
					addressLocality: 'Vernon',
					addressCountry: 'FR',
				},
				sameAs: [urls.githubOrganization],
			},
			{
				'@type': 'WebSite',
				'@id': `${root}#website`,
				url: root,
				name: siteName,
				inLanguage: 'fr',
				publisher: organization,
			},
			{
				'@type': 'WebApplication',
				'@id': `${root}#app`,
				name: siteName,
				url: urls.app,
				description: 'Carnet de suivi de cycle féminin pour les méthodes de régulation naturelle des naissances (Billings, FertilityCare, avec ou sans température). Outil de bien-être\u00a0: ni dispositif médical, ni moyen de contraception.',
				applicationCategory: 'HealthApplication',
				operatingSystem: 'Tout navigateur récent (iPhone, Android, ordinateur)',
				browserRequirements: 'Nécessite JavaScript',
				inLanguage: 'fr',
				isAccessibleForFree: true,
				offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
				license: urls.license,
				screenshot: new URL(screenshotUrl, root).href,
				featureList: [
					'Suivi de la glaire cervicale et des règles',
					'Suivi de la température basale (facultatif)',
					'Notation Billings et FertilityCare',
					'Export PDF, CSV et NFP',
					'Envoi des cycles terminés par e-mail (option)',
					'Synchronisation entre appareils',
					'Mode sombre',
					'Authentification à deux facteurs (TOTP)',
				],
				author: organization,
				publisher: organization,
			},
			{
				'@type': 'SoftwareSourceCode',
				'@id': `${root}#source`,
				name: `${siteName} (application web et API)`,
				codeRepository: urls.github,
				programmingLanguage: ['PHP', 'JavaScript'],
				license: urls.license,
				targetProduct: { '@id': `${root}#app` },
				author: organization,
			},
		],
	};
}

/** FAQPage generated from the same list as the visible FAQ, so the two always match. */
export function faqPage() {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map(({ question, answer }) => ({
			'@type': 'Question',
			name: htmlToText(question),
			acceptedAnswer: { '@type': 'Answer', text: htmlToText(answer.join('\n')) },
		})),
	};
}
