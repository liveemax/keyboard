import {Alphabet} from "../types";

export const setTypeCounterInArray=(currentAlphabet:Alphabet,currentIndex:string):void=>{
    ++currentAlphabet[Number(currentIndex)].typeCounter
}