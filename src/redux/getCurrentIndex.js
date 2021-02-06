let getCurrentIndex=(stateCopy)=>{
    let currentIndex
    let asd = stateCopy.allLang[stateCopy.currentLang].alphabet
    for(let key in asd){
        if(asd[key].letter===stateCopy.currentLetter.toUpperCase())
        {
             currentIndex=key
            return currentIndex
        }
    }
}


export default getCurrentIndex