import InputKeyboard from "./InputKeyboard.jsx";
import {connect} from "react-redux";
import {setAllText} from "../../../redux/input-reducer.js";
import {setInputAvailable} from "../../../redux/input-reducer.js";

let mapStateToProps=(state)=>{
    return{
    allText: state.inputKeyboard.allText,
    speed: state.inputKeyboard.speed,
    error: state.inputKeyboard.error,
        isInputAvailable: state.inputKeyboard.isInputAvailable
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        setAllText:()=>{dispatch(setAllText())},
        setInputAvailable:()=>{dispatch(setInputAvailable())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputKeyboard)