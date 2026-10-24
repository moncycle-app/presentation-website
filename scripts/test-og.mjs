// Checks the link preview tags of every page in dist/ (run after `astro build`: `npm run test:og`).
// Each page must have the full Open Graph / Twitter set, exactly one og:image, absolute https URLs, and an image
// that exists in dist/, is really a 1200×630 file of the declared type, and weighs under 300 KB (WhatsApp limit).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import sharp from 'sharp';

const dist = join(process.cwd(), 'dist');
const size = { width: 1200, height: 630 };
const maxBytes = 300 * 1024;
const required = [
	'og:type', 'og:url', 'og:title', 'og:description', 'og:site_name', 'og:locale',
	'og:image', 'og:image:secure_url', 'og:image:type', 'og:image:width', 'og:image:height', 'og:image:alt',
	'twitter:card', 'twitter:image', 'twitter:image:alt',
];
// Redirect stubs (meta refresh) only need the preview tags and the canonical link
const requiredOnPages = ['theme-color'];
const formats = { 'image/jpeg': 'jpeg', 'image/png': 'png' };

const walk = (dir) => readdirSync(dir).flatMap((name) => {
	const path = join(dir, name);
	return statSync(path).isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
});

const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

let failures = 0;
let warnings = 0;
const imageCache = new Map();

async function inspect(path) {
	if (!imageCache.has(path)) {
		const data = readFileSync(path);
		const { width, height, format } = await sharp(data).metadata();
		imageCache.set(path, { bytes: data.length, width, height, format });
	}
	return imageCache.get(path);
}

for (const file of walk(dist).sort()) {
	const page = '/' + relative(dist, file);
	const html = readFileSync(file, 'utf8');
	const head = html.slice(0, html.indexOf('</head>'));
	const errors = [];
	const notes = [];

	const meta = {};
	for (const [tag] of head.matchAll(/<meta\s[^>]*>/g)) {
		const { property, name, content } = attrs(tag);
		const key = property ?? name;
		if (key && content !== undefined) (meta[key] ??= []).push(decode(content));
	}
	const links = {};
	for (const [tag] of head.matchAll(/<link\s[^>]*>/g)) {
		const { rel, href } = attrs(tag);
		if (rel && href) (links[rel] ??= []).push(decode(href));
	}
	const one = (key) => meta[key]?.[0];
	const isStub = /http-equiv="refresh"/.test(head);

	for (const key of [...required, ...(isStub ? [] : requiredOnPages)]) {
		if (!meta[key]?.length) errors.push(`missing ${key}`);
	}
	if (!links.canonical) errors.push('missing <link rel="canonical">');
	if (!isStub && !links['apple-touch-icon']) errors.push('missing <link rel="apple-touch-icon">');

	if ((meta['og:image']?.length ?? 0) > 1) errors.push(`${meta['og:image'].length} og:image tags (exactly one expected)`);
	if (one('twitter:card') && one('twitter:card') !== 'summary_large_image') {
		errors.push(`twitter:card is "${one('twitter:card')}", expected "summary_large_image"`);
	}
	for (const key of ['og:url', 'og:image', 'og:image:secure_url', 'twitter:image']) {
		const value = one(key);
		if (value && !value.startsWith('https://')) errors.push(`${key} is not an absolute https URL: ${value}`);
	}
	if (links.canonical && !links.canonical[0].startsWith('https://')) errors.push('canonical is not an absolute https URL');
	for (const key of ['og:image:secure_url', 'twitter:image']) {
		if (one(key) && one('og:image') && one(key) !== one('og:image')) errors.push(`${key} differs from og:image`);
	}

	const image = one('og:image');
	if (image?.startsWith('https://')) {
		const { pathname } = new URL(image);
		const path = join(dist, decodeURIComponent(pathname));
		let info;
		try {
			info = await inspect(path);
		} catch {
			errors.push(`image not found in dist/: ${pathname}`);
		}
		if (info) {
			if (info.width !== size.width || info.height !== size.height) {
				errors.push(`image is ${info.width}×${info.height}, expected ${size.width}×${size.height}`);
			}
			if (one('og:image:width') !== String(info.width) || one('og:image:height') !== String(info.height)) {
				errors.push(`declared ${one('og:image:width')}×${one('og:image:height')}, file is ${info.width}×${info.height}`);
			}
			if (formats[one('og:image:type')] !== info.format) {
				errors.push(`og:image:type is ${one('og:image:type')}, file is ${info.format}`);
			}
			if (info.bytes >= maxBytes) errors.push(`image weighs ${(info.bytes / 1024).toFixed(0)} KB (must stay under 300 KB)`);
		}
	}

	// Crawlers such as WhatsApp only read the beginning of the document
	const position = head.indexOf('property="og:image"');
	if (position > 4096) errors.push(`og:image starts at byte ${position}, keep the preview tags at the top of <head>`);

	const title = one('og:title') ?? '';
	const description = one('og:description') ?? '';
	if (title.length > 60) notes.push(`og:title is ${title.length} characters (about 60 max, 44 shown in full by iMessage)`);
	if (description.length > 160) notes.push(`og:description is ${description.length} characters (about 155 max)`);

	failures += errors.length;
	warnings += notes.length;
	console.log(`${errors.length ? '✗' : '✓'} ${page}`);
	for (const error of errors) console.log(`    error: ${error}`);
	for (const note of notes) console.log(`    warning: ${note}`);
}

for (const [path, { width, height, format, bytes }] of imageCache) {
	console.log(`  ${relative(dist, path)}: ${width}×${height} ${format}, ${(bytes / 1024).toFixed(0)} KB`);
}

if (failures) {
	console.error(`\ntest:og: ${failures} error(s), ${warnings} warning(s)`);
	process.exit(1);
}
console.log(`\ntest:og: all pages pass (${warnings} warning(s))`);
