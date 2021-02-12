import {intupArrInWordArr} from "./intupArrInWordArr.js";

export const generateText=(arrNotDisableLetter,wordsInAllText,punctuation,maxBadKeyInText)=>{
    let newText=[];
    if(arrNotDisableLetter[0]===""){
        newText="ALL BUTTON WAS DISABLE";
        return {newText}
    }
    newText=intupArrInWordArr(arrNotDisableLetter,newText,punctuation,maxBadKeyInText)

    newText=newText.slice(0,wordsInAllText).join(" ")
    return {newText}
}