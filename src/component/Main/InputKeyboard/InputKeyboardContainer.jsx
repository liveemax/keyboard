import InputKeyboard from "./InputKeyboard.jsx";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
    allText: state.inputKeyboard.allText,
    speed: state.inputKeyboard.speed,
    error: state.inputKeyboard.speed,
    }
}
let mapDispatchToProps=()=>{
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(InputKeyboard)