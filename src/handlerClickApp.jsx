import store from "./redux/store.js";

let handlerClickApp=(e,isInputAvailable,setInputAvailable)=>{
    let form=document.getElementById("form")
    if(isInputAvailable) {
    setInputAvailable(false)
    form.style.opacity="0.2"
}
}


export default handlerClickApp