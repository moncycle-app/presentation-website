import { urls } from '../../data/site';
import type { FaqEntry } from '../types';

// Frequently asked questions. The visible FAQ and the FAQPage JSON-LD are both generated from this list.
export const faq: FaqEntry[] = [
	{
		id: 'faq-what',
		question: `What is moncycle.app?`,
		answer: [
			`<p>moncycle.app is a cycle tracking notebook designed for natural family planning methods: Billings and FertilityCare, with or without temperature. You enter your observations; the app presents them as a chart and lets you export them. This free web app works on a phone as well as on a computer.</p>`,
			`<p>It is a wellness tool: it is neither a medical device, nor a contraceptive, nor a diagnostic tool.</p>`,
		],
	},
	{
		id: 'faq-language',
		question: `Is the app available in English?`,
		answer: [
			`<p>Not yet: the interface of the app itself is currently in French only. This website, including the terms of use and privacy policy, is available in French and English. The charts follow the standard notation of each method, which is the same whatever the language.</p>`,
		],
	},
	{
		id: 'faq-who',
		question: `Who develops moncycle.app?`,
		answer: [
			`<p>The app is developed and distributed by <a href='${urls.tech4fertility}' target='_blank' rel='noopener'>Tech&nbsp;4&nbsp;Fertility</a>, a French non-profit association (loi of 1901) headquartered in Vernon (Eure). The association has owned it since October 2026. The source code is public and available on <a href='${urls.github}' target='_blank' rel='noopener'>GitHub</a>.</p>`,
		],
	},
	{
		id: 'faq-free',
		question: `Is the app really free? How can I support it?`,
		answer: [
			`<p>Yes. There is no subscription, no paid version, no advertising, and your data is never sold. The app is funded by donations to Tech&nbsp;4&nbsp;Fertility, which cover hosting, the domain name and the time spent on maintenance. To donate, go to the <a href='#support'>Support moncycle.app</a> section.</p>`,
		],
	},
	{
		id: 'faq-signup',
		question: `How do I create an account?`,
		answer: [
			`<p>Go to the <a href='${urls.register}' target='_blank' rel='noopener'>sign-up page</a>. You must be at least 18 years old. The information requested is the following:</p>`,
			`<ul> <li>a pseudonym (your initials are enough);</li> <li>an e-mail address that does not identify you (avoid, for example, firstname.lastname@…);</li> <li>a password of at least 10&nbsp;characters, which you do not use for any other service;</li> <li>your year of birth and the method you follow.</li> </ul>`,
			`<p>You then receive a confirmation link, valid for 3&nbsp;days. Any unconfirmed account is deleted after 7&nbsp;days.</p>`,
		],
	},
	{
		id: 'faq-install',
		question: `How do I install moncycle.app on iPhone or Android?`,
		answer: [
			`<p>moncycle.app is available neither on the App Store nor on Google Play: it is a web app. Log in, open your chart, then add the page to your home screen. On iPhone, in Safari, tap the Share button, then “Add to Home Screen”. On Android, in Chrome, open the menu, then choose “Add to Home screen”. The icon created this way opens the app directly.</p>`,
			`<p>Tech&nbsp;4&nbsp;Fertility is preparing iPhone and Android apps. Their release will be announced on this site.</p>`,
		],
	},
	{
		id: 'faq-reliable',
		question: `Are cycle tracking apps reliable?`,
		answer: [
			`<p>It depends on what you expect from them. Most of them announce your next period or your ovulation date from the length of your previous cycles. This is the principle of the old Ogino calendar method, transposed to digital: it loses all reliability as soon as cycle length varies, which is the case for many women.</p>`,
			`<p>Observation-based methods work the other way round: they rely on the signs of the current cycle, such as cervical mucus or temperature.</p>`,
			`<p>This is why moncycle.app makes no predictions. It records your observations and presents them in the notation of the method you follow. The interpretation is yours.</p>`,
		],
	},
	{
		id: 'faq-contraception',
		question: `Can a cycle tracking app be used as contraception?`,
		answer: [
			`<p>No. An app is not a contraceptive: it is only the notebook in which you record your observations. If you follow a natural family planning method to space pregnancies, what matters is the daily observation and the rigorous application of the rules of the method, learned from a qualified teacher or practitioner.</p>`,
			`<p>moncycle.app never tells you whether a day is fertile or not, and does not check your interpretation of the chart. No method is 100% effective, and the app guarantees neither avoiding a pregnancy nor achieving one. The decisions are yours, and your partner’s.</p>`,
		],
	},
	{
		id: 'faq-privacy',
		question: `Is my cycle data private? Can it be sold?`,
		answer: [
			`<p>Cycle data is among the most intimate data one can entrust to a phone. Before choosing an app, two questions often make things clearer: who funds it, and where is the data stored?</p>`,
			`<p>As for moncycle.app:</p>`,
			`<ul> <li>it is funded by donations, with no advertising or tracking tools, and your data is neither sold nor handed over;</li> <li>the servers are located in France, at OVH, and no data leaves the European Union; the processing complies with the GDPR;</li> <li>no member of the association looks at your observations. Apart from the host, they are only passed on to the e-mail addresses you added yourself and, if you agree, for research purposes. The authorities can only access them through a legal request;</li> <li>taking part in research is optional: it requires separate consent, and the exported data contains no e-mail address, no pseudonym and no free text;</li> <li>the connection is encrypted (HTTPS), passwords are stored as hashes, two-factor authentication is available and every new login is reported to you by e-mail.</li> </ul>`,
			`<p>One point of caution: if you turn on the sending of cycles by e-mail (an option that is off by default), those messages travel like any other e-mail, without end-to-end encryption. You can turn this off at any time in “My account”. Since the code is open, anyone can check these commitments.</p>`,
			`<p>Finally, do not enter your name or any medical data (illness, treatment, diagnosis): the app is not designed to receive them.</p>`,
		],
	},
	{
		id: 'faq-export',
		question: `Can I export, synchronise or delete my data?`,
		answer: [
			`<p>Yes, without having to ask. From “My account”, you can export your cycles as PDF, CSV or NFP, retrieve all the raw data of your account, import data and delete your account. Deletion is immediate and permanent; backups are erased within 90&nbsp;days at the latest.</p>`,
			`<p>Your data is synchronised across all your devices. If you prefer to keep it at home, the app can also be <a href='#tech'>self-hosted</a> with Docker or YunoHost.</p>`,
		],
	},
	{
		id: 'faq-inactive',
		question: `What happens to my account if I stop using it?`,
		answer: [
			`<p>An account left inactive (no login and no entry) for 4&nbsp;years is deleted. This deletion never happens without warning: a reminder e-mail is sent after 35&nbsp;days without an entry, then a warning 10&nbsp;days before deletion, to your login address and to your notification addresses. To keep your history, simply log in or export your cycles beforehand.</p>`,
		],
	},
	{
		id: 'faq-natural',
		question: `What is a natural family planning method? Is it the same as the Ogino method?`,
		answer: [
			`<p>No, and this confusion largely explains the distrust these methods face. The Ogino method, known as the calendar method, deduces the fertile days from the length of previous cycles. Observation-based methods, such as Billings or FertilityCare, rely day after day on the signs of the current cycle: the evolution of cervical mucus and, for some, the waking temperature. Nothing is predicted: the signs are observed as they appear.</p>`,
			`<p>moncycle.app is designed for this second type of method. To learn more, see the presentation of <a href='#methods'>natural family planning methods</a> and <a href='#billings'>the story of Doctors Billings</a>.</p>`,
		],
	},
	{
		id: 'faq-instructor',
		question: `Do I need training to follow a natural family planning method?`,
		answer: [
			`<p>Yes. Learning to observe your cervical mucus takes a few cycles of support, and the rules of the method must be taught: identifying the start of the fertile phase, spotting the peak, knowing how to interpret a disrupted cycle. Our terms of use also require that you have been trained.</p>`,
			`<p>moncycle.app provides no teaching and does not correct your interpretation. <a href='${urls.billingsInternational}' target='_blank' rel='noopener'>WOOMB International</a> (Billings) and <a href='${urls.fertilityCareInternational}' target='_blank' rel='noopener'>FertilityCare Centers of America</a> can direct you to teachers and practitioners. In France, the <a href='${urls.billingsTrainers}' target='_blank' rel='noopener' hreflang='fr'>Centre Billings France</a> and <a href='${urls.fertilityCareInstructors}' target='_blank' rel='noopener' hreflang='fr'>FertilityCare France</a> (both in French) can do the same.</p>`,
		],
	},
	{
		id: 'faq-mucus',
		question: `How do I observe cervical mucus?`,
		answer: [
			`<p>Cervical mucus changes throughout the cycle under the effect of hormones. As ovulation approaches, it generally becomes more abundant, clearer, stretchier and slippery; it then thickens or disappears. Two things are noted: the sensation felt at the vulva during the day and the appearance of what is observed. Observation is made throughout the day, and the entry once only, in the evening.</p>`,
			`<p>Each method has its own vocabulary and its own codes, which are not interchangeable: your teacher or practitioner teaches them to you. In moncycle.app, your observations are displayed in the official notation of the method you chose, so that your chart can be read directly by your teacher or practitioner.</p>`,
		],
	},
	{
		id: 'faq-irregular',
		question: `Are these methods suitable for irregular cycles, after childbirth, while breastfeeding or approaching menopause?`,
		answer: [
			`<p>Observation-based methods do not assume regular cycles, since they rely on the current cycle instead of calculating it. These periods do follow particular rules, however (return of fertility after childbirth, breastfeeding, perimenopausal fluctuations): this is where the support of a teacher or practitioner matters most.</p>`,
			`<p>In moncycle.app, no cycle length is imposed and no prediction is superimposed on your data: a long, short or atypical cycle is displayed normally.</p>`,
		],
	},
	{
		id: 'faq-share',
		question: `Can I share my chart with my partner, my teacher or my practitioner?`,
		answer: [
			`<p>Yes. You can export a cycle as PDF, CSV or NFP and send it to the person of your choice. You can also turn on automatic e-mail sending in “My account” (off by default) and enter up to 5&nbsp;notification addresses: each one then receives the full export of every completed cycle, which makes regular follow-up with your teacher or practitioner easier. Only add people who have agreed, since they will receive your cycle data. You can remove an address at any time.</p>`,
		],
	},
	{
		id: 'faq-ai',
		question: `Does the app use artificial intelligence?`,
		answer: [
			`<p>No, and this is a deliberate choice. Many apps promote “smart” predictions. These remain statistical estimates, applied to a body that does not necessarily match the average, and can give false reassurance precisely on the days when a mistake matters most.</p>`,
			`<p>moncycle.app records, organises and displays your observations. It uses no prediction algorithm, no automated decision-making and no profiling. Interpreting the chart is up to you, according to the rules of the method you follow.</p>`,
		],
	},
];
