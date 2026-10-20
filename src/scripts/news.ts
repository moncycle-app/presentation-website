// Latest news: reads the entry of the page language in the Tech 4 Fertility feed (the entry of
// data-news-fallback when the feed has none for that language) and fills the banner and the news section.
// Both stay hidden when the news is missing, invalid, unreachable or too old.
const TIMEOUT = 5000;
const MAX_AGE_DAYS = 30;
const REQUIRED = ['title', 'description', 'url', 'pubDate'];

interface News {
	title: string;
	description: string;
	url: string;
	date: Date;
}

function validate(json: any, lang: string, fallback: string): News {
	if (!json || typeof json !== 'object') throw new Error('response is not a JSON object');
	const key = json[lang] != null ? lang : fallback;
	const news = json[key];
	if (news == null || typeof news !== 'object') throw new Error(`no news for "${lang}" nor "${fallback}" (value: ${news})`);
	const missing = REQUIRED.filter((field) => typeof news[field] !== 'string' || !news[field].trim());
	if (missing.length) throw new Error(`missing or invalid field(s) in "${key}": ${missing.join(', ')}`);

	const date = new Date(news.pubDate);
	if (Number.isNaN(date.getTime())) throw new Error(`invalid pubDate: ${news.pubDate}`);
	const url = new URL(news.url);
	if (!['http:', 'https:'].includes(url.protocol)) throw new Error(`unsupported url protocol: ${news.url}`);
	return { title: news.title.trim(), description: news.description.trim(), url: url.href, date };
}

function render(news: News, lang: string): void {
	const set = (name: string, value: string) => document.querySelectorAll(`[data-news="${name}"]`).forEach((el) => { el.textContent = value; });
	const iso = news.date.toISOString();
	set('banner-title', news.title);
	set('title', news.title);
	set('description', news.description);
	set('date', news.date.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }));
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
	const lang = document.documentElement.lang || 'fr';
	try {
		const response = await fetch(source, { cache: 'no-cache', signal: AbortSignal.timeout(TIMEOUT) });
		if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}: ${(await response.text()).slice(0, 500)}`);
		const news = validate(await response.json(), lang, banner.dataset.newsFallback ?? lang);

		const age = (Date.now() - news.date.getTime()) / 86400000;
		if (age > MAX_AGE_DAYS) {
			console.info(`News "${news.title}" is ${Math.floor(age)} days old (max ${MAX_AGE_DAYS}): hidden.`);
			return;
		}
		render(news, lang);
		toggle(true);
	} catch (error) {
		console.error('News unavailable. Source:', source, error);
		toggle(false);
	}
}
