import React from "react";

const Experience = ({data}) => {
    return <div className={'experience'}>
        <div className={'date'}>
            {
                data.date.to
                    ? <>De <span className={'from'}>{data.date.from}</span> à <span className={'to'}>{data.date.to}</span></>
                    : <>Depuis <span className={'from'}>{data.date.from}</span></>
            }
        </div>
        <div className={'header'}>
            <h3 className={'title'}>{data.title}</h3>
            {
                (data.company || data.place ) &&
                <p className={'secondary'}>{data.company}, {data.place}</p>
            }
        </div>

        <div className={'exp-content'}>

            {
                data.description &&
                <div className={'description'}>
                    {data.description}
                </div>
            }
            {
                data.activities &&
                <div className={'activities'}>
                    {
                        data.activities.map(act => <div className={'activity'} key={act.title}>
                            <h4 className={'act-title'}>{act.title}</h4>
                            <p className={'description'}>{act.description}</p>
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

    </div>
}

export default Experience
