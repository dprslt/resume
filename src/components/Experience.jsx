import React from "react";

const Experience = ({data}) => {
    return <div className={'experience'}>
        <div className={'header'}>
            <div className={'date'}>
                {
                    data.date.to
                        ? <>
                            <span className={'from'}>{data.date.from}</span>
                            <span className={'to'}>{data.date.to}</span>
                        </>
                        : <span className={'from'}>Depuis {data.date.from}</span>
                }
            </div>
            <h3 className={'title'}>{data.title}</h3>
        </div>
        {
            (data.company || data.place ) &&
            <p className={'secondary'}>{data.company}, {data.place}</p>
        }

        {
            data.activities &&
            <div className={'activities'}>
                {
                    data.activities.map(act => <div className={'activity'} key={act.title}>
                        <h4 className={'act-title'}>{act.title}</h4>
                        <p className={'act-description'}>{act.description}</p>
                    </div>)
                }
            </div>
        }

        {
            data.tech &&
            <div className={'technologies'}>
                <p className={'tech-title'}>Technologies :</p>
                <p className={'tech-list'}>{data.tech.join(', ')}</p>
            </div>
        }

    </div>
}

export default Experience
