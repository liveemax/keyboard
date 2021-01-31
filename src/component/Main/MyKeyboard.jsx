import React from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./main.module.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Component} from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


class MyKeyboard extends Component {
    onChange = (input) => {
        console.log("Input changed", input);
    }

    onKeyPress = (button) => {
        console.log("Button pressed", button);
    }

    render(){
        return (
            <Keyboard
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
            />
        );
    }
}
export default MyKeyboard