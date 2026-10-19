// Regenerates the FAQPage JSON-LD of a page from its visible FAQ, so both always match.
// Usage: node tools/faq-jsonld.mjs [index.html]   (no dependency; run after every FAQ edit)
import { readFileSync, writeFileSync } from 'node:fs';

const file = process.argv[2] ?? 'index.html';
const html = readFileSync(file, 'utf8');

const faq = html.match(/<!-- FAQ:START -->([\s\S]*?)<!-- FAQ:END -->/)?.[1];
if (!faq) throw new Error(`${file}: FAQ:START / FAQ:END markers not found`);

const entities = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", hellip: '…' };
const decode = (text) => text
	.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
	.replace(/&([a-z]+);/g, (all, name) => entities[name] ?? all);

const toText = (fragment) => decode(fragment
	.replace(/<\/(p|li)>/g, '\n')
	.replace(/<li>/g, '• ')
	.replace(/<[^>]+>/g, '')
	.replace(/[ \t]*\n[\s]*/g, '\n')
	.replace(/[ \t]+/g, ' ')
	.trim());

const entries = [...faq.matchAll(/<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<div class="faq-answer">([\s\S]*?)<\/div>\s*<\/details>/g)]
	.map(([, question, answer]) => ({
		'@type': 'Question',
		name: toText(question),
		acceptedAnswer: { '@type': 'Answer', text: toText(answer) },
	}));
if (!entries.length) throw new Error(`${file}: no <details> found in the FAQ`);

const jsonld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entries };
const block = `<script type="application/ld+json">\n${JSON.stringify(jsonld, null, '\t')}\n\t</script>`;

const out = html.replace(
	/(<!-- FAQ:JSONLD:START[^>]*-->)[\s\S]*?(<!-- FAQ:JSONLD:END -->)/,
	(_, start, end) => `${start}\n\t${block}\n\t${end}`,
);
writeFileSync(file, out);
console.log(`${file}: ${entries.length} questions written to the FAQPage JSON-LD`);
