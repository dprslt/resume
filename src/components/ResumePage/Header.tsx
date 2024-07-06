import React from "react";
import { personalData } from "../../data/theo/personalData";
import Bezel from "./design/Bezel";
import I18nTextNode from "../I18nTextNode";
import PersonnalData from "./PersonnalData";

import qrCode from "../../static/qr-code.png";


const Header: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => {

  const url = new URL(window.location.href);
  const title = url.searchParams.get("title");

  return (
    <header>
      <div className={"header-bg"}>
        <div className={"header-content"}>

          <div className={"name"}>
            <h1>
              {personalData.name} {personalData.surname}
            </h1>
            <h2>
              {title ? title :
                <I18nTextNode text={personalData.title} />
              }
            </h2>
          </div>
          <PersonnalData />
        </div>
      </div>
      <Bezel height={3} color={'#002626'} right={true} base={1} />
    </header>
  );
};

export default Header;
