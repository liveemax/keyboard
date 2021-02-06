import Speed from "./Speed.jsx";
import React from "react";

const SmallStatistic=({speed,currentLetter,currentError,...props})=>{

    return(<>
        <span>Speed:{<Speed speed={speed} currentLetter={currentLetter}/>}</span>
        <span>Error:{currentError}</span>
            </>
)
}
export default SmallStatistic