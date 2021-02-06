import React from "react";
import {BrowserRouter} from "react-router-dom";
import Main from "./component/Main/Main.jsx";
import Advertising from "./component/Advertising/Advertising.jsx";
import Aside from "./component/Aside/Aside.jsx";
import Footer from "./component/Footer/Footer.jsx";
import "./App.css"
import store from "./redux/store.js";
import Header from "./component/Header/Header.jsx";
import {Provider} from "react-redux";
import handlerClickApp from "./handlerClickApp.jsx";
import {connect} from "react-redux";
import {setInputAvailable} from "./redux/input-reducer.js";


const App=(props)=> {
        return (
            <div className={"theme"} onClick={(e)=>{handlerClickApp(e,props.isInputAvailable,props.setInputAvailable)}}>
                <Header/>
                <Advertising/>
                <Main/>
                <Aside/>
                <Footer/>
            </div>
        );

    }

const mapStateToProps=(props)=>{
    return  {props:props,
        isInputAvailable: props.inputKeyboard.isInputAvailable
    }
}
export const AppContainer=connect(mapStateToProps,{setInputAvailable})(App)

const KeyBoard = (props) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
export default KeyBoard