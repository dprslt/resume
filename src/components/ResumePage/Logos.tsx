import React from "react";
import imag from "../../static/imag.png";
import aws from "../../static/aws.png";

type LogosProps = {};

const Logos: React.FunctionComponent<React.PropsWithChildren<LogosProps>> = () => {
  return (
    <div className={"logos"}>
      <img src={imag} alt={"Logo Grenoble INP - ENSIMAG"} height={70} />
      <img src={aws} alt={"AWS - Solution Architect - Associate"} height={40} />
    </div>
  );
};

export default Logos;
