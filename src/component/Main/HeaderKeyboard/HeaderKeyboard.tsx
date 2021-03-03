import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import {menuPosition} from "./menuPosition";
import {makeStyles} from "@material-ui/core";
import {MoreBadKey} from "./MoreBadKey";

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
type root={
    allLang:object,
    isKeyboardHidden:boolean,
    badLetter:string|object,
    allText:Array<string>,
    currentLetter:string,
    setNewLanguage:(newLanguage:string[])=>void,
    setIsKeyboardHidden:(isKeyboardHidden:boolean)=>void
}
const HeaderKeyboard:React.FC<root> = (state) => {
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
                    <KeyboardIcon/>
                </IconButton>
            </div>
        </div>
    )
}
export default HeaderKeyboard
