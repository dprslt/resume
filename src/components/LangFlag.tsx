import React, { useContext } from "react";
import { IntContext } from "../App";
import FlagIcon from "../utils/FlagIcon";

type LangFlagProps = {
  locale: string;
  flagLocale: string;
  onClick: (locale: string) => unknown;
};

const LangFlag: React.FunctionComponent<LangFlagProps> = ({
  locale,
  flagLocale,
  onClick,
}) => {
  const context = useContext(IntContext);
  return (
    <div
      className={`lang-btn ${context.lang === locale ? "selected" : ""}`}
      onClick={() => onClick(locale)}
    >
      <FlagIcon code={flagLocale} />
    </div>
  );
};

export default LangFlag;
