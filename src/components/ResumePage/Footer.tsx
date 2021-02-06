import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bezel from "./design/Bezel";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import I18nTextNode from "../I18nTextNode";
import { personalData } from "../../context/theo/personalData";

type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer>
      <Bezel height={3} color={"#2b333c"} top={true} right={false} base={1} />
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
