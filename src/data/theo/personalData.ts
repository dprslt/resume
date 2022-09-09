import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { PersonalDataType } from "../../types/resume-infos/PersonalData";

export const personalData: PersonalDataType = {
  name: "Théo",
  surname: "Depresle",
  title: {
    fr: "Full Stack Lead Engineer",
    en: "Full Stack Lead Engineer",
  },
  phone: {
    target: "phone://+33629325778",
    text: "+33 6 29 32 57 78",
  },
  mail: {
    target: "mail://theo.depresle@gmail.com",
    text: "theo.depresle@gmail.com",
  },
  age: {
    fr: "26 ans",
    en: "26 years old",
  },
  license: {
    fr: "Permis de conduire, véhicule personnel",
    en: "Driver license, personal car",
  },
  personalFooterIcon: faMotorcycle,
  personalFooterNote: {
    fr: "Tech enthusiast, motard, pilote de parapente, photographe amateur et DIY",
    en: "Tech enthusiast, biker, glider pilot, amateur photograph and DIY",
  },

  linkedIn: "https://www.linkedin.com/in/dprslt/",
  github: "https://github.com/dprslt",
  socialTag: "@dprslt",
};
