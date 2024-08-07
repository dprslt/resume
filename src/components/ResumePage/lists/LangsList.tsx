import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import I18nTextNode from "../../I18nTextNode";
import { useTranslation } from "react-i18next";

type LangsListProps = {};

const LangsList: React.FunctionComponent<React.PropsWithChildren<LangsListProps>> = () => {
  const { t } = useTranslation();

  return (
    <div className={"langs col-section"}>
      <h2 className={"col-title"}>{t("header_langs")}</h2>
      <div className={"lang"}>
        <h3>
          <FontAwesomeIcon
            fixedWidth={true}
            className={"icon"}
            icon={faGlobeEurope}
          />
          <span>
            <I18nTextNode
              text={{
                fr: "Anglais niveau B2",
                en: "English : Fluent",
              }}
            />
          </span>
        </h3>
        <p className={"secondary"}>TOEIC (2017) : 935</p>
      </div>
      <div className={"lang"}>
        <h3>
          <FontAwesomeIcon
            fixedWidth={true}
            className={"icon"}
            icon={faGlobeEurope}
          />
          <span>
            <I18nTextNode
              text={{
                fr: "Espagnol niveau A2",
                en: "Spanish : Basics",
              }}
            />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default LangsList;
