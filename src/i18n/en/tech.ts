import type { TechLink } from '../types';

export const techLinks: TechLink[] = [
	{
		icon: 'code',
		href: 'https://github.com/moncycle-app/backend-api-web-app',
		title: 'Source code on GitHub',
		text: 'Web app, API, maintenance scripts and deployment documentation.',
	},
	{
		icon: 'book',
		href: 'https://tableau.moncycle.app/api/',
		title: 'API documentation',
		text: 'API v2 described in the OpenAPI 3.0 format. You can use it with your own account, thanks to an access token created in “My account”.',
	},
	{
		icon: 'box',
		href: 'https://hub.docker.com/r/jeanio/moncycle.app',
		title: 'Docker image',
		text: '<code>jeanio/moncycle.app</code>: the image creates its database schema on first start and runs the daily task itself.',
	},
	{
		icon: 'server',
		href: 'https://install-app.yunohost.org/?app=moncycle',
		title: 'Install with YunoHost',
		text: 'To host your own instance on a YunoHost server, straight from its administration interface.',
	},
	{
		icon: 'file',
		href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en',
		title: 'CC BY-NC-SA 4.0 licence',
		text: 'It applies to the code; your data remains yours.',
	},
	{
		icon: 'pulse',
		href: 'https://status.moncycle.app',
		title: 'Service status',
		text: 'The availability of the service is monitored by updown.io, which has no access to any account data.',
	},
];
