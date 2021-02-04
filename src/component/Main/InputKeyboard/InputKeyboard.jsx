import React from 'react';
import {Formik} from "formik";
import {Form} from "formik";
import {useState} from "react";
import MyTextArea from "./MyTextArea.jsx"
import classes from "../main.module.css";
import whereNewRow from "./whereNewRow.jsx";
import {useEffect} from "react";
import handlerClick from "./handlerClick.jsx";
import Speed from "./Speed.jsx";

const InputKeyboard = (state) => {

    const [currentError, setCurrentError] = useState(0)
    const [speed, setSpeed] = useState("0")
    const [currentLetter, setLetter] = useState(0)
    const [firstTime, setFirstTime] = useState(0)
    useEffect(()=>{

        document.getElementById("0").focus()
    },[state.allText])
    return (
        <div >
            <div className={classes.smallStatistic}>
                <span>Speed:{<Speed speed={speed} currentLetter={currentLetter}/>}</span>
                <span>Error:{currentError}</span>
            </div>

            <Formik initialValues={{}}>
                <div className={classes.tape}>
                <Form>
                    {
                        state.allText[0].split("").filter(whereNewRow)
                            .map((element, index) => {
                                return (
                                    <>{<MyTextArea setAllText={state.setAllText} setFirstTime={setFirstTime} firstTime={firstTime}
                                                   counterLetter={currentLetter} setLetter={setLetter}
                                                   setSpeed={setSpeed}
                                                   speed={speed} currentError={currentError}
                                                   setCurrentError={setCurrentError} name={index} value={element}/>
                                    }
                                    </>
                                )
                            })}
                </Form>
                    {

                    }
                    <div className={classes.tapeToInput} onClick={(e)=>(handlerClick(e,state.setInputAvailable,state.isInputAvailable,setCurrentError))}><p>Click me to tape!</p></div>
                </div>
            </Formik>
        </div>
    );
}

export default InputKeyboard