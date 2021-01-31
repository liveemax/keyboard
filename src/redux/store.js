import React from "react";
import {combineReducers} from "redux";
import headerReducer from "./header-reducer.js";
import {createStore} from "redux";

let reducers=combineReducers({
headerKeyboard:headerReducer,
})


const store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.__store__ = store;
export default store;