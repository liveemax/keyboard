import {connect} from "react-redux";
import {compose} from "redux";
import {selectLanguage} from "../../../redux/header-reducer.js";
import HeaderKeyboard from "./HeaderKeyboard.jsx";
import {selectKeyboard} from "../../../redux/header-reducer.js";

let mapStateToProps=(state)=>{
    return{
        allLang:state.headerKeyboard.allLang,
        isKeyboardHidden:state.headerKeyboard.isKeyboardHidden,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        newLanguage:(newLanguage)=>
    {
        dispatch(selectLanguage(newLanguage))
    },
        setIsKeyboardHidden:(isKeyboardHidden)=>{
            dispatch(selectKeyboard(isKeyboardHidden))
        }
}
}



export default compose(connect(mapStateToProps,mapDispatchToProps)(HeaderKeyboard));
