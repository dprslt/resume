import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { PersonalDataType } from "../../types/resume-infos/PersonalData";

export const personalData: PersonalDataType = {
  name: "Théo",
  surname: "Depresle",
  title: {
    fr: "Ingénieur FullStack",
    en: "FullStack Engineer",
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
    fr: "23 ans",
    en: "23 years old",
  },
  license: {
    fr: "Permis de conduire, véhicule personnel",
    en: "Driver license, personal car",
  },
  personalFooterIcon: faMotorcycle,
  personalFooterNote: {
    fr: "Tech enthusiast, motard, photographe amateur et DIY",
    en: "Tech enthusiast, biker, amateur photograph and DIY",
  },

  linkedIn: "https://www.linkedin.com/in/dprslt/",
  github: "https://github.com/dprslt",
  socialTag: "@dprslt",
};
