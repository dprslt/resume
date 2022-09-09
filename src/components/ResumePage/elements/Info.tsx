import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type InfoProps = {
  icon: IconProp;
};

const Info: React.FunctionComponent<React.PropsWithChildren<InfoProps>> = ({ children, icon }) => {
  return (
    <div className={"info"}>
      <span className={"info-value"}>{children}</span>
      <FontAwesomeIcon className={"info-icon"} icon={icon} />
    </div>
  );
};

export default Info;
