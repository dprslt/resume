import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TargetableInfo } from "../../../types/resume-infos/PersonalData";

type SensitiveInfoProps = {
  clear: boolean;
  data: TargetableInfo;
  icon: IconProp;
};

const SensitiveInfo: React.FunctionComponent<SensitiveInfoProps> = ({
  clear,
  data,
  icon,
}) => {
  const regex = /[a-zA-Z0-9]/gi;
  let text = data.text.replace(regex, " - ");
  if (clear) {
    text = data.text;
  }

  return (
    <div className={"info"}>
      <span className={"info-value"}>
        <a href={clear ? data.target : "/#"}>{text}</a>
      </span>
      <FontAwesomeIcon className={"info-icon"} icon={icon} />
    </div>
  );
};

export default SensitiveInfo;
