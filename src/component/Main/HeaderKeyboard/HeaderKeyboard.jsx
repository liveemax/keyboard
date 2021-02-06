import React from "react";
import classes from "../main.module.css";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language.js";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardIcon from "@material-ui/icons/Keyboard.js";
import {menuPosition} from "./menuPosition.js";

const HeaderKeyboard = (state) => {
    const [positionMenu, setPosition] = React.useState(null);
    let {open,menuClose,menuOpen}=menuPosition(positionMenu,setPosition,state.setNewLanguage);
    return (
        <div className={classes.container}>
            <div>
                <IconButton onClick={menuOpen}>
                    <LanguageIcon/>
                </IconButton>
                <Menu id="long-menu" anchorEl={positionMenu} open={open} onClose={menuClose}
                      className={classes.paper}>
                    {Object.keys(state.allLang).map((option) => (
                        <MenuItem key={option} onClick={menuClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
                <span onClick={() => {
                    state.setIsKeyboardHidden(state.isKeyboardHidden)
                }} className={classes.iconKeyboard}>
                <IconButton aria-label="delete" disabled={state.isKeyboardHidden}>
                    <KeyboardIcon/>
                </IconButton>
                </span>
            </div>
        </div>
    );
}
export default HeaderKeyboard