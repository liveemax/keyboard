import getKeyComplexity from "./function/getKeyComplexity.js";
import {getAlphabet} from "./function/getAlphabet.js";
import getCurrentIndex from "./function/getCurrentIndex.js";
import {getNewText} from "./function/getNewText.js";
import {setSpeedInArray} from "./function/setSpeedInArray.js";
import {setStateTypeScore} from "./function/setStateTypeScore.js";
import {setTypeCounterInArray} from "./function/setTypeCounterInArray.js";

const SELECT_LANGUAGE = "SELECT_LANGUAGE";
const SELECT_KEYBOARD = "SELECT_KEYBOARD";
const SELECT_SLIDER_VALUE = "SELECT_SLIDER_VALUE";
const SELECT_SPEED_TYPE = "SELECT_SPEED_TYPE";
const SELECT_ERROR_COUNT = "SELECT_ERROR_COUNT";
const SELECT_VALUE_DISABLE = "SELECT_VALUE_DISABLE";
const SELECT_INITIAL_TIME = "SELECT_INITIAL_TIME";
const SELECT_CURRENT_LETTER = "SELECT_CURRENT_LETTER";
const SELECT_STATE_TYPE_SCORE = "SELECT_STATE_TYPE_SCORE";
const SET_ALL_TEXT="SET_ALL_TEXT"

let alphabet = JSON.parse(JSON.stringify(getAlphabet()));
const initialState = {
    ...alphabet,
    currentLang: ["ENGLISH"],
    isKeyboardHidden: false,
    sliderValue: [0, 100],
    currentLetter: " ",
    allText:["Nice Result"],
    howMachSpeedKey:30,
    sortedNotDisableScoreAlphabet:""
}

const headerReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    let currentIndex=0
    let currentAlphabet=stateCopy.allLang[state.currentLang].alphabet
    switch (action.type) {
        case SELECT_INITIAL_TIME:
            return {
                ...state,
                initialTime:action.initialTime
            }
        case SET_ALL_TEXT:
            let newText=[]
            let newDate=Date.now()
            newText.push(action.newText)
            return {
                ...stateCopy,
                allText:newText,
                moreBadKey:action.moreBadKey,
                initialTime:newDate,
                sortedNotDisableScoreAlphabet:action.arrNotDisableLetter
            }
        case SELECT_STATE_TYPE_SCORE:
            stateCopy.allLang[state.currentLang].alphabet=action.newTypeScore
            return {
                ...stateCopy
            }
        case SELECT_SPEED_TYPE:
            currentIndex=getCurrentIndex(currentAlphabet,stateCopy.currentLetter)
            setSpeedInArray(currentAlphabet,currentIndex,action,state.howMachSpeedKey)
            setTypeCounterInArray(currentAlphabet,currentIndex)
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
            currentIndex=getCurrentIndex(currentAlphabet,stateCopy.currentLetter)
            currentAlphabet[currentIndex].errorCount=currentAlphabet[currentIndex].errorCount+1

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
            currentAlphabet = getKeyComplexity(currentAlphabet, action)
            return {
                ...stateCopy,
                sliderValue: action.valueSlider
            }
        case SELECT_VALUE_DISABLE:
            let buttonDisable = currentAlphabet[action.valueDisable].disable;
            currentAlphabet[action.valueDisable].disable = !buttonDisable;
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
export const selectAllTextAC=(newText,moreBadKey,arrNotDisableLetter)=>({type:SET_ALL_TEXT,newText,moreBadKey,arrNotDisableLetter})
export const selectStateTypeScoreAC=(newTypeScore)=>({type:SELECT_STATE_TYPE_SCORE,newTypeScore})
export const selectInitialTime=(initialTime)=>({type:SELECT_INITIAL_TIME,initialTime})



export const setAllText=  (action)=>{
    return (dispatch)=>  {
        let newTypeScore=setStateTypeScore(action)
        dispatch(selectStateTypeScoreAC(newTypeScore))
        let {newText,moreBadKey,arrNotDisableLetter}=(getNewText(action))
        dispatch(selectAllTextAC(newText,moreBadKey,arrNotDisableLetter))
    }
}

export const setSliderValue = (valueSlider) => ({type: SELECT_SLIDER_VALUE, valueSlider})
export const setValueDisable = (valueDisable) => ({type: SELECT_VALUE_DISABLE, valueDisable})

export const setSpeedType = (speedType) => {
    return(dispatch)=>{(dispatch(selectSpeedTypeAC(speedType)))}
}

export const setInitialTime = (initialTime) => {
    return(dispatch)=>{(dispatch(selectInitialTime(initialTime)))}
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
