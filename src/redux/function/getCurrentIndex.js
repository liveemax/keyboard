let getCurrentIndex=(currentAlphabet,currentLetter)=>{
    let currentIndex
    for(let key in currentAlphabet){
        if(currentAlphabet[key].letter===currentLetter.toUpperCase())
        {
             currentIndex=key
            return currentIndex
        }
    }
}


export default getCurrentIndex