import {Alphabet} from "../header-reducer";

export const getKeyComplexity=(currentAlphabet:Alphabet,sliderValue:number[]):Alphabet=>{
    let step
    let arrKeys = Object.keys(currentAlphabet)
    let arrKeysLength=Object.keys(currentAlphabet).length
    let numberLetterSteps = 100 /arrKeysLength
    for (step = 1; arrKeysLength!==step; step++) {
        if(sliderValue[0] > numberLetterSteps * step)
        {
            arrKeys.shift()
        }
        if (sliderValue[1] < (100 - step*numberLetterSteps))
        {
            arrKeys.splice(-1,1)
        }
    }
    step=0;
    for (const [key, value] of Object.entries(currentAlphabet)) {
        if (arrKeys[step] !== key) {
            currentAlphabet[Number(key)].disable = true;
            step--
        }
        else {
            currentAlphabet[Number(key)].disable = false;
        }
        step++
    }
    return currentAlphabet
}
