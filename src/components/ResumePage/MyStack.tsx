import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import docker from "../static/docker.png";
import mongo from "../static/mongo.png";
import node from "../static/node.png";
import react from "../static/react.png";
import I18nTextNode from "../I18nTextNode";

type MyStackProps = {};

const MyStack: React.FunctionComponent<MyStackProps> = () => {
  return (
    <div className={"col-section"}>
      <h2 className={"col-title"}>
        <I18nTextNode text={{ fr: "Ma", en: "My" }} />{" "}
        <FontAwesomeIcon icon={faHeart} className={"red"} /> stack
      </h2>
      <div className={"logo-line"}>
        <img
          src={react}
          className={"logo-bubble"}
          alt={"React JS"}
          height={45}
        />
        <img src={node} className={"logo-bubble"} alt={"NodeJS"} height={45} />
        <img
          src={docker}
          className={"logo-bubble"}
          alt={"Docker"}
          height={45}
        />
      </div>
      <div className={"logo-line"}>
        <img src={mongo} className={""} alt={"Mongo DB"} height={40} />
      </div>
    </div>
  );
};

export default MyStack;
