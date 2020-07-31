import React, {useState} from "react";
import {faBirthdayCake, faCar, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        <Info icon={faBirthdayCake}>23 ans</Info>
        <SensitiveInfo data={data.phone} icon={faPhone} clear={clear}/>
        <Info icon={faCar}>Permis de conduire, véhicule personnel</Info>
        {!clear &&
        <div className={'placeholder'} onClick={() => setClear(true)}>

            <h3>Contactez moi !</h3>
            <p>Ces informations sont masquées pour éviter d'être récupérées par des robots.</p>
            <p>Cliquez ici pour les afficher.</p>
        </div>
        }
    </div>
}

export default PersonnalData
