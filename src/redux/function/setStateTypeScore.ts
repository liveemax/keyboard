import {Alphabet} from "../header-reducer";

export const setStateTypeScore=(currentAlphabet:Alphabet):Alphabet=>{
    let speed:Array<number>=[],error:Array<number>=[],counter:Array<number>=[],quotient:Array<number>=[],typeScore:Array<number>=[]
    for(let key in currentAlphabet){
        if(currentAlphabet[key].speedType.length===0){
            typeScore[Number(key)]=999
            currentAlphabet[key].typeScore=typeScore[Number(key)]
            continue
        }
        speed[Number(key)]=currentAlphabet[key].speedType.reduce((acc:string,el:string):number=>{
            return Number(acc) + Number(el)
        },0);
        speed[Number(key)]=speed[Number(key)]/currentAlphabet[key].speedType.length
        error[Number(key)]=currentAlphabet[key].errorCount;
        counter[Number(key)]=currentAlphabet[key].typeCounter;
        if(counter[Number(key)]>0||error[Number(key)]>0)
            quotient[Number(key)]=error[Number(key)]/counter[Number(key)]
        else quotient[Number(key)]=0
        typeScore[Number(key)]=speed[Number(key)]+quotient[Number(key)]
        currentAlphabet[key].typeScore=typeScore[Number(key)]
    }

    return currentAlphabet
}