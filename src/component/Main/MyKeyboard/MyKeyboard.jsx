import React from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import {makeStyles} from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import {useEffect} from "react";
import {useRef} from "react";
import {useState} from "react";

const useStyle=makeStyles({
    root:{
        margin:"0 auto"
    }
})


const MyKeyboard =(state)=>{
    const [letter,setLetter]=useState("")
    const classes=useStyle()
    const keyboard = useRef(null);
    useEffect(()=>{
        let a= keyboard.current.getButtonElement(state.buttonToKeyboard)
        if(letter!=="")
        {
            letter.style.backgroundColor=(`rgba(255,255,255,1)`)
            setLetter("")
        }
        if(a) {
            setLetter(a)
            a.style.backgroundColor=(`rgba(0,0,0,0.7)`)
        }
    },[state.buttonToKeyboard])
    let firstRow="",secondRow="",thirdRow="",layout

    for(let key in state.keyboard){
        if(key<20)firstRow+=state.keyboard[key].letter.toLowerCase()+" "
        else if(key<40)secondRow+=state.keyboard[key].letter.toLowerCase()+" "
        else if(key<60)thirdRow+=state.keyboard[key].letter.toLowerCase()+" "
    }
    if(state.currentLang[0]==="ENGLISH"){
        layout={
            'default': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                `{tab} ${firstRow}[ ] \\`,
                `{lock} ${secondRow}; ' {enter}`,
                `{shift} ${thirdRow}, . / {shift}`,
                '.com @ {space}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                `{tab} ${firstRow.toLocaleUpperCase()}{ } |`,
                `{lock} ${secondRow.toLocaleUpperCase()}: " {enter}`,
                `{shift} ${thirdRow.toLocaleUpperCase()}? {shift}`,
                `.com @ {space}`
            ]
        }
    }
        return (
                <Zoom in={!state.isKeyboardHidden}>
                    <div className={classes.root}>

                <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    layout={layout}
                /></div>
                </Zoom>


        );
}
export default MyKeyboard