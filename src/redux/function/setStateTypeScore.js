export const setStateTypeScore=(action)=>{
    let currentAlphabet=action.alphabet
    let speed=[],error=[],counter=[],quotient=[],typeScore=[]
    for(let key in currentAlphabet){
        if(currentAlphabet[key].speedType.length===0){
            typeScore[key]=999
            currentAlphabet[key].typeScore=typeScore[key]
            continue
        }
        speed[key]=currentAlphabet[key].speedType.reduce((acc,el)=>{
                return acc * 1 + (el * 1)
        },0);
        speed[key]=speed[key]/currentAlphabet[key].speedType.length
        error[key]=currentAlphabet[key].errorCount;
        counter[key]=currentAlphabet[key].typeCounter;
        if(counter[key]>0||error[key]>0)
            quotient[key]=error[key]/counter[key]
        else quotient[key]=0
        typeScore[key]=speed[key]+quotient[key]
        currentAlphabet[key].typeScore=typeScore[key]
    }

    return currentAlphabet
}