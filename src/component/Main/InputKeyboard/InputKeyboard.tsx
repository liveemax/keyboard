import React, {useEffect, useReducer, useState} from 'react';
import whereNewRow from "./whereNewRow";
import {ClickMeToTape} from "./ClickMeToTape";
import SmallStatistic from "./SmallStatistic/SmallStatistic";
import handleChange from "./handleChange/handleChange";
import {makeStyles} from "@material-ui/core";
import Blink from "./Blink/Blink";
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import {Portal} from "./Portal";

const useStyle = makeStyles({
    root: {
        paddingBottom: "20px",
    },
    smallStatistic: {
        display: "flex",
        justifyContent: " space-evenly",
        paddingTop: "15px",
    },

    tape: {
        minHeight: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "& #form": {
            opacity: " 0.2",
            textAlign: "center",
            minWidth:"400px"
        }
    },

    letter: {
        position: "relative",
        padding: "0px",
        border: "none",
        outline: "none",
        fontSize: "30px",
        "& svg": {
            position: "relative",
            transform: "translate(0px,40%)"
        }
    },
    input: {
        width: "0",
        height: "0",
        padding: "0px",
        border: "0px"
    }

})


export const init = {speed: [0]}

type Action = { type: 'SET_SPEED', time: number }
type State = { speed: Array<number> }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_SPEED": {
            let newSpeed = state.speed.unshift(action.time)
            if (newSpeed > 20) state.speed.pop()
            return {...state}
        }
        default :
            return {...state}
    }
}

type root = {
    allText: Array<string>,
    isInputAvailable: boolean,
    alphabet: object,
    separator: number,
    initialTime: number,
    setInitialTime: (initialTime: number) => void,
    setAllText: (alphabet:object) => void,
    setInputAvailable: (isInputAvailable: boolean) => void,
    setSpeedType: (speedType: string) => void,
    setErrorCount: () => void,
    setCurrentLetter: (currentLetter: string) => void,
    setButtonToKeyboard: (buttonToKeyboard: string) => void,
}

const InputKeyboard: React.FC<root> = (props) => {

    const classes = useStyle()
    const [input, setInput] = useState("")
    const [currentError, setCurrentError] = useState(0)
    const [state, dispatch] = useReducer(reducer, init)
    const [currentLetter, setLetter] = useState(0)
    useEffect(() => {
        if (props.allText[0] !== "ALL BUTTON WAS DISABLE" && props.isInputAvailable) {
            (document as any).getElementById(`input`).focus()
        }

    }, [props.allText, props.isInputAvailable])

    return (
        <div className={classes.root} id={"asd"}>
            <Portal allText={props.allText} isInputAvailable={props.isInputAvailable} currentLetter={currentLetter}>
                <Blink/>
            </Portal>
            <div className={classes.smallStatistic}>
                <SmallStatistic currentError={currentError} speed={state.speed}/>
            </div>
            <input value={input} className={classes.input} id={"input"}
                   onKeyDown={(e) => {
                       props.setButtonToKeyboard(e.key)
                   }}
                   onKeyUp={(e) => {
                       props.setButtonToKeyboard(" ")
                   }}
                   onChange={(e) => {
                       handleChange({e:e, allText:props.allText, setInput:setInput, setInitialTime:props.setInitialTime, initialTime:props.initialTime, currentLetter:currentLetter, dispatch:dispatch, setLetter:setLetter,
                           setAllText:props.setAllText, alphabet:props.alphabet, setCurrentError:setCurrentError, currentError:currentError, setSpeedType:props.setSpeedType, setErrorCount:props.setErrorCount, setCurrentLetter:props.setCurrentLetter})
                   }}/>
            <div className={classes.tape}>


                <div id={"form"}>
                    {
                        props.allText[0].split("").filter(whereNewRow(props.separator)).map((element, index, arr) => {
                                if (element === "/n" || element === " ") {
                                    return (<React.Fragment key={index}>
                                            <span className={classes.letter} id={index.toString()}><SpaceBarIcon/></span>
                                            {element === "/n" ? <i style={{display: "block"}}></i> : undefined}
                                        </React.Fragment>
                                    )
                                } else if (index === 0) {
                                    return (<React.Fragment key={index}>
                                        <span className={classes.letter} id={index.toString()}>{element}
                                        </span>
                                        </React.Fragment>

                                    )
                                } else {
                                    return (
                                        <React.Fragment key={index}>
                                <span className={classes.letter} id={index.toString()}>
                                             {element}
                                         </span>
                                        </React.Fragment>

                                    )
                                }

                            }
                        )

                    }
                </div>
                <ClickMeToTape allText={props.allText} setAllText={props.setAllText} alphabet={props.alphabet}
                               setLetter={setLetter} setInputAvailable={props.setInputAvailable}
                               isInputAvailable={props.isInputAvailable}
                               setCurrentError={setCurrentError}/>
            </div>
        </div>
    );
}

export default InputKeyboard