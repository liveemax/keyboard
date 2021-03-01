import {Alphabet} from "../header-reducer";

export const inputArrInWordArr=(arrNotDisableLetter:Alphabet,newText:[string],punctuation:Alphabet,maxBadKeyInText:number):[string]=>{
    let counter=0;
    punctuation=punctuation.filter((el: {})=>{
        return el!==undefined
    })
    if (punctuation.length!==0)
    {
        for(let step in arrNotDisableLetter){
            for(let step1 in (arrNotDisableLetter[step].word.split(" "))){
                newText[counter]=arrNotDisableLetter[step].word.split(" ")[step1]+punctuation[Math.ceil(Math.random()*punctuation.length-1)].word

                ++counter
            }
            if(Number(step)>maxBadKeyInText){
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
            if(Number(step)>maxBadKeyInText){
                break
            }
        }
    }

    return newText
}