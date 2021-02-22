import {bubbleSort} from "./bubbleSort.js";

export const sortTextByScore = (alphabet) => {
    let arrNotDisableLetter = [""]
    let arrNotDisablePunkt = [""]
    let step=0
    let wrapper=60
    for(let key in alphabet){
        if(key>=wrapper&&alphabet[key].disable===false) {
            arrNotDisablePunkt[key-wrapper]=alphabet[key]
        }
        else if(alphabet[key].disable===false) {arrNotDisableLetter[step]=alphabet[key] ;step++
        }
    }
    arrNotDisableLetter=bubbleSort(arrNotDisableLetter)
    return ({arrNotDisableLetter, punctuation: arrNotDisablePunkt})
}
