import InputKeyboard from "./InputKeyboard.jsx";
import {connect} from "react-redux";
import {setInputAvailable} from "../../../redux/input-reducer.js";
import {setSpeedType} from "../../../redux/header-reducer.js";
import {setErrorCount} from "../../../redux/header-reducer.js";
import {setCurrentLetter} from "../../../redux/header-reducer.js";
import {setAllText} from "../../../redux/header-reducer.js";

let mapStateToProps = (state) => {
    return {
        allText: state.headerKeyboard.allText,
        speed: state.inputKeyboard.speed,
        error: state.inputKeyboard.error,
        isInputAvailable: state.inputKeyboard.isInputAvailable,
        alphabet:state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        separator:state.inputKeyboard.separator,
    }
}

export default connect(mapStateToProps, {setAllText,setInputAvailable,setSpeedType,setErrorCount,setCurrentLetter})(InputKeyboard)