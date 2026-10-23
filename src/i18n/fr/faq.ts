import { urls } from '../../data/site';
import type { FaqEntry } from '../types';

// Frequently asked questions. The visible FAQ and the FAQPage JSON-LD are both generated from this list.
export const faq: FaqEntry[] = [
	{
		id: 'faq-what',
		question: `Qu’est-ce que moncycle.app&nbsp;?`,
		answer: [
			`<p>moncycle.app est un carnet de suivi de cycle conçu pour les méthodes de régulation naturelle des naissances&nbsp;: Billings et FertilityCare, avec ou sans température. Vous saisissez vos observations&nbsp;; l’application les présente sous forme de tableau et permet de les exporter. Cette application web gratuite s’utilise aussi bien sur téléphone que sur ordinateur.</p>`,
			`<p>Il s’agit d’un outil de bien-être&nbsp;: ce n’est ni un dispositif médical, ni un moyen de contraception, ni un outil de diagnostic.</p>`,
		],
	},
	{
		id: 'faq-who',
		question: `Qui développe moncycle.app&nbsp;?`,
		answer: [
			`<p>L’application est développée et distribuée par <a href='${urls.tech4fertility}' target='_blank' rel='noopener'>Tech&nbsp;4&nbsp;Fertility</a>, une association française à but non lucratif (loi de 1901) dont le siège se trouve à Vernon (Eure). Le code source est public et disponible sur <a href='${urls.github}' target='_blank' rel='noopener'>GitHub</a>.</p>`,
		],
	},
	{
		id: 'faq-opensource',
		question: `Que signifie «&nbsp;open source&nbsp;»&nbsp;?`,
		answer: [
			`<p>Une application open source (ou «&nbsp;à code source ouvert&nbsp;») est une application dont le code source, c’est-à-dire les instructions qui la font fonctionner, est public. Chacun peut le lire, l’exécuter sur son propre serveur, étudier son fonctionnement et proposer des améliorations. Les conditions en sont fixées par une licence.</p>`,
			`<p>moncycle.app est publiée sous <a href='${urls.license}' target='_blank' rel='noopener'>licence AGPL-3.0-or-later</a>&nbsp;: vous pouvez utiliser, étudier, modifier et redistribuer le code, à condition de conserver cette même licence et de mettre le code source, y compris vos modifications, à disposition des utilisateurs du service, même lorsqu’il est accessible uniquement par le réseau. Le code est disponible sur <a href='${urls.github}' target='_blank' rel='noopener'>GitHub</a>.</p>`,
		],
	},
	{
		id: 'faq-opensource-benefits',
		question: `Quels sont les avantages d’une application moncycle.app open source&nbsp;?`,
		answer: [
			`<p>Pour une application qui contient des données intimes, l’ouverture du code apporte plusieurs garanties&nbsp;:</p>`,
			`<ul> <li><strong>la transparence&nbsp;:</strong> chacun peut vérifier ce que l’application fait de vos données et qu’elle ne contient aucun outil de pistage. Nos engagements ne sont pas seulement affichés, ils sont vérifiables&nbsp;;</li> <li><strong>l’indépendance&nbsp;:</strong> vous pouvez <a href='#tech'>héberger votre propre instance</a>, avec Docker ou YunoHost, et garder vos données chez vous. L’application ne dépend pas d’une seule entreprise&nbsp;;</li> <li><strong>la pérennité&nbsp;:</strong> si l’association cessait son activité, le code resterait disponible et l’application pourrait continuer d’exister&nbsp;;</li> <li><strong>la qualité&nbsp;:</strong> davantage de regards sur le code, ce sont des erreurs et des failles de sécurité repérées et corrigées plus facilement, et la possibilité pour chacun de proposer des améliorations.</li> </ul>`,
		],
	},
	{
		id: 'faq-free',
		question: `L’application est-elle vraiment gratuite&nbsp;? Comment la soutenir&nbsp;?`,
		answer: [
			`<p>Oui. Il n’y a ni abonnement, ni version payante, ni publicité, et vos données ne sont jamais vendues. L’application est financée par les dons versés à Tech&nbsp;4&nbsp;Fertility&nbsp;: ils couvrent l’hébergement, le nom de domaine et le temps consacré à sa maintenance. Pour faire un don, rendez-vous dans la rubrique <a href='#support'>Soutenir moncycle.app</a>.</p>`,
		],
	},
	{
		id: 'faq-signup',
		question: `Comment créer un compte&nbsp;?`,
		answer: [
			`<p>Rendez-vous sur la <a href='${urls.register}' target='_blank' rel='noopener'>page d’inscription</a>. Vous devez avoir 18&nbsp;ans révolus. Les informations demandées sont les suivantes&nbsp;:</p>`,
			`<ul> <li>un pseudonyme (vos initiales suffisent)&nbsp;;</li> <li>une adresse e-mail qui ne permet pas de vous identifier (évitez par exemple prenom.nom@…)&nbsp;;</li> <li>un mot de passe d’au moins 10&nbsp;caractères, que vous n’utilisez pour aucun autre service&nbsp;;</li> <li>votre année de naissance et la méthode que vous suivez.</li> </ul>`,
			`<p>Vous recevez ensuite par e-mail un lien de confirmation, valable 3&nbsp;jours. Tout compte non confirmé est supprimé au bout de 7&nbsp;jours.</p>`,
		],
	},
	{
		id: 'faq-install',
		question: `Comment installer moncycle.app sur iPhone ou Android&nbsp;?`,
		answer: [
			`<p>moncycle.app n’est disponible ni sur l’App Store, ni sur Google Play&nbsp;: il s’agit d’une application web. Connectez-vous, ouvrez votre tableau, puis ajoutez la page à l’écran d’accueil. Sur iPhone, dans Safari, touchez le bouton Partager, puis «&nbsp;Sur l’écran d’accueil&nbsp;». Sur Android, dans Chrome, ouvrez le menu, puis choisissez «&nbsp;Ajouter à l’écran d’accueil&nbsp;». L’icône ainsi créée ouvre directement l’application.</p>`,
			`<p>Tech&nbsp;4&nbsp;Fertility prépare des applications pour iPhone et Android. Leur sortie sera annoncée sur ce site.</p>`,
		],
	},
	{
		id: 'faq-reliable',
		question: `Les applications de suivi de cycle sont-elles fiables&nbsp;?`,
		answer: [
			`<p>Cela dépend de ce que l’on en attend. La plupart d’entre elles annoncent les prochaines règles ou la date d’ovulation à partir de la durée des cycles précédents. C’est le principe de l’ancienne méthode du calendrier d’Ogino, transposée au numérique&nbsp;: elle devient peu fiable dès que la durée des cycles varie, ce qui est le cas chez de nombreuses femmes.</p>`,
			`<p>Les méthodes d’observation procèdent à l’inverse&nbsp;: elles s’appuient sur les signes du cycle en cours, comme la glaire cervicale ou la température.</p>`,
			`<p>C’est pourquoi moncycle.app ne fait aucune prédiction. Elle enregistre vos observations et les présente dans la notation de la méthode suivie. L’interprétation vous appartient.</p>`,
		],
	},
	{
		id: 'faq-contraception',
		question: `Peut-on utiliser une application de suivi de cycle comme moyen de contraception&nbsp;?`,
		answer: [
			`<p>Non. Une application n’est pas un moyen de contraception&nbsp;: elle n’est que le carnet dans lequel vous consignez vos observations. Si vous suivez une méthode de régulation naturelle des naissances afin d’espacer les grossesses, l’essentiel réside dans l’observation quotidienne et dans le respect rigoureux des règles de la méthode, apprises auprès d’un moniteur ou d’une instructrice qualifiés.</p>`,
			`<p>moncycle.app ne vous indique jamais si un jour est fertile ou non, et ne vérifie pas votre interprétation du tableau. Aucune méthode n’est efficace à 100&nbsp;%, et l’application ne peut garantir ni qu’une grossesse sera évitée, ni qu’elle sera obtenue. Les décisions vous appartiennent, à vous et à votre conjoint.</p>`,
		],
	},
	{
		id: 'faq-privacy',
		question: `Mes données de cycle sont-elles privées&nbsp;? Peuvent-elles être vendues&nbsp;?`,
		answer: [
			`<p>Les données de cycle comptent parmi les plus intimes que l’on puisse confier à un téléphone. Avant de choisir une application, deux questions permettent souvent d’y voir clair&nbsp;: qui la finance, et où les données sont-elles stockées&nbsp;?</p>`,
			`<p>Concernant moncycle.app&nbsp;:</p>`,
			`<ul> <li>elle est financée par les dons, sans publicité ni outil de pistage, et vos données ne sont ni vendues ni cédées&nbsp;;</li> <li>les serveurs sont situés en France, chez OVH&nbsp;: aucune donnée ne quitte l’Union européenne et le traitement est conforme au RGPD&nbsp;;</li> <li>aucun membre de l’association ne consulte vos observations. En dehors de l’hébergeur, elles ne sont transmises qu’aux adresses e-mail que vous avez vous-même ajoutées et, avec votre accord, à des fins de recherche. Les autorités ne peuvent y accéder que sur réquisition légale&nbsp;;</li> <li>la participation à la recherche est facultative&nbsp;: elle nécessite un consentement distinct, et les données transmises ne comportent ni adresse e-mail, ni pseudonyme, ni texte libre&nbsp;;</li> <li>la connexion est chiffrée (HTTPS), les mots de passe sont stockés sous forme d’empreinte, la double authentification est disponible et chaque nouvelle connexion vous est signalée par e-mail.</li> </ul>`,
			`<p>Un point de vigilance&nbsp;: si vous activez l’envoi des cycles par e-mail (option désactivée par défaut), ces messages transitent comme tout autre e-mail, sans chiffrement de bout en bout. Vous pouvez désactiver cet envoi à tout moment dans «&nbsp;Réglage&nbsp;». Le code étant ouvert, chacun peut vérifier ces engagements.</p>`,
			`<p>Enfin, ne saisissez ni votre nom, ni aucune donnée médicale (maladie, traitement, diagnostic)&nbsp;: l’application n’est pas conçue pour les recevoir.</p>`,
		],
	},
	{
		id: 'faq-export',
		question: `Puis-je exporter, synchroniser ou supprimer mes données&nbsp;?`,
		answer: [
			`<p>Oui, sans avoir à en faire la demande. Depuis «&nbsp;Réglage&nbsp;», vous pouvez exporter vos cycles au format PDF, CSV ou NFP, récupérer l’ensemble des données brutes de votre compte, importer des données et supprimer votre compte. La suppression est immédiate et définitive&nbsp;; les données sont effacées des sauvegardes sous 90&nbsp;jours au plus.</p>`,
			`<p>Vos données sont synchronisées entre tous vos appareils. Si vous préférez les conserver chez vous, l’application peut également être <a href='#tech'>auto-hébergée</a> avec Docker ou YunoHost.</p>`,
		],
	},
	{
		id: 'faq-inactive',
		question: `Que devient mon compte si je ne l’utilise plus&nbsp;?`,
		answer: [
			`<p>Un compte resté sans activité (ni connexion, ni saisie) pendant 4&nbsp;ans est supprimé. Cette suppression n’intervient jamais sans préavis&nbsp;: un e-mail de rappel est envoyé après 35&nbsp;jours sans saisie, puis un avertissement 10&nbsp;jours avant la suppression, à votre adresse de connexion ainsi qu’à vos adresses de notification. Pour conserver votre historique, il suffit de vous connecter avant l’échéance ou d’exporter vos cycles.</p>`,
		],
	},
	{
		id: 'faq-natural',
		question: `Qu’est-ce qu’une méthode de régulation naturelle des naissances&nbsp;? Est-ce la même chose que la méthode Ogino&nbsp;?`,
		answer: [
			`<p>Non, et cette confusion explique en partie la méfiance dont ces méthodes font l’objet. La méthode Ogino, dite méthode du calendrier, déduit les jours fertiles de la durée des cycles précédents. Les méthodes d’observation, comme Billings ou FertilityCare, s’appuient jour après jour sur les signes du cycle en cours&nbsp;: l’évolution de la glaire cervicale et, pour certaines, la température au réveil. Rien n’est prédit&nbsp;: les signes sont observés au moment où ils apparaissent.</p>`,
			`<p>moncycle.app est conçue pour ce second type de méthodes. Pour en savoir plus, consultez la présentation des <a href='#methods'>méthodes de régulation naturelle des naissances</a> et <a href='#billings'>l’histoire des docteurs Billings</a>.</p>`,
		],
	},
	{
		id: 'faq-instructor',
		question: `Faut-il une formation pour suivre une méthode de régulation naturelle des naissances&nbsp;?`,
		answer: [
			`<p>Oui. Apprendre à observer sa glaire cervicale demande quelques cycles d’accompagnement, et les règles de la méthode doivent être enseignées&nbsp;: comment identifier le début de la phase fertile, repérer le jour sommet ou interpréter un cycle perturbé. Nos conditions d’utilisation exigent d’ailleurs que vous ayez suivi une formation.</p>`,
			`<p>moncycle.app ne dispense aucun enseignement et ne corrige pas votre interprétation. En France, le <a href='${urls.billingsTrainers}' target='_blank' rel='noopener'>Centre Billings France</a> et <a href='${urls.fertilityCareInstructors}' target='_blank' rel='noopener'>FertilityCare France</a> peuvent vous orienter vers des moniteurs, des couples formateurs ou des instructrices près de chez vous.</p>`,
		],
	},
	{
		id: 'faq-mucus',
		question: `Comment observer la glaire cervicale&nbsp;?`,
		answer: [
			`<p>La glaire cervicale évolue au fil du cycle sous l’effet des hormones. À l’approche de l’ovulation, elle devient généralement plus abondante, plus claire, plus élastique et glissante&nbsp;; elle s’épaissit ou disparaît ensuite. Deux éléments sont notés&nbsp;: la sensation ressentie à la vulve et l’aspect de ce qui est observé. L’observation se fait tout au long de la journée, et la saisie une seule fois, le soir.</p>`,
			`<p>Chaque méthode possède son propre vocabulaire et ses propres codes, qui ne sont pas interchangeables&nbsp;: c’est votre moniteur ou votre instructrice qui vous les enseigne. Dans moncycle.app, vos observations s’affichent dans la notation officielle de la méthode choisie, afin que votre tableau soit directement lisible par la personne qui vous accompagne.</p>`,
		],
	},
	{
		id: 'faq-irregular',
		question: `Ces méthodes conviennent-elles en cas de cycles irréguliers, après une naissance, pendant l’allaitement ou à l’approche de la ménopause&nbsp;?`,
		answer: [
			`<p>Les méthodes d’observation ne nécessitent pas de cycles réguliers, puisqu’elles s’appuient sur le cycle en cours et non sur un calcul. Ces situations obéissent toutefois à des règles particulières (retour de la fertilité après l’accouchement, allaitement, fluctuations de la préménopause)&nbsp;: c’est là que l’accompagnement d’un moniteur ou d’une instructrice prend toute son importance.</p>`,
			`<p>Dans moncycle.app, aucune durée de cycle n’est imposée et aucune prédiction ne vient se superposer à vos données&nbsp;: un cycle long, court ou atypique s’affiche normalement.</p>`,
		],
	},
	{
		id: 'faq-share',
		question: `Puis-je partager mon tableau avec mon conjoint, mon moniteur ou mon instructrice&nbsp;?`,
		answer: [
			`<p>Oui. Vous pouvez exporter un cycle en PDF, CSV ou NFP et le transmettre à la personne de votre choix. Vous pouvez également activer, dans «&nbsp;Réglage&nbsp;», l’envoi automatique par e-mail (désactivé par défaut) et indiquer jusqu’à 5&nbsp;adresses de notification&nbsp;: ces adresses reçoivent alors l’export complet de chaque cycle terminé, ce qui facilite un suivi régulier avec votre moniteur ou votre instructrice. N’ajoutez que des personnes qui y ont consenti, puisqu’elles recevront vos données de cycle. Vous pouvez retirer une adresse à tout moment.</p>`,
		],
	},
	{
		id: 'faq-ai',
		question: `L’application utilise-t-elle l’intelligence artificielle&nbsp;?`,
		answer: [
			`<p>Non, et c’est un choix délibéré. De nombreuses applications mettent en avant des prédictions «&nbsp;intelligentes&nbsp;». Celles-ci restent des estimations statistiques, appliquées à un corps qui ne correspond pas forcément à la moyenne, et peuvent rassurer à tort, précisément les jours où une erreur a le plus de conséquences.</p>`,
			`<p>moncycle.app enregistre, organise et affiche vos observations. Elle n’utilise aucun algorithme de prédiction, ne prend aucune décision automatisée et ne réalise aucun profilage. L’interprétation du tableau vous revient, selon les règles de la méthode suivie.</p>`,
		],
	},
];
