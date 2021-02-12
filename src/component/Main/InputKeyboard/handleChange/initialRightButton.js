import {setHandleSpeed} from "./setHandleSpeed.js";

export const initialRightButton=(e,setInitialTime,initialTime,firstButton,speed,currentLetter,setLetter,setSpeedType,dispatch)=> {
        if(firstButton!==" "){setHandleSpeed(setInitialTime,initialTime,speed,currentLetter, e, setSpeedType, dispatch)}
        setLetter(++currentLetter)
}