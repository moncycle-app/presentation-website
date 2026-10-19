// Mobile menu. Classic script (not a module) so the menu also works when the page is
// opened from disk (file://), where browsers block ES modules. The CSS shows the toggle
// and folds the nav as soon as <html> has the "js" class; this only wires the behaviour.
(() => {
	const header = document.querySelector('.site-header');
	const toggle = header && header.querySelector('.nav-toggle');
	const nav = header && header.querySelector('.site-nav');
	if (!toggle || !nav) return;

	const setOpen = (open) => {
		toggle.setAttribute('aria-expanded', String(open));
		nav.classList.toggle('is-open', open);
	};

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
})();
