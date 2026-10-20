// Icon sprite: decorative shapes, referenced with <use href='#…'> (see Icon.astro and IconSprite.astro).
// The inner markup of each <symbol>; the stroke and fill come from the CSS.

export const icons = {
	logo: { viewBox: '0 0 2 2', body: '<path fill="#ac2333" d="M0 0h1v1H0z"/><path fill="#fbca0b" d="M1 0h1v1H1z"/><path fill="#1e824c" d="M0 1h1v1H0z"/><path fill="#fff" d="M1 1h1v1H1z"/>' },
	drop: { viewBox: '0 0 24 24', body: '<path d="M12 3c3.5 4.4 6 8 6 11a6 6 0 0 1-12 0c0-3 2.5-6.6 6-11z"/>' },
	thermo: { viewBox: '0 0 24 24', body: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v7"/>' },
	list: { viewBox: '0 0 24 24', body: '<path d="M10 6h10M10 12h10M10 18h10M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>' },
	ban: { viewBox: '0 0 24 24', body: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>' },
	phone: { viewBox: '0 0 24 24', body: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>' },
	moon: { viewBox: '0 0 24 24', body: '<path d="M20 13.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5z"/>' },
	sync: { viewBox: '0 0 24 24', body: '<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4"/>' },
	download: { viewBox: '0 0 24 24', body: '<path d="M12 3v12M7 10l5 5 5-5M5 20h14"/>' },
	mail: { viewBox: '0 0 24 24', body: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>' },
	pin: { viewBox: '0 0 24 24', body: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>' },
	shield: { viewBox: '0 0 24 24', body: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>' },
	lock: { viewBox: '0 0 24 24', body: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>' },
	code: { viewBox: '0 0 24 24', body: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/>' },
	heart: { viewBox: '0 0 24 24', body: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>' },
	book: { viewBox: '0 0 24 24', body: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14"/>' },
	box: { viewBox: '0 0 24 24', body: '<path d="M3 7.5l9-4.5 9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5L12 12l9-4.5M12 12v9"/>' },
	server: { viewBox: '0 0 24 24', body: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>' },
	pulse: { viewBox: '0 0 24 24', body: '<path d="M3 12h4l3-7 4 14 3-7h4"/>' },
	file: { viewBox: '0 0 24 24', body: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>' },
	menu: { viewBox: '0 0 24 24', body: '<path d="M4 7h16M4 12h16M4 17h16"/>' },
	left: { viewBox: '0 0 24 24', body: '<path d="M15 5l-7 7 7 7"/>' },
	right: { viewBox: '0 0 24 24', body: '<path d="M9 5l7 7-7 7"/>' },
	close: { viewBox: '0 0 24 24', body: '<path d="M6 6l12 12M18 6L6 18"/>' },
} as const;

export type IconName = keyof typeof icons;
