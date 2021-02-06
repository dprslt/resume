import { FC, useContext } from "react";
import { IntContext } from "../App";
import { I18nText } from "../context/types/i18n";

interface I18nTextNodeProps {
  text: I18nText;
}

const I18nTextNode: FC<I18nTextNodeProps> = ({ text }) => {
  const context = useContext(IntContext);
  const lang = context.lang;
  if (typeof text === "string") {
    return <>{text}</>;
  }
  return <>{text[lang] || text["fr"]}</>;
};

export default I18nTextNode;
