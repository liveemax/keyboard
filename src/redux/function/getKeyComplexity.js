function getKeyComplexity(currentAlphabet,action){
    let step
    let arrKeys = Object.keys(currentAlphabet)
    let arrKeysLength=Object.keys(currentAlphabet).length
    let numberLetterSteps = 100 /arrKeysLength
    for (step = 1; arrKeysLength!==step; step++) {
        if(action.valueSlider[0] > numberLetterSteps * step)
        {
            arrKeys.shift()
        }
        if (action.valueSlider[1] < (100 - step*numberLetterSteps))
        {
            arrKeys.splice(-1,1)
        }
    }
    step=0;
    for (const [key, value] of Object.entries(currentAlphabet)) {
        if (arrKeys[step] !== key) {
            currentAlphabet[key].disable = true;
            step--
        }
        else {
            currentAlphabet[key].disable = false;
        }
        step++
    }
    return currentAlphabet
}
export default getKeyComplexity