import {setHandleSpeed} from "./setHandleSpeed.js";

export const initialRightButton=(e,firstButton,lastKeyType,setLastKeyType,speed,currentLetter,setFirstTime,setLetter,firstTime,setSpeedType,setSpeed)=> {
    if (currentLetter === 0) {
        setFirstTime(e.timeStamp)
        setLastKeyType((e.timeStamp))
    }
    else {
        if(firstButton!==" "){setHandleSpeed(lastKeyType,speed,currentLetter, e, firstTime, setSpeedType, setSpeed)}
        setLastKeyType((e.timeStamp))
    }
    setLetter(++currentLetter)
}