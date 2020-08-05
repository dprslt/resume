import React, {createContext, useState} from 'react';
import './App.scss';
import Page from "./components/Page";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlagIcon from "./utils/FlagIcon";
import IntTextNode from "./components/InternationalTextNode";

export const IntContext = createContext({lang: "fr"})


function App() {

    const [int, setLang] = useState({lang: "fr"})


    return (
        <div className="App">

            <IntContext.Provider value={int}>


                <div className={'int'}>
                    <div className={`lang-btn ${int.lang === 'fr' ? "selected" : ""}`} onClick={() => setLang((prevState) => ({...prevState, 'lang': 'fr'})) }><FlagIcon code={'fr'} /></div>
                    <div className={`lang-btn ${int.lang === 'en' ? "selected" : ""}`} onClick={() => setLang((prevState) => ({...prevState, 'lang': 'en'})) }><FlagIcon code={'us'} /></div>
                </div>


                <Page/>

                <div className={'notes'}>
                    <p>
                        <a href={"/#"} onClick={window.print}><IntTextNode text={{fr:'Imprimer', en: 'Print'}}/></a>
                        <IntTextNode text={{
                            fr: " cette page pour avoir un obtenir mon CV au format PDF.",
                            en: " this page to produce my resume as a PDF file."
                        }}/>
                    </p>

                    <p>Build with React, Sass and <FontAwesomeIcon icon={faHeart} className={'red'}/></p>

                    <p>&copy; 2020 Theo Depresle</p>
                </div>
            </IntContext.Provider>
        </div>
    );
}

export default App;
