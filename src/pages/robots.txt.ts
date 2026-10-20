import type { APIRoute } from 'astro';
import { siteName } from '../data/site';

// Everything is public and may be indexed, including by AI crawlers: the aim is that people
// asking about moncycle.app get correct answers.
const crawlers = [
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	'ClaudeBot',
	'Claude-SearchBot',
	'Claude-User',
	'PerplexityBot',
	'Perplexity-User',
	'Google-Extended',
	'Applebot-Extended',
	'CCBot',
	'Meta-ExternalAgent',
	'MistralAI-User',
];

export const GET: APIRoute = ({ site }) => {
	const lines = [
		`# ${siteName} -- presentation website. Everything here is public and may be indexed,`,
		'# including by AI crawlers: the aim is that people asking about moncycle.app get correct answers.',
		'',
		...['*', ...crawlers].flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
		`Sitemap: ${new URL('/sitemap.xml', site)}`,
		'',
	];
	return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
