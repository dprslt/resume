import { ExperienceType } from "../../types/resume-infos/Experience";

export const experiences: Array<ExperienceType> = [
  {
    displayLevel: "full",
    title: {
      fr: "Freelance",
      en: "Freelance",
    },
    company: "Tily",
    place: "France",
    date: {
      from: "2024",
    },
    description: {
      fr:
        "Développement du produit GRC360 à destination des communes et des leurs citoyens.\n"+
        "Ré-écriture compléte du produit, automatisation et migration vers une architecture Kubernetes.\n"+
        "Acccompagnement et formation de l'équipe de développement.",
      en:
        "Designing and building the GRC360 product to ease dialog between cities and citizens.\n"+
        "Full rewrite of the product, migrate to Kubernete with fully automated CI/CD.\n"+
        "Growing and training of the dev team",
    },
  },
  {
    displayLevel: "full",
    title: {
      fr: "Tech Lead FullStack",
      en: "Full Stack Lead Engineer",
    },
    company: "Citopia",
    place: "Full Remote",
    date: {
      from: "2020",
      to: {
        fr: "2023",
        en: "2023",
      },
    },
    description: {
      fr:
        "Développement du produit GRC360 à destination des communes et des leurs citoyens.\n"+
        "Ré-écriture compléte du produit, automatisation et migration vers une architecture Kubernetes.\n"+
        "Acccompagnement et formation de l'équipe de développement.",
      en:
        "Designing and building the GRC360 product to ease dialog between cities and citizens.\n"+
        "Full rewrite of the product, migrate to Kubernete with fully automated CI/CD.\n"+
        "Growing and training of the dev team",
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
      from: "2018",
      to: "2020",
    },
    activities: [
      {
        title: {
          fr: "Développeur FullStack : ReactJS / VueJS / Node / PHP",
          en: "Fullstack Developer : ReactJS / VueJS / Node / PHP",
        },
        description: {
          fr:
            "Co-responsable des développements Frontend pour le projet Européen COMMUTE et pour différents clients grand comptes.",
          en:
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
            "Automatisation des processus de mise en production (CI/CD).",
          en:
            "Delivering support and animating training session around the Elastic stack and computer science acculturation\n" +
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
      from: "2015",
      to: {
        fr: "2018",
        en: "2018",
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
