import getKeyComplexity from "./function/getKeyComplexity.js";
import {getAlphabet} from "./function/getAlphabet.js";
import getCurrentIndex from "./function/getCurrentIndex.js";
import {getNewText} from "./function/getNewText.js";

const SELECT_LANGUAGE = "SELECT_LANGUAGE";
const SELECT_KEYBOARD = "SELECT_KEYBOARD";
const SELECT_SLIDER_VALUE = "SELECT_SLIDER_VALUE";
const SELECT_SPEED_TYPE = "SELECT_SPEED_TYPE";
const SELECT_ERROR_COUNT = "SELECT_ERROR_COUNT";
const SELECT_VALUE_DISABLE = "SELECT_VALUE_DISABLE";
const SELECT_CURRENT_LETTER = "SELECT_CURRENT_LETTER";
const SET_ALL_TEXT="SET_ALL_TEXT"

let alphabet = JSON.parse(JSON.stringify(getAlphabet()));
const initialState = {
    ...alphabet,
    currentLang: ["ENGLISH"],
    isKeyboardHidden: false,
    sliderValue: [0, 100],
    currentLetter: " ",
    allText:["Nice Result"]
}

const headerReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    let currentIndex=0
    switch (action.type) {
        case SET_ALL_TEXT:
            let newText=[]
            newText.push(action.newText)
            return {
                ...state,
                allText:newText

            }
        case SELECT_SPEED_TYPE:
            currentIndex=getCurrentIndex(stateCopy)
            stateCopy.allLang[state.currentLang].alphabet[currentIndex].speedType=action.speedType
            stateCopy.allLang[state.currentLang].alphabet[currentIndex].typeCounter=stateCopy.allLang[state.currentLang].alphabet[currentIndex].typeCounter+1;
            return {
                ...stateCopy,
            }
        case SELECT_CURRENT_LETTER:
            action.currentLetter=action.currentLetter.toUpperCase()
            return {
                ...state,
                currentLetter: action.currentLetter
            }
        case SELECT_ERROR_COUNT:
            currentIndex=getCurrentIndex(stateCopy)
            stateCopy.allLang[state.currentLang].alphabet[currentIndex].errorCount=stateCopy.allLang[state.currentLang].alphabet[currentIndex].errorCount+1

            return {
                ...stateCopy
            }
        case SELECT_LANGUAGE:
            return {
                ...state,
                currentLang: action.newLanguage
            }
        case SELECT_KEYBOARD:
            return {
                ...state,
                isKeyboardHidden: !(state.isKeyboardHidden),
            }
        case SELECT_SLIDER_VALUE:
            stateCopy = getKeyComplexity(stateCopy, action)
            return {
                ...stateCopy,
                sliderValue: action.valueSlider
            }
        case SELECT_VALUE_DISABLE:
            let buttonDisable = stateCopy.allLang[state.currentLang].alphabet[action.valueDisable].disable;
            stateCopy.allLang[state.currentLang].alphabet[action.valueDisable].disable = !buttonDisable;
            return {
                ...stateCopy
            }
        default:
            return {...state};
    }

}


export const selectLanguageAC = (newLanguage) => ({type: SELECT_LANGUAGE, newLanguage})
export const selectKeyboardAC = (isKeyboardHidden) => ({type: SELECT_KEYBOARD, isKeyboardHidden})
export const selectSpeedTypeAC = (speedType) => ({type: SELECT_SPEED_TYPE, speedType})
export const selectErrorCountAC = () => ({type: SELECT_ERROR_COUNT})
export const selectCurrentLetterAC = (currentLetter) => ({type: SELECT_CURRENT_LETTER, currentLetter})
export const selectAllTextAC=(newText)=>({type:SET_ALL_TEXT,newText})



export const setAllText=  (action)=>{
    return (dispatch)=>  {
        let newText=(getNewText(action))
        dispatch(selectAllTextAC(newText))
    }
}

export const setSliderValue = (valueSlider) => ({type: SELECT_SLIDER_VALUE, valueSlider})
export const setValueDisable = (valueDisable) => ({type: SELECT_VALUE_DISABLE, valueDisable})

export const setSpeedType = (speedType) => {
    return(dispatch)=>{(dispatch(selectSpeedTypeAC(speedType)))}
}
export const setErrorCount = () => {
    return(dispatch)=>{(dispatch(selectErrorCountAC()))}
}
export const setCurrentLetter = (typeCounter) => {
    return(dispatch)=>{(dispatch(selectCurrentLetterAC(typeCounter)))}
}
export const setIsKeyboardHidden = (isKeyboardHidden) => {
    return (dispatch)=>{dispatch(selectKeyboardAC(isKeyboardHidden))
    }
}
export const setNewLanguage = (newLanguage) => {
    return (dispatch) => {
        (dispatch(selectLanguageAC(newLanguage)))
    }
}
export default headerReducer;
