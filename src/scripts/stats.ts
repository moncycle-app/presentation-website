// Key figures: replaces the numbers written in the HTML with the live ones,
// then counts them up from zero the first time the list scrolls into view.
// Reads both API formats: v1 (moncycle_app_nb_* keys) and v2 ({ data: { accounts, cycles, observations } }).
const V1_KEYS = {
	accounts: 'moncycle_app_nb_compte',
	cycles: 'moncycle_app_nb_cycle',
	observations: 'moncycle_app_nb_total_observation',
};
const TIMEOUT = 5000;
const DURATION = 1600;

type Stats = Record<string, unknown>;

function read(json: any): Stats {
	if (json?.data) return json.data;
	return Object.fromEntries(Object.entries(V1_KEYS).map(([key, v1]) => [key, json?.[v1]]));
}

async function fetchStats(list: HTMLElement, cells: HTMLElement[], format: Intl.NumberFormat, lang: string): Promise<void> {
	try {
		const response = await fetch(list.dataset.statsSrc ?? '', { cache: 'no-cache', signal: AbortSignal.timeout(TIMEOUT) });
		if (!response.ok) throw new Error(String(response.status));
		const values = read(await response.json());
		// all or nothing: never show live and stale numbers side by side
		if (!cells.every((cell) => Number.isFinite(values[cell.dataset.stat ?? '']))) throw new Error('format');
		for (const cell of cells) cell.textContent = format.format(values[cell.dataset.stat ?? ''] as number);

		const date = document.querySelector<HTMLTimeElement>('[data-stats-date]');
		if (date) {
			const today = new Date();
			date.dateTime = today.toISOString().slice(0, 10);
			date.textContent = today.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
		}
	} catch {
		// keep the fallback figures written in the HTML
	}
}

function countUp(cells: HTMLElement[], format: Intl.NumberFormat): void {
	const targets = cells.map((cell) => Number((cell.textContent ?? '').replace(/\D/g, '')));
	const start = performance.now();
	const step = (now: number) => {
		const progress = Math.min((now - start) / DURATION, 1);
		const eased = 1 - (1 - progress) ** 3;
		cells.forEach((cell, i) => { cell.textContent = format.format(Math.round(targets[i] * eased)); });
		if (progress < 1) requestAnimationFrame(step);
	};
	requestAnimationFrame(step);
}

export async function initStats(list: HTMLElement | null): Promise<void> {
	if (!list) return;
	const lang = document.documentElement.lang || 'fr';
	const format = new Intl.NumberFormat(lang);
	const cells = [...list.querySelectorAll<HTMLElement>('[data-stat]')];

	await fetchStats(list, cells, format, lang);

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
	const observer = new IntersectionObserver((entries) => {
		if (!entries.some((entry) => entry.isIntersecting)) return;
		observer.disconnect();
		countUp(cells, format);
	}, { threshold: 0.5 });
	observer.observe(list);
}
