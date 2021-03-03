import handlerClick from "./handlerClick";
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
type root={
    allText: Array<string>,
    isInputAvailable: boolean,
    alphabet:object,
    setAllText:(alphabet:object)=>void,
    setInputAvailable:(isInputAvailable:boolean)=>void,
    setLetter:(letter:number)=>void
    setCurrentError:(error:number)=>void
}
export const ClickMeToTape:React.FC<root>=(state):any=>{
    const classes=useStyle()
    if(!state.isInputAvailable)
    return(
        <>
            <div id={"click"} className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.allText,state.setAllText,state.alphabet,state.setLetter,state.setInputAvailable,state.isInputAvailable,state.setCurrentError))}>
                <p>Click me to tape!</p>
            </div>
            </>
    )
    else if(state.isInputAvailable)

    return(
            <>
                <div id={"click"} className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.allText,state.setAllText,state.alphabet,state.setLetter,state.setInputAvailable,state.isInputAvailable,state.setCurrentError))}>
                </div>
            </>
        )
}


