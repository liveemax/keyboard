import {Alphabet} from "../header-reducer";

export const getCurrentIndex=(currentAlphabet:Alphabet,currentLetter:string):string=>{
    let currentIndex
    for(let key in currentAlphabet){
        if(currentAlphabet[key].letter.toString()===currentLetter.toUpperCase())
        {
             currentIndex=key
            return currentIndex
        }
    }
    return "" //refactor
}


