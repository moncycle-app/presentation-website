import type { APIRoute, GetStaticPaths } from 'astro';
import { langs } from '../../i18n/config';
import { ogImageData, ogImageFile, ogImageType } from '../../data/og';

// /og/preview-<lang>.<hash>.jpg: the link preview image of each language, copied as is (see src/data/og.ts)
export const getStaticPaths = (() =>
	langs.map((lang) => ({ params: { file: ogImageFile(lang) }, props: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
	new Response(new Uint8Array(ogImageData(props.lang)), { headers: { 'Content-Type': ogImageType } });
