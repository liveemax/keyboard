import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language.js";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardIcon from "@material-ui/icons/Keyboard.js";
import {menuPosition} from "./menuPosition.js";
import {makeStyles} from "@material-ui/core";
import {MoreBadKey} from "./MoreBadKey.jsx";

const useStyle = makeStyles({
    header: {
        display: "flex",
        justifyContent:"space-between",
        borderBottom: "1px solid #eee",
        "& :first-child":{
            alignSelf:"flex-end",
        },
    },
    paper: {
        height: "300px",
        width: "20ch",
    },

    iconKeyboard: {
        cursor: "pointer",
    },
    mbk:{
        display:"inline-flex"
    }
})

const HeaderKeyboard = (state) => {
    const header = useStyle()
    let badLetter = state.badLetter
    const [positionMenu, setPosition] = React.useState(null);
    let {open, menuClose, menuOpen} = menuPosition(positionMenu, setPosition, state.setNewLanguage);
    return (
        <div className={header.header}>
            <span className={header.mbk}>
            <MoreBadKey currentLetter={state.currentLetter} allText={state.allText} badLetter={badLetter}/>
            </span>
            <div>
                <IconButton onClick={menuOpen}>
                    <LanguageIcon/>
                </IconButton>
                <Menu id="long-menu" anchorEl={positionMenu} open={open} onClose={menuClose}
                      className={header.paper}>
                    {Object.keys(state.allLang).map((option) => (
                        <MenuItem key={option} onClick={menuClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
                <IconButton aria-label="delete" onClick={() => {
                    state.setIsKeyboardHidden(state.isKeyboardHidden)
                }} className={header.iconKeyboard}>
                    <KeyboardIcon disabled={state.isKeyboardHidden}/>
                </IconButton>
            </div>
        </div>
    )
}
export default HeaderKeyboard