import { urls } from '../../data/site';
import type { FeatureGroup } from '../types';

export const featureGroups: FeatureGroup[] = [
	{
		title: 'Conçue pour la régulation naturelle des naissances',
		features: [
			{ icon: 'drop', title: 'La glaire cervicale et les règles', text: `Sensation, aspect, flux&nbsp;: tout ce que la méthode vous a appris à observer.` },
			{ icon: 'thermo', title: 'La température, si vous la mesurez', text: `Elle s’ajoute au tableau, accompagnée de sa courbe. Dans le cas contraire, elle n’apparaît pas.` },
			{ icon: 'list', title: 'Billings et FertilityCare', text: `Compatibles à 100&nbsp;%, chacune avec sa notation officielle.` },
			{ icon: 'ban', title: 'Sans IA, sans prédiction', text: `Aucun calcul ne détermine votre fertilité&nbsp;: le tableau présente uniquement ce que vous avez saisi.` },
		],
	},
	{
		title: 'Au quotidien',
		features: [
			{ icon: 'phone', title: 'Pensée pour le téléphone', text: `Et tout aussi lisible sur ordinateur.` },
			{ icon: 'moon', title: 'Mode sombre', text: `Idéal pour la saisie du soir.` },
			{ icon: 'sync', title: 'Sur tous vos appareils', text: `Vos données sont synchronisées entre le téléphone, la tablette et l’ordinateur.` },
			{ icon: 'download', title: 'Export PDF, CSV et NFP', text: `Pour imprimer, conserver une copie ou changer d’outil avec le format NFP.` },
			{ icon: 'mail', title: 'Envoi par e-mail, en option', text: `Une fois l’option activée, chaque cycle terminé est envoyé à votre adresse et aux destinataires de votre choix.` },
		],
	},
	{
		title: 'Vos données',
		features: [
			{ icon: 'pin', title: 'Hébergées en France', text: `Chez OVH. Aucune donnée ne quitte l’Union européenne.` },
			{ icon: 'shield', title: 'Ni publicité, ni pistage, ni revente', text: `L’application est financée par les dons, et non par vos données.` },
			{ icon: 'lock', title: 'Double authentification (TOTP)', text: `En option, avec une alerte par e-mail à chaque nouvelle connexion.` },
			{ icon: 'code', title: 'Open source', text: `Le <a href="${urls.github}" target="_blank" rel="noopener">code est public</a>&nbsp;: chacun peut en vérifier le fonctionnement.` },
		],
	},
];
