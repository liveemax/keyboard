import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./main.module.css"
import ComplexityKeyboard from "./ComplexityKeyboard.jsx";
import StatisticKeyboard from "./StatisticKeyboard.jsx";
import InputKeyboard from "./InputKeyboard.jsx";
import MyKeyboard from "./MyKeyboard.jsx";
import HeaderContainer from "./HeaderKeyboard/HeaderContainer.jsx";

const Main = () => {
    return (
        <main className={classes.root}>
            <Paper className={classes.container__width}>
                <HeaderContainer/>
                <ComplexityKeyboard/>
                <StatisticKeyboard/>
                <InputKeyboard/>
                <MyKeyboard/>
            </Paper>
        </main>

    );
}
export default Main;