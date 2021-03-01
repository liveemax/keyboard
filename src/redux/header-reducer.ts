import {getAlphabet} from "./function/getAlphabet";
import {getCurrentIndex} from "./function/getCurrentIndex";
import {getNewText} from "./function/getNewText";
import {setSpeedInArray} from "./function/setSpeedInArray";
import {setStateTypeScore} from "./function/setStateTypeScore";
import {setTypeCounterInArray} from "./function/setTypeCounterInArray";
import {BaseThunkType, InferActionsTypes} from "./store";
import {getKeyComplexity} from "./function/getKeyComplexity";

type InitialState = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType>
export type Alphabet=typeof alphabet


let alphabet = JSON.parse(JSON.stringify(getAlphabet()))
const initialState = {
    ...alphabet,
    currentLang: ["ENGLISH"],
    isKeyboardHidden: false,
    sliderValue: [0, 100],
    currentLetter: " ",
    allText: [""],
    howMachSpeedKey: 30,
    sortedNotDisableScoreAlphabet: "" as string|Alphabet,
    buttonToKeyboard: "",
    initialTime: 0
}

const headerReducer = (state = initialState, action: ActionType): InitialState => {
    let stateCopy: typeof initialState = JSON.parse(JSON.stringify(state));
    let currentIndex: string
    let currentAlphabet: any = stateCopy.allLang[state.currentLang].alphabet
    switch (action.type) {
        case 'SELECT_INITIAL_TIME':
            return {
                ...state,
                initialTime: action.initialTime
            }

        case 'SELECT_BUTTON_TO_KEYBOARD':
            return {
                ...state,
                buttonToKeyboard: action.buttonToKeyboard
            }
        case 'SET_ALL_TEXT':
            let newDate = Date.now()
            return {
                ...stateCopy,
                allText: action.newText,
                initialTime: newDate,
                sortedNotDisableScoreAlphabet: action.arrNotDisableLetter
            }
        case 'SELECT_STATE_TYPE_SCORE':
            stateCopy.allLang[state.currentLang].alphabet = action.newTypeScore
            return {
                ...stateCopy
            }
        case 'SELECT_SPEED_TYPE':
            currentIndex = getCurrentIndex(currentAlphabet, stateCopy.currentLetter)
            setSpeedInArray(currentAlphabet, currentIndex, action.speedType, state.howMachSpeedKey)
            setTypeCounterInArray(currentAlphabet, currentIndex)
            return {
                ...stateCopy,
            }
        case 'SELECT_CURRENT_LETTER':
            return {
                ...state,
                currentLetter: action.currentLetter.toUpperCase()
            }
        case 'SELECT_ERROR_COUNT':
            debugger
            currentIndex = getCurrentIndex(currentAlphabet, stateCopy.currentLetter)
            currentAlphabet[currentIndex].errorCount = currentAlphabet[currentIndex].errorCount + 1

            return {
                ...stateCopy
            }
        case 'SELECT_LANGUAGE':
            return {
                ...state,
                currentLang: action.newLanguage
            }
        case 'SELECT_KEYBOARD':
            return {
                ...state,
                isKeyboardHidden: !(state.isKeyboardHidden),
            }
        case 'SELECT_SLIDER_VALUE':
            currentAlphabet = getKeyComplexity(currentAlphabet, action.sliderValue)
            return {
                ...stateCopy,
                sliderValue: action.sliderValue
            }
        case 'SELECT_VALUE_DISABLE':
            let buttonDisable = currentAlphabet[action.valueDisable].disable;
            currentAlphabet[action.valueDisable].disable = !buttonDisable;
            return {
                ...stateCopy
            }
        default:
            return {...state};
    }

}

export const actions = {
    selectLanguageAC: (newLanguage: string[]) => ({type: 'SELECT_LANGUAGE', newLanguage} as const),
    selectKeyboardAC: (isKeyboardHidden: boolean) => ({type: 'SELECT_KEYBOARD', isKeyboardHidden} as const),
    selectSpeedTypeAC: (speedType: string) => ({type: 'SELECT_SPEED_TYPE', speedType} as const),
    selectErrorCountAC: () => ({type: 'SELECT_ERROR_COUNT'} as const),
    selectCurrentLetterAC: (currentLetter: string) => ({type: 'SELECT_CURRENT_LETTER', currentLetter} as const),
    selectAllTextAC: (newText: Array<string>, arrNotDisableLetter: Alphabet) => ({
        type: 'SET_ALL_TEXT',
        newText,
        arrNotDisableLetter
    } as const),
    selectStateTypeScoreAC: (newTypeScore:Alphabet) => ({type: 'SELECT_STATE_TYPE_SCORE', newTypeScore} as const),
    selectInitialTime: (initialTime: number) => ({type: 'SELECT_INITIAL_TIME', initialTime} as const),
    selectButtonToKeyboard: (buttonToKeyboard: string) => ({
        type: 'SELECT_BUTTON_TO_KEYBOARD',
        buttonToKeyboard
    } as const),
    selectSliderValue: (sliderValue: number[]) => ({type: 'SELECT_SLIDER_VALUE', sliderValue} as const),
    selectValueDisable: (valueDisable: string) => ({type: 'SELECT_VALUE_DISABLE', valueDisable} as const)
}

export const setAllText = (action:{alphabet:Alphabet}): ThunkType => {
    return (dispatch) => {
        const wordsInAllText:number=3
        const maxBadKeyInText:number=5
        let newTypeScore:Alphabet = setStateTypeScore(action.alphabet)
        dispatch(actions.selectStateTypeScoreAC(newTypeScore))
        let {newText, arrNotDisableLetter} = (getNewText(action.alphabet,wordsInAllText,maxBadKeyInText))
        dispatch(actions.selectAllTextAC(newText, arrNotDisableLetter))
    }
}


export const setSliderValue = (sliderValue:number[]): ThunkType => {
    return (dispatch) => {
        dispatch(actions.selectSliderValue(sliderValue))
    }
}
export const setValueDisable = (valueDisable: string): ThunkType => {
    return (dispatch) => {
        dispatch(actions.selectValueDisable(valueDisable))
    }
}


export const setSpeedType = (speedType: string): ThunkType => {
    return (dispatch) => {
        (dispatch(actions.selectSpeedTypeAC(speedType)))
    }
}

export const setInitialTime = (initialTime: number): ThunkType => {
    return (dispatch) => {
        (dispatch(actions.selectInitialTime(initialTime)))
    }
}
export const setErrorCount = (): ThunkType => {
    return (dispatch) => {
        (dispatch(actions.selectErrorCountAC()))
    }
}
export const setCurrentLetter = (currentLetter: string): ThunkType => {
    return (dispatch) => {
        (dispatch(actions.selectCurrentLetterAC(currentLetter)))
    }
}
export const setButtonToKeyboard = (buttonToKeyboard: string): ThunkType => {
    return (dispatch) => {
        (dispatch(actions.selectButtonToKeyboard(buttonToKeyboard)))
    }
}
export const setIsKeyboardHidden = (isKeyboardHidden: boolean): ThunkType => {
    return (dispatch) => {
        dispatch(actions.selectKeyboardAC(isKeyboardHidden))
    }
}
export const setNewLanguage = (newLanguage: string[]): ThunkType => {
    return (dispatch) => {
        (dispatch(actions.selectLanguageAC(newLanguage)))
    }
}
export default headerReducer;
