const handlerClick=(e,setAllText,alphabet,setLetter,setInputAvailable,isInputAvailable,setCurrentError)=>{

    let form=document.getElementById("form")
    if(isInputAvailable===false){
        setInputAvailable(true)
        form.style.opacity="1"
        setCurrentError(0)
        form.firstChild.focus()
        setLetter(0)
        setAllText(alphabet)
    }


}
export default handlerClick