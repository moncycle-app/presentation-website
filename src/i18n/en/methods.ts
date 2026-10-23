import type { Method } from '../types';

export const methods: Method[] = [
	{
		name: 'Billings Ovulation Method',
		compatibility: 'full',
		badge: '100% compatible',
		text: '<a href="https://www.methode-billings.com/trouver-un-formateur" target="_blank" rel="noopener">Find a teaching couple</a> through the Centre Billings France (website in French).',
	},
	{
		name: 'FertilityCare',
		compatibility: 'full',
		badge: '100% compatible',
		text: '<a href="https://napro.fr/contacter-une-instructrice/" target="_blank" rel="noopener">Find an instructor</a> through FertilityCare France (website in French).',
	},
	{
		name: 'Cyclamen (symptothermal)',
		compatibility: 'partial',
		badge: 'Partly compatible',
		text: 'The application only partly supports temperature curves.',
	},
	{
		name: 'SensiPlan (symptothermal)',
		compatibility: 'partial',
		badge: 'Partly compatible',
		text: 'Same limitation: the temperature curve is only partly supported.',
	},
	{
		name: 'Méthode M (M Fertilité, symptothermal)',
		compatibility: 'partial',
		badge: 'Partly compatible',
		text: 'Same limitation as for the other symptothermal methods.',
	},
];
