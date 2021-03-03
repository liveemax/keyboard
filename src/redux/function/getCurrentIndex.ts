
export const getCurrentIndex=(currentAlphabet:any,currentLetter:string):string=>{
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


