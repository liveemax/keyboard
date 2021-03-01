import {connect} from "react-redux";
import {compose} from "redux";
import HeaderKeyboard from "./HeaderKeyboard";
import {setIsKeyboardHidden} from "../../../redux/header-reducer";
import {setNewLanguage} from "../../../redux/header-reducer";
import {AppStateType} from "../../../redux/store";

let mapStateToProps=(state:AppStateType)=>{
    return{
        allLang:state.headerKeyboard.allLang,
        isKeyboardHidden:state.headerKeyboard.isKeyboardHidden,
        badLetter:state.headerKeyboard.sortedNotDisableScoreAlphabet,
        allText:state.headerKeyboard.allText,
        currentLetter:state.headerKeyboard.currentLetter,
}
}

export default compose(connect(mapStateToProps,{setNewLanguage,setIsKeyboardHidden})(HeaderKeyboard));
