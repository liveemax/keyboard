import MyKeyboard from "./MyKeyboard.jsx";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{

    return {
        showKeyboard:{display:state.headerKeyboard.isKeyboardHidden?"none":"block"}
    }
}
let mapDispatchToProps =(dispatch)=>{
return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(MyKeyboard)