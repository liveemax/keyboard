import {Alphabet} from "../header-reducer";

export const setTypeCounterInArray=(currentAlphabet:Alphabet,currentIndex:string):void=>{
    ++currentAlphabet[Number(currentIndex)].typeCounter
}