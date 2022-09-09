import React from "react";
import { projets } from "../../../data/theo/projects";
import { useI18nTextOpener } from "../../../hooks/useI18nText";
import SideProject from "../elements/SideProjet";
import { useTranslation } from "react-i18next";

type SideProjectsListProps = {};

const SideProjectsList: React.FunctionComponent<React.PropsWithChildren<SideProjectsListProps>> = () => {
  const { t } = useTranslation(); 
  const i18nOpener = useI18nTextOpener();

  return (
    <div className={"projets col-section"}>
      <h2 className={"col-title"}>{t("header_side_projets")}</h2>
      {projets.map((p) => (
        <SideProject project={p} key={i18nOpener(p.title)} />
      ))}
    </div>
  );
};

export default SideProjectsList;
