import {Alphabet} from "../header-reducer";

export const setSpeedInArray = (currentAlphabet:Alphabet, currentIndex:string,speedType:string,howMachSpeedKey:number) => {
    let speed = currentAlphabet[Number(currentIndex)].speedType
    currentAlphabet[Number(currentIndex)].speedType.push(speedType as never)
    if (speed.length > howMachSpeedKey)
        currentAlphabet[Number(currentIndex)].speedType.shift()
}