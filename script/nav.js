// Mobile menu: the toggle only exists once JavaScript runs; the nav stays visible otherwise.
export function initNav(header) {
	if (!header) return;
	const toggle = header.querySelector('.nav-toggle');
	const nav = header.querySelector('.site-nav');
	if (!toggle || !nav) return;

	const setOpen = (open) => {
		toggle.setAttribute('aria-expanded', String(open));
		nav.classList.toggle('is-open', open);
	};

	toggle.hidden = false;
	toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
	nav.addEventListener('click', (event) => {
		if (event.target.closest('a')) setOpen(false);
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && nav.classList.contains('is-open')) {
			setOpen(false);
			toggle.focus();
		}
	});
}
