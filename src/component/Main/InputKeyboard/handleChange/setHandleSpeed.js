

export const setHandleSpeed=(setInitialTime,initialTime,speed,currentLetter,e,setSpeedType,dispatch)=>{
    let time=Date.now()
    let ourTime=(time-initialTime)/1000;
    setInitialTime(time)
    dispatch({type:"SET_SPEED",time:time})
    if(ourTime>3){
        setSpeedType(3)
    }
    else {
        setSpeedType((ourTime).toFixed(2))}
}