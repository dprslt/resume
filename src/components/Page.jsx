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
import IntTextNode from "./InternationalTextNode";

const SectionTitle = ({title, icon}) => {
    return <div className={'sec-header'}>
        <FontAwesomeIcon className={'sec-icon'} icon={icon}/>
        <h2><IntTextNode text={title}/></h2>
    </div>
}

const Section = ({title, icon, children, className}) => {
    return <div className={`section ${className}`}>
        <SectionTitle title={title} icon={icon}/>
        <div className={'sec-content'}>{children}</div>
    </div>
}


const contentHeader = {
    title: {
        fr: "Ingénieur FullStack",
        en: "FullStack Engineer"
    }
}

const headersTransl = {
    exp: {
        fr: "Expériences",
        en: "Experiences"
    },
    form: {
        fr: "Formations et certifications",
        en: "Education & certificates"
    },
    skills: {
        fr: "Mes compétences",
        en: "My skills"
    },
    projects: {
        fr: "Mes projets",
        en: "My projects"
    }
}


export default (props) => {

    return <div className={'page'}>
        <header>
            <div className={"header-bg"}>
                <div className={'header-content'}>
                    <div className={'name'}>
                        <h1>Théo DEPRESLE</h1>
                        <h2><IntTextNode text={contentHeader.title}/></h2>
                    </div>
                    <PersonnalData/>
                </div>
            </div>
            <Biseau height={3} color={'#2b333c'} right={true} base={1}/>
        </header>


        <div className={'content'}>

            <div className={'row row-exp'} style={{flex: 1}}>
                <div className={'main'}>
                    <Section className={"experiences"} title={headersTransl.exp} icon={faGlobeEurope}>
                        {experiences.map(e => <Experience data={e} key={e.title.fr || e.title}/>)}
                    </Section>
                    <Section className={"formations"} title={headersTransl.form} icon={faUniversity}>
                        {formations.map(e => <Formation data={e} key={e.title.fr || e.title}/>)}

                    </Section>
                    <div className={'logos'}>
                        <img src={imag} alt={"Logo Grenoble INP - ENSIMAG"} height={70}/>
                        <img src={aws} alt={"AWS - Solution Architect - Associate"} height={40}/>
                    </div>
                </div>

                <div className={'col'}>

                    <div className={'skills col-section'}>
                        <h2 className={'col-title'}><IntTextNode text={headersTransl.skills}/></h2>
                        {skills.map(s => <Skill skill={s} key={s.name}/>)}
                    </div>


                    <div className={'projets col-section'}>
                        <h2 className={'col-title'}><IntTextNode text={headersTransl.projects}/></h2>
                        {projets.map(p => <Projet projet={p} key={p.title.fr || p.title}/>)}
                    </div>

                    <div className={'col-section'}>
                        <h2 className={'col-title'}><IntTextNode text={{fr: "Ma", en: "My"}}/> <FontAwesomeIcon icon={faHeart} className={'red'}/> stack</h2>
                        <div className={'logo-line'}>
                            <img src={react} className={'logo-bubble'} alt={'React JS'} height={45}/>
                            <img src={node} className={'logo-bubble'} alt={'NodeJS'} height={45}/>
                            <img src={docker} className={'logo-bubble'} alt={'Docker'} height={45}/>
                        </div>
                        <div className={'logo-line'}>
                            <img src={mongo} className={''} alt={'Mongo DB'} height={40}/>
                        </div>
                    </div>

                    <div className={'langs col-section'}>
                        <div className={'lang'}>
                            <h3>
                                <FontAwesomeIcon fixedWidth={true} className={"icon"} icon={faGlobeEurope}/>
                                <span><IntTextNode text={{
                                    fr: "Anglais niveau B2",
                                    en: "English : Fluent"
                                }}/></span>
                            </h3>
                            <p className={'secondary'}>TOEIC (2017) : 935</p>
                        </div>
                        <div className={'lang'}>
                            <h3>
                                <FontAwesomeIcon fixedWidth={true} className={"icon"} icon={faGlobeEurope}/>
                                <span><IntTextNode text={{
                                    fr: "Espagnol niveau A2",
                                    en: "Spanish : Basics"
                                }}/></span>
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
