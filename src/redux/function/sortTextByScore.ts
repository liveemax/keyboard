import {bubbleSort} from "./bubbleSort";
import {Alphabet} from "../header-reducer";


export const sortTextByScore = (alphabet:Alphabet) => {
    let arrNotDisableLetter = []
    let arrNotDisablePunkt=[]
    let step=0
    let wrapper=60
    for(let key in alphabet){
        if(Number(key)>=wrapper&&!alphabet[key].disable) {
            arrNotDisablePunkt[Number(key)-wrapper]=alphabet[key]
        }
        else if(!alphabet[key].disable) {arrNotDisableLetter[step]=alphabet[key] ;step++
        }
    }
    arrNotDisableLetter=bubbleSort(arrNotDisableLetter)
    return ({arrNotDisableLetter, punctuation: arrNotDisablePunkt})
}
