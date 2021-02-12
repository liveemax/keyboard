import {connect} from "react-redux";
import {compose} from "redux";
import HeaderKeyboard from "./HeaderKeyboard.jsx";
import {setIsKeyboardHidden} from "../../../redux/header-reducer.js";
import {setNewLanguage} from "../../../redux/header-reducer.js";
let mapStateToProps=(state)=>{

    return{
        allLang:state.headerKeyboard.allLang,
        isKeyboardHidden:state.headerKeyboard.isKeyboardHidden,
        badLetter:state.headerKeyboard.sortedNotDisableScoreAlphabet,
    }
}

export default compose(connect(mapStateToProps,{setNewLanguage,setIsKeyboardHidden})(HeaderKeyboard));
