import React, { createContext, FC, useState } from "react";
import "./App.scss";
import Page from "./components/Page";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlagIcon from "./utils/FlagIcon";
import I18nTextNode from "./components/I18nTextNode";
import { Lang } from "./context/types/i18n";

type IntContextType = { lang: Lang };
export const IntContext = createContext<IntContextType>({ lang: "fr" });

const App: FC = () => {
  const [int, setLang] = useState<IntContextType>({ lang: "fr" });

  return (
    <div className="App">
      <IntContext.Provider value={int}>
        <div className={"int"}>
          <div
            className={`lang-btn ${int.lang === "fr" ? "selected" : ""}`}
            onClick={() =>
              setLang((prevState) => ({ ...prevState, lang: "fr" }))
            }
          >
            <FlagIcon code={"fr"} />
          </div>
          <div
            className={`lang-btn ${int.lang === "en" ? "selected" : ""}`}
            onClick={() =>
              setLang((prevState) => ({ ...prevState, lang: "en" }))
            }
          >
            <FlagIcon code={"us"} />
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
              <I18nTextNode text={{ fr: "Imprimer", en: "Print" }} />
            </a>
            <I18nTextNode
              text={{
                fr: " cette page pour avoir un obtenir mon CV au format PDF.",
                en: " this page to produce my resume as a PDF file.",
              }}
            />
          </p>
          <p>
            Build with React, Sass and{" "}
            <FontAwesomeIcon icon={faHeart} className={"red"} />
          </p>
          <p>&copy; {new Date().getFullYear()} Theo Depresle</p>
        </div>
      </IntContext.Provider>
    </div>
  );
};

export default App;
