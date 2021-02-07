import {setHandleNextText} from "./setHandleNextText.js";
import {initialRightButton} from "./initialRightButton.js";

const handleChange = (e,lastKeyType,setLastKeyType,speed, currentLetter, setFirstTime, setSpeed, firstTime, setLetter,
                      setAllText, alphabet, setCurrentError, currentError,setSpeedType,setErrorCount,setCurrentLetter) => {
    let lastButton=e.currentTarget.value.slice(-1);
    let firstButton=e.currentTarget.value.slice(0, 1);
    setCurrentLetter(firstButton)
    debugger
    switch (firstButton) {
        case lastButton: {
            initialRightButton(e,firstButton,lastKeyType,setLastKeyType,speed,currentLetter,setFirstTime,setLetter,firstTime,setSpeedType,setSpeed)
            if (e.currentTarget.nextElementSibling === null) {
                setHandleNextText(setFirstTime,alphabet,setAllText,setCurrentError,setLetter)
            }
            break
        }
        default: {
            if (e.currentTarget.nextElementSibling === null) {
                setHandleNextText(setFirstTime,alphabet,setAllText,setCurrentError,setLetter)
            }
        }
    }
}
export default handleChange