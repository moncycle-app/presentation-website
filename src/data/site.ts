// Constants shared by the pages, the structured data and the generated files (sitemap, llms.txt…).
// The site URL itself comes from `site` in astro.config.mjs (Astro.site).

export const siteName = 'moncycle.app';
export const publisherName = 'Tech 4 Fertility';

/** Last modification of the home pages, for the sitemap */
export const homeLastmod = '2026-10-19';

/** Date of the fallback key figures written in the HTML of the home page (the texts are in src/i18n/<lang>/home.ts) */
export const figuresDate = '2026-10-19';

export const urls = {
	app: 'https://tableau.moncycle.app/',
	register: 'https://tableau.moncycle.app/register',
	api: 'https://tableau.moncycle.app/api/',
	status: 'https://status.moncycle.app',
	github: 'https://github.com/moncycle-app/backend-api-web-app',
	githubOrganization: 'https://github.com/moncycle-app',
	docker: 'https://hub.docker.com/r/jeanio/moncycle.app',
	yunohost: 'https://install-app.yunohost.org/?app=moncycle',
	license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
	tech4fertility: 'https://tech4fertility.org/',
	billingsTrainers: 'https://www.methode-billings.com/trouver-un-formateur',
	fertilityCareInstructors: 'https://www.fertilitycare.fr/instructrices-et-medecins',
} as const;

// Remote JSON read by the browser (see scripts/news.ts and scripts/stats.ts).
// Override them in .env to test against another server (see .env.example).
export const endpoints = {
	news: import.meta.env.PUBLIC_NEWS_URL || `${urls.tech4fertility}latest-news.json`,
	stats: import.meta.env.PUBLIC_STATS_URL || 'https://tableau.moncycle.app/api/pub_stat',
};
