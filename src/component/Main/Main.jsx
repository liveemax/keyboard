import React from "react";
import HeaderContainer from "./HeaderKeyboard/HeaderKeyboardContainer.jsx";
import MyKeyboardContainer from "./MyKeyboard/MyKeyboardContainer.jsx";
import ComplexityKeyboardContainer from "./ComplexityKeyboard/ComplexityKeyboardContainer.jsx";
import InputKeyboardContainer from "./InputKeyboard/InputKeyboardContainer.jsx";

const Main = () => {
    return (
        <main >
            <HeaderContainer/>
            <ComplexityKeyboardContainer/>
            <InputKeyboardContainer/>
            <MyKeyboardContainer/>
        </main>

    );
}
export default Main;