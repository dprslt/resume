import React from "react";

const Formation = ({data}) => {
    return <div className={'formation'}>
        <div className={'date'}>
            {
                data.date.from
                    ? <>De <span className={'from'}>{data.date.from}</span> à <span className={'to'}>{data.date.to}</span></>
                    : <><span className={'from'}>{data.date.to}</span></>
            }
        </div>
        <div className={'form-content'}>
            <h3 className={'title'}>{data.title}</h3>
            <p className={'secondary'}>{data.secondary}</p>
        </div>
    </div>
}

export default Formation
