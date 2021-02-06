import { IntContext } from "./../App";
import { useContext } from "react";
import { I18nText } from "./../context/types/i18n";

export type I18nTextOpener = (node: I18nText) => string;
export const useI18nTextOpener = (): I18nTextOpener => {
  const context = useContext(IntContext);
  const lang = context.lang;
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
