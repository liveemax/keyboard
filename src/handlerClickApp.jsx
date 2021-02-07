
let handlerClickApp=(e,isInputAvailable,setInputAvailable)=>{
    let form=document.getElementById("form")
    if(isInputAvailable===true) {
    setInputAvailable(false)
    form.style.opacity="0.2"
}
}


export default handlerClickApp