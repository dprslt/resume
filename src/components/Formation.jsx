import React from "react";
import IntTextNode from "./InternationalTextNode";

const Formation = ({data}) => {
    return <div className={'formation'}>
        <div className={'date'}>
            {
                data.date.from
                    ? <><IntTextNode text={{fr: "De", en: "From"}}/> <span className={'from'}><IntTextNode text={data.date.from}/></span> <IntTextNode text={{fr: "à", en: "to"}}/> <span className={'to'}><IntTextNode text={data.date.to}/></span></>
                    : <><span className={'from'}><IntTextNode text={data.date.to}/></span></>
            }
        </div>
        <div className={'form-content'}>
            <h3 className={'title'}><IntTextNode text={data.title}/></h3>
            <p className={'secondary'}><IntTextNode text={data.secondary}/></p>
        </div>
    </div>
}

export default Formation
