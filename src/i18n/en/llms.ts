// Summary of the site for language models (https://llmstxt.org), in English.
// `site` is the site URL with a trailing slash. Keep it consistent with the page content.
export const llms = (site: string): string => `# moncycle.app

> moncycle.app is a free web application for charting a woman’s cycle, designed for natural family planning methods (Billings, FertilityCare, with or without temperature). Each day, the user enters her observations (cervical mucus, periods, temperature) and the colour stamp of the day. The application presents them as a chart, in the official notation of the chosen method. It is developed and distributed by Tech 4 Fertility, a French non-profit association (law of 1901). It is a wellness tool: it is not a medical device and not a method of contraception. It makes no predictions and uses no artificial intelligence.

Key facts (reference: the terms of service, version 2.0, in effect from 1 November 2026):

- Free, with no subscription, no advertising and no tracking. The data is never sold. The application is funded by donations.
- Methods: Billings and FertilityCare are 100% compatible. Symptothermal methods (Cyclamen, SensiPlan, Méthode M) are partly compatible, because temperature curves are only partly supported.
- Web application (not on the App Store or Google Play): it can be added to the home screen of an iPhone or an Android device. Tech 4 Fertility is preparing iOS and Android apps.
- PDF, CSV and NFP export; automatic email delivery of each completed cycle (off by default), to up to 5 notification addresses; sync across devices; dark mode; two-factor authentication (TOTP).
- Data hosted in France at OVH, no transfer outside the European Union, GDPR compliance.
- Users must be at least 18 years old and must have completed training in the method they follow. They must not enter any information that identifies them, nor any medical health data.
- An account with no activity for 4 years is deleted, after a reminder and a warning. An unconfirmed account is deleted after 7 days.
- Public demo accounts, reset every hour: demo.bl@moncycle.app (Billings) and demo.fc@moncycle.app (FertilityCare), password “demo”.
- Open-source code under the CC BY-NC-SA 4.0 licence (PHP and JavaScript). It can be self-hosted with Docker or YunoHost.

## The website

- [Home](${site}en/): full presentation, on a single page.
- [How it works](${site}en/#how): account creation, evening entry, chart, export; installation on a phone.
- [Features](${site}en/#features)
- [Demo and screenshots](${site}en/#demo)
- [Natural family planning methods](${site}en/#methods): compatibility of the application with each method.
- [John and Evelyn Billings](${site}en/#billings): history of the Billings method, with the 1972 Lancet article and the sources.
- [Frequently asked questions](${site}en/#faq)
- [Support moncycle.app](${site}en/#support)
- [News](${site}en/#news)

## Terms of service

- [Terms of service and privacy policy (French, reference version)](${site}fr/term_of_service.html)
- [Terms of service and privacy policy (English translation)](${site}en/term_of_service.html)

## Technical

- [Application (login and sign-up)](https://tableau.moncycle.app/)
- [Source code on GitHub](https://github.com/moncycle-app/backend-api-web-app)
- [API documentation (OpenAPI 3.0)](https://tableau.moncycle.app/api/)
- [Docker image](https://hub.docker.com/r/jeanio/moncycle.app)
- [Install with YunoHost](https://install-app.yunohost.org/?app=moncycle)
- [Service status](https://status.moncycle.app)

## Publisher

- [Tech 4 Fertility](https://tech4fertility.org/): non-profit association (French law of 1901), RNA W271007328, 15A rue Valentin Gaumont, 27200 Vernon, France. Website under construction.

## Other languages

- [Résumé en français pour les modèles de langage](${site}fr/llms.txt)
- [Site en français](${site}fr/)
`;
