// Screenshots open enlarged in a modal <dialog> instead of a new page.
// Without JavaScript, the links still lead to the full-size images.
export function initLightbox(root: HTMLElement): void {
	const dialog = root.querySelector<HTMLDialogElement>('.lightbox');
	const links = [...root.querySelectorAll<HTMLAnchorElement>('.gallery-track a')];
	if (!dialog || !links.length || typeof dialog.showModal !== 'function') return;

	const image = dialog.querySelector('img');
	const caption = dialog.querySelector('figcaption');
	const prev = dialog.querySelector('[data-lightbox-prev]');
	const next = dialog.querySelector('[data-lightbox-next]');
	const close = dialog.querySelector('[data-lightbox-close]');
	if (!image || !caption || !prev || !next || !close) return;
	let index = 0;

	const show = (i: number) => {
		index = (i + links.length) % links.length;
		const link = links[index];
		const thumbnail = link.querySelector('img');
		image.src = link.href;
		image.alt = thumbnail?.alt ?? '';
		image.width = thumbnail?.width ?? 0;
		image.height = thumbnail?.height ?? 0;
		caption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent ?? '';
	};

	links.forEach((link, i) => link.addEventListener('click', (event) => {
		event.preventDefault();
		show(i);
		dialog.showModal();
	}));

	prev.addEventListener('click', () => show(index - 1));
	next.addEventListener('click', () => show(index + 1));
	close.addEventListener('click', () => dialog.close());
	dialog.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowLeft') show(index - 1);
		else if (event.key === 'ArrowRight') show(index + 1);
	});
	// a click on the backdrop (the dialog itself, outside its content) closes it
	dialog.addEventListener('click', (event) => {
		if (event.target === dialog) dialog.close();
	});
	// give focus back to the screenshot that is now shown
	dialog.addEventListener('close', () => {
		links[index].scrollIntoView({ block: 'nearest', inline: 'nearest' });
		links[index].focus({ preventScroll: true });
	});
}
