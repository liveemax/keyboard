export const sortTextByScore=(alphabet,)=>{
    let arrNotDisableLetter = []
    for (let key in alphabet) {
        if (alphabet[key].disable === false && key < 60) {

            if (key === "0") {
                arrNotDisableLetter[key] = alphabet[key]
            }
            else if (key > 5 && arrNotDisableLetter[5].speedType < alphabet[key].speedType) {
                arrNotDisableLetter.unshift(alphabet[key])
            }
            else if (key <= 5) {
                if (alphabet[key].speedType > arrNotDisableLetter[0].speedType) {
                    arrNotDisableLetter.unshift(alphabet[key])
                }
                else {
                    arrNotDisableLetter.push(alphabet[key])
                }
            }
        }
    }
    return arrNotDisableLetter
}