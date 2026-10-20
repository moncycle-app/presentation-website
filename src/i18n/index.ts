import { langs, locales, type Lang } from './config';
import { messages as en } from './en';
import TermsEn from './en/Terms.astro';
import { messages as fr } from './fr';
import TermsFr from './fr/Terms.astro';

export type Messages = typeof fr;

const registry: Record<Lang, { messages: Messages; Terms: typeof TermsFr }> = {
	fr: { messages: fr, Terms: TermsFr },
	en: { messages: en, Terms: TermsEn },
};

export const getMessages = (lang: Lang): Messages => registry[lang].messages;

/** The component holding the text of the terms of use in this language */
export const getTerms = (lang: Lang) => registry[lang].Terms;

export { langs, locales };
export type { Lang };
