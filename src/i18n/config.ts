// The single list of languages of the site. Routes, hreflang links, the language switcher, the sitemap,
// the language banner and the llms files are all generated from it: nothing else hard-codes a language.
//
// Adding a language: see "Adding a language" in AGENTS.md.
export const locales = {
	fr: { label: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
	en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
} as const satisfies Record<string, { label: string; htmlLang: string; ogLocale: string; dir: 'ltr' | 'rtl' }>;

export type Lang = keyof typeof locales;

export const langs = Object.keys(locales) as Lang[];

/** Language of the original content, and of the reference version of the terms of use */
export const defaultLang: Lang = 'fr';

/** Language of the pages that belong to no language: the selector at "/" and the 404 page */
export const internationalLang: Lang = 'en';

/** Language of /llms.txt, the summary read by language models (the other languages are /llms-<lang>.txt) */
export const llmsLang: Lang = 'en';

/** The other languages, in the order of `locales` */
export const otherLangs = (lang: Lang): Lang[] => langs.filter((code) => code !== lang);

export const isLang = (value: string | undefined): value is Lang => value !== undefined && value in locales;

// Public paths. build.format is 'file': /fr/ is served from /fr/index.html and the terms of use from
// /fr/term_of_service.html. The home page of each language has a trailing slash, the others do not.
export const homePath = (lang: Lang) => `/${lang}/`;
export const legalPath = (lang: Lang) => `/${lang}/term_of_service.html`;

/** Alternate versions of a page, for hreflang links and the sitemap */
export function alternates(path: (lang: Lang) => string, site: URL | string) {
	return langs.map((lang) => ({ lang, hreflang: locales[lang].htmlLang, href: new URL(path(lang), site).href }));
}
