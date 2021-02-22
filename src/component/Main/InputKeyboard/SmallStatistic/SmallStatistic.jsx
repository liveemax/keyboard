import React from "react";
import {speedAverage} from "./speedAverage.js";




const SmallStatistic = ({ currentError, speed, ...props}) => {
    return (<>
            <span>Speed:{speedAverage(speed)}</span>
            <span>Error:{currentError}</span>
        </>
    )
}

export default SmallStatistic