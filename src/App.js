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


function App() {
    debugger
    return (

        <div className={"theme"} >
            <Header/>
            <Advertising/>
            <Main/>
            <Aside/>
            <Footer/>
        </div>
    );
}


export const KeyBoard = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}
export default App;
