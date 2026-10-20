// Language suggestion. The markup (components/LanguageBanner.astro) holds one hidden suggestion per other
// language; this reveals the one that matches the first supported language of the browser, unless the
// visitor already chose a language (switcher, banner link) or dismissed the banner.
const STORAGE_KEY = 'moncycle-language';

const remembered = (): string | null => {
	try {
		return localStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
};

const remember = (lang: string): void => {
	try {
		localStorage.setItem(STORAGE_KEY, lang);
	} catch {
		// storage unavailable (private mode…): the banner may come back, nothing else is lost
	}
};

export function initLangBanner(banner: HTMLElement | null): void {
	// a deliberate choice (switcher, selector page, banner link) counts as an answer
	document.querySelectorAll<HTMLElement>('[data-lang-choice]').forEach((link) => {
		link.addEventListener('click', () => remember(link.dataset.langChoice ?? ''));
	});
	if (!banner || remembered()) return;

	const current = document.documentElement.lang;
	const suggestions = [...banner.querySelectorAll<HTMLElement>('[data-lang-suggest]')];
	const supported = new Set([current, ...suggestions.map((el) => el.dataset.langSuggest)]);
	const preferred = (navigator.languages ?? [navigator.language]).map((tag) => tag.toLowerCase().split('-')[0]).find((code) => supported.has(code));
	const suggestion = suggestions.find((el) => el.dataset.langSuggest === preferred);
	if (!suggestion || preferred === current) return;

	suggestion.hidden = false;
	banner.hidden = false;
	suggestion.querySelector('[data-lang-dismiss]')?.addEventListener('click', () => {
		remember(current);
		banner.hidden = true;
	});
}
