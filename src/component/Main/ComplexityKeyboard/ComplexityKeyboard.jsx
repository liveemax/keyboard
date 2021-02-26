import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import {makeStyles} from "@material-ui/core";
import pxToRem from "../../../pxToRem.js";

const useStyle = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        borderBottom:"3px solid #fff",
        paddingBottom:"5px",
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
        display:"flex",
        "& button": {
            height: "1rem",
            border: "1px solid rgba(0, 0, 0, .23)",
            padding: "1px",
            margin: "1px",
            "@media (max-width: 1280px)":{
                minWidth:pxToRem(10)
            },
            "@media (min-width: 1280px)":{
                minWidth:pxToRem(20)
            }

        }
    },
    button__wrapper:{
        cursor: "pointer"
    },
    complexityMargin:{
        margin:"0 auto"
}
})


const ComplexityKeyboard = (state) => {
    const classes = useStyle()
    let button = (state) => {
        let allButton = [];
        for (const [key, value] of Object.entries(state.currentLang.alphabet)) {
            allButton[key] = <div className={classes.button__wrapper}  onClick={(event) => {
                state.setValueDisable(key)
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
                <div className={classes.complexityMargin}>
                    <div className={classes.button__group}>
                        {button(state)}
                    </div>
                    <div>
                        <Slider
                            value={state.sliderValue}
                            onChange={(e,value)=>state.setSliderValue(value)}
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