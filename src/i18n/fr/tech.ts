import type { TechLink } from '../types';

export const techLinks: TechLink[] = [
	{
		icon: 'code',
		href: 'https://github.com/moncycle-app/backend-api-web-app',
		title: 'Code source sur GitHub',
		text: 'Application web, API, scripts de maintenance et documentation de déploiement.',
	},
	{
		icon: 'book',
		href: 'https://tableau.moncycle.app/api/',
		title: 'Documentation de l’API',
		text: 'API v2 décrite au format OpenAPI 3.0. Vous pouvez l’utiliser avec votre propre compte, grâce à un jeton d’accès créé dans «&nbsp;Mon compte&nbsp;».',
	},
	{
		icon: 'box',
		href: 'https://hub.docker.com/r/jeanio/moncycle.app',
		title: 'Image Docker',
		text: '<code>jeanio/moncycle.app</code>&nbsp;: l’image crée son schéma de base de données au premier démarrage et exécute elle-même la tâche quotidienne.',
	},
	{
		icon: 'server',
		href: 'https://install-app.yunohost.org/?app=moncycle',
		title: 'Installer avec YunoHost',
		text: 'Pour héberger votre propre instance sur un serveur YunoHost, directement depuis son interface d’administration.',
	},
	{
		icon: 'file',
		href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr',
		title: 'Licence CC BY-NC-SA 4.0',
		text: 'Elle s’applique au code&nbsp;; vos données restent les vôtres.',
	},
	{
		icon: 'pulse',
		href: 'https://status.moncycle.app',
		title: 'État du service',
		text: 'La disponibilité du service est surveillée par updown.io, qui n’a accès à aucune donnée de compte.',
	},
];
