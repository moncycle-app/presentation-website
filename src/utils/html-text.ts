const entities: Record<string, string> = {
	nbsp: ' ',
	amp: '&',
	lt: '<',
	gt: '>',
	quot: '"',
	apos: "'",
	hellip: '…',
};

const decode = (text: string) => text
	.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
	.replace(/&([a-z]+);/g, (all, name) => entities[name] ?? all);

/** Plain text of an HTML fragment made of <p>, <ul>/<li> and inline tags (one line per paragraph or item). */
export function htmlToText(fragment: string): string {
	return decode(fragment
		.replace(/<\/(p|li)>/g, '\n')
		.replace(/<li>/g, '• ')
		.replace(/<[^>]+>/g, '')
		.replace(/[ \t]*\n[\s]*/g, '\n')
		.replace(/[ \t]+/g, ' ')
		.trim());
}
