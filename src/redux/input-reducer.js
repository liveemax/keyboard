const SET_ALL_TEXT="SET_ALL_TEXT"
const SET_INPUT_AVAILABLE='SET_INPUT_AVAILABLE'
const initialState={
    allText:["asdasdasdafas das asd asdsfdgdfv dsdsaf as dasasdasd as asdsafgbv b ghkhfsfasdasdxcvf as"],
    isInputAvailable:false
}

const inputReducer=(state=initialState,action)=>{

    switch (action.type){
        case SET_ALL_TEXT:
            return {
                ...state,
                allText: ["sdasdaa a das asd asf sf sf asd as dasd asd as d"]
            }
        case SET_INPUT_AVAILABLE:
            return {
                ...state,
                isInputAvailable: !state.isInputAvailable
            }
        default:
            return{
                ...state
            }
    }
}


export const setAllText=()=>{return{type:SET_ALL_TEXT}}
export const setInputAvailable=()=>{return{type:SET_INPUT_AVAILABLE}}


export default inputReducer