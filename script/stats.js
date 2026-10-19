// Key figures: replaces the numbers written in the HTML with the live ones.
// Reads both API formats: v1 (moncycle_app_nb_* keys) and v2 ({ data: { accounts, cycles, observations } }).
const V1_KEYS = {
	accounts: 'moncycle_app_nb_compte',
	cycles: 'moncycle_app_nb_cycle',
	observations: 'moncycle_app_nb_total_observation',
};

function read(json) {
	if (json?.data) return json.data;
	return Object.fromEntries(Object.entries(V1_KEYS).map(([key, v1]) => [key, json?.[v1]]));
}

export async function initStats(list) {
	if (!list) return;
	const lang = document.documentElement.lang || 'fr';
	try {
		const response = await fetch(list.dataset.statsSrc, { cache: 'no-cache' });
		if (!response.ok) throw new Error(String(response.status));
		const values = read(await response.json());
		const cells = [...list.querySelectorAll('[data-stat]')];
		// all or nothing: never show live and stale numbers side by side
		if (!cells.every((cell) => Number.isFinite(values[cell.dataset.stat]))) throw new Error('format');
		const format = new Intl.NumberFormat(lang);
		for (const cell of cells) cell.textContent = format.format(values[cell.dataset.stat]);

		const date = document.querySelector('[data-stats-date]');
		if (date) {
			const today = new Date();
			date.dateTime = today.toISOString().slice(0, 10);
			date.textContent = today.toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
		}
	} catch {
		// keep the fallback figures written in the HTML
	}
}
