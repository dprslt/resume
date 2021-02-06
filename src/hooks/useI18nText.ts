import { I18nText, Lang } from "./../types/i18n";
import { useTranslation } from "react-i18next";

export type I18nTextOpener = (node: I18nText) => string;
export const useI18nTextOpener = (): I18nTextOpener => {
  const { i18n } = useTranslation();

  const lang = i18n.language as Lang;
  return (node) => {
    if (typeof node === "string") {
      return node;
    }
    return node[lang] || node["fr"];
  };
};

export const useI18nText = (node: I18nText): string => {
  const opener = useI18nTextOpener();
  return opener(node);
};
