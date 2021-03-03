import {setHandleNextText} from "./setHandleNextText";
import {initialRightButton} from "./initialRightButton";
import {setHandleError} from "./setHandleError";

type root={
    e: object,
    allText: any,
    setInput: (input:string)=>void,
    setInitialTime: (initialTime: number) => void,
    initialTime: number,
    currentLetter: number,
    dispatch: any,
    setLetter:(letter:number)=>void
    setAllText:(alphabet: object) => void,
    alphabet:object,
    setCurrentError:(currentError:number)=>void,
    currentError:number
    setSpeedType:(speedType: string) => void,
    setErrorCount:() => void,
    setCurrentLetter:(buttonToKeyboard: string) => void
}

const handleChange= ({e,allText,alphabet,currentError,currentLetter,dispatch,initialTime,setAllText,setCurrentError,setCurrentLetter,setErrorCount
                         ,setInitialTime,setInput,setLetter,setSpeedType,...args}:root) :void=> {
    let input = (document as any).getElementById("input").value
    let div = (document as any).getElementById(`${currentLetter}`).innerText
    if (div === "") {
        div = " "
    }
    if (currentLetter === allText[0].split("").length - 1 && input === div) {
        setCurrentLetter(input)
        initialRightButton(e, setInitialTime, initialTime, input, currentLetter, setLetter, setSpeedType, dispatch)
        setHandleNextText(alphabet, setAllText, setCurrentError, setLetter)
        return undefined
    } else if (input === "") {
        return undefined
    } else if (input === div) {
        setCurrentLetter(input)
        initialRightButton(e, setInitialTime, initialTime, input, currentLetter, setLetter, setSpeedType, dispatch)
    } else {
        setCurrentLetter(div)
        setHandleError(div, setCurrentError, currentError, setErrorCount)
    }
    setInput("")
}
export default handleChange