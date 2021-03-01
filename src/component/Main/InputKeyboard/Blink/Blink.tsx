import {useEffect} from "react";
import {useState} from "react";
import {makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
    root:{
        width:"100%",
        height:"100%",
        position:"absolute",
        opacity:0.4,
        display:"inline-block",
        transform:"translate(-100%,10%)",
    }
})
const Blink:React.FC=({...props})=> {
    const classes = useStyle();
    const [time, setTime] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => setTime(!time), 300);
        return () => {
            clearInterval(interval);
        }
    }, [time]);
    return(
        <span id={"blink"} className={classes.root} style={time?{backgroundColor:"#000"}:{backgroundColor:"transparent"}} aria-disabled={true}> </span>
    )
}


export default Blink