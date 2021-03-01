import React from "react";
import {speedAverage} from "./speedAverage";


type root={
    currentError:number,
    speed:Array<number>
}

const SmallStatistic:React.FC<root> = ({ currentError, speed, ...props}) => {
    return (<>
            <span>Speed:{speedAverage(speed)}</span>
            <span>Error:{currentError}</span>
        </>
    )
}

export default SmallStatistic