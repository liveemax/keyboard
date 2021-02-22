import {setHandleNextText} from "./setHandleNextText.js";
import {initialRightButton} from "./initialRightButton.js";
import {setHandleError} from "./setHandleError.js";

const handleChange = (e,allText,setInput,setInitialTime,initialTime,speed, currentLetter, dispatch , setLetter,
                      setAllText, alphabet, setCurrentError, currentError,setSpeedType,setErrorCount,setCurrentLetter) => {
    let input=document.getElementById("input").value
    let div=document.getElementById(`${currentLetter}`).innerText
    if(div==="") {
        div=" "
    }
    if(currentLetter===allText[0].split("").length-1&&input===div){
        setCurrentLetter(input)
        initialRightButton(e,setInitialTime,initialTime,input,speed, currentLetter, setLetter,setSpeedType, dispatch)
        setHandleNextText( alphabet, setAllText, setCurrentError, setLetter)
        return ""
    }
    else if(input===""){
        return ""
    }

    else if(input===div){
        setCurrentLetter(input)
        initialRightButton(e,setInitialTime,initialTime,input,speed, currentLetter, setLetter,setSpeedType, dispatch)
    }
    else{
        setCurrentLetter(div)
        setHandleError(setCurrentError,currentError,setErrorCount)
    }
    setInput("")
}
export default handleChange