import React, { FC } from "react";
import "./App.scss";
import Page from "./components/ResumePage/Page";
import { faHeart, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LangFlag from "./components/LangFlag";
import "./setupI18n.ts";
import { useTranslation } from "react-i18next";


import tily from "./static/tily.png";

const App: FC<React.PropsWithChildren<unknown>> = () => {
  const { t } = useTranslation();

  const url = new URL(window.location.href);
  const defaultLang = url.searchParams.get("lang");

  return (
    <div className="App">

      <div className="app-header">
        <div className="tily">
          <img src={tily} alt={"Logo Tily"} className={'tily-logo'} height={50} />
          <h2>TILY</h2>
        </div>

        <div className={"int"}>
          <LangFlag locale={"fr"} flagLocale={"fr"} />
          <LangFlag locale={"en"} flagLocale={"us"} />

          <button className="print-button" onClick={() => window.print()} >
            <FontAwesomeIcon icon={faPrint} />
          </button>
        </div>
      </div>

      <Page />

      <div className={"notes"}>
        <p>
          <a
            href={"/#"}
            onClick={(e) => {
              e.preventDefault();
              window.print();
            }}
          >
            {t('print')}
          </a>
          {' '}
          {t('print_this_page')}
        </p>
        <p>
          Build with React, Sass and{" "}
          <FontAwesomeIcon icon={faHeart} className={"red"} />
        </p>
        <p>&copy; {new Date().getFullYear()} Theo Depresle</p>
      </div>
    </div>
  );
};

export default App;
