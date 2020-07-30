import React from 'react';
import './App.scss';
import Page from "./components/Page";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
    return (
        <div className="App">
            <Page/>

            <div className={'notes'}>
                <p><a href={"#"} onClick={window.print}>Imprimer</a> cette page pour avoir un obtenir mon CV au format PDF.</p>

                <p>Build with React and <FontAwesomeIcon icon={faHeart} className={'red'}/></p>

                <p>&copy; 2020 Theo Depresle</p>
            </div>
        </div>
    );
}

export default App;
