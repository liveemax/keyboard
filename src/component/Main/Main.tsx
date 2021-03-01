import React from "react";
import HeaderContainer from "./HeaderKeyboard/HeaderKeyboardContainer";
import MyKeyboardContainer from "./MyKeyboard/MyKeyboardContainer";
import ComplexityKeyboardContainer from "./ComplexityKeyboard/ComplexityKeyboardContainer";
import InputKeyboardContainer from "./InputKeyboard/InputKeyboardContainer";

const Main:React.FC = () => {
    return (
        <main>
            <HeaderContainer/>
            <ComplexityKeyboardContainer/>
            <InputKeyboardContainer/>
            <MyKeyboardContainer/>
        </main>

    );
}
export default Main;