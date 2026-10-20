import { faq } from './faq';
import { featureGroups } from './features';
import { home } from './home';
import { legal } from './legal';
import { llms } from './llms';
import { methods } from './methods';
import { screenshots } from './screenshots';
import { techLinks } from './tech';
import { ui } from './ui';

// French is the reference language: the type of this object is the type every language must satisfy.
export const messages = { ui, home, faq, featureGroups, methods, techLinks, screenshots, legal, llms };
