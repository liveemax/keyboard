import {generateText} from "./generateText";
import {Alphabet} from "../types";
import {sortTextByScore} from "./sortTextByScore";

export const getNewText = (alphabet:Alphabet,wordsInAllText:number,maxBadKeyInText:number) => {
    let {arrNotDisableLetter,punctuation}=sortTextByScore(alphabet)
    let {newText}=generateText(arrNotDisableLetter,wordsInAllText,punctuation,maxBadKeyInText)
    return ({newText,arrNotDisableLetter})
}