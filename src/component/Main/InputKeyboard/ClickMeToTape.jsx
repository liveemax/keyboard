import classes from "../main.module.css";
import handlerClick from "./handlerClick.jsx";
import React from "react";


let ClickMeToTape=(state)=>{

    if(state.isInputAvailable===false)
            return(
        <>
            <div id={"click"} className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.setInputAvailable,state.isInputAvailable,state.setCurrentError))}>
                <p>Click me to tape!</p>
            </div>
            </>
    )
    else if(state.isInputAvailable===true)
    return(
            <>
                <div id={"click"} className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.setInputAvailable,state.isInputAvailable,state.setCurrentError))}>
                </div>
            </>
        )
}


export default ClickMeToTape