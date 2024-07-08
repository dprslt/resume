import React, { useEffect, useState } from "react";
import { faCar, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { personalData } from "../../data/theo/personalData";
import SensitiveInfo from "./elements/SensitiveInfo";
import I18nTextNode from "../I18nTextNode";
import Info from "./elements/Info";
import { useTranslation } from "react-i18next";


const PersonnalData = () => {

  const url = new URL(window.location.href);
  const showData = url.searchParams.get("showData");


  const [clear, setClear] = useState(showData ? true : false);
  useEffect(() => {
    window.onbeforeprint = () => {
      setClear(true);
    };
    return () => {
      window.onbeforeprint = null;
    };
  }, [setClear]);

  const { t } = useTranslation();

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
            {t('contact_me')}
          </h3>
          <p>
            {t('contact_part_1')}
          </p>
          <p>
            {t('contact_part_2')}
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonnalData;
