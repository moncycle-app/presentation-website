// Loads the news fragment (same origin, maintained by the team) into the News section.
// Only a small set of tags is kept; headings are shifted so they sit under the section's h2.
const ALLOWED = new Map([
	['H4', 'h3'], ['H3', 'h3'], ['P', 'p'], ['TIME', 'time'], ['A', 'a'], ['BR', 'br'],
	['STRONG', 'strong'], ['B', 'strong'], ['EM', 'em'], ['I', 'em'], ['UL', 'ul'], ['OL', 'ol'], ['LI', 'li'],
]);
const ATTRIBUTES = { a: ['href', 'hreflang'], time: ['datetime'] };

function copy(source, target) {
	for (const node of source.childNodes) {
		if (node.nodeType === Node.TEXT_NODE) {
			target.append(node.textContent);
			continue;
		}
		if (node.nodeType !== Node.ELEMENT_NODE) continue;
		const tag = ALLOWED.get(node.tagName);
		if (!tag) {
			copy(node, target);
			continue;
		}
		const element = document.createElement(tag);
		for (const name of ATTRIBUTES[tag] ?? []) {
			const value = node.getAttribute(name);
			if (value !== null) element.setAttribute(name, value);
		}
		if (tag === 'a') {
			const url = new URL(element.getAttribute('href') ?? '', document.baseURI);
			if (!['http:', 'https:', 'mailto:'].includes(url.protocol)) element.removeAttribute('href');
		}
		copy(node, element);
		target.append(element);
	}
}

export async function initNews(section) {
	if (!section) return;
	const content = section.querySelector('.news-content');
	const source = new URL(section.dataset.newsSrc, document.baseURI);
	if (source.origin !== location.origin) return;

	section.dataset.state = 'loading';
	try {
		// "no-cache" revalidates with the server, so a new deployment shows up at once.
		const response = await fetch(source, { cache: 'no-cache' });
		if (!response.ok) throw new Error(String(response.status));
		const fragment = new DOMParser().parseFromString(await response.text(), 'text/html');
		const holder = document.createDocumentFragment();
		copy(fragment.body, holder);
		if (!holder.textContent.trim()) throw new Error('empty');
		content.replaceChildren(holder);
		section.dataset.state = 'done';
	} catch {
		section.dataset.state = 'error';
	}
}
