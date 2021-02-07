function getKeyComplexity(stateCopy,action){
    let step
    let arrKeys = Object.keys(stateCopy.allLang[stateCopy.currentLang].alphabet)
    let arrKeysLength=Object.keys(stateCopy.allLang[stateCopy.currentLang].alphabet).length
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
    for (const [key, value] of Object.entries(stateCopy.allLang[stateCopy.currentLang].alphabet)) {
        if (arrKeys[step] !== key) {
            stateCopy.allLang[stateCopy.currentLang].alphabet[key].disable = true;
            step--
        }
        else {
            stateCopy.allLang[stateCopy.currentLang].alphabet[key].disable = false;
        }
        step++
    }
    return stateCopy
}
export default getKeyComplexity