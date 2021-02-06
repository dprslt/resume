import { FC } from "react";
import { I18nText, Lang } from "../types/i18n";
import { useTranslation } from "react-i18next";

interface I18nTextNodeProps {
  text: I18nText;
}

const I18nTextNode: FC<I18nTextNodeProps> = ({ text }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as Lang;
  if (typeof text === "string") {
    return <>{text}</>;
  }
  return <>{text[lang] || text["fr"]}</>;
};

export default I18nTextNode;
