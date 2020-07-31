import React from "react"

import './Page.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGlobeEurope, faHeart, faMotorcycle,
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
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import PersonnalData from "./PersonnalData";

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
                    <PersonnalData/>
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
                        {skills.map(s => <Skill skill={s} key={s.name}/>)}
                    </div>


                    <div className={'projets col-section'}>
                        <h2 className={'col-title'}>Mes projets</h2>
                        {projets.map(p => <Projet projet={p} key={p.title}/>)}
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
        </div>

        <footer>
            <Biseau height={3} color={'#2b333c'} top={true} base={1}/>
            <div className={'footer-container'}>
                <div className={'hobbies'}>
                    <FontAwesomeIcon className={'icon'} icon={faMotorcycle}/>
                    <p>Tech enthusiast, motard, photographe amateur et DIY</p>
                </div>
                <div className={'links'}>
                    <a className={'link'} href={'https://github.com/dprslt'} title={"GitHub dprslt"}><FontAwesomeIcon icon={faGithub}/></a>
                    <a className={'link'} href={'https://www.linkedin.com/in/dprslt/'} title={'My profile'}><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
        </footer>


    </div>
}
