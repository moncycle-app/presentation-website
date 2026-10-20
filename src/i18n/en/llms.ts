// Summary of the site for language models (https://llmstxt.org), in English: served as /llms.txt.
// `site` is the site URL with a trailing slash. Keep it consistent with the page content.
export const llms = (site: string): string => `# moncycle.app

> moncycle.app is a free web application for women's cycle tracking, built for natural family planning (NFP) methods: Billings and FertilityCare, with or without temperature. Each day the user enters her observations (cervical mucus, periods, temperature) and chooses the colour stamp of the day; the app displays them as a chart in the standard notation of the chosen method. It is developed and distributed by Tech 4 Fertility, a French non-profit association (loi of 1901). It is a wellness tool: neither a medical device nor a contraceptive. It makes no predictions and uses no artificial intelligence.

Facts worth knowing (source of truth: the terms of use, version 2.0, in force on November 1st, 2026):

- Free, with no subscription, no advertising and no tracking; data is never sold. The app is funded by donations.
- Methods: Billings and FertilityCare are 100% compatible; symptothermal methods (Cyclamen, SensiPlan, M method) are partially compatible, because temperature curves are only partly interpreted.
- The app itself is a web app and its interface is currently in French only. This website is available in French and English (plus the terms of use in both).
- It is a web app, not listed on the App Store or Google Play: it is added to the home screen of an iPhone or Android device. Native iOS and Android apps are being prepared by Tech 4 Fertility.
- PDF, CSV and NFP export; optional automatic e-mail sending of each completed cycle (off by default, up to 5 notification addresses); synchronisation between devices; dark mode; two-factor authentication (TOTP).
- Data is hosted in France at OVH, with no transfer outside the European Union, and processed in compliance with the GDPR.
- Users must be 18 or older and trained in the method they practise. They must not enter information that identifies them, nor medical health data.
- An account with no activity for 4 years is deleted, after a reminder and a warning. An unconfirmed account is deleted after 7 days.
- Public demo accounts, reset every hour: demo.mucus.self.obs@moncycle.app (Billings) and demo.fc@moncycle.app (FertilityCare), password "demo".
- Open source code under the CC BY-NC-SA 4.0 licence (PHP and JavaScript), self-hostable with Docker or YunoHost.

## Website (English)

- [Home page](${site}en/): full presentation on a single page.
- [How it works](${site}en/#how): creating an account, the evening entry, the chart, export; installing on a phone.
- [Features](${site}en/#features)
- [Demo and screenshots](${site}en/#demo)
- [Natural family planning methods](${site}en/#methods): compatibility of the app with each method.
- [John and Evelyn Billings](${site}en/#billings): history of the Billings method, with the 1972 Lancet article and sources.
- [Frequently asked questions](${site}en/#faq)
- [Support moncycle.app](${site}en/#support)
- [News](${site}en/#news)

## Terms of use and privacy policy

- [Terms of use and privacy policy (English, courtesy translation)](${site}en/term_of_service.html)
- [Conditions d'utilisation et politique de confidentialité (French, reference version)](${site}fr/term_of_service.html)

## Site en français

- [Accueil (français)](${site}fr/): the same presentation in French.
- [Résumé en français pour les modèles de langage](${site}llms-fr.txt)

## Technical

- [Application (log in and sign up)](https://tableau.moncycle.app/)
- [Source code on GitHub](https://github.com/moncycle-app/backend-api-web-app)
- [API documentation (OpenAPI 3.0)](https://tableau.moncycle.app/api/)
- [Docker image](https://hub.docker.com/r/jeanio/moncycle.app)
- [Install with YunoHost](https://install-app.yunohost.org/?app=moncycle)
- [Service status](https://status.moncycle.app)

## Publisher

- [Tech 4 Fertility](https://tech4fertility.org/): non-profit association (loi of 1901), RNA W271007328, 15A rue Valentin Gaumont, 27200 Vernon, France. Website under construction.
`;
