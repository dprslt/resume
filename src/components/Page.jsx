import React from "react"

import './Page.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBirthdayCake,
    faCar,
    faEnvelope,
    faGlobeEurope, faHeart,
    faPhone,
    faUniversity
} from '@fortawesome/free-solid-svg-icons'

import imag from '../static/imag.png'
import aws from '../static/aws.png'
import docker from '../static/docker.png'
import mongo from '../static/mongo.png'
import node from '../static/node.png'
import react from '../static/react.png'

import Experience from "./Experience";
import Formation from "./Formation";
import {experiences, formations, skills} from "../data/life";
import Biseau from "./Biseau";
import {projets} from "../data/projects";
import Projet from "./Projet";
import Skill from "./Skill";


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
            <div className={"header-bg"}>
                <div className={'header-content'}>
                    <div className={'name'}>
                        <h1>Théo DEPRESLE</h1>
                        <h2>Ingénieur Fullstack</h2>
                    </div>
                    <div className={'infos'}>
                        <Info icon={faEnvelope}><a
                            href={'mailto://theo.depresle@gmail.com'}>theo.depresle@gmail.com</a></Info>
                        <Info icon={faBirthdayCake}>23 ans</Info>
                        <Info icon={faPhone}><a href={'phone://+33629325778'}>+33 6 29 32 57 78</a></Info>
                        <Info icon={faCar}>Permis de conduire, véhicule personnel</Info>
                    </div>
                </div>
            </div>
            <Biseau height={3} color={'#2b333c'} right={true} base={1}/>
        </header>


        <div className={'content'}>

            <div className={'row row-exp'} style={{flex: 1}}>
                <div className={'main'}>
                    <Section className={"experiences"} title={"Expériences"} icon={faGlobeEurope}>
                        {experiences.map(e => <Experience data={e} key={e.title}/>)}
                    </Section>
                    <Section className={"formations"} title={"Formations et certifications"} icon={faUniversity}>
                        {formations.map(e => <Formation data={e} key={e.title}/>)}

                    </Section>
                    <div className={'logos'}>
                        <img src={imag} alt={"Logo Grenoble INP - ENSIMAG"} height={70}/>
                        <img src={aws} alt={"AWS - Solution Architect - Associate"} height={40}/>
                    </div>
                </div>

                <div className={'col'}>

                    <div className={'skills col-section'}>
                        <h2 className={'col-title'}>Mes Compétences</h2>
                        {skills.map(s => <Skill skill={s}/>)}
                    </div>


                    <div className={'projets col-section'}>
                        <h2 className={'col-title'}>Mes projets</h2>
                        {projets.map(p => <Projet projet={p}/>)}
                    </div>

                    <div className={'col-section'}>
                        <h2 className={'col-title'}>Ma <FontAwesomeIcon icon={faHeart} className={'red'}/> stack</h2>
                        <div className={'logo-line'}>
                            <img src={react} className={'logo-bubble'} alt={'React JS'} height={50}/>
                            <img src={node} className={'logo-bubble'} alt={'NodeJS'} height={50}/>
                            <img src={docker} className={'logo-bubble'} alt={'Docker'} height={50}/>
                        </div>
                        <div className={'logo-line'}>
                            <img src={mongo} className={''} alt={'Mongo DB'} height={40}/>
                        </div>
                    </div>

                    <div className={'langs col-section'}>
                        <div className={'lang'}>
                            <h3>
                                <FontAwesomeIcon fixedWidth={true} className={"icon"} icon={faGlobeEurope}/>
                                <span>Anglais niveau B2</span>
                            </h3>
                            <p className={'secondary'}>TOEIC (2017) : 935</p>
                        </div>
                        <div className={'lang'}>
                            <h3>
                                <FontAwesomeIcon fixedWidth={true} className={"icon"} icon={faGlobeEurope}/>
                                <span>Espagnol niveau A2</span>
                            </h3>
                        </div>
                    </div>

                </div>
            </div>


            {/*<div className={'row row-form'} style={{justifyItems: "flex-end"}}>*/}


            {/*    <div className={'main'}>*/}

            {/*        <Section className={"formations"} title={"Formations et certifications"} icon={faUniversity}>*/}
            {/*            {formations.map(e => <Formation data={e} key={e.title}/>)}*/}

            {/*        </Section>*/}
            {/*        <div className={'logos'}>*/}
            {/*            <img src={imag} alt={"Logo Grenoble INP - ENSIMAG"} height={70}/>*/}
            {/*            <img src={aws} alt={"AWS - Solution Architect - Associate"} height={40}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col'}>*/}
            {/*        /!*<Biseau height={7} color={'#bfdaf0'} top={true}/>*!/*/}

            {/*        /!*<div className={'col-section col-section-color'} >*!/*/}
            {/*        /!*    <h2>Mes technos</h2>*!/*/}
            {/*        /!*    <div className={'logo-line'}>*!/*/}
            {/*        /!*        <img src={react} className={'logo-bubble'} height={50}/>*!/*/}
            {/*        /!*        <img src={node} className={'logo-bubble'} height={50}/>*!/*/}
            {/*        /!*        <img src={docker} className={'logo-bubble'} height={50}/>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*    <div className={'logo-line'}>*!/*/}
            {/*        /!*      d  <img src={mongo} className={''} height={50}/>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        /!*<Biseau height={7} color={'#bfdaf0'} right={true}/>*!/*/}

            {/*        /!*<div className={'col-section'} style={{height: "3cm"}}>*!/*/}

            {/*        /!*</div>*!/*/}

            {/*        <Biseau height={7} color={'#bfdaf0'} top={true} right={true}/>*/}
            {/*        <div className={'projects col-section col-section-color'}>*/}
            {/*            <h2>Mes projets</h2>*/}

            {/*            {projets.map(p => <Projet projet={p}/>)}*/}
            {/*        </div>*/}
            {/*        <Biseau height={7} color={'#bfdaf0'} right={false}/>*/}

            {/*    </div>*/}
            {/*</div>*/}


        </div>


        <footer>
            <Biseau height={7} color={'#2b333c'} top={true} base={5}/>
        </footer>


    </div>
}
