import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {useReducer} from "react";
import whereNewRow from "./whereNewRow.jsx";
import ClickMeToTape from "./ClickMeToTape.jsx";
import SmallStatistic from "./SmallStatistic/SmallStatistic.jsx";
import handleChange from "./handleChange/handleChange.js";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
root:{
    paddingBottom:"20px",
},
    smallStatistic: {
        display: "flex",
        justifyContent: " space-evenly",
        paddingTop: "15px",
    },

    tape:{
        minHeight: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "& form": {
            opacity: " 0.2",
            textAlign: "center",
        }
    },

    letter:{
    maxWidth: "30px",
    padding: "0px",
    border: "none",
    outline: "none",
    fontSize: "30px",
}

})


function init(setLocalSpeed) {
    return {speed: setLocalSpeed};
}

function reducer(state, action) {
    switch (action.type) {
        case "SET_SPEED": {
            let newSpeed = state.speed.unshift(action.time)
            if (newSpeed > 20) state.speed.pop()
            return {...state}
        }
        default :
            return {}
    }
}

const InputKeyboard = (props) => {
    const classes = useStyle()
    const [currentError, setCurrentError] = useState(0)
    const [state, dispatch] = useReducer(reducer, [0], init)
    const [currentLetter, setLetter] = useState(0)
    useEffect(() => {
        if (props.allText[0] !== "ALL BUTTON WAS DISABLE" && props.isInputAvailable === true) {
            document.getElementById(`${currentLetter}`).focus()
        }
        else document.getElementById(`${currentLetter}`).blur()
    }, [props.isInputAvailable, props.allText, currentLetter])
    return (
        <div className={classes.root}>
            <div className={classes.smallStatistic}>
                <SmallStatistic currentError={currentError} speed={state.speed}/>
            </div>
            <div className={classes.tape}>
                <form id={"form"}>
                    {
                        props.allText[0].split("").filter(whereNewRow(props.separator)).map((element, index, arr) => {
                                if (element === "/n") {
                                    return (<>
                                            <input value={" "} key={index} id={index} className={classes.letter}
                                                   onChange={(e) => (handleChange(e, props.setInitialTime, props.initialTime, state.speed, currentLetter, dispatch, setLetter, props.setAllText, props.alphabet, setCurrentError, currentError, props.setSpeedType, props.setErrorCount, props.setCurrentLetter))}/>
                                            <i style={{display: "block"}}></i>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <input value={element} key={index} id={index} className={classes.letter}
                                               onChange={(e) => (handleChange(e, props.setInitialTime, props.initialTime, state.speed, currentLetter, dispatch, setLetter, props.setAllText, props.alphabet, setCurrentError, currentError, props.setSpeedType, props.setErrorCount, props.setCurrentLetter))}/>)
                                }
                            }
                        )
                    }
                </form>
                <ClickMeToTape setAllText={props.setAllText} alphabet={props.alphabet}
                               setLetter={setLetter} setInputAvailable={props.setInputAvailable}
                               isInputAvailable={props.isInputAvailable}
                               setCurrentError={setCurrentError}/>
            </div>
        </div>
    );
}

export default InputKeyboard