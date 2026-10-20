import type { APIRoute } from 'astro';
import { getMessages } from '../i18n';
import { alternates, defaultLang, homePath, langs, legalPath } from '../i18n/config';
import { homeLastmod } from '../data/site';

// Kept as an endpoint (rather than @astrojs/sitemap) to preserve the /sitemap.xml URL and to control the
// hreflang alternates: every language version lists all the others (and itself), plus x-default.
export const GET: APIRoute = ({ site }) => {
	const url = (path: string) => new URL(path, site).href;
	const links = (path: (lang: (typeof langs)[number]) => string, xDefault: string) =>
		[
			...alternates(path, site!).map(({ hreflang, href }) => `\t\t<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`),
			`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${url(xDefault)}"/>`,
		].join('\n');
	const entry = (loc: string, lastmod: string, alternateLinks = '') =>
		`\t<url>\n\t\t<loc>${loc}</loc>\n\t\t<lastmod>${lastmod}</lastmod>${alternateLinks && `\n${alternateLinks}`}\n\t</url>`;

	const homeLinks = links(homePath, '/');
	const legalLinks = links(legalPath, legalPath(defaultLang));
	const entries = [
		entry(url('/'), homeLastmod),
		...langs.map((lang) => entry(url(homePath(lang)), homeLastmod, homeLinks)),
		...langs.map((lang) => entry(url(legalPath(lang)), getMessages(lang).legal.lastmod, legalLinks)),
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
