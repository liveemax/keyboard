import {Alphabet} from "../types";

export const setSpeedInArray = (currentAlphabet:Alphabet, currentIndex:string,speedType:number,howMachSpeedKey:number) => {
    let speed = currentAlphabet[Number(currentIndex)].speedType
    currentAlphabet[Number(currentIndex)].speedType.push(speedType as never)
    if (speed.length > howMachSpeedKey)
        currentAlphabet[Number(currentIndex)].speedType.shift()
}