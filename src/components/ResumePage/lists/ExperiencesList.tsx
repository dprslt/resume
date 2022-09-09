import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { experiences } from "../../../data/theo/experiences";
import { useI18nTextOpener } from "../../../hooks/useI18nText";
import Experience from "../elements/Experience";
import Section from "../elements/Section";

type ExperiencesListProps = {};

const ExperiencesList: React.FunctionComponent<React.PropsWithChildren<ExperiencesListProps>> = () => {
  const i18nOpener = useI18nTextOpener();
  const { t } = useTranslation(); 

  return (
    <Section
      className={"experiences"}
      title={t("experiences")}
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
