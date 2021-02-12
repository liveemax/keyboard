import {connect} from "react-redux";
import Aside from "./Aside.jsx";
const mapStateToProps=(state)=>{
    return {statistic:state.headerKeyboard.sortedNotDisableScoreAlphabet}
}

export default connect(mapStateToProps)(Aside)