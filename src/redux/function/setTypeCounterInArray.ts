
export const setTypeCounterInArray=(currentAlphabet:any,currentIndex:string):void=>{
    ++currentAlphabet[Number(currentIndex)].typeCounter
}