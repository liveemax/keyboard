import {Action, combineReducers} from "redux";
import headerReducer from "./header-reducer";
import {createStore} from "redux";
import inputReducer from "./input-reducer";
import {applyMiddleware} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

let reducers=combineReducers({
headerKeyboard:headerReducer,
inputKeyboard:inputReducer,
})

export type AppStateType = ReturnType<typeof reducers>
export type BaseThunkType<A extends Action = Action, R = Promise<void>|void> = ThunkAction<R, AppStateType, unknown, A>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store;