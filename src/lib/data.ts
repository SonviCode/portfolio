export const personalInfo = {
  name: "Tom Sonvico",
  location: "France, Grenoble",
  email: "tom.sonvico@free.fr",
  github: "https://github.com/SonviCode",
  linkedin: "https://www.linkedin.com/in/tom-sonvico/",
};

export const workExperience = [
  {
    company: "Merck Group",
    location: "Molsheim, France",
    position: "Développeur logiciel ( alternance ) ",
    period: "Nov 2022 - Dec 2024",
    achievements: [
      "Développement sur la partie Backend (Spring Boot) et Frontend (React.JS)",
      "Documentation technique et fonctionnelle, réalisation de plusieurs plans de test du code",
      "Réalisation de développement en mode agile, participation aux différentes réunions et cérémonies",
      "Communication à l’internationale, travail en équipe sur un projet conséquent",
      "Création d’un outil interne servant aux développeurs avec Ansible et PowerShell",
      "Mise en place de nouvelles pipelines Jenkins afin d’optimiser l’intégration et le déploiement continue dans un environnement devops",
      "Mise en place d'APIs REST, migration vers Swagger",
      "Réalisation d’une campagne de tests manuels parfois sur Skid physique,",
    ],
    companyImg: "/merck.jpg",
  },
];

export const education = [
  {
    institution: "3W Academy",
    img: "/3wa.jpg",
    location: "Remote",
    degree: "Concepteur & Développeur d'Applications - BAC+3/4",
    period: "Nov 2023 - Dec 2024",
    achievements: [
      "Conception d'une application via divers diagrammes ( UML / Merise )",
      "Méthode agile",
      "Création d'un environnement devops avec Jenkins ( CI/CD )",
      "Conteneurisation avec Docker",
      "Approfondissement de l'architecture de développement",
    ],
  },
  {
    institution: "3W Academy",
    img: "/3wa.jpg",
    location: "Remote",
    degree: "Développeur Full-stack : REACT / NODE.JS - BAC+2",
    period: "Oct 2022 - Nov 2023",
    achievements: [
      "Développement backend en Node JS",
      "Développement frontend en React JS",
      "Approfondissement Javascript/PHP",
      "Sécurité informatique",
      "Communication / SEO / performance",
    ],
  },
];
export const skills = {
  programmingLanguages: ["TypeScript", "JavaScript", "Java", "PHP"],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "Redux",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Nodejs", "Expressjs", "AdonisJS", "Spring Boot"],
  databaseAndStorage: ["MySQL", "MongoDB", "SQL Server"],
  cloudAndDevOps: ["Jenkins", "Github Actions"],
  toolsAndServices: ["Figma", "Vercel", "Teams"],
};

export const projects = [
  {
    title: "E-commerce : Montagne Addicte",
    github: "https://github.com/SonviCode/E-commerce",
    description: [
      "Site entièrement responsive",
      "Authentification avec JWT",
      "Mise en place d’un historique des produits, commandes, favoris",
      "Filtrer par catégorie, types, prix…",
      "paiement avec Stripe",
      ,
    ],
  },
  {
    title: "Tempo : location de montres",
    github: "https://github.com/SonviCode/watch_rental",
    description: [
      "Gestion de location de montres selon l'abonnement",
      "Création d'un backlog, conception de l'application via différents diagrammes, desgin de l'application via Figma...",
      "Dockeurisation de l'application",
      "Mise en place de tests unitaires, côté backend et frontend.",
      "Gestion de la sécurité, utilisation d'un ORM, des CSP, token CSRF, validation des données d'entrée...",
    ],
  },
];
