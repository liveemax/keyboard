
const SET_INPUT_AVAILABLE='SET_INPUT_AVAILABLE'
const initialState={
    isInputAvailable:false,
    separator:10,    //>Start fraze
}
const inputReducer=(state=initialState,action)=>{
    switch (action.type){
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
export const inputAvailableAC=(isInputAvailable)=>{return{type:SET_INPUT_AVAILABLE,isInputAvailable}}

export const setInputAvailable =(isInputAvailable) => {
    return (dispatch)=>(dispatch(inputAvailableAC(isInputAvailable)))
}


export default inputReducer