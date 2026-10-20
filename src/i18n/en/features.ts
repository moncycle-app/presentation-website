import { urls } from '../../data/site';
import type { FeatureGroup } from '../types';

export const featureGroups: FeatureGroup[] = [
	{
		title: 'Designed for natural family planning',
		features: [
			{ icon: 'drop', title: 'Cervical mucus and periods', text: `Sensation, appearance, flow: everything your method has taught you to observe.` },
			{ icon: 'thermo', title: 'Temperature, if you measure it', text: `It is added to the chart, together with its curve. If you do not measure it, it does not appear.` },
			{ icon: 'list', title: 'Billings and FertilityCare', text: `100% compatible, each with its official notation.` },
			{ icon: 'ban', title: 'No AI, no predictions', text: `No calculation decides your fertility. The chart shows only what you have entered.` },
		],
	},
	{
		title: 'Every day',
		features: [
			{ icon: 'phone', title: 'Designed for phones', text: `And just as easy to read on a computer.` },
			{ icon: 'moon', title: 'Dark mode', text: `Ideal for your evening entry.` },
			{ icon: 'sync', title: 'On all your devices', text: `Your data is synchronised between your phone, tablet and computer.` },
			{ icon: 'download', title: 'PDF, CSV and NFP export', text: `To print, to keep a copy or to change tools.` },
			{ icon: 'mail', title: 'Email delivery (optional)', text: `Once you turn on this option, each completed cycle is sent to your address and to the recipients you choose.` },
		],
	},
	{
		title: 'Your data',
		features: [
			{ icon: 'pin', title: 'Hosted in France', text: `At OVH. No data leaves the European Union.` },
			{ icon: 'shield', title: 'No advertising, no tracking, no data sales', text: `The application is funded by donations, not by your data.` },
			{ icon: 'lock', title: 'Two-factor authentication (TOTP)', text: `Optional, with an email alert for each new login.` },
			{ icon: 'code', title: 'Open source', text: `The <a href="${urls.github}" target="_blank" rel="noopener">code is public</a>: anyone can check how it works.` },
		],
	},
];
