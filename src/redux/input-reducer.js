import {getNewText} from "./getNewText.js";

const SET_ALL_TEXT="SET_ALL_TEXT"
const SET_INPUT_AVAILABLE='SET_INPUT_AVAILABLE'
const initialState={
    allText:["asd"],
    isInputAvailable:false,
    separator:15
}
const inputReducer=(state=initialState,action)=>{

    switch (action.type){
        case SET_ALL_TEXT:
            return {
                ...state,
            }
        case SET_INPUT_AVAILABLE:
            return {
                ...state,
                isInputAvailable: action.isInputAvailable
            }
        default:
            return{
                ...state
            }
    }
}
export const allTextAC=()=>{return{type:SET_ALL_TEXT,}}
export const inputAvailableAC=(isInputAvailable)=>{return{type:SET_INPUT_AVAILABLE,isInputAvailable}}

export const setAllText=(action)=>{
        getNewText(action)
        return(dispatch)=>(dispatch(allTextAC())
    )
}
export const setInputAvailable =(isInputAvailable) => {
    return (dispatch)=>(dispatch(inputAvailableAC(isInputAvailable)))
}


export default inputReducer