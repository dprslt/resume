import React from "react";

const Biseau = ({height, color, top, right, base = 0}) => {

    let pos

    if (!top && !right) {
        pos = [0, 0, height, base];
    } else if (!top && right) {
        pos = [0, 0, base, height];
    } else if (top && !right) {
        pos = [height-base, 0, height, height];
    } else if (top && right) {
        pos = [0, height-base, height, height];
    }

    return <svg id="trapezoid" viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" width="100%">
        <path d={`M0,${pos[0]} L100,${pos[1]} L100,${pos[2]} L0,${pos[3]}`} fill={color}/>
    </svg>
}

export default Biseau
