import MyKeyboard from "./MyKeyboard.jsx";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{

    return {
        showKeyboard:{
            display:state.headerKeyboard.isKeyboardHidden?"none":"block",
        },
        keyboard:state.headerKeyboard.allLang[state.headerKeyboard.currentLang].alphabet,
        currentLang: state.headerKeyboard.currentLang
    }
}
let mapDispatchToProps =(dispatch)=>{
return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(MyKeyboard)