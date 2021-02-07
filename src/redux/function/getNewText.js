import {sortTextByScore} from "./sortTextByScore.js";
import {generateText} from "./generateText.js";
let wordsInAllText=5;
export const getNewText = (alphabet) => {
    alphabet = alphabet.alphabet;
    let arrNotDisableLetter=sortTextByScore(alphabet)
    let newText=generateText(arrNotDisableLetter,wordsInAllText)
    return (newText)
}