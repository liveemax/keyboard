import {sortTextByScore} from "./sortTextByScore.js";
import {generateText} from "./generateText.js";
let wordsInAllText=1;
let maxBadKeyInText=5;
export const getNewText = (alphabet) => {
    alphabet = alphabet.alphabet;
    let {arrNotDisableLetter,punctuation}=sortTextByScore(alphabet)
    let {newText}=generateText(arrNotDisableLetter,wordsInAllText,punctuation,maxBadKeyInText)
    return ({newText,arrNotDisableLetter})
}