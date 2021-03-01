import {MyKeyboard} from "./MyKeyboard";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";

let mapStateToProps =(state:AppStateType)=>{

    return {
        showKeyboard:{
            display:state.headerKeyboard.isKeyboardHidden?"none":"block",
        },
        isKeyboardHidden:state.headerKeyboard.isKeyboardHidden,
        keyboard:state.headerKeyboard.allLang[state.headerKeyboard.currentLang].alphabet,
        currentLang: state.headerKeyboard.currentLang,
        buttonToKeyboard:state.headerKeyboard.buttonToKeyboard
    }
}
export default connect(mapStateToProps)(MyKeyboard)
