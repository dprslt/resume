import React from "react";
import IntTextNode from "./InternationalTextNode";

const Experience = ({data}) => {
    return <div className={'experience'}>
        <div className={'date'}>
            {
                data.date.to
                    ? <><IntTextNode text={{fr: "De", en: "From"}}/> <span className={'from'}><IntTextNode text={data.date.from}/></span> <IntTextNode text={{fr: "à", en: "to"}}/> <span className={'to'}><IntTextNode text={data.date.to}/></span></>
                    : <><IntTextNode text={{fr: "Depuis", en: "Since"}}/> <span className={'from'}><IntTextNode text={data.date.from}/></span></>
            }
        </div>
        <div className={'header'}>
            <h3 className={'title'}><IntTextNode text={data.title}/></h3>
            {
                (data.company || data.place ) &&
                <p className={'secondary'}><span className={'company'}><IntTextNode text={data.company}/></span>, <IntTextNode text={data.place}/></p>
            }
        </div>

        <div className={'exp-content'}>

            {
                data.description &&
                <div className={'description'}>
                    <IntTextNode text={data.description}/>
                </div>
            }
            {
                data.activities &&
                <div className={'activities'}>
                    {
                        data.activities.map(act => <div className={'activity'} key={act.title.fr || act.title}>
                            <h4 className={'act-title'}><IntTextNode text={act.title}/></h4>
                            <p className={'description'}><IntTextNode text={act.description}/></p>
                        </div>)
                    }
                </div>
            }

            {
                data.tech &&
                <div className={'technologies'}>
                    <p className={'tech-title'}>Technologies :</p>
                    <p className={'tech-list'}><IntTextNode text={data.tech.join(', ')}/></p>
                </div>
            }
        </div>

    </div>
}

export default Experience
