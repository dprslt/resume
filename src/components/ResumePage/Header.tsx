import React from "react";
import { personalData } from "../../context/theo/personalData";
import Bezel from "./design/Bezel";
import I18nTextNode from "../I18nTextNode";
import PersonnalData from "./PersonnalData";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className={"header-bg"}>
        <div className={"header-content"}>
          <div className={"name"}>
            <h1>
              {personalData.name} {personalData.surname}
            </h1>
            <h2>
              <I18nTextNode text={personalData.title} />
            </h2>
          </div>
          <PersonnalData />
        </div>
      </div>
      <Bezel height={3} color={'#2b333c'} right={true} base={1} />
    </header>
  );
};

export default Header;
