import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import classes from "../main.module.css";
import whereNewRow from "./whereNewRow.jsx";
import ClickMeToTape from "./ClickMeToTape.jsx";
import SmallStatistic from "./SmallStatistic.jsx";
import handleChange from "./handleChange.js";

const InputKeyboard = (props) => {

    const [currentError, setCurrentError] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [currentLetter, setLetter] = useState(0)
    const [firstTime, setFirstTime] = useState(0)
    useEffect(() => {
        document.getElementById("0").focus()
        if (speed === 0)
            document.getElementById("0").blur()
    }, [props.allText])
    return (
        <div>
            <div className={classes.smallStatistic}>
                <SmallStatistic currentError={currentError} speed={speed} currentLetter={currentLetter}/>
            </div>
            <div className={classes.tape}>
                <form id={"form"}>
                    {
                        props.allText[0].split("").filter(whereNewRow(props.separator)).map((element, index) => {
                                if (element === "/n") {
                                    return (
                                        <>
                                            <input key={index} id={index} value={" "} className={classes.letter}
                                                   onChange={(e) => (handleChange(e, currentLetter, setFirstTime, setSpeed, firstTime, setLetter, props.setAllText, props.alphabet, setCurrentError, currentError,props.setSpeedType,props.setErrorCount,props.setCurrentLetter))}/>,
                                            <i style={{display: "block"}}></i>
                                        </>
                                    )
                                } else return (<input value={element} key={index} id={index} className={classes.letter}
                                                      onChange={(e) => (handleChange(e, currentLetter, setFirstTime, setSpeed, firstTime, setLetter, props.setAllText, props.alphabet, setCurrentError, currentError,props.setSpeedType,props.setErrorCount,props.setCurrentLetter))}/>)

                            }
                        )
                    }
                </form>
                <ClickMeToTape setInputAvailable={props.setInputAvailable} isInputAvailable={props.isInputAvailable}
                               setCurrentError={setCurrentError}/>
            </div>
        </div>
    );
}

export default InputKeyboard