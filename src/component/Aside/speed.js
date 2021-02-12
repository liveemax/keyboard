export const speed=(speed)=>{
    if(speed===undefined) return 0
    let newSpeed= speed.reduce((acc,el)=>{
        return acc=(acc*1+el*1).toFixed(2)
    },0)
    return newSpeed
}
