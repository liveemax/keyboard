const SET_SLIDER_VALUE="SET_SLIDER_VALUE";
let initialState={
    sliderValue:[0,100],
}

const complexityReducer=(state=initialState,action)=>{

    switch (action.type){
        case (SET_SLIDER_VALUE):
        {
            return {
                ...state,
                sliderValue:action.value
            }
        }
        default:
                return {...state}

    }
}




export default complexityReducer