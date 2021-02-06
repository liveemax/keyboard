const handlerClick=(e,setInputAvailable,isInputAvailable,setCurrentError)=>{
    let form=document.getElementById("form")
    if(isInputAvailable===false){
        setInputAvailable(true)
        form.style.opacity="1"
        setCurrentError(0)
        form.firstChild.focus()
    }


}
export default handlerClick