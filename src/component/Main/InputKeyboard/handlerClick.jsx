
const handlerClick=(e,setInputAvailable,isInputAvailable,setCurrentError)=>{
    debugger
    if(isInputAvailable===false){
        e.currentTarget.firstElementChild.style.display="none"
        let form=e.currentTarget.previousElementSibling
        setInputAvailable()
        form.style.opacity="1"
        setCurrentError(0)
        form.firstChild.focus()
    }
    if(isInputAvailable===true){
        e.currentTarget.firstElementChild.style.display="block"
        let form=e.currentTarget.previousElementSibling
        setInputAvailable()
        form.style.opacity="0.2"
    }

}
export default handlerClick