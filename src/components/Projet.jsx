import React from "react";

const Projet = ({projet}) =>  {
    return <a className={'projet'} href={projet.link}>
        <div className={'images'}>
            {projet.images.map(i => <img className={'project-img'} src={i}/> ) }
        </div>
        <div className={'proj-desc'}>
            <h3 className={'proj-title'}>{projet.title}</h3>
            <p className={'secondary'}>{projet.shortDescription}</p>
        </div>
    </a>
}


export default Projet
