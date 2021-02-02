import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "../main.module.css";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import {useState} from "react";
import {setValueDisable} from "../../../redux/header-reducer.js";

const ComplexityKeyboard = (state) => {
    let button=(state)=>{
        let allButton=[];
        debugger
        for(const [key, value] of Object.entries(state.currentLang.alphabet)){
            allButton[key]=<div className={classes.button__wrapper} onClick={(event)=>{state.setValueDisable(event,key)}}><Button disabled={value.disable} >{value.letter}</Button></div>
        }
        return allButton
    }
    const ref=React.createRef();
    let ButtonGroupWidth;
    let setClientWidth=(event)=>{
        return ref.current.clientWidth
    }
    [ButtonGroupWidth,setClientWidth]=useState(800);
    return (
        <>
            <Paper className={classes.typeKeys} >
                <Typography>
                    Selected button
                </Typography>
                <div>
                    <div className={classes.button__group}>
                        {button(state)}
                    </div>
                    <div className={classes.slider}>
                        <Slider
                            value={state.sliderValue}
                            onChange={state.setSliderValue}
                            step={1}
                        />
                    </div>
                </div>
            </Paper>
        </>
    )
}
export default ComplexityKeyboard