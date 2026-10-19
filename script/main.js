// Entry point. Each module enhances markup that already works without JavaScript.
import { initNav } from './nav.js';
import { initGallery } from './gallery.js';
import { initNews } from './news.js';
import { initVideo } from './video.js';

initNav(document.querySelector('.site-header'));
document.querySelectorAll('[data-gallery]').forEach(initGallery);
initNews(document.querySelector('[data-news-src]'));
document.querySelectorAll('.demo-video video').forEach(initVideo);
