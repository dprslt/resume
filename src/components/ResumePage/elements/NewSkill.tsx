import React from "react";
import { useTranslation } from "react-i18next";
import { SkillType } from "../../../types/resume-infos/Skill";
import I18nTextNode from "../../I18nTextNode";

type SkillProps = {
    skill: SkillType;
};

const NewSkill: React.FunctionComponent<React.PropsWithChildren<SkillProps>> = ({ skill }) => {
    const { t } = useTranslation();

    return (
        <div className={"skill new-skill"}>
            <div className={"meta"}>
                <h4 className={"title"}>
                    <I18nTextNode text={skill.name} />
                </h4>
                <span className={"xp"}>
                    {skill.xp} {skill.xp === 1 ? t("exp_year") : t("exp_years")}
                </span>
            </div>
            {/* <div className={"progress-bar-container"}>
                <div
                    className={"progress-bar"}
                    style={{ width: `${skill.percentage}%` }}
                ></div>
            </div> */}
        </div>
    );
};

export default NewSkill;
