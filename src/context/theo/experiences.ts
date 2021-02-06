import { ExperienceType } from "../types/resume-infos/Experience";

export const experiences: Array<ExperienceType> = [
  {
    displayLevel: "full",
    title: {
      fr: "Développeur web",
      en: "Frontend engineer",
    },
    company: "Citopia",
    place: "Toulouse",
    date: {
      from: "Sept. 2020",
    },
    description: {
      fr:
        "Architecture et développement du produit GRC360 à destination des communes et des leurs citoyens.",
      en:
        "Designin and building the GRC360 product to ease dialog between cities and citizens.",
    },
    tech: ["React", "Redux Toolkit", "Leaflet", "NodeJS", "Docker Swarm"],
  },
  {
    displayLevel: "full",
    title: {
      fr: "Ingénieur d'études",
      en: "Software Engineer",
    },
    company: "Sopra Steria Group",
    place: "Toulouse",
    date: {
      from: "Sept. 2018",
      to: "Sept. 2020",
    },
    activities: [
      {
        title: {
          fr: "Développeur FullStack : ReactJS / VueJS / Node / PHP",
          en: "Fullstack Developer : ReactJS / VueJS / Node / PHP",
        },
        description: {
          fr:
            "Participation à la conception de plusieurs projets de développement logiciel.\n" +
            "Co-responsable des développements Frontend pour le projet Européen COMMUTE et pour différents clients grand comptes.",
          en:
            "Design and implementation of various web solutions\n" +
            "Lead frontend developer for the European project COMMUTE and for other large accounts customers such as EUROCONTROL",
        },
      },
      {
        title: {
          fr: "Formateur & Consultant Data Engineering",
          en: "Data engineering trainer & consulant",
        },
        description: {
          fr:
            "Conseil et animation de formations autour de la stack Elastic et de l'acculturation à l'informatique.\n" +
            "Accompagnement d'équipes de Développeurs et de Data Scientists dans la conception et le déploiement de plateformes de traitement de données.\n" +
            "Automatisation des processus de mise en production (CI/CD).",
          en:
            "Delivering support and animating training session around the Elastic stack and computer science acculturation\n" +
            "Support teams of Developers and Data Scientists to help them design and deploy data processing solutions\n" +
            "Setup automated production process (DevOps - CI/CD).",
        },
      },
    ],
    tech: [
      "React JS",
      "Typescript",
      "VueJS",
      "NodeJS",
      "MongoDB",
      "ElasticSearch",
      "Kafka",
      "GitLab",
      "Docker",
      "K8s",
      "AWS",
    ],
  },
  {
    title: {
      fr: "Apprenti Ingénieur",
      en: "Software Engineer Intern",
    },
    company: "EDF R&D",
    place: "Paris Saclay / Palo Alto, USA",
    date: {
      from: "Sept. 2015",
      to: {
        fr: "Août 2018",
        en: "Aug 2018",
      },
    },
    displayLevel: "compact",
    description: {
      fr:
        "Apprentissage du métier d'ingénieur en intervenant sur différents projets. Du Deep Learning au développement " +
        "web en suivant un fil rouge autour de la mise en place d'une solution BigData pour normaliser, " +
        "stocker puis exploiter des données hétérogènes.",
      en:
        "Learning the Software Enginner job one project at a time.\nFrom Deep Learning to web development passing through microservices in order to build a normalized DataLake to store and analyse heterogeneous data.",
    },
    tech: [
      "Java",
      "Neo4j",
      "Kafka",
      "NodeJS",
      "AngularJS",
      "Python",
      "Tensorflow",
      "Keras",
      "CNN",
      "Gitlab",
      "Docker",
      "Nexus",
    ],
  },
  {
    title: {
      fr: "Stagiaire puis intérimaire",
      en: "Web-developer intern",
    },
    company: "ENEDIS",
    place: "Clermont-Ferrand",
    displayLevel: "none",
    date: {
      from: {
        fr: "Avril 2015",
        en: "April 2015",
      },
      to: "Août 2015",
    },
    tech: ["PHP", "CSS", "Javascript", "Postgresql", "SIG", "git"],
  },
];
