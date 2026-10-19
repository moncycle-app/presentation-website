// The demo video has no controls: it plays (muted, looped) on its own while
// visible, except when the visitor asked for reduced motion. A click or tap
// on it pauses or resumes it.
export function initVideo(video) {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let pausedByUser = reduceMotion.matches;

	video.addEventListener('click', () => {
		pausedByUser = !video.paused;
		if (video.paused) video.play().catch(() => {});
		else video.pause();
	});

	new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			if (!pausedByUser) video.play().catch(() => {});
		} else if (!video.paused) {
			video.pause();
		}
	}, { threshold: 0.5 }).observe(video);
}
