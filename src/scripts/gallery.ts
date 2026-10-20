// Screenshot strip: native horizontal scrolling, plus previous/next buttons.
export function initGallery(root: HTMLElement): void {
	const track = root.querySelector<HTMLElement>('.gallery-track');
	const controls = root.querySelector<HTMLElement>('.gallery-controls');
	const prev = root.querySelector<HTMLButtonElement>('[data-gallery-prev]');
	const next = root.querySelector<HTMLButtonElement>('[data-gallery-next]');
	if (!track || !controls || !prev || !next) return;

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	const step = () => {
		const item = track.querySelector('li');
		if (!item) return 0;
		const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
		const perView = Math.max(1, Math.floor(track.clientWidth / (item.offsetWidth + gap)));
		return perView * (item.offsetWidth + gap);
	};
	const scroll = (direction: number) => track.scrollBy({
		left: direction * step(),
		behavior: reduceMotion.matches ? 'auto' : 'smooth',
	});
	const update = () => {
		// a few pixels of slack: the track has inner padding and snapping rounds positions
		const max = track.scrollWidth - track.clientWidth;
		prev.disabled = track.scrollLeft <= 10;
		next.disabled = track.scrollLeft >= max - 10;
		controls.hidden = max <= 10;
	};

	prev.addEventListener('click', () => scroll(-1));
	next.addEventListener('click', () => scroll(1));
	track.addEventListener('scroll', update, { passive: true });
	new ResizeObserver(update).observe(track);
	update();
}
