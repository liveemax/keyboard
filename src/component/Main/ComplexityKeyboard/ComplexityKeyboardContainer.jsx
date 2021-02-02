import ComplexityKeyboard from "./ComplexityKeyboard.jsx";
import {connect} from "react-redux";
import {setSliderValue} from "../../../redux/header-reducer.js";
import {setValueDisable} from "../../../redux/header-reducer.js";

let mapStateToProps=(state)=>{
    debugger
    return {

        currentLang: state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        sliderValue: state.headerKeyboard.sliderValue,
    }
}
let mapDispatchToProps=(dispatch)=>{
return {
    setSliderValue:(event,sliderValue)=>{
        dispatch(setSliderValue(sliderValue))
    },
    setValueDisable:(event,key)=>{
        dispatch(setValueDisable(key))
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplexityKeyboard)