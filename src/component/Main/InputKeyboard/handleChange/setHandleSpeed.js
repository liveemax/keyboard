

export const setHandleSpeed=(lastKeyType,speed,currentLetter,e,firstTime,setSpeedType,setSpeed)=>{
    setSpeed(currentLetter / (e.timeStamp - firstTime))
    if(((e.timeStamp - lastKeyType)/1000)>10){
        setSpeedType(10)
    }
    else setSpeedType(((e.timeStamp - lastKeyType)/1000).toFixed(2))
}