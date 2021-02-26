import InputKeyboard from "./InputKeyboard.jsx";
import {connect} from "react-redux";
import {setInputAvailable} from "../../../redux/input-reducer.ts";
import {setSpeedType} from "../../../redux/header-reducer";
import {setErrorCount} from "../../../redux/header-reducer";
import {setCurrentLetter} from "../../../redux/header-reducer";
import {setAllText} from "../../../redux/header-reducer";
import {setInitialTime} from "../../../redux/header-reducer";
import {setButtonToKeyboard} from "../../../redux/header-reducer";

let mapStateToProps = (state) => {
    return {
        allText: state.headerKeyboard.allText,
        speed: state.inputKeyboard.speed,
        error: state.inputKeyboard.error,
        isInputAvailable: state.inputKeyboard.isInputAvailable,
        alphabet:state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        separator:state.inputKeyboard.separator,
        initialTime:state.headerKeyboard.initialTime,
    }
}

export default connect(mapStateToProps, {setInitialTime,setAllText,setInputAvailable,setSpeedType,setErrorCount,setCurrentLetter,setButtonToKeyboard})(InputKeyboard)