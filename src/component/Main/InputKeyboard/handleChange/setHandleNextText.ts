export const setHandleNextText=(alphabet:any,setAllText:(alphabet:any)=>void,setCurrentError:(error:number)=>void,setLetter:(letter:number)=>void)=>{
    setAllText(alphabet)
    setCurrentError(0)
    setLetter(0)
}