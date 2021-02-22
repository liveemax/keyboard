export const intupArrInWordArr=(arrNotDisableLetter,newText,punctuation,maxBadKeyInText)=>{
    let counter=0;
    punctuation=punctuation.filter((el,i)=>{
        return el!==undefined
    })
    if (punctuation[0]!=="")
    {
        for(let step in arrNotDisableLetter){
            for(let step1 in (arrNotDisableLetter[step].word.split(" "))){
                newText[counter]=arrNotDisableLetter[step].word.split(" ")[step1]+punctuation[Math.ceil(Math.random()*punctuation.length-1)].word

                ++counter
            }
            if(step>maxBadKeyInText){
                break
            }
        }
    }
    else {
        for(let step in arrNotDisableLetter){
            for(let step1 in (arrNotDisableLetter[step].word.split(" "))){
                newText[counter]=arrNotDisableLetter[step].word.split(" ")[step1]

                ++counter
            }
            if(step>maxBadKeyInText){
                break
            }
        }
    }

    return newText
}