import {combineReducers} from "redux";
import headerReducer from "./header-reducer.js";
import {createStore} from "redux";
import inputReducer from "./input-reducer.js";
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

let reducers=combineReducers({
headerKeyboard:headerReducer,
inputKeyboard:inputReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))
window.__store__ = store;
export default store;