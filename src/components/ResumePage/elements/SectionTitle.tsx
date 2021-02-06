import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { I18nText } from "../../../types/i18n";
import I18nTextNode from "../../I18nTextNode";

type SectionTitleProps = {
  title: I18nText;
  icon: IconProp;
};

const SectionTitle: React.FunctionComponent<SectionTitleProps> = ({
  title,
  icon,
}) => {
  return (
    <div className={"sec-header"}>
      <FontAwesomeIcon className={"sec-icon"} icon={icon} />
      <h2>
        <I18nTextNode text={title} />
      </h2>
    </div>
  );
};

export default SectionTitle;
