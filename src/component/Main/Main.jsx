import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./main.module.css"
import StatisticKeyboard from "./StatisticKeyboard.jsx";
import InputKeyboard from "./InputKeyboard.jsx";
import HeaderContainer from "./HeaderKeyboard/HeaderContainer.jsx";
import MyKeyboardContainer from "./MyKeyboard/MyKeyboardContainer.jsx";
import ComplexityKeyboardContainer from "./ComplexityKeyboard/ComplexityKeyboardContainer.jsx";

const Main = () => {
    return (
        <main className={classes.root}>
            <Paper className={classes.container__width}>
                <HeaderContainer/>
                <ComplexityKeyboardContainer/>
                <StatisticKeyboard/>
                <InputKeyboard/>
                <MyKeyboardContainer/>
            </Paper>
        </main>

    );
}
export default Main;