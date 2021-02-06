import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bezel from "./design/Bezel";
import { PageContext } from "../context/PageContext";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import I18nTextNode from "./framework/I18nTextNode";
import { personalData } from "../context/data/theo/personalData";

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = () => {
  const context = useContext(PageContext);
  const { theme } = context.resume;

  return (
    <footer>
      <Bezel
        height={3}
        color={theme.footerColor}
        top={true}
        right={false}
        base={1}
      />
      <div className={"footer-container"}>
        <div className={"hobbies"}>
          <FontAwesomeIcon
            className={"icon"}
            icon={personalData.personalFooterIcon}
          />
          <p>
            <I18nTextNode text={personalData.personalFooterNote} />
          </p>
        </div>
        <div className={"links"}>
          <span className={"social-tag"}>{personalData.socialTag}</span>
          <a
            className={"link"}
            href={personalData.linkedIn}
            title={"My profile"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className={"link"} href={personalData.github} title={"GitHub"}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
