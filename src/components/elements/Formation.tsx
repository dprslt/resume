import React from "react";
import { FormationType } from "../../context/types/infos/Formation";
import I18nTextNode from "../framework/I18nTextNode";

type FormationProps = {
  data: FormationType;
};

const Formation: React.FunctionComponent<FormationProps> = ({ data }) => {
  return (
    <div className={"formation"}>
      <div className={"date"}>
        {data.date.to ? (
          <>
            <I18nTextNode text={{ fr: "De", en: "From" }} />
            <span className={"from"}>
              <I18nTextNode text={data.date.from} />
            </span>
            <I18nTextNode text={{ fr: "à", en: "to" }} />
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
