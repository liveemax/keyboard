import ComplexityKeyboard from "./ComplexityKeyboard";
import {connect} from "react-redux";
import {setValueDisable} from "../../../redux/header-reducer";
import {setSliderValue} from "../../../redux/header-reducer";
import {AppStateType} from "../../../redux/store";

let mapStateToProps=(state:AppStateType)=>{
    return {
        currentLang: state.headerKeyboard.allLang[state.headerKeyboard.currentLang],
        sliderValue: state.headerKeyboard.sliderValue,
    }
}

export default connect(mapStateToProps, {setValueDisable,setSliderValue})(ComplexityKeyboard)