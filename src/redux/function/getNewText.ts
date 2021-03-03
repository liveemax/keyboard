import {generateText} from "./generateText";
import {sortTextByScore} from "./sortTextByScore";

export const getNewText = (alphabet:any,wordsInAllText:number,maxBadKeyInText:number) => {
    let {arrNotDisableLetter,punctuation}=sortTextByScore(alphabet)
    let {newText}=generateText(arrNotDisableLetter,wordsInAllText,punctuation,maxBadKeyInText)
    return ({newText,arrNotDisableLetter})
}