import handlerClick from "./handlerClick.jsx";
import React from "react";
import {makeStyles} from "@material-ui/core";
const useStyle=makeStyles({
    tapeToInput:{
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
}
})


let ClickMeToTape=(state)=>{
    const classes=useStyle()
    if(state.isInputAvailable===false)
    return(
        <>
            <div id={"click"} className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.allText,state.setAllText,state.alphabet,state.setLetter,state.setInputAvailable,state.isInputAvailable,state.setCurrentError))}>
                <p>Click me to tape!</p>
            </div>
            </>
    )
    else if(state.isInputAvailable===true)

    return(
            <>
                <div id={"click"} className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.allText,state.setAllText,state.alphabet,state.setLetter,state.setInputAvailable,state.isInputAvailable,state.setCurrentError))}>
                </div>
            </>
        )
}


export default ClickMeToTape