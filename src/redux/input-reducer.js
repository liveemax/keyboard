
const SET_ALL_TEXT="SET_ALL_TEXT"
const initialState={
    allText:["asdasdasdaf as das asd asdsfdgdfv dsdsaf as das as"],
    speed:0,
    error:0
}

const inputReducer=(state=initialState,action)=>{
    switch (action){
        case SET_ALL_TEXT:
            return {
                ...state,
                allText: action.allText
            }
        default:
            return{
                ...state
            }
    }
}


export const setAllText=(allText)=>{return{type:SET_ALL_TEXT,allText}}

export default inputReducer