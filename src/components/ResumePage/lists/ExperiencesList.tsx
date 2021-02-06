import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { experiences } from "../../../context/data/theo/experiences";
import { useI18nTextOpener } from "../../../hooks/useI18nText";
import Experience from "../elements/Experience";
import Section from "../framework/Section";

type ExperiencesListProps = {};

const ExperiencesList: React.FunctionComponent<ExperiencesListProps> = () => {
  const i18nOpener = useI18nTextOpener();
  return (
    <Section
      className={"experiences"}
      title={{
        fr: "Expériences",
        en: "Experiences",
      }}
      icon={faGlobeEurope}
    >
      {experiences.map((e) =>
        e.displayLevel === "none" ? null : (
          <Experience data={e} key={i18nOpener(e.title)} />
        )
      )}
    </Section>
  );
};

export default ExperiencesList;
