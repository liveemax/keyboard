export const setHandleError=(div:string,setCurrentError:(error:number)=>void,currentError:number,setErrorCount:()=>void)=>{
    setCurrentError(++currentError)
    if(div!==" ")
    setErrorCount()
}