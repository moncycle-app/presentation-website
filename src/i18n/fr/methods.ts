import type { Method } from '../types';

export const methods: Method[] = [
	{
		name: 'Méthode Billings du Centre Billings France',
		compatibility: 'full',
		badge: 'Compatible à 100\u00a0%',
		text: '<a href="https://www.methode-billings.com/trouver-un-formateur" target="_blank" rel="noopener">Trouver un couple formateur</a> auprès du Centre Billings France (aussi appelé CBF).',
	},
	{
		name: 'Méthode FertilityCare',
		compatibility: 'full',
		badge: 'Compatible à 100\u00a0%',
		text: '<a href="https://napro.fr/contacter-une-instructrice/" target="_blank" rel="noopener">Trouver une instructrice</a> auprès de Napro France.',
	},
	{
		name: 'Cyclamen (symptothermie)',
		compatibility: 'partial',
		badge: 'Partiellement compatible',
		text: 'L’application ne permet qu’une lecture partielle des courbes de température.',
	},
	{
		name: 'SensiPlan (symptothermie)',
		compatibility: 'partial',
		badge: 'Partiellement compatible',
		text: 'Même limite\u00a0: la courbe de température n’est prise en charge que partiellement.',
	},
	{
		name: 'Méthode M (M fertilité, symptothermie)',
		compatibility: 'partial',
		badge: 'Partiellement compatible',
		text: 'Même limite que pour les autres méthodes symptothermiques.',
	},
];
