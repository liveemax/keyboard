import React from 'react';
import {Formik} from "formik";
import {Form} from "formik";
import {useField} from "formik";
import classes from "../main.module.css";
import {useState} from "react";
import {createRef} from "react";

const MyTextarea = ({setFirstTime,firstTime,speed, currentLetter, setLetter, setSpeed, setCurrentError, currentError, ...props}) => {
    const [field, meta, helpers] = useField(props);

    const handleChange = (e) => {
        let lastButton;
        let firstButton;
        let getDate;
        firstButton = e.currentTarget.value.slice(0, 1)
        lastButton = e.currentTarget.value.slice(-1)
        switch (firstButton) {
            case lastButton: {

                currentLetter === 0 ? setFirstTime(e.timeStamp) : setSpeed((e.timeStamp - firstTime) / currentLetter)
                setLetter(++currentLetter)
                debugger
                e.currentTarget.nextElementSibling.focus()
                break
            }
            default: {
                setCurrentError(++currentError)
            }
        }

    }

    // return (
    //     <>
    //
    //         {
    //             startValue.split("").map((element,index)=>{return(
    //             <span>{<input  style={{width:20+'px'}} {...field} name={index} onChange={(e)=>{handleChange(e,currentButton)}} value={element}/>}</span>
    //         )})}
    //         {meta.touched && meta.error ? (
    //             <div className="error">{meta.error}</div>
    //         ) : null}
    //     </>
    // );
    return (<input {...props} style={{width: 10 + "px"}} onChange={handleChange}/>)
};
const Speed = (state) => {
    if (state.currentLetter > 3) {
        return (state.speed/1000*60)
    }
    return "{}"
}
const InputKeyboard = (state) => {

    state.allText[0].split("")
    const [currentError, setCurrentError] = useState(0)
    const [speed, setSpeed] = useState("0")
    const [currentLetter, setLetter] = useState(0)
    const [firstTime, setFirstTime] = useState(0)
    return (
        <div>
            <div>
                Speed:{<Speed speed={speed} currentLetter={currentLetter}/>}

                Error:{currentError}
            </div>

            <Formik initialValues={{}}>
                <Form>
                    {
                        state.allText[0].split("").map((element, index) => {
                            return (
                                <>{<MyTextarea setFirstTime={setFirstTime} firstTime={firstTime}
                                               currentLetter={currentLetter} setLetter={setLetter} setSpeed={setSpeed}
                                               speed={speed} currentError={currentError}
                                               setCurrentError={setCurrentError} name={index} value={element}/>}</>
                            )
                        })}
                </Form>

            </Formik>
        </div>
    );
}
export default InputKeyboard