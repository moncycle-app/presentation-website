// Entry point. Each module enhances markup that already works without JavaScript.
import { initGallery } from './gallery';
import { initLangBanner } from './lang-banner';
import { initLightbox } from './lightbox';
import { initNav } from './nav';
import { initNews } from './news';
import { initStats } from './stats';
import { initVideo } from './video';

initNav();
initLangBanner(document.querySelector<HTMLElement>('[data-lang-banner]'));
document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(initGallery);
document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(initLightbox);
initNews(document.querySelector<HTMLElement>('[data-news-src]'));
initStats(document.querySelector<HTMLElement>('[data-stats-src]'));
document.querySelectorAll<HTMLVideoElement>('.demo-video video').forEach(initVideo);
