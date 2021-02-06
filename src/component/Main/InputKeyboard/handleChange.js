
const handleChange = (e,currentLetter,setFirstTime,setSpeed,firstTime,setLetter,setAllText,alphabet,setCurrentError,currentError,setSpeedType,setErrorCount,setCurrentLetter) => {
    let lastButton;
    let firstButton;
    firstButton = e.currentTarget.value.slice(0, 1)
    setCurrentLetter(firstButton)
    lastButton = e.currentTarget.value.slice(-1)
    switch (firstButton) {
        case lastButton: {
            if(currentLetter === 0)
                setFirstTime(e.timeStamp)
            else {
                setSpeed(currentLetter / (e.timeStamp - firstTime))
                setSpeedType(e.timeStamp - firstTime)
            }
            setLetter(++currentLetter)
            if (e.currentTarget.nextElementSibling === null) {
                setAllText(alphabet)
                setCurrentError(0)
                setLetter(0)
            } else if (e.currentTarget.nextElementSibling.localName === "i")
                e.currentTarget.nextElementSibling.nextElementSibling.focus()
            else {e.currentTarget.nextElementSibling.focus()

            }
            break
        }
        default: {
            setCurrentError(++currentError)
            setErrorCount()
        }
    }
}
export default handleChange