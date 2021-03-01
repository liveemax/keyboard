

export const setHandleSpeed=(firstButton:string,setInitialTime:(time:number)=>void,initialTime:number,setSpeedType:(speed:string)=>void,dispatch:any)=>{
    let time=Date.now()
    let ourTime=(time-initialTime)/1000;
    setInitialTime(time)
    dispatch({type:"SET_SPEED",time:time})
    if(firstButton!==" ") {
        if (ourTime > 3) {
            setSpeedType("3")
        }
        else {
            setSpeedType((ourTime).toFixed(2))
        }
    }
}
