import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./main.module.css"
import HeaderContainer from "./HeaderKeyboard/HeaderContainer.jsx";
import MyKeyboardContainer from "./MyKeyboard/MyKeyboardContainer.jsx";
import ComplexityKeyboardContainer from "./ComplexityKeyboard/ComplexityKeyboardContainer.jsx";
import InputKeyboardContainer from "./InputKeyboard/InputKeyboardContainer.jsx";

const Main = () => {
    return (
        <main className={classes.root}>
            <Paper className={classes.container__width}>
                <HeaderContainer/>
                <ComplexityKeyboardContainer/>
                <InputKeyboardContainer/>
                <MyKeyboardContainer/>
            </Paper>
        </main>

    );
}
export default Main;