import React from "react";

const Projet = ({projet}) =>  {
    return <div className={'projet'}>
        <div className={'images'}>
            {projet.images.map(i => <img className={'project-img'} src={i}/> ) }
        </div>
        <div className={'proj-desc'}>
            <h3 className={'proj-title'}>{projet.title}</h3>
            <p className={'secondary'}>{projet.shortDescription}</p>
        </div>
    </div>
}


export default Projet
