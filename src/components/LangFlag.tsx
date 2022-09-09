import React from "react";
import { useTranslation } from "react-i18next";
import { Lang } from "../types/i18n";
import FlagIcon from "../utils/FlagIcon";

type LangFlagProps = {
  locale: Lang;
  flagLocale: string;
};

const LangFlag: React.FunctionComponent<React.PropsWithChildren<LangFlagProps>> = ({
  locale,
  flagLocale,
}) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`lang-btn ${i18n.language === locale ? "selected" : ""}`}
      onClick={() => i18n.changeLanguage(locale)}
    >
      <FlagIcon code={flagLocale} />
    </div>
  );
};

export default LangFlag;
