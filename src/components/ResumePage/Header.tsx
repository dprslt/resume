import React, { useContext } from "react";
import { personalData } from "../context/data/theo/personalData";
import { PageContext } from "../context/PageContext";
import Bezel from "./ResumePage/design/Bezel";
import I18nTextNode from "./I18nTextNode";
import PersonnalData from "./PersonnalData";

const Header: React.FunctionComponent = () => {
  const context = useContext(PageContext);
  const { theme } = context.resume;

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
      <Bezel height={3} color={theme.headerColor} right={true} base={1} />
    </header>
  );
};

export default Header;
