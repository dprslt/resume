import React from "react";

type SkillsListProps = {};

const SkillsList: React.FunctionComponent<SkillsListProps> = () => {
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
        <Skill skill={s} key={s.name} />
      ))}
    </div>
  );
};

export default SkillsList;
