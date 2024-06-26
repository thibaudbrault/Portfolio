export const languages = {
  en: `🇬🇧`,
  fr: `🇫🇷`,
};

export const defaultLang = `fr`;

export const ui = {
  fr: {
    'nav.experiences': `Expériences`,
    'nav.projects': `Projets`,
    'nav.bio': `Bio`,
    'nav.blog': `Blog`,
    'hero.title': `Thibaud Brault`,
    'hero.subtitle': `Développeur front-end nantais`,
    'section.title[0]': `Expériences`,
    'section.title[1]': `Projets`,
    'section.title[2]': `Bio`,
    'section.title[3]': `Articles`,
    'summary.more': `Voir plus`,
    'experiences[0].role': `Développeur full-stack JS`,
    'experiences[0].start': `Février 2023`,
    'experiences[0].end': `Septembre 2023`,
    'experiences[0].duration': `6 mois`,
    'experiences[0].type': `Stage`,
    'experiences[0].missions.client': `FAQ - Zénika (site interne)`,
    'experiences[0].missions.details[0]': `Mise en place de tests e2e avec Playwright pour assurer la qualité et la stabilité du site.`,
    'experiences[0].missions.details[1]': `Ajout de nouvelles fonctionnalités, dont la création d'un statut de spécialiste pour la validation de questions et l'intégration de l'API Google Translate pour la traduction de contenu.`,
    'experiences[0].missions.details[2]': `Amélioration de l'expérience de développement en migrant le projet de 'Create-React-App' vers 'Vite', ce qui a entraîné une augmentation significative de la rapidité et de l'efficacité.`,
    'experiences[0].missions.details[3]': `Mise à jour de React et de React-Router vers les dernières versions, permettant ainsi de bénéficier des dernières avancées technologiques.`,
    'experiences[0].missions.details[4]': `Mise à jour des dépendances Apollo GraphQL pour permettre l'utilisation des hooks de React ainsi que la gestion des requêtes GraphQL grâce à une seule dépendance ce qui permet de supprimer plusieurs autres.`,
    'experiences[0].missions.details[5]': `Migration vers Tailwind afin de nettoyer le CSS actuel et unifier les styles déjà présents.`,
    'experiences.words.de': `de`,
    'experiences.words.entre': `entre`,
    'experiences.words.a': `à`,
    'tabs[0]': `Images`,
    'tabs[1]': `Contenu`,
    'tabs[2]': `A propos`,
    'faqmaker.features[0]': `SaaS multi-tenant entièrement responsive`,
    'faqmaker.features[1]': `Différents niveaux d'abonnements qui permettent d'accéder à différentes fonctionnalités`,
    'faqmaker.features[2]': `Rôles et autorisations`,
    'faqmaker.features[3]': `Ajout, suppression et modification des utilisateurs`,
    'faqmaker.features[4]': `Questions / réponses`,
    'faqmaker.features[5]': `Ajout / suppression de tags`,
    'faqmaker.features[6]': `Support de Markdown pour les réponses`,
    'faqmaker.features[7]': `Thème personnalisable`,
    'faqmaker.features[8]': `et bien plus`,
    'faqmaker.about[0]': `FAQMaker est une SaaS multi-tenant qui permet aux entreprises de regrouper toutes ses connaissances internes au même endroit.`,
    'faqmaker.about[1]': `Permet aux employés de pouvoir poser des questions / répondre à des questions concernant l'entreprise.`,
    'faqmaker.about[2]': `Favorise la communication interne entre les employés en permettant un partage de connaissances au sein de l'entreprise.`,
    'faqmaker.landing.features[0]': `Présentation de FAQMaker: caractéristiques, utilité et prix`,
    'faqmaker.landing.features[1]': `Objectif: susciter l'intérêt des potentiels clients`,
    'faqmaker.landing.features[2]': `Utilisation d'OBS Studio pour enregistrer des vidéos de présentation`,
    'faqmaker.landing.about[0]': `Ce site me permet de présenter mon application SaaS que j'ai conçu: FAQMaker. Il contient toutes les informations nécessaires pour comprendre l'utilité de FAQMaker, les différentes caractéristiques ainsi que les différents tarifs proposés.`,
    'faqmaker.landing.about[1]': `Crée avec l'utilisation d'Astro car il contient uniquement du contenu statique et informationnel ce qui rend la performance primordiale.`,
    'gamemusic.features[0]': `Présentation des musiques par catégories, popularité, date d'ajout, ...`,
    'gamemusic.features[1]': `Lecteur de musique fonctionnel (play / pause, suivant / précédent, loop et shuffle)`,
    'gamemusic.features[2]': `Authentification nécessaire pour sauvegarder des favoris et créer des playlists`,
    'gamemusic.features[3]': `Utilisateur admin peut ajouter des albums, des musiques, ...`,
    'gamemusic.features[4]': `Historique des titres écoutés par l'utilisateur`,
    'gamemusic.features[5]': ``,
    'gamemusic.about[0]': `GameMusic est un site qui permet d'écouter des musique de jeux vidéos`,
    'gamemusic.about[1]': `Utilisation de AWS S3 pour stocker les musiques et de Cloudfront en tant que CDN pour garantir une faible latence et une disponibilité constante ce qui permet d'améliorer l'expérience utilisateur`,
    'gamemusic.about[2]': `Utilisation de Supabase pour l'authentification et la base de données`,
    'pokeref.features[0]': `Filtrage et recherche`,
    'pokeref.features[1]': `Données dynamiques`,
    'pokeref.features[2]': `Authentification`,
    'pokeref.features[3]': `EsLint, Prettier, Stylelint, Lint-Staged`,
    'pokeref.features[4]': `CI / CD avec GitHub Actions et Netlify`,
    'pokeref.features[5]': `PWA`,
    'pokeref.features[6]': `Changement de thème`,
    'pokeref.about[0]': `PokéRef est une encyclopédie Pokémon qui utilise les données de PokéAPI et Smogon.`,
    'pokeref.about[1]': `Permet de retrouver toutes les informations sur les Pokémon, les attaques, les talents, les lieux, ...`,
    'pokeref.about[2]': `Ce projet est passé par beaucoup d'étapes et m'a permis d'apprendre plusieurs frameworks / langages tel que Typescript, Next, React-Query et l'utilisation d'API, Scss modules, ...`,
    'pokeref.about[3]': `Il m'a aussi permis d'apprendre à structurer une application ainsi que la modifier quand le projet s'agrandit, à mettre en place une CI/CD ainsi que du linting afin d'avoir un code propre et un site fonctionnel en permanence et à résoudre des problèmes créer lors de l'ajout de features, de refacto ou de migrations.`,
    'portfolio.features[0]': `Présentation de mes projets`,
    'portfolio.features[1]': `Carousel d'images`,
    'portfolio.features[2]': `Disponible en français et en anglais`,
    'portfolio.about[0]': `Ce site me permet de présenter mes meilleurs projets.`,
    'portfolio.about[1]': `Ce portfolio a un design volontairement minimaliste et épuré pour que les visiteurs puissent se focaliser sur les informations présentes.`,
    'portfolio.about[2]': `Utilisation d'Astro afin de créer un site statique performant.`,
    'portfolio.about[3]': `Crée avec en objectif principal la réusabilité des composants React afin de pouvoir facilement et rapidement ajouter des nouvelles informations.`,
    'bio.text[0]': `Passionné par l'informatique et la création, c'est tout naturellement
    que je me suis tourné vers le développement de sites.`,
    'bio.text[1]': `Adepte du clean code, je suis vigilant à l'accessibilité, au
    responsive design, à l'amélioration des performances et au respect
    des bonnes pratiques SEO.`,
  },
  en: {
    'nav.experiences': `Experiences`,
    'nav.projects': `Projects`,
    'hero.subtitle': `Front-end developer based in Nantes`,
    'section.title[0]': `Experiences`,
    'section.title[1]': `Projects`,
    'summary.more': `See more`,
    'experiences[0].role': `Fullstack JS developer`,
    'experiences[0].start': `February 2023`,
    'experiences[0].end': `September 2023`,
    'experiences[0].duration': `6 months`,
    'experiences[0].type': `Internship`,
    'experiences[0].missions.client': `FAQ - Zénika (internal site)`,
    'experiences[0].missions.details[0]': `Setting up e2e tests with Playwright to ensure the quality and stability of the website.`,
    'experiences[0].missions.details[1]': `Adding new features, including the creation of a specialist status for question validation and the integration of the Google Translate API for content translation.`,
    'experiences[0].missions.details[2]': `Improving the development experience by migrating the project from 'Create-React-App' to 'Vite,' resulting in a significant increase in speed and efficiency.`,
    'experiences[0].missions.details[3]': `Updating React and React-Router to the latest versions, allowing to take advantage of the latest technological advancements.`,
    'experiences[0].missions.details[4]': `Updating Apollo GraphQL dependencies to enable the use of React hooks and streamline GraphQL query management with a single dependency, resulting in the removal of several others.`,
    'experiences[0].missions.details[5]': `Migrating to Tailwind to clean up the current CSS and unify the existing styles.`,
    'experiences.words.de': `of`,
    'experiences.words.entre': `between`,
    'experiences.words.a': `and`,
    'tabs[0]': `Images`,
    'tabs[1]': `Content`,
    'tabs[2]': `About`,
    'faqmaker.features[0]': `Multi-tenant SaaS fully responsive`,
    'faqmaker.features[1]': `Different levels of subscriptions that gives access to different features`,
    'faqmaker.features[2]': `Roles and permissions`,
    'faqmaker.features[3]': `Add, remove and modify users`,
    'faqmaker.features[4]': `Questions / answers`,
    'faqmaker.features[5]': `Add / remove tags`,
    'faqmaker.features[6]': `Markdown support for answers`,
    'faqmaker.features[7]': `Customizable theme`,
    'faqmaker.features[8]': `and much more`,
    'faqmaker.about[0]': `FAQMaker is a multi-tenant SaaS that allows businesses to gather all of their internal knowledge in one place.`,
    'faqmaker.about[1]': `Allow employees to ask questions and provide answers related to the company.`,
    'faqmaker.about[2]': `Promotes internal communication among employees by facilitating knowledge sharing within the company.`,
    'faqmaker.landing.about[0]': `This site allows me to present my SaaS application that I designed: FAQMaker. It contains all the information necessary to understand the usefulness of FAQMaker, the different features as well as the different prices offered.`,
    'faqmaker.landing.about[1]': `Created with the use of Astro as it contains only static and informational content making performance paramount.`,
    'faqmaker.landing.features[0]': `Overview of FAQMaker: features, usefulness and price`,
    'faqmaker.landing.features[1]': `Objective: arouse the interest of potential customers`,
    'faqmaker.landing.features[2]': `Use of OBS Studio to record presentation videos`,
    'gamemusic.features[0]': `Music presentation by category, popularity, date added, ...`,
    'gamemusic.features[1]': `Functional music player (play/pause, next/previous, loop, and shuffle)`,
    'gamemusic.features[2]': `Authentication required to save favorites and create playlists`,
    'gamemusic.features[3]': `Admin user can add albums, musics, ...`,
    'gamemusic.features[4]': `History of tracks listened by user`,
    'gamemusic.features[5]': ``,
    'gamemusic.about[0]': `GameMusic is a site that gives its users the possibility to listen to video game soundtracks`,
    'gamemusic.about[1]': `Leveraging AWS S3 for music storage and Cloudfront as a CDN to ensure low latency and constant availability, thereby enhancing user experience`,
    'gamemusic.about[2]': `Leveraging Supabase for authentication and database management`,
    'pokeref.features[0]': `Filtering and searching`,
    'pokeref.features[1]': `Dynamic data`,
    'pokeref.features[2]': `Authentication`,
    'pokeref.features[3]': `EsLint, Prettier, Stylelint, Lint-Staged`,
    'pokeref.features[4]': `CI / CD with GitHub Actions and Netlify`,
    'pokeref.features[5]': `PWA`,
    'pokeref.features[6]': `Theme switch`,
    'pokeref.about[0]': `PokéRef is a Pokémon encyclopedia that utilizes data from PokéAPI and Smogon.`,
    'pokeref.about[1]': `Allows you to find all the information about Pokémon, attacks, abilities, locations, ...`,
    'pokeref.about[2]': `This project has gone through many stages and has allowed me to learn several frameworks/languages such as TypeScript, Next, React-Query, and the use of APIs, SCSS modules, ...`,
    'pokeref.about[3]': `It has also allowed me to learn how to structure an application and modify it as the project expands, set up CI/CD as well as linting to maintain clean code and a functional site at all times, and solve issues that arise during the addition of features, refactoring, or migrations.`,
    'portfolio.features[0]': `Presentation of my projects`,
    'portfolio.features[1]': `Image carousel`,
    'portfolio.features[2]': `Available in both French and English`,
    'portfolio.about[0]': `This website allows me to showcase my best projects.`,
    'portfolio.about[1]': `This portfolio has intentionally been designed with a minimalist and clean aesthetic, allowing visitors to focus on the presented information.`,
    'portfolio.about[2]': `Using Astro to create a high-performance static website.`,
    'portfolio.about[3]': `Created with a primary focus on reusability of React components, enabling the quick and easy addition of new information.`,
    'bio.text[0]': `Passionate about both computer science and creation, it was only natural for me to turn to website development.`,
    'bio.text[1]': `As a proponent of clean code, I am attentive to accessibility, responsive design, performance optimization, and adhering to good SEO practices.`,
  },
} as const;
