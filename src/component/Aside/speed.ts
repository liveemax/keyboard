export const speed=(speed:Array<string>):string=>{
    if(!speed) return "0"
    let newSpeed= speed.reduce((acc:string,el:string)=>{
        return (Number(acc)+Number(el)).toFixed(2)
    },"0")
    return newSpeed
}
