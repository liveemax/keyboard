import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        borderBottom:"3px solid #fff",
        paddingBottom:"5px",
        "& button": {
            minWidth: "1rem",
            height: "1rem",
            border: "1px solid rgba(0, 0, 0, .23)",
            padding: "1px",
            margin: "1px",
        },
        "& p": {
            marginRight: "30px",
        },
        "& span:hover": {
            boxShadow: "none",
        },

        "& span:focus": {
            boxShadow: "none",
        }
    },

    button__group: {
        display: "flex",
        "& button": {
            minWidth: "25px",
            minHeight: "20px",
        }
    },
    button__wrapper:{
        cursor: "pointer"
    }
})


const ComplexityKeyboard = (state) => {
    const classes = useStyle()
    let button = (state) => {
        let allButton = [];
        for (const [key, value] of Object.entries(state.currentLang.alphabet)) {
            allButton[key] = <div className={classes.button__wrapper}  onClick={(event) => {
                state.setValueDisable(event, key)
            }} key={key}>
                <Button  disabled={value.disable}>{value.letter}</Button></div>
        }
        return allButton
    }
    return (
        <>
            <div className={classes.root}>
                <Typography>
                    Lesson's key set:
                </Typography>
                <div>
                    <div className={classes.button__group}>
                        {button(state)}
                    </div>
                    <div>
                        <Slider
                            value={state.sliderValue}
                            onChange={state.setSliderValue}
                            step={1}
                            color={"primary"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComplexityKeyboard