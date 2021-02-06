import React from "react";
import I18nTextNode from "../framework/I18nTextNode";
import { ExperienceType } from "../../context/types/infos/Experience";

type ExperienceProps = {
  data: ExperienceType;
};

const Experience: React.FunctionComponent<ExperienceProps> = ({ data }) => {
  return (
    <div className={"experience"}>
      <div className={"date"}>
        {data.date.to ? (
          <>
            <I18nTextNode text={{ fr: "De", en: "From" }} />{" "}
            <span className={"from"}>
              <I18nTextNode text={data.date.from} />
            </span>{" "}
            <I18nTextNode text={{ fr: "à", en: "to" }} />{" "}
            <span className={"to"}>
              <I18nTextNode text={data.date.to} />
            </span>
          </>
        ) : (
          <>
            <I18nTextNode text={{ fr: "Depuis", en: "Since" }} />{" "}
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
            <p className={"tech-title"}>Technologies :</p>
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
