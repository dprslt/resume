import React, { useEffect, useState } from "react";
import { faCar, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import I18nTextNode from "./I18nTextNode";
import { personalData } from "../context/data/theo/personalData";
import Info from "./ResumePage/elements/Info";
import SensitiveInfo from "./framework/SensitiveInfo";

const contextText = {
  title: {
    fr: "Contactez moi !",
    en: "Get in touch !",
  },
  p1: {
    fr:
      "Ces informations sont masquées pour éviter d'être récupérées par des robots.",
    en: "Theses data are hidden to avoid automatic scrapping",
  },
  p2: {
    fr: "Cliquez ici pour les afficher.",
    en: "Click here to display them.",
  },
};

const PersonnalData = () => {
  const [clear, setClear] = useState(false);
  useEffect(() => {
    window.onbeforeprint = () => {
      setClear(true);
    };
    return () => {
      window.onbeforeprint = null;
    };
  }, [setClear]);

  return (
    <div className={"infos"}>
      <SensitiveInfo data={personalData.mail} icon={faEnvelope} clear={clear} />
      {/*<Info icon={faBirthdayCake}><IntTextNode text={data.age}/></Info>*/}
      <SensitiveInfo data={personalData.phone} icon={faPhone} clear={clear} />
      <Info icon={faCar}>
        <I18nTextNode text={personalData.license} />
      </Info>
      {!clear && (
        <div className={"placeholder"} onClick={() => setClear(true)}>
          <h3>
            <I18nTextNode text={contextText.title} />
          </h3>
          <p>
            <I18nTextNode text={contextText.p1} />
          </p>
          <p>
            <I18nTextNode text={contextText.p2} />
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonnalData;
