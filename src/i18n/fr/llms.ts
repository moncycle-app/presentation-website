// Summary of the site for language models (https://llmstxt.org), in French.
// `site` is the site URL with a trailing slash. Keep it consistent with the page content.
export const llms = (site: string): string => `# moncycle.app

> moncycle.app est une application web gratuite de suivi de cycle féminin, au service des méthodes de régulation naturelle des naissances (Billings, FertilityCare, avec ou sans température). L’utilisatrice y saisit chaque jour ses observations (glaire cervicale, règles, température) ainsi que le tampon de couleur du jour, et l’application les présente sous forme de tableau, dans la notation officielle de la méthode choisie. Elle est développée et distribuée par Tech 4 Fertility, association française à but non lucratif (loi de 1901). C’est un outil de bien-être : ni dispositif médical, ni moyen de contraception. Elle ne fait aucune prédiction et n’utilise aucune intelligence artificielle.

Faits à retenir (référence : les conditions d’utilisation, version 2.0, en vigueur à compter du 1er novembre 2026) :

- Gratuite, sans abonnement, sans publicité ni pistage ; les données ne sont jamais vendues. L’application est financée par les dons.
- Méthodes : Billings et FertilityCare compatibles à 100 % ; méthodes symptothermiques (Cyclamen, SensiPlan, méthode M) partiellement compatibles, car les courbes de température ne sont prises en charge qu’en partie.
- Application web (absente de l’App Store et de Google Play) : elle s’ajoute à l’écran d’accueil d’un iPhone ou d’un appareil Android. Des applications iOS et Android sont en préparation chez Tech 4 Fertility.
- Export PDF, CSV et NFP ; envoi automatique par e-mail de chaque cycle terminé (option désactivée par défaut), jusqu’à 5 adresses de notification ; synchronisation entre appareils ; mode sombre ; double authentification (TOTP).
- Données hébergées en France chez OVH, aucun transfert hors de l’Union européenne, conformité RGPD.
- Il faut avoir au moins 18 ans et avoir suivi une formation à la méthode pratiquée. Aucune information permettant d’identifier l’utilisatrice ni aucune donnée de santé médicale ne doit être saisie.
- Un compte sans activité pendant 4 ans est supprimé, après rappel et avertissement. Un compte non confirmé est supprimé après 7 jours.
- Comptes de démonstration publics, remis à zéro toutes les heures : demo.bl@moncycle.app (Billings) et demo.fc@moncycle.app (FertilityCare), mot de passe « demo ».
- Code open source sous licence CC BY-NC-SA 4.0 (PHP et JavaScript), auto-hébergeable avec Docker ou YunoHost.

## Le site

- [Accueil](${site}fr/) : présentation complète, sur une seule page.
- [Fonctionnement](${site}fr/#how) : création du compte, saisie du soir, tableau, export ; installation sur téléphone.
- [Fonctionnalités](${site}fr/#features)
- [Démonstration et captures d’écran](${site}fr/#demo)
- [Les méthodes de régulation naturelle des naissances](${site}fr/#methods) : compatibilité de l’application avec chaque méthode.
- [John et Evelyn Billings](${site}fr/#billings) : histoire de la méthode Billings, avec l’article du Lancet de 1972 et les sources.
- [Questions fréquentes](${site}fr/#faq)
- [Soutenir moncycle.app](${site}fr/#support)
- [Actualités](${site}fr/#news)

## Conditions d’utilisation

- [Conditions d’utilisation et politique de confidentialité (français, version de référence)](${site}fr/term_of_service.html)
- [Terms of service and privacy policy (English translation)](${site}en/term_of_service.html)

## Technique

- [Application (connexion et inscription)](https://tableau.moncycle.app/)
- [Code source sur GitHub](https://github.com/moncycle-app/backend-api-web-app)
- [Documentation de l’API (OpenAPI 3.0)](https://tableau.moncycle.app/api/)
- [Image Docker](https://hub.docker.com/r/jeanio/moncycle.app)
- [Installer avec YunoHost](https://install-app.yunohost.org/?app=moncycle)
- [État du service](https://status.moncycle.app)

## Éditeur

- [Tech 4 Fertility](https://tech4fertility.org/) : association loi 1901, RNA W271007328, 15A rue Valentin Gaumont, 27200 Vernon, France. Site en construction.

## Autres langues

- [English summary for language models](${site}llms.txt)
- [Site in English](${site}en/)
`;
