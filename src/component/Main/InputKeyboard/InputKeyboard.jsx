import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {useReducer} from "react";
import whereNewRow from "./whereNewRow.jsx";
import ClickMeToTape from "./ClickMeToTape.jsx";
import SmallStatistic from "./SmallStatistic/SmallStatistic.jsx";
import handleChange from "./handleChange/handleChange.js";
import {makeStyles} from "@material-ui/core";
import Blink from "./Blink/Blink.jsx";
import ReactDOM from 'react-dom'
import SpaceBarIcon from '@material-ui/icons/SpaceBar';

const useStyle = makeStyles({
root:{
    paddingBottom:"20px",
},
    smallStatistic: {
        display: "flex",
        justifyContent: " space-evenly",
        paddingTop: "15px",
    },

    tape:{
        minHeight: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "& #form": {
            opacity: " 0.2",
            textAlign: "center",
        }
    },

    letter:{
    position:"relative",
    padding: "0px",
    border: "none",
    outline: "none",
    fontSize: "30px",
        "& svg":{
            position:"relative",
            transform:"translate(0px,40%)"
        }
},
    input:{
        width:"0",
        height:"0",
        padding:"0px",
        border:"0px"
    }

})

class Portal extends React.Component{
    constructor(props) {
        super(props)
        this.node=document.createElement('div');
        this.color="#aaa";
    }
componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.currentLetter===0 && this.node.id===`form`) {
            this.forceUpdate(() =>{ this.node = document.getElementById(`${this.props.currentLetter}`) || document.createElement('div')
            })
        }
        else this.node = document.getElementById(`${this.props.currentLetter}`) || document.createElement('div')
}
componentWillUpdate(nextProps, nextState, nextContext) {
        if(nextProps.currentLetter===nextProps.allText[0].length-1){
            if(document.getElementById("zoom")!==null)document.getElementById("zoom").style.transform="scale(0)"
        }
        if(nextProps.currentLetter!==this.props.currentLetter)
        {
            this.node.style.color=this.color
        }
    if((nextProps.currentLetter===0)&&nextProps.allText[0]!==this.props.allText[0]){
        if(this.props.allText[0]!==""){
        for(let step=0;this.props.allText[0].length-1>=step;step++) {
            document.getElementById(`${step}`).style.color="#000"
        }
        }
        this.node = document.getElementById(`form`) || document.createElement('div')
    }

}

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.node
        );
    }
}
function init(setLocalSpeed) {
    return {speed: setLocalSpeed};
}

function reducer(state, action) {
    switch (action.type) {
        case "SET_SPEED": {
            let newSpeed = state.speed.unshift(action.time)
            if (newSpeed > 20) state.speed.pop()
            return {...state}
        }
        default :
            return {}
    }
}
const InputKeyboard = (props) => {
    const classes = useStyle()
    const [input,setInput]=useState("")
    const [currentError, setCurrentError] = useState(0)
    const [state, dispatch] = useReducer(reducer, [0], init)
    const [currentLetter, setLetter] = useState(0)
    useEffect(() => {
        if (props.allText[0] !== "ALL BUTTON WAS DISABLE" && props.isInputAvailable === true) {
            document.getElementById(`input`).focus()
        }

    }, [props.allText,props.isInputAvailable])

    return (
        <div className={classes.root} id={"asd"}>
<Portal  allText={props.allText} isInputAvailable={props.isInputAvailable} currentLetter={currentLetter}>
                                            <Blink />
                                        </Portal>
            <div className={classes.smallStatistic}>
                <SmallStatistic currentError={currentError} speed={state.speed}/>
            </div>
            <input value={input} className={classes.input} id={"input"}
                   onKeyDown={(e)=>{
                       props.setButtonToKeyboard(e.key)}}
                   onKeyUp={(e)=>{
                       props.setButtonToKeyboard(" ")}}
                   onChange={(e)=>{handleChange(e,props.allText,setInput,props.setInitialTime,props.initialTime,props.speed, currentLetter, dispatch , setLetter,
                props.setAllText, props.alphabet, setCurrentError, currentError,props.setSpeedType,props.setErrorCount,props.setCurrentLetter)}} />
            <div className={classes.tape}>


                <div id={"form"}>
                    {
                        props.allText[0].split("").filter(whereNewRow(props.separator)).map((element, index, arr) => {
                            if (element === "/n"||element === " ") {
                                     return (<React.Fragment key={index}>
                                             <span className={classes.letter} id={index} ><SpaceBarIcon/></span>
                                         {element === "/n"?<i style={{display: "block"}}></i>:null}
                                            </React.Fragment>
                                    )
                                 }
                            else if(index === 0){
                                return (<React.Fragment key={index}>
                                        <span className={classes.letter} id={index} >{element}
                                        </span>
                                    </React.Fragment>

                                )
                            }
                                 else {
                                     return (
                                         <React.Fragment key={index}>
                                <span className={classes.letter} id={index} >
                                             {element}
                                         </span>
                                         </React.Fragment>

                                     )
                                 }

                            }
                        )

                    }
                </div>
                <ClickMeToTape allText={props.allText} setAllText={props.setAllText} alphabet={props.alphabet}
                               setLetter={setLetter} setInputAvailable={props.setInputAvailable}
                               isInputAvailable={props.isInputAvailable}
                               setCurrentError={setCurrentError}/>
            </div>
        </div>
    );
}

export default InputKeyboard