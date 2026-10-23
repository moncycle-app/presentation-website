import type { APIRoute } from 'astro';
import { getMessages } from '../i18n';
import { llmsLang } from '../i18n/config';

// Summary of the site for language models (https://llmstxt.org). /llms.txt is in English
// (llmsLang); the other languages are served as /<lang>/llms.txt (see [lang]/llms.txt.ts).
export const GET: APIRoute = ({ site }) =>
	new Response(getMessages(llmsLang).llms(new URL('/', site).href), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
