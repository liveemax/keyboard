export interface Alphabet{
    [x:number]: {
        letter:number,
        disable:boolean,
        speedType:[],
        typeScore:number,
        errorCount:number,
        typeCounter:number,
        word:string
    }
}
export type Punctuation=Array<{typeScore:number,word:string}>
