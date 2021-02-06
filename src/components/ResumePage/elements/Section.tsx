import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { I18nText } from "../../../types/i18n";
import SectionTitle from "./SectionTitle";

type SectionProps = {
  title: I18nText;
  icon: IconProp;
  className: string;
};

const Section: React.FunctionComponent<SectionProps> = ({
  title,
  icon,
  children,
  className,
}) => {
  return (
    <div className={`section ${className}`}>
      <SectionTitle title={title} icon={icon} />
      <div className={"sec-content"}>{children}</div>
    </div>
  );
};

export default Section;
