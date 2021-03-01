import InputKeyboard from "./InputKeyboard";
import {connect} from "react-redux";
import {setInputAvailable} from "../../../redux/input-reducer";
import {setSpeedType} from "../../../redux/header-reducer";
import {setErrorCount} from "../../../redux/header-reducer";
import {setCurrentLetter} from "../../../redux/header-reducer";
import {setAllText} from "../../../redux/header-reducer";
import {setInitialTime} from "../../../redux/header-reducer";
import {setButtonToKeyboard} from "../../../redux/header-reducer";
import {AppStateType} from "../../../redux/store";

let mapStateToProps = (state:AppStateType) => {
    return {
        allText: state.headerKeyboard.allText,
        isInputAvailable: state.inputKeyboard.isInputAvailable,
        alphabet:state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        separator:state.inputKeyboard.separator,
        initialTime:state.headerKeyboard.initialTime,
    }
}

export default connect(mapStateToProps, {setInitialTime,setAllText,setInputAvailable,setSpeedType,setErrorCount,setCurrentLetter,setButtonToKeyboard})(InputKeyboard)