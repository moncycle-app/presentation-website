import { getMessages } from '../i18n';
import { homePath, langs, locales, type Lang } from '../i18n/config';
import { publisherName, siteName, urls } from './site';
import { htmlToText } from '../utils/html-text';

const organizationId = (root: string) => `${root}#tech4fertility`;

/** schema.org description of the organisation, the site and the application (home page of one language). */
export function siteGraph(site: URL, lang: Lang, screenshotUrl: string) {
	const root = new URL('/', site).href;
	const page = new URL(homePath(lang), site).href;
	const organization = { '@id': organizationId(root) };
	const text = getMessages(lang).ui.structuredData;
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': organizationId(root),
				name: publisherName,
				url: urls.tech4fertility,
				description: text.organization,
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
				inLanguage: langs.map((code) => locales[code].htmlLang),
				publisher: organization,
			},
			{
				'@type': 'WebPage',
				'@id': `${page}#webpage`,
				url: page,
				name: getMessages(lang).ui.meta.title,
				description: getMessages(lang).ui.meta.description,
				inLanguage: locales[lang].htmlLang,
				isPartOf: { '@id': `${root}#website` },
				about: { '@id': `${page}#app` },
			},
			{
				'@type': 'WebApplication',
				'@id': `${page}#app`,
				name: siteName,
				url: urls.app,
				description: text.application,
				applicationCategory: 'HealthApplication',
				operatingSystem: text.operatingSystem,
				browserRequirements: text.browserRequirements,
				// The interface of the application itself is in French only
				inLanguage: 'fr',
				isAccessibleForFree: true,
				offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
				license: urls.license,
				screenshot: new URL(screenshotUrl, root).href,
				featureList: text.features,
				author: organization,
				publisher: organization,
			},
			{
				'@type': 'SoftwareSourceCode',
				'@id': `${page}#source`,
				name: text.sourceCode,
				codeRepository: urls.github,
				programmingLanguage: ['PHP', 'JavaScript'],
				license: urls.license,
				targetProduct: { '@id': `${page}#app` },
				author: organization,
			},
		],
	};
}

/** FAQPage generated from the same list as the visible FAQ, so the two always match. */
export function faqPage(lang: Lang) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		inLanguage: locales[lang].htmlLang,
		mainEntity: getMessages(lang).faq.map(({ question, answer }) => ({
			'@type': 'Question',
			name: htmlToText(question),
			acceptedAnswer: { '@type': 'Answer', text: htmlToText(answer.join('\n')) },
		})),
	};
}

/** The selector page at "/": the site itself, in all its languages. */
export function selectorGraph(site: URL) {
	const root = new URL('/', site).href;
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${root}#website`,
		url: root,
		name: siteName,
		inLanguage: langs.map((code) => locales[code].htmlLang),
		publisher: { '@id': organizationId(root) },
	};
}
