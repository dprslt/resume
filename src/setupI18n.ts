import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./data/en";
import { fr } from "./data/fr";

const url = new URL(window.location.href);
const defaultLang = url.searchParams.get("lang");

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { fr, en },
    lng: defaultLang || 'fr',
    fallbackLng: "fr",
    load: "all",
    debug: false,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
