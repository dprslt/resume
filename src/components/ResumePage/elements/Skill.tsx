import React from "react";
import { SkillType } from "../../../context/types/infos/Skill";
import I18nTextNode from "../../I18nTextNode";

type SkillProps = {
  skill: SkillType;
};

const Skill: React.FunctionComponent<SkillProps> = ({ skill }) => {
  return (
    <div className={"skill"}>
      <div className={"meta"}>
        <h4 className={"title"}>
          <I18nTextNode text={skill.name} />
        </h4>
        <span className={"xp"}>
          {skill.xp}{" "}
          {skill.xp === 1 ? (
            <I18nTextNode text={{ fr: "an", en: "year" }} />
          ) : (
            <I18nTextNode text={{ fr: "ans", en: "years" }} />
          )}
        </span>
      </div>
      <div className={"progress-bar-container"}>
        <div
          className={"progress-bar"}
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
