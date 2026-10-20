import { urls } from '../../data/site';
import type { FeatureGroup } from '../types';

export const featureGroups: FeatureGroup[] = [
	{
		title: 'Designed for natural family planning',
		features: [
			{ icon: 'drop', title: 'Cervical mucus and periods', text: `Sensation, appearance, flow: everything the method taught you to observe.` },
			{ icon: 'thermo', title: 'Temperature, if you take it', text: `It is added to the chart, together with its curve. Otherwise, it does not appear.` },
			{ icon: 'list', title: 'Billings and FertilityCare', text: `100% compatible, each with its official notation.` },
			{ icon: 'ban', title: 'No AI, no predictions', text: `No calculation determines your fertility: the chart only shows what you entered.` },
		],
	},
	{
		title: 'Day to day',
		features: [
			{ icon: 'phone', title: 'Designed for the phone', text: `And just as readable on a computer.` },
			{ icon: 'moon', title: 'Dark mode', text: `Ideal for the evening entry.` },
			{ icon: 'sync', title: 'On all your devices', text: `Your data is synchronised between phone, tablet and computer.` },
			{ icon: 'download', title: 'PDF, CSV and NFP export', text: `To print, keep a copy or switch tools.` },
			{ icon: 'mail', title: 'Sending by e-mail, optional', text: `Once the option is on, each completed cycle is sent to your address and to the recipients of your choice.` },
		],
	},
	{
		title: 'Your data',
		features: [
			{ icon: 'pin', title: 'Hosted in France', text: `At OVH. No data leaves the European Union.` },
			{ icon: 'shield', title: 'No ads, no tracking, no resale', text: `The app is funded by donations, not by your data.` },
			{ icon: 'lock', title: 'Two-factor authentication (TOTP)', text: `Optional, with an e-mail alert on every new login.` },
			{ icon: 'code', title: 'Open source', text: `The <a href="${urls.github}" target="_blank" rel="noopener">code is public</a>: anyone can check how it works.` },
		],
	},
];
