import React from "react";
import { skills } from "../../../context/theo/skills";
import { useI18nTextOpener } from "../../../hooks/useI18nText";
import I18nTextNode from "../../I18nTextNode";
import Skill from "../elements/Skill";

type SkillsListProps = {};

const SkillsList: React.FunctionComponent<SkillsListProps> = () => {
  const i18nOpener = useI18nTextOpener();

  return (
    <div className={"skills col-section"}>
      <h2 className={"col-title"}>
        <I18nTextNode
          text={{
            fr: "Mes compétences",
            en: "My skills",
          }}
        />
      </h2>
      {skills.map((s) => (
        <Skill skill={s} key={i18nOpener(s.name)} />
      ))}
    </div>
  );
};

export default SkillsList;
