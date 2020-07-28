import React from "react"

import './Page.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBirthdayCake,
    faCar,
    faEnvelope,
    faGlobeEurope,
    faPhone,
    faUniversity
} from '@fortawesome/free-solid-svg-icons'

import imag from '../static/imag.png'
import aws from '../static/aws.png'
import Experience from "./Experience";
import Formation from "./Formation";
import {experiences, formations} from "../data/life";
import Biseau from "./Biseau";


const Info = ({children, icon}) => {
    return <div className={'info'}>
        <span className={'info-value'}>{children}</span>
        <FontAwesomeIcon className={'info-icon'} icon={icon}/>
    </div>
}

const SectionTitle = ({title, icon}) => {
    return <div className={'sec-header'}>
        <FontAwesomeIcon className={'sec-icon'} icon={icon}/>
        <h2>{title}</h2>
    </div>
}

const Section = ({title, icon, children, className}) => {
    return <div className={`section ${className}`}>
        <SectionTitle title={title} icon={icon}/>
        <div className={'sec-content'}>{children}</div>
    </div>
}


export default (props) => {

    return <div className={'page'}>
        <header>
            <div className={'header-content'}>
                <div className={'name'}>
                    <h1>Théo DEPRESLE</h1>
                    <h2>React Techlead</h2>
                </div>
                <div className={'infos'}>
                    <Info icon={faEnvelope}><a
                        href={'mailto://theo.depresle@gmail.com'}>theo.depresle@gmail.com</a></Info>
                    <Info icon={faBirthdayCake}>23 ans</Info>
                    <Info icon={faPhone}><a href={'phone://+33629325778'}>+33 6 29 32 57 78</a></Info>
                    <Info icon={faCar}>Permis de conduire, véhicule personnel</Info>
                </div>
            </div>
        </header>
        <Biseau height={5} color={'#2b333c'} right={true} base={2}/>

        <div className={'content'}>

            <div className={'main'}>

                <Section className={"experiences"} title={"Expériences"} icon={faGlobeEurope}>
                    {experiences.map(e => <Experience data={e} key={e.title}/>)}
                </Section>
                <Section className={"formations"} title={"Formations et certifications"} icon={faUniversity}>
                    {formations.map(e => <Formation data={e} key={e.title}/>)}
                    <div className={'logos'}>
                        <img src={imag} alt={"Logo Grenoble INP - ENSIMAG"} height={70}/>
                        <img src={aws} alt={"AWS - Solution Architect - Associate"} height={40}/>
                    </div>
                </Section>
            </div>

            <div className={'col'}>

                <Biseau height={7} color={'#bfdaf0'} top={true} />
                <div className={'col-section col-section-color'} style={{height: "5cm"}}>
                    <h2>Mes technos</h2>
                </div>
                <Biseau height={7} color={'#bfdaf0'} right={true} />

                <div className={'col-section'} style={{height: "3cm"}}>

                </div>

                <Biseau height={7} color={'#bfdaf0'} top={true} />
                <div className={'col-section col-section-color'} style={{height: "13cm"}}>
                    <h2>Mes projets</h2>
                </div>
                <Biseau height={7} color={'#bfdaf0'} right={true} />

            </div>

        </div>


        <footer>
            <Biseau height={7} color={'#2b333c'} top={true} base={5}/>
        </footer>


    </div>
}
