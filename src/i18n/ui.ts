export const languages = {
  en: `🇬🇧`,
  fr: `🇫🇷`,
};

export const defaultLang = `fr`;

export const ui = {
  fr: {
    "nav.experiences": `Expériences`,
    "nav.projects": `Projets`,
    "nav.bio": `Bio`,
    "nav.blog": `Blog`,
    "hero.title": `Thibaud Brault`,
    "hero.subtitle": `Développeur front-end nantais`,
    "section.title[0]": "Expériences",
    "section.title[1]": "Projets",
    "section.title[2]": "Bio",
    "experiences[0].role": `Développeur full-stack JS`,
    "experiences[0].start": `Février 2023`,
    "experiences[0].end": `Septembre 2023`,
    "experiences[0].duration": `6 mois`,
    "experiences[0].type": `Stage`,
    "experiences[0].missions.client": `FAQ - Zénika (site interne)`,
    "experiences[0].missions.details[0]": `Mise en place de tests e2e avec Playwright pour assurer la qualité et la stabilité du site.`,
    "experiences[0].missions.details[1]": `Ajout de nouvelles fonctionnalités, dont la création d'un statut de spécialiste pour la validation de questions et l'intégration de l'API Google Translate pour la traduction de contenu.`,
    "experiences[0].missions.details[2]": `Amélioration de l'expérience de développement en migrant le projet de 'Create-React-App' vers 'Vite', ce qui a entraîné une augmentation significative de la rapidité et de l'efficacité.`,
    "experiences[0].missions.details[3]": `Mise à jour de React et de React-Router vers les dernières versions, permettant ainsi de bénéficier des dernières avancées technologiques.`,
    "experiences[0].missions.details[4]": `Mise à jour des dépendances Apollo GraphQL pour permettre l'utilisation des hooks de React ainsi que la gestion des requêtes GraphQL grâce à une seule dépendance ce qui permet de supprimer plusieurs autres.`,
    "experiences[0].missions.details[5]": `Migration vers Tailwind afin de nettoyer le CSS actuel et unifier les styles déjà présents.`,
    "experiences.words.de": `de`,
    "experiences.words.entre": `entre`,
    "experiences.words.a": `à`,
    "pokeref.features[0]": "Filtrage et recherche",
    "pokeref.features[1]": "Données dynamiques",
    "pokeref.features[2]": "Authentification",
    "pokeref.features[3]": "Sauvegarde des favoris",
    "pokeref.features[4]": "EsLint, Prettier, Stylelint, Lint-Staged",
    "pokeref.features[5]": "CI / CD avec Github Actions et Netlify",
    "pokeref.features[6]": "PWA",
    "pokeref.features[7]": "Changement de thème",
    "pokeref.features[8]": "et bien plus",
    "pokeref.about[0]":
      "PokéRef est une encyclopédie Pokémon qui utilise les données de PokéAPI et Smogon",
    "pokeref.about[1]":
      "Permet de retrouver toutes les informations sur les Pokémon, les attaques, les talents, les lieux, ...",
    "pokeref.about[2]":
      "Permet de créer un compte afin de pouvoir mettre en favoris des Pokémon",
    "pokeref.about[3]":
      "Ce projet est passé par beaucoup d'étapes et m'a permis d'apprendre plusieurs frameworks / langages tel que Typescript, Next, React-Query et l'utilisation d'API, Scss modules, ...",
    "pokeref.about[4]":
      "Il m'a aussi permis d'apprendre à structurer une application ainsi que la modifier quand le projet s'agrandit, à mettre en place une CI/CD ainsi que du linting afin d'avoir un code propre et un site fonctionnel en permanence et à résoudre des problèmes créer lors de l'ajout de features, de refacto ou de migrations",
    "pokeref.about[5]":
      "Il m'a aussi permis de faire du backend avec l'ajout de l'authentification par email / mot de passe ou avec des providers tel que Google ou encore Github, la sauvegarde des utilisateurs dans une base de donnée en utilisant Prisma et la modification de ces données",
    "unit.features[0]": "Package NPM",
    "unit.features[1]":
      "Utilise Typescript et supporte CommonJS (CJS) and ECMAScript Modules (ESM)",
    "unit.features[2]": "Tests unitaires avec Vitest",
    "unit.features[3]": "Utilisation de Changesets pour le versioning",
    "unit.features[4]": "CI / CD avec Github Actions et Changesets bot",
    "unit.features[5]": "Documentation: installation et utilisation du package",
    "unit.about[0]":
      "Package NPM dont le but est de fournir des fonctions permettant de convertir des unités de mesures vers d'autres unités (par exemple des mètres vers des pieds)",
    "unit.about[1]": `Build qui supporte CJS ("require" et "module.exports") et ESM ("import" et "export") grâce à l'utilisation de tsup`,
    "unit.about[2]":
      "Ecriture de tests unitaires avec Vitest afin de s'assurer que toutes les fonctions soient toujours fonctionnelles et que les fonctions retournent bien le résultat souhaité",
    "unit.about[3]":
      "Utilisation de Changesets comme outil de versioning afin de facilement changer le package de version et le publier",
    "unit.about[4]":
      "Mise en place d'une CI / CD avec la création de deux workflows Github Actions qui permettent de lancer lint et Vitest lors de chaque commit et de publier la nouvelle version lors d'un merge sur la branche main",
    "portfolio.features[0]": "Présentation de mes projets",
    "portfolio.features[1]": "Carousel d'images",
    "portfolio.features[2]": "Création d'un blog avec Mdx",
    "portfolio.features[3]": "Disponible en français et en anglais",
    "portfolio.about[0]":
      "Ce site me permet de présenter mes meilleurs projets.",
    "portfolio.about[1]":
      "Ce portfolio a un design volontairement minimaliste et épuré pour que les visiteurs puissent se focaliser sur les informations présentes.",
    "portfolio.about[2]":
      "Utilisation d'Astro afin de créer un site statique performant.",
    "portfolio.about[3]":
      "Crée avec en objectif principal la réusabilité des composants React afin de pouvoir facilement et rapidement ajouter des nouvelles informations.",
    "bio.text[0]": `Passionné par l'informatique et le design, c'est tout naturellement
    que je me suis tourné vers la création de sites.`,
    "bio.text[1]": `Adepte du clean code, je suis vigilant à l'accessibilité, au
    responsive design, à l'amélioration des performances et au respect
    des bonnes pratiques SEO.`,
  },
  en: {
    "nav.experiences": `Experiences`,
    "nav.projects": `Projects`,
    "hero.subtitle": `Front-end developer based in Nantes`,
    "section.title[0]": "Experiences",
    "section.title[1]": "Projects",
    "experiences[0].role": `Fullstack JS developer`,
    "experiences[0].start": `February 2023`,
    "experiences[0].end": `September 2023`,
    "experiences[0].duration": `6 months`,
    "experiences[0].type": `Internship`,
    "experiences[0].missions.client": `FAQ - Zénika (internal site)`,
    "experiences[0].missions.details[0]": `Setting up e2e tests with Playwright to ensure the quality and stability of the website.`,
    "experiences[0].missions.details[1]": `Adding new features, including the creation of a specialist status for question validation and the integration of the Google Translate API for content translation.`,
    "experiences[0].missions.details[2]": `Improving the development experience by migrating the project from 'Create-React-App' to 'Vite,' resulting in a significant increase in speed and efficiency.`,
    "experiences[0].missions.details[3]": `Updating React and React-Router to the latest versions, allowing to take advantage of the latest technological advancements.`,
    "experiences[0].missions.details[4]": `Updating Apollo GraphQL dependencies to enable the use of React hooks and streamline GraphQL query management with a single dependency, resulting in the removal of several others.`,
    "experiences[0].missions.details[5]": `Migrating to Tailwind to clean up the current CSS and unify the existing styles.`,
    "experiences.words.de": `of`,
    "experiences.words.entre": `between`,
    "experiences.words.a": `and`,
    "pokeref.features[0]": "Filtering and searching",
    "pokeref.features[1]": "Dynamic data",
    "pokeref.features[2]": "Authentication",
    "pokeref.features[3]": "Saving favorites",
    "pokeref.features[4]": "EsLint, Prettier, Stylelint, Lint-Staged",
    "pokeref.features[5]": "CI / CD with Github Actions and Netlify",
    "pokeref.features[6]": "PWA",
    "pokeref.features[7]": "Theme switch",
    "pokeref.features[8]": "and much more",
    "pokeref.about[0]":
      "PokéRef is a Pokémon encyclopedia that utilizes data from PokéAPI and Smogon.",
    "pokeref.about[1]":
      "Allows you to find all the information about Pokémon, attacks, abilities, locations, ...",
    "pokeref.about[2]":
      "Allows you to create an account in order to save your favorites Pokémon.",
    "pokeref.about[3]":
      "This project has gone through many stages and has allowed me to learn several frameworks/languages such as TypeScript, Next, React-Query, and the use of APIs, SCSS modules, ...",
    "pokeref.about[4]":
      "It has also allowed me to learn how to structure an application and modify it as the project expands, set up CI/CD as well as linting to maintain clean code and a functional site at all times, and solve issues that arise during the addition of features, refactoring, or migrations.",
    "pokeref.about[5]":
      "It has also enabled me to work on the backend, including adding email/password authentication and using providers such as Google or Github, saving user data in a database using Prisma, and modifying this data.",
    "unit.features[0]": "NPM package",
    "unit.features[1]":
      "Uses TypeScript and supports CommonJS (CJS) and ECMAScript Modules (ESM)",
    "unit.features[2]": "Unit testing with Vitest",
    "unit.features[3]": "Usage of Changesets for versioning",
    "unit.features[4]": "CI/CD with Github Actions and Changesets bot",
    "unit.features[5]": "Documentation: package installation and usage",
    "unit.about[0]":
      "NPM package aimed at providing functions to convert units of measurements to other units (e.g., meters to feet)",
    "unit.about[1]":
      "Build supporting both CommonJS ('require' and 'module.exports') and ECMAScript Modules ('import' and 'export') through the use of tsup",
    "unit.about[2]":
      "Writing unit tests with Vitest to ensure the continued functionality of all functions and that they return the expected results.",
    "unit.about[3]":
      "Using Changesets as a versioning tool to easily update the package version and publish it.",
    "unit.about[4]":
      "Setting up CI/CD with the creation of two Github Actions workflows that trigger linting and Vitest on each commit, and publish a new version upon merging into the main branch.",
    "portfolio.features[0]": "Presentation of my projects",
    "portfolio.features[1]": "Image carousel",
    "portfolio.features[2]": "Creating a blog with MDX",
    "portfolio.features[3]": "Available in both French and English",
    "portfolio.about[0]":
      "This website allows me to showcase my best projects.",
    "portfolio.about[1]":
      "This portfolio has intentionally been designed with a minimalist and clean aesthetic, allowing visitors to focus on the presented information.",
    "portfolio.about[2]":
      "Using Astro to create a high-performance static website.",
    "portfolio.about[3]":
      "Created with a primary focus on reusability of React components, enabling the quick and easy addition of new information.",
    "bio.text[0]":
      "Passionate about both computer science and design, it was only natural for me to turn to website creation.",
    "bio.text[1]":
      "As a proponent of clean code, I am attentive to accessibility, responsive design, performance optimization, and adhering to good SEO practices.",
  },
} as const;