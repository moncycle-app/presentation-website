// Latest news: reads the French entry of the Tech 4 Fertility feed and fills the banner and the
// "Actualités" section. Both stay hidden when the news is missing, invalid, unreachable or too old.
const TIMEOUT = 5000;
const MAX_AGE_DAYS = 30;
const REQUIRED = ['title', 'description', 'url', 'pubDate'];

interface News {
	title: string;
	description: string;
	url: string;
	date: Date;
}

function validate(json: any): News {
	if (!json || typeof json !== 'object') throw new Error('response is not a JSON object');
	for (const lang of ['fr', 'en']) {
		if (json[lang] == null) throw new Error(`no news for "${lang}" (value: ${json[lang]})`);
	}
	const news = json.fr;
	const missing = REQUIRED.filter((key) => typeof news[key] !== 'string' || !news[key].trim());
	if (missing.length) throw new Error(`missing or invalid field(s) in "fr": ${missing.join(', ')}`);

	const date = new Date(news.pubDate);
	if (Number.isNaN(date.getTime())) throw new Error(`invalid pubDate: ${news.pubDate}`);
	const url = new URL(news.url);
	if (!['http:', 'https:'].includes(url.protocol)) throw new Error(`unsupported url protocol: ${news.url}`);
	return { title: news.title.trim(), description: news.description.trim(), url: url.href, date };
}

function render(news: News): void {
	const set = (name: string, value: string) => document.querySelectorAll(`[data-news="${name}"]`).forEach((el) => { el.textContent = value; });
	const iso = news.date.toISOString();
	set('banner-title', news.title);
	set('title', news.title);
	set('description', news.description);
	set('date', news.date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }));
	const time = document.querySelector<HTMLTimeElement>('time[data-news="date"]');
	if (time) time.dateTime = iso;
	document.querySelectorAll('[data-news="link"], [data-news="banner-link"]').forEach((a) => { (a as HTMLAnchorElement).href = news.url; });
}

function toggle(visible: boolean): void {
	document.querySelectorAll<HTMLElement>('.news-banner, .news, [data-news-nav]').forEach((el) => { el.hidden = !visible; });
}

export async function initNews(banner: HTMLElement | null): Promise<void> {
	if (!banner) return;
	const source = banner.dataset.newsSrc ?? '';
	try {
		const response = await fetch(source, { cache: 'no-cache', signal: AbortSignal.timeout(TIMEOUT) });
		if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}: ${(await response.text()).slice(0, 500)}`);
		const news = validate(await response.json());

		const age = (Date.now() - news.date.getTime()) / 86400000;
		if (age > MAX_AGE_DAYS) {
			console.info(`News "${news.title}" is ${Math.floor(age)} days old (max ${MAX_AGE_DAYS}): hidden.`);
			return;
		}
		render(news);
		toggle(true);
	} catch (error) {
		console.error('News unavailable. Source:', source, error);
		toggle(false);
	}
}
