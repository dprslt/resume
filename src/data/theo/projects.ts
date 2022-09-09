import findOrDraw from "../../static/findOrDraw.png";
import dsc from "../../static/dsc.png";
import kyc from "../../static/kyc.png";
import aurora from "../../static/aurora.png";
import tpth from "../../static/tpth.png";
import cake from "../../static/cake.png";
import lego from "../../static/lego.png";
import pdd from "../../static/icone-pdd.png";
import { SideProjectType } from "../../types/resume-infos/SideProject";

export const projets: Array<SideProjectType> = [
  {
    title: "PDD Parapente",
    link:
      "https://pdd.dprslt.fr",
    shortDescription: {
      fr: "Conditions de vol au sommet",
      en: "Flying condition over PDD",
    },
    images: [pdd],
  },
  {
    title: "FindOrDraw",
    link:
      "https://play.google.com/store/apps/details?id=com.cognitivecompany.findordraw",
    shortDescription: {
      fr: "Jeu mobile - Play Store",
      en: "Mobile game - Play Store",
    },
    images: [findOrDraw],
  },
  {
    title: "EcoTravelers",
    link: "https://www.sesarju.eu/node/3388",
    shortDescription: {
      fr: "Gagnant du Challenge Environnement",
      en: "Winner of the Environment Challenge",
    },
    images: [dsc],
  },
  // {
  //   title: "Le Madras",
  //   shortDescription: {
  //     fr: "Site vitrine pour une patisserie",
  //     en: "Showcase website for a French pastry shop",
  //   },
  //   link: "https://www.patisserie-lemadras.com/",
  //   images: [cake],
  // },
  {
    title: "KYChain",
    link:
      "http://showroom-actuariat.sia-partners.com/blockchain/GBC_Website_0.2/indexEN.html",
    shortDescription: {
      fr: "Concours Génération Blockchain",
      en: 'Constest "Génération Blockchain"',
    },
    images: [kyc],
  },
  {
    title: {
      fr: "Domo Pi et Aurora",
      en: "Domo Pi & Aurora",
    },
    link: "https://github.com/dprslt/aurora",
    shortDescription: {
      fr: "Solutions domotiques DIY !",
      en: "DIY home automation solutions",
    },
    images: [aurora],
  },
  {
    title: "TPTH",
    shortDescription: {
      fr: "Infrastructure DevOps self hosted",
      en: "Self hosted DevOps platform",
    },
    images: [tpth],
  },
  {
    title: "LegoLOGO",
    link:
      "http://marc.chevaldonne.free.fr/ens_rech/Bienvenue/Entrees/2017/5/23_LegoLOGO_a_Exposciences_Montlucon.html",
    shortDescription: {
      fr: "Apprendre l'algorithmie aux enfants !",
      en: "Teach algorithm to childrens",
    },
    images: [lego],
  },
];
