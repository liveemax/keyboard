import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./main.module.css";
import Typography from "@material-ui/core/Typography";
const InputKeyboard=()=>{
    return(
        <Paper className={classes.typeText}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores aspernatur delectus doloremque iusto quam quibusdam sequi suscipit tempora veritatis.</Typography>
        </Paper>
    )
}
export default InputKeyboard