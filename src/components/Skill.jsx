import React from 'react'
import IntTextNode from "./InternationalTextNode";

const Skill = ({skill}) => {
    return <div className={'skill'}>
        <div className={'meta'}>
            <h4 className={'title'}><IntTextNode text={skill.name}/></h4>
            <span className={"xp"}>{skill.xp} {skill.xp === 1 ? <IntTextNode text={{fr: 'an', en: 'year'}}/> : <IntTextNode text={{fr: 'ans', en: 'years'}}/>}</span>
        </div>
        <div className={'progress-bar-container'}>
            <div className={'progress-bar'} style={{width: `${skill.percentage}%`}}></div>
        </div>
    </div>
}

export default Skill
