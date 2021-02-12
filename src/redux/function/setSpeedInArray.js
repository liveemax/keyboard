export const setSpeedInArray = (currentAlphabet, currentIndex, action,howMachSpeedKey) => {
    let speed = currentAlphabet[currentIndex].speedType
    currentAlphabet[currentIndex].speedType.push(action.speedType)
    if (speed.length > howMachSpeedKey)
        currentAlphabet[currentIndex].speedType.shift()
}