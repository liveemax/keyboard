import Speed from "./Speed.jsx";
import React from "react";

const SmallStatistic=({currentError,speed,currentLetter,...props})=>{

    return(<>
        <span>Speed:{<Speed speed={speed} currentLetter={currentLetter}/>}</span>
        <span>Error:{currentError}</span>
            </>
)
}

export default SmallStatistic