import InputKeyboard from "./InputKeyboard.jsx";
import {connect} from "react-redux";
import {setAllText} from "../../../redux/input-reducer.js";
import {setInputAvailable} from "../../../redux/input-reducer.js";
import {setSpeedType} from "../../../redux/header-reducer.js";
import {setErrorCount} from "../../../redux/header-reducer.js";
import {setCurrentLetter} from "../../../redux/header-reducer.js";

let mapStateToProps = (state) => {
    return {
        allText: state.inputKeyboard.allText,
        speed: state.inputKeyboard.speed,
        error: state.inputKeyboard.error,
        isInputAvailable: state.inputKeyboard.isInputAvailable,
        alphabet:state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        separator:state.inputKeyboard.separator,
    }
}

export default connect(mapStateToProps, {setAllText,setInputAvailable,setSpeedType,setErrorCount,setCurrentLetter})(InputKeyboard)