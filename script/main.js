// Entry point. Each module enhances markup that already works without JavaScript.
import { initGallery } from './gallery.js';
import { initLightbox } from './lightbox.js';
import { initNews } from './news.js';
import { initStats } from './stats.js';
import { initVideo } from './video.js';

document.querySelectorAll('[data-gallery]').forEach(initGallery);
document.querySelectorAll('[data-gallery]').forEach(initLightbox);
initNews(document.querySelector('[data-news-src]'));
initStats(document.querySelector('[data-stats-src]'));
document.querySelectorAll('.demo-video video').forEach(initVideo);
