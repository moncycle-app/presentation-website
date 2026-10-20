import type { APIRoute, GetStaticPaths } from 'astro';
import { getMessages } from '../i18n';
import { langs, llmsLang, type Lang } from '../i18n/config';

// /llms-fr.txt…: the same summary in each language other than the one of /llms.txt
export const getStaticPaths = (() => langs.filter((lang) => lang !== llmsLang).map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params, site }) =>
	new Response(getMessages(params.lang as Lang).llms(new URL('/', site).href), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
