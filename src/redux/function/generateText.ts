import {inputArrInWordArr} from "./inputArrInWordArr";

export const generateText=(arrNotDisableLetter:any,wordsInAllText:number,punctuation:any,maxBadKeyInText:number)=>{
    let newText:[string]=[""];
    if(arrNotDisableLetter.length===0){
        newText[0]="ALL BUTTON WAS DISABLE";
        return {newText}
    }
    newText=inputArrInWordArr(arrNotDisableLetter,newText,punctuation,maxBadKeyInText)

    newText=[newText.slice(0,wordsInAllText).join(" ")]
    return {newText}
}