import {setHandleNextText} from "./setHandleNextText.js";
import {initialRightButton} from "./initialRightButton.js";
import {setHandleError} from "./setHandleError.js";

const handleChange = (e,setInitialTime,initialTime,speed, currentLetter, dispatch , setLetter,
                      setAllText, alphabet, setCurrentError, currentError,setSpeedType,setErrorCount,setCurrentLetter) => {
    let lastButton=e.currentTarget.value.slice(-1);
    let firstButton=e.currentTarget.value.slice(0, 1);
    setCurrentLetter(firstButton)
    switch (firstButton) {
        case lastButton: {
            initialRightButton(e,setInitialTime,initialTime, firstButton,speed, currentLetter, setLetter,setSpeedType, dispatch)
            if (e.currentTarget.nextElementSibling === null) {
                setHandleNextText( alphabet, setAllText, setCurrentError, setLetter)
            }

            break
        }
        default: {
            if (firstButton!== " ") {
                setHandleError(setCurrentError,currentError,setErrorCount)

            }
            }
    }
}
export default handleChange