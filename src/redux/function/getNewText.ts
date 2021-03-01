import {generateText} from "./generateText";
import {sortTextByScore} from "./sortTextByScore";
import {Alphabet} from "../header-reducer";

export const getNewText = (alphabet:Alphabet,wordsInAllText:number,maxBadKeyInText:number) => {
    let {arrNotDisableLetter,punctuation}=sortTextByScore(alphabet)
    let {newText}=generateText(arrNotDisableLetter,wordsInAllText,punctuation,maxBadKeyInText)
    return ({newText,arrNotDisableLetter})
}