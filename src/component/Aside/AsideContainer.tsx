import {connect} from "react-redux";
import Aside from "./Aside";
import {AppStateType} from "../../redux/store";

const mapStateToProps=(state:AppStateType)=>{
    return {statistic:state.headerKeyboard.sortedNotDisableScoreAlphabet}
}

export default connect(mapStateToProps)(Aside)