import {setHandleSpeed} from "./setHandleSpeed";

export const initialRightButton=(e:object,setInitialTime:(initialTime:number)=>void,initialTime:number,firstButton:string,currentLetter:number,setLetter:(letter:number)=>void,setSpeedType:(speed:string)=>void,dispatch:any)=> {
        setHandleSpeed(firstButton,setInitialTime,initialTime, setSpeedType, dispatch)
        setLetter(++currentLetter)
}
