import React, { FC } from "react";
import "./App.scss";
import Page from "./components/ResumePage/Page";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LangFlag from "./components/LangFlag";
import "./setupI18n.ts";
import { useTranslation } from "react-i18next";


const App: FC<React.PropsWithChildren<unknown>> = () => {
  const { t } = useTranslation(); 

  return (
    <div className="App">
        <div className={"int"}>
          <LangFlag locale={"fr"} flagLocale={"fr"} />
          <LangFlag locale={"en"} flagLocale={"us"} />
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
