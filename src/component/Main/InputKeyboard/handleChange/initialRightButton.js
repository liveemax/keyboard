import {setHandleSpeed} from "./setHandleSpeed.js";

export const initialRightButton=(e,setInitialTime,initialTime,firstButton,speed,currentLetter,setLetter,setSpeedType,dispatch)=> {
        setHandleSpeed(firstButton,setInitialTime,initialTime, setSpeedType, dispatch)
        setLetter(++currentLetter)
}
