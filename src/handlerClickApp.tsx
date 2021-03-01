
let handlerClickApp=(e:{},isInputAvailable:boolean,setInputAvailable:(isInputAvailable:boolean)=>void)=>{
    let form=(document as any).getElementById("form")
    if(isInputAvailable===true) {
    setInputAvailable(false)
    form.style.opacity="0.2"
}
}


export default handlerClickApp