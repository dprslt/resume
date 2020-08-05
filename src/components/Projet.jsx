import React from "react";
import IntTextNode from "./InternationalTextNode";

const Projet = ({projet}) =>  {
    return <a className={'projet'} href={projet.link}>
        <div className={'images'}>
            {projet.images.map((img,i) => <img className={'project-img'} alt={projet.title} key={i} src={img}/> ) }
        </div>
        <div className={'proj-desc'}>
            <h3 className={'proj-title'}><IntTextNode text={projet.title}/></h3>
            <p className={'secondary'}><IntTextNode text={projet.shortDescription}/></p>
        </div>
    </a>
}


export default Projet
