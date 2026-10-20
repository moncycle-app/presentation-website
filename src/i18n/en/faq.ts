import { urls } from '../../data/site';
import type { FaqEntry } from '../types';

// Frequently asked questions. The visible FAQ and the FAQPage JSON-LD are both generated from this list.
export const faq: FaqEntry[] = [
	{
		id: 'faq-what',
		question: `What is moncycle.app?`,
		answer: [
			`<p>moncycle.app is a cycle charting notebook designed for natural family planning methods: Billings and FertilityCare, with or without temperature. You enter your observations. The application presents them as a chart and lets you export them. This free web application works on both phones and computers.</p>`,
			`<p>It is a wellness tool. It is not a medical device, a method of contraception or a diagnostic tool.</p>`,
		],
	},
	{
		id: 'faq-who',
		question: `Who develops moncycle.app?`,
		answer: [
			`<p>The application is developed and distributed by <a href='${urls.tech4fertility}' target='_blank' rel='noopener'>Tech&nbsp;4&nbsp;Fertility</a>, a French non-profit association (under the law of 1901) based in Vernon (Eure, France). The association has owned the application since October 2026. The source code is public and available on <a href='${urls.github}' target='_blank' rel='noopener'>GitHub</a>.</p>`,
		],
	},
	{
		id: 'faq-free',
		question: `Is the application really free? How can I support it?`,
		answer: [
			`<p>Yes. There is no subscription, no paid version and no advertising, and your data is never sold. The application is funded by donations to Tech&nbsp;4&nbsp;Fertility. These donations cover hosting, the domain name and the time spent on maintenance. To make a donation, go to the <a href='#support'>Support moncycle.app</a> section.</p>`,
		],
	},
	{
		id: 'faq-signup',
		question: `How do I create an account?`,
		answer: [
			`<p>Go to the <a href='${urls.register}' target='_blank' rel='noopener'>sign-up page</a>. You must be at least 18&nbsp;years old. You will be asked for:</p>`,
			`<ul> <li>a pseudonym (your initials are enough);</li> <li>an email address that does not identify you (for example, avoid firstname.lastname@…);</li> <li>a password of at least 10&nbsp;characters that you do not use for any other service;</li> <li>your year of birth and the method you follow.</li> </ul>`,
			`<p>You will then receive a confirmation link by email. This link is valid for 3&nbsp;days. Any account that is not confirmed is deleted after 7&nbsp;days.</p>`,
		],
	},
	{
		id: 'faq-install',
		question: `How do I install moncycle.app on an iPhone or an Android phone?`,
		answer: [
			`<p>moncycle.app is a web application. It is not available on the App Store or on Google Play. Log in, open your chart, then add the page to your home screen. On iPhone, in Safari, tap the Share button, then “Add to Home Screen”. On Android, in Chrome, open the menu, then choose “Add to Home screen”. The new icon opens the application directly.</p>`,
			`<p>Tech&nbsp;4&nbsp;Fertility is preparing apps for iPhone and Android. Their release will be announced on this website.</p>`,
		],
	},
	{
		id: 'faq-reliable',
		question: `Are cycle tracking apps reliable?`,
		answer: [
			`<p>It depends on what you expect from them. Most of them announce your next period or your ovulation date from the length of your previous cycles. This is the principle of the old calendar method (also called the Ogino or rhythm method), in digital form. It becomes unreliable as soon as the length of the cycles varies, which is the case for many women.</p>`,
			`<p>Observation methods work the other way round. They rely on the signs of the current cycle, such as cervical mucus or temperature.</p>`,
			`<p>This is why moncycle.app makes no predictions. It records your observations and displays them in the notation of the method you follow. The interpretation is yours.</p>`,
		],
	},
	{
		id: 'faq-contraception',
		question: `Can a cycle tracking app be used as a method of contraception?`,
		answer: [
			`<p>No. An app is not a method of contraception. It is only the notebook in which you record your observations. If you follow a natural family planning method to space pregnancies, what matters most is daily observation and the strict application of the rules of the method. These rules must be learned from a qualified teacher or instructor.</p>`,
			`<p>moncycle.app never tells you whether a day is fertile or not, and it does not check your interpretation of the chart. No method is 100% effective. The application cannot guarantee that a pregnancy will be avoided, nor that it will be achieved. The decisions belong to you and your partner.</p>`,
		],
	},
	{
		id: 'faq-privacy',
		question: `Is my cycle data private? Can it be sold?`,
		answer: [
			`<p>Cycle data is among the most intimate information that a person can store on a phone. Before you choose an app, two questions often make things clear: who pays for it, and where is the data stored?</p>`,
			`<p>For moncycle.app:</p>`,
			`<ul> <li>It is funded by donations, with no advertising and no tracking tools. Your data is never sold or passed on to anyone.</li> <li>The servers are located in France, at OVH. No data leaves the European Union, and the processing complies with the GDPR.</li> <li>No member of the association looks at your observations. Apart from the hosting provider, they are only sent to the email addresses that you have added yourself and, with your consent, used for research. The authorities can only access them with a legal order.</li> <li>Taking part in research is optional. It requires separate consent, and the shared data contains no email address, no pseudonym and no free text.</li> <li>The connection is encrypted (HTTPS), passwords are stored as hashes, two-factor authentication is available, and you receive an email alert for each new login.</li> </ul>`,
			`<p>One point needs your attention. If you turn on email delivery of your cycles (this option is off by default), these messages travel like any other email. They are not end-to-end encrypted. You can turn this option off at any time in “My account”. The code is open, so anyone can check these commitments.</p>`,
			`<p>Finally, do not enter your name or any medical data (illness, treatment, diagnosis). The application is not designed to receive them.</p>`,
		],
	},
	{
		id: 'faq-export',
		question: `Can I export, sync or delete my data?`,
		answer: [
			`<p>Yes, and you do not need to ask anyone. From “My account”, you can export your cycles as PDF, CSV or NFP files, download all the raw data of your account, import data and delete your account. Deletion is immediate and permanent. The data is erased from backups within 90&nbsp;days.</p>`,
			`<p>Your data is synchronised across all your devices. If you prefer to keep it at home, you can also <a href='#tech'>host the application yourself</a> with Docker or YunoHost.</p>`,
		],
	},
	{
		id: 'faq-inactive',
		question: `What happens to my account if I stop using it?`,
		answer: [
			`<p>An account with no activity (no login and no entry) for 4&nbsp;years is deleted. This never happens without notice. A reminder email is sent after 35&nbsp;days without an entry. A warning is then sent 10&nbsp;days before deletion, to your login address and to your notification addresses. To keep your history, simply log in before the deadline or export your cycles.</p>`,
		],
	},
	{
		id: 'faq-natural',
		question: `What is a natural family planning method? Is it the same as the Ogino method?`,
		answer: [
			`<p>No. This confusion partly explains why many people distrust these methods. The Ogino method, also called the calendar or rhythm method, works out the fertile days from the length of previous cycles. Observation methods, such as Billings or FertilityCare, rely day by day on the signs of the current cycle: changes in cervical mucus and, for some methods, the waking temperature. Nothing is predicted. The signs are observed when they appear.</p>`,
			`<p>moncycle.app is designed for this second type of method. To learn more, read the presentation of <a href='#methods'>natural family planning methods</a> and <a href='#billings'>the story of John and Evelyn Billings</a>.</p>`,
		],
	},
	{
		id: 'faq-instructor',
		question: `Do I need training to follow a natural family planning method?`,
		answer: [
			`<p>Yes. Learning to observe your cervical mucus takes a few cycles with guidance. The rules of the method must also be taught: how to identify the start of the fertile phase, how to recognise the Peak day and how to interpret a disturbed cycle. Our terms of service also require you to have completed training.</p>`,
			`<p>moncycle.app does not teach the method and does not correct your interpretation. In France, the <a href='${urls.billingsTrainers}' target='_blank' rel='noopener'>Centre Billings France</a> and <a href='${urls.fertilityCareInstructors}' target='_blank' rel='noopener'>FertilityCare France</a> can direct you to teachers, teaching couples or instructors near you (both websites are in French).</p>`,
		],
	},
	{
		id: 'faq-mucus',
		question: `How do I observe cervical mucus?`,
		answer: [
			`<p>Cervical mucus changes during the cycle under the influence of hormones. As ovulation approaches, it usually becomes more abundant, clearer, stretchier and more slippery. Afterwards, it becomes thicker or disappears. Two things are recorded: the sensation felt at the vulva and the appearance of what you observe. You observe throughout the day, and you enter your observations only once, in the evening.</p>`,
			`<p>Each method has its own vocabulary and its own codes, and they are not interchangeable. Your teacher or instructor will teach them to you. In moncycle.app, your observations are displayed in the official notation of the method you have chosen. In this way, the person who guides you can read your chart directly.</p>`,
		],
	},
	{
		id: 'faq-irregular',
		question: `Are these methods suitable for irregular cycles, after childbirth, during breastfeeding or as menopause approaches?`,
		answer: [
			`<p>Observation methods do not require regular cycles, because they rely on the current cycle and not on a calculation. However, these situations follow specific rules (return of fertility after childbirth, breastfeeding, changes in the years before menopause). In these cases, the guidance of a teacher or instructor is especially important.</p>`,
			`<p>In moncycle.app, no cycle length is imposed and no prediction is added on top of your data. A long, short or unusual cycle is displayed normally.</p>`,
		],
	},
	{
		id: 'faq-share',
		question: `Can I share my chart with my partner, my teacher or my instructor?`,
		answer: [
			`<p>Yes. You can export a cycle as a PDF, CSV or NFP file and send it to the person of your choice. You can also turn on automatic email delivery in “My account” (it is off by default) and add up to 5&nbsp;notification addresses. These addresses then receive the full export of each completed cycle. This makes regular follow-up with your teacher or instructor easier. Only add people who have agreed to this, because they will receive your cycle data. You can remove an address at any time.</p>`,
		],
	},
	{
		id: 'faq-ai',
		question: `Does the application use artificial intelligence?`,
		answer: [
			`<p>No, and this is a deliberate choice. Many apps promote “smart” predictions. These remain statistical estimates, applied to a body that may not match the average. They can give false reassurance, precisely on the days when a mistake has the most serious consequences.</p>`,
			`<p>moncycle.app records, organises and displays your observations. It uses no prediction algorithm, makes no automated decisions and does no profiling. The interpretation of the chart is yours, according to the rules of the method you follow.</p>`,
		],
	},
];
