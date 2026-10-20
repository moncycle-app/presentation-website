// Mobile menu. The CSS shows the toggle and folds the nav as soon as <html> has the "js" class
// (set by an inline script in <head>); this only wires the behaviour.
export function initNav(): void {
	const header = document.querySelector('.site-header');
	const toggle = header?.querySelector<HTMLButtonElement>('.nav-toggle');
	const nav = header?.querySelector<HTMLElement>('.site-nav');
	if (!toggle || !nav) return;

	const setOpen = (open: boolean) => {
		toggle.setAttribute('aria-expanded', String(open));
		nav.classList.toggle('is-open', open);
	};

	toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
	nav.addEventListener('click', (event) => {
		if ((event.target as Element).closest('a')) setOpen(false);
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && nav.classList.contains('is-open')) {
			setOpen(false);
			toggle.focus();
		}
	});
}
