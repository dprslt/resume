import React, {useState} from "react";
import {faCar, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IntTextNode from "./InternationalTextNode";

const Info = ({children, icon}) => {
    return <div className={'info'}>
        <span className={'info-value'}>{children}</span>
        <FontAwesomeIcon className={'info-icon'} icon={icon}/>
    </div>
}

const SensitiveInfo = ({data, icon, clear}) => {
    const regex = /[a-zA-Z0-9]/gi;
    let text = data.text.replace(regex,' - ')
    if(clear){
        text = data.text
    }
    return <div className={'info'}>
        <span className={'info-value'}><a href={clear ? data.target : '/#'}>{text}</a></span>
        <FontAwesomeIcon className={'info-icon'} icon={icon}/>
    </div>
}

const data = {
    phone :{
        target: 'phone://+33629325778',
        text: '+33 6 29 32 57 78'
    }, mail : {
        target: 'mailto://theo.depresle@gmail.com',
        text: 'theo.depresle@gmail.com'
    },
    age: {
        fr: "23 ans",
        en: "23 years old"
    },
    car: {
        fr: "Permis de conduire, véhicule personnel",
        en: "Driver license, personnal car"
    }

}

const contextText = {
    title: {
        fr: "Contactez moi !",
        en: "Get in touch !"
    },
    p1: {
        fr: "Ces informations sont masquées pour éviter d'être récupérées par des robots.",
        en: "Theses data are hidden to avoid automatic scrapping"
    },
    p2: {
        fr: "Cliquez ici pour les afficher.",
        en: "Click here to display them."
    }
}

// this exported funct will be used to clear the data for printing
export let globalSetClear = undefined
window.onbeforeprint = () => {
    globalSetClear(true)
}


const PersonnalData = () => {

    const [clear, setClear] = useState(false)
    globalSetClear = setClear
    return <div className={'infos'}>
        <SensitiveInfo data={data.mail} icon={faEnvelope} clear={clear}/>
        {/*<Info icon={faBirthdayCake}><IntTextNode text={data.age}/></Info>*/}
        <SensitiveInfo data={data.phone} icon={faPhone} clear={clear}/>
        <Info icon={faCar}><IntTextNode text={data.car}/></Info>
        {!clear &&
        <div className={'placeholder'} onClick={() => setClear(true)}>
            <h3><IntTextNode text={contextText.title}/></h3>
            <p><IntTextNode text={contextText.p1}/></p>
            <p><IntTextNode text={contextText.p2}/></p>
        </div>
        }
    </div>
}

export default PersonnalData
