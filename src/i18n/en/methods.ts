import { urls } from '../../data/site';
import type { Method } from '../types';

export const methods: Method[] = [
	{
		name: 'Billings method',
		compatibility: 'full',
		badge: '100% compatible',
		text: `Find a teacher through <a href="${urls.billingsInternational}" target="_blank" rel="noopener">WOOMB International</a>, or in France through the <a href="${urls.billingsTrainers}" target="_blank" rel="noopener" hreflang="fr">Centre Billings France</a> (in French).`,
	},
	{
		name: 'FertilityCare (NaProTECHNOLOGY)',
		compatibility: 'full',
		badge: '100% compatible',
		text: `Find a practitioner through <a href="${urls.fertilityCareInternational}" target="_blank" rel="noopener">FertilityCare Centers of America</a>, or in France through <a href="${urls.fertilityCareInstructors}" target="_blank" rel="noopener" hreflang="fr">FertilityCare France</a> (in French).`,
	},
	{
		name: 'Cyclamen (symptothermal)',
		compatibility: 'partial',
		badge: 'Partially compatible',
		text: 'The app only allows a partial reading of temperature curves.',
	},
	{
		name: 'SensiPlan (symptothermal)',
		compatibility: 'partial',
		badge: 'Partially compatible',
		text: 'Same limit: the temperature curve is only partially interpreted.',
	},
	{
		name: 'M method (M fertility, symptothermal)',
		compatibility: 'partial',
		badge: 'Partially compatible',
		text: 'Same limit as for the other symptothermal methods.',
	},
];
