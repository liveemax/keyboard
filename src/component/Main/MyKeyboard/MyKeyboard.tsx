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

type root={
    showKeyboard:{
        display:string
    },
    isKeyboardHidden:boolean,
    keyboard:any,
    currentLang: Array<string>,
    buttonToKeyboard:string
}

export const MyKeyboard:React.FC<root> =(state)=>{
    const [letter,setLetter]=useState({style:{backgroundColor:("#000")}})
    const classes=useStyle()
    const keyboard:any = useRef(null);
    useEffect(()=>{
            let a = keyboard.current.getButtonElement(state.buttonToKeyboard)
            if (letter!=={style:{backgroundColor:("#000")}}) {
                letter.style.backgroundColor = (`rgba(255, 255, 255, 1)`)
                setLetter({style:{backgroundColor:("#000")}})
            }
            if (a) {
                setLetter(a)
                a.style.backgroundColor = (`rgba(0, 0, 0, 0.7)`)
            }
    },[state.buttonToKeyboard])
    let firstRow="",secondRow="",thirdRow="",layout

    for(let key in state.keyboard){
        if(Number(key)<20)firstRow+=state.keyboard[Number(key)].letter.toLowerCase()+" "
        else if(Number(key)<40)secondRow+=state.keyboard[Number(key)].letter.toLowerCase()+" "
        else if(Number(key)<60)thirdRow+=state.keyboard[Number(key)].letter.toLowerCase()+" "
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
