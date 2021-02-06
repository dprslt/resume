import React from "react";
import { SideProjectType } from "../../../context/types/resume-infos/SideProject";
import { useI18nText } from "../../../hooks/useI18nText";
import I18nTextNode from "../../I18nTextNode";

type SideProjectProps = {
  project: SideProjectType;
};

const SideProject: React.FunctionComponent<SideProjectProps> = ({
  project,
}) => {
  const localeTitle = useI18nText(project.title);
  return (
    <a className={"projet"} href={project.link}>
      <div className={"images"}>
        {project.images.map((img, i) => (
          <img className={"project-img"} alt={localeTitle} key={i} src={img} />
        ))}
      </div>
      <div className={"proj-desc"}>
        <h3 className={"proj-title"}>
          <I18nTextNode text={project.title} />
        </h3>
        <p className={"secondary"}>
          <I18nTextNode text={project.shortDescription} />
        </p>
      </div>
    </a>
  );
};

export default SideProject;
