import React from "react";
import MyKeyboard from "./MyKeyboard.jsx";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{

    return {
        showKeyboard:{display:state.headerKeyboard.isKeyboardHidden?"none":"block"}
    }
}
let mapDispatchToProps =(dispatch)=>{

}
export default connect(mapStateToProps,mapDispatchToProps)(MyKeyboard)