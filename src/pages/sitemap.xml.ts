import type { APIRoute } from 'astro';
import { legalPages } from '../data/legal';
import { homeLastmod } from '../data/site';

// Kept as an endpoint (rather than @astrojs/sitemap) to preserve the /sitemap.xml URL
// and the hreflang alternates of the terms of use.
export const GET: APIRoute = ({ site }) => {
	const url = (path: string) => new URL(path, site).href;
	const legal = Object.values(legalPages).map((page) => ({
		path: `/ToS/term_of_service_${page.lang}.html`,
		lang: page.lang,
		lastmod: page.lastmod,
	}));
	const alternates = legal
		.map(({ path, lang }) => `\t\t<xhtml:link rel="alternate" hreflang="${lang}" href="${url(path)}"/>`)
		.join('\n');

	const entries = [
		`\t<url>\n\t\t<loc>${url('/')}</loc>\n\t\t<lastmod>${homeLastmod}</lastmod>\n\t</url>`,
		...legal.map(({ path, lastmod }) => `\t<url>\n\t\t<loc>${url(path)}</loc>\n\t\t<lastmod>${lastmod}</lastmod>\n${alternates}\n\t</url>`),
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
