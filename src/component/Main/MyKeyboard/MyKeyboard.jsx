import React from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
    root:{
        margin:"0 auto"
    }
})

const MyKeyboard =(state)=>{
    const classes=useStyle()
    let firstRow="",SecondRow="",ThirdRow="",layout
    const onChange = (input) => {
        console.log("Input changed", input);
    }

    const onKeyPress = (button) => {
        console.log("Button pressed", button);
    }

    for(let key in state.keyboard){
        if(key<20)firstRow+=state.keyboard[key].letter.toLowerCase()+" "
        else if(key<40)SecondRow+=state.keyboard[key].letter.toLowerCase()+" "
        else if(key<60)ThirdRow+=state.keyboard[key].letter.toLowerCase()+" "
    }
    if(state.currentLang[0]==="ENGLISH"){
        layout={
            'default': [
                '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
                `{tab} ${firstRow}[ ] \\`,
                `{lock} ${SecondRow}; ' {enter}`,
                `{shift} ${ThirdRow}, . / {shift}`,
                '.com @ {space}'
            ],
            'shift': [
                '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                '{tab} Q W E R T Y U I O P { } |',
                '{lock} A S D F G H J K L : " {enter}',
                '{shift} Z X C V B N M < > ? {shift}',
                '.com @ {space}'
            ]
        }
    }
    console.log(layout)
        return (
            <Grid container item xs={10} justify={"center"} style={{...state.showKeyboard}} className={classes.root} >
            <Keyboard layout={layout}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            </Grid>
        );
}
export default MyKeyboard