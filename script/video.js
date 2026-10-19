// The demo video plays (muted, looped) only while visible, and never on its own
// when the visitor asked for reduced motion. Controls stay available.
export function initVideo(video) {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let pausedByUser = false;

	video.addEventListener('pause', () => {
		if (!document.hidden && video.dataset.autoPaused !== 'true') pausedByUser = true;
		delete video.dataset.autoPaused;
	});
	video.addEventListener('play', () => { pausedByUser = false; });

	new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			if (!reduceMotion.matches && !pausedByUser) video.play().catch(() => {});
		} else if (!video.paused) {
			video.dataset.autoPaused = 'true';
			video.pause();
		}
	}, { threshold: 0.5 }).observe(video);
}
