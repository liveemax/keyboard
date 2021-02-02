import {combineReducers} from "redux";
import headerReducer from "./header-reducer.js";
import {createStore} from "redux";
import inputReducer from "./input-reducer.js";

let reducers=combineReducers({
headerKeyboard:headerReducer,
inputKeyboard:inputReducer,
})


const store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.__store__ = store;
export default store;