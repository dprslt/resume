import React from "react";
import { useTranslation } from "react-i18next";
import { FormationType } from "../../../types/resume-infos/Formation";
import I18nTextNode from "../../I18nTextNode";

type FormationProps = {
  data: FormationType;
};

const Formation: React.FunctionComponent<FormationProps> = ({ data }) => {
  const { t } = useTranslation(); 

  return (
    <div className={"formation"}>
      <div className={"date"}>
        {data.date.to ? (
          <>
            {t('from')}
            {" "}
            <span className={"from"}>
              <I18nTextNode text={data.date.from} />
            </span>
            {t('to')}{" "}
            <span className={"to"}>
              <I18nTextNode text={data.date.to} />
            </span>
          </>
        ) : (
          <>
            <span className={"from"}>
              <I18nTextNode text={data.date.from} />
            </span>
          </>
        )}
      </div>
      <div className={"form-content"}>
        <h3 className={"title"}>
          <I18nTextNode text={data.title} />
        </h3>
        <p className={"secondary"}>
          <I18nTextNode text={data.secondary} />
        </p>
      </div>
    </div>
  );
};

export default Formation;
