import React from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


const MyKeyboard =(state)=>{
     const onChange = (input) => {
        console.log("Input changed", input);
    }

    const onKeyPress = (button) => {
        console.log("Button pressed", button);
    }

        return (
            <div style={{...state.showKeyboard}}>
            <Keyboard
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            </div>
        );
}
export default MyKeyboard