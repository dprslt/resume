import React from "react";
import { useTranslation } from "react-i18next";
import { skills } from "../../../data/theo/skills";
import { useI18nTextOpener } from "../../../hooks/useI18nText";
import Skill from "../elements/Skill";

type SkillsListProps = {};

const SkillsList: React.FunctionComponent<React.PropsWithChildren<SkillsListProps>> = () => {
  const { t } = useTranslation(); 
  const i18nOpener = useI18nTextOpener();

  return (
    <div className={"skills col-section"}>
      <h2 className={"col-title"}>{t("header_skills")}</h2>
      {skills.map((s) => (
        <Skill skill={s} key={i18nOpener(s.name)} />
      ))}
    </div>
  );
};

export default SkillsList;
