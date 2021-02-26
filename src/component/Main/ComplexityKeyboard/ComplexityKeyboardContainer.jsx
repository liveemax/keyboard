import ComplexityKeyboard from "./ComplexityKeyboard.jsx";
import {connect} from "react-redux";
import {setValueDisable} from "../../../redux/header-reducer";
import {setSliderValue} from "../../../redux/header-reducer";



let mapStateToProps=(state)=>{
    return {
        currentLang: state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        sliderValue: state.headerKeyboard.sliderValue,
    }
}

export default connect(mapStateToProps, {setValueDisable,setSliderValue})(ComplexityKeyboard)