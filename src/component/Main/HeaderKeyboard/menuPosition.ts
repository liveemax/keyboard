import React from "react";
export const menuPosition= (positionMenu:any,setPosition:(positionMenu:any)=>void,setNewLanguage:(newLanguage:string[])=>void)=>{
    const open = Boolean(positionMenu);
    const menuOpen = (event:any) => {
        setPosition(event.currentTarget);
    };
    const menuClose = (e:any) => {
        setPosition(null);
        e.currentTarget.innerText && setNewLanguage(e.currentTarget.innerText);
    };
    return {open,menuOpen,menuClose}
}