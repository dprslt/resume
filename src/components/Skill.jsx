import React from 'react'

const Skill = ({skill}) => {
    return <div className={'skill'}>
        <div className={'meta'}>
            <h4 className={'title'}>{skill.name}</h4>
            <span className={"xp"}>{skill.xp} {skill.xp === 1 ? 'an' : 'ans'}</span>
        </div>
        <div className={'progress-bar-container'}>
            <div className={'progress-bar'} style={{width: `${skill.percentage}%`}}></div>
        </div>
    </div>
}

export default Skill
