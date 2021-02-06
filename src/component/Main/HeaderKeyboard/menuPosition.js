import React from "react";
export const menuPosition= (positionMenu,setPosition,setNewLanguage)=>{
    const open = Boolean(positionMenu);
    const menuOpen = (event) => {
        setPosition(event.currentTarget);
    };
    const menuClose = (e) => {
        setPosition(null);
        e.currentTarget.innerText && setNewLanguage(e.currentTarget.innerText);
    };
    return {open,menuOpen,menuClose}
}