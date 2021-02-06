import React from "react";
import { useTranslation } from "react-i18next";
import { ExperienceType } from "../../../types/resume-infos/Experience";
import I18nTextNode from "../../I18nTextNode";

type ExperienceProps = {
  data: ExperienceType;
};

const Experience: React.FunctionComponent<ExperienceProps> = ({ data }) => {
  const { t } = useTranslation(); 

  return (
    <div className={"experience"}>
      <div className={"date"}>
        {data.date.to ? (
          <>
            {t('from')}{" "}
            <span className={"from"}>
              <I18nTextNode text={data.date.from} />
            </span>{" "}
            {t('to')}{" "}
            <span className={"to"}>
              <I18nTextNode text={data.date.to} />
            </span>
          </>
        ) : (
          <>
            {t('since')}{" "}
            <span className={"from"}>
              <I18nTextNode text={data.date.from} />
            </span>
          </>
        )}
      </div>
      <div className={"header"}>
        <h3 className={"title"}>
          <I18nTextNode text={data.title} />
        </h3>
        {(data.company || data.place) && (
          <p className={"secondary"}>
            <span className={"company"}>
              <I18nTextNode text={data.company} />
            </span>
            , <I18nTextNode text={data.place} />
          </p>
        )}
      </div>

      <div className={"exp-content"}>
        {data.description && (
          <div className={"description"}>
            <I18nTextNode text={data.description} />
          </div>
        )}
        {data.activities && (
          <div className={"activities"}>
            {data.activities.map((activity) => (
              <div
                className={"activity"}
                key={
                  typeof activity.title === "string"
                    ? activity.title
                    : activity.title.fr
                }
              >
                <h4 className={"act-title"}>
                  <I18nTextNode text={activity.title} />
                </h4>
                <p className={"description"}>
                  <I18nTextNode text={activity.description} />
                </p>
              </div>
            ))}
          </div>
        )}

        {data.tech && data.displayLevel !== "compact" && (
          <div className={"technologies"}>
            <p className={"tech-title"}>{t('techs_headers')} :</p>
            <p className={"tech-list"}>
              <I18nTextNode text={data.tech.join(", ")} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
