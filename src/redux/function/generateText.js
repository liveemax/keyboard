export const generateText=(arrNotDisableLetter,wordsInAllText)=>{

    let newText="";
    for(let step=0;step!==6;step++){
        newText+=arrNotDisableLetter[step].word
    }
    newText=newText.split(" ")
    for(let step=0;step!==wordsInAllText;step++){
        newText[step]=newText[Math.ceil(Math.random()*wordsInAllText)]
    }
    newText=newText.slice(0,wordsInAllText).join(" ")
    return newText
}