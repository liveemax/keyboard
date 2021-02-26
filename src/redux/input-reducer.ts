import {BaseThunkType, InferActionsTypes} from "./store.js";

type InitialState = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType>

const initialState = {
    isInputAvailable: false,
    separator: 20,    //>Start fraze
}
const inputReducer = (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'SET_INPUT_AVAILABLE':
            return {
                ...state,
                isInputAvailable: action.isInputAvailable
            }

        default:
            return {
                ...state
            }
    }

}
export const actions = {
    selectAvailableAC: (isInputAvailable: boolean) => ({type: 'SET_INPUT_AVAILABLE', isInputAvailable} as const)
}


export const setInputAvailable = (isInputAvailable: boolean): ThunkType => {
    return (dispatch) => {
        dispatch(actions.selectAvailableAC(isInputAvailable))
    }
}


export default inputReducer