import React from "react";
import { projets } from "../../context/data/theo/projects";
import { useI18nTextOpener } from "../../hooks/useI18nText";
import SideProject from "../elements/SideProjet";
import I18nTextNode from "../framework/I18nTextNode";

type SideProjectsListProps = {};

const SideProjectsList: React.FunctionComponent<SideProjectsListProps> = () => {
  const i18nOpener = useI18nTextOpener();

  return (
    <div className={"projets col-section"}>
      <h2 className={"col-title"}>
        <I18nTextNode
          text={{
            fr: "Mes projets",
            en: "My projects",
          }}
        />
      </h2>
      {projets.map((p) => (
        <SideProject project={p} key={i18nOpener(p.title)} />
      ))}
    </div>
  );
};

export default SideProjectsList;
