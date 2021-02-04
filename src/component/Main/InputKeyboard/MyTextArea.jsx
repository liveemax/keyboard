import classes from "../main.module.css";

let MyTextArea = ({setFirstTime, firstTime, speed, counterLetter, setLetter, setSpeed, setCurrentError, currentError, ...props}) => {

    const handleChange = (e) => {
        let lastButton;
        let firstButton;
        firstButton = e.currentTarget.value.slice(0, 1)
        lastButton = e.currentTarget.value.slice(-1)

        switch (firstButton) {

            case lastButton: {
                counterLetter === 0 ? setFirstTime(e.timeStamp) : setSpeed(counterLetter / (e.timeStamp - firstTime))
                setLetter(++counterLetter)
                if (e.currentTarget.nextElementSibling === null) {
                    props.setAllText()
                    setCurrentError(0)
                } else if (e.currentTarget.nextElementSibling.localName === "i")
                    e.currentTarget.nextElementSibling.nextElementSibling.focus()
                else e.currentTarget.nextElementSibling.focus()
                break
            }
            default: {
                setCurrentError(++currentError)
            }
        }
    }
    if (props.value === "/n"){
        return (
            <>
                <input id={props.name} {...props} value={" "} className={classes.letter} onChange={handleChange}/>
                <i style={{display: "block"}}></i>
            </>
        )
        }
    else if(props.name === "0") {




        return (<input id={props.name} {...props} className={classes.letter} onChange={handleChange}/>)}
    else return (<input id={props.name} {...props} className={classes.letter} onChange={handleChange}/>)
};


export default MyTextArea