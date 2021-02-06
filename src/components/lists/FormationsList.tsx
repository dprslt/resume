import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { formations } from "../../context/data/theo/formation";
import { useI18nTextOpener } from "../../hooks/useI18nText";
import Formation from "../elements/Formation";
import Section from "../framework/Section";

type FormationListProps = {};

const FormationList: React.FunctionComponent<FormationListProps> = () => {
  const i18nOpener = useI18nTextOpener();
  return (
    <Section
      className={"formations"}
      title={{
        fr: "Formations et certifications",
        en: "Education & certificates",
      }}
      icon={faUniversity}
    >
      {formations.map((e) => (
        <Formation data={e} key={i18nOpener(e.title)} />
      ))}
    </Section>
  );
};

export default FormationList;
