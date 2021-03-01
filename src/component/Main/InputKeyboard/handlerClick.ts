import {Alphabet} from "../../../redux/header-reducer";

const handlerClick=(e: object,allText: Array<string>,setAllText: (alphabet: Alphabet) => void,alphabet: any,setLetter: (letter: number) => void,setInputAvailable: (alphabet: Alphabet) => void,isInputAvailable: boolean,
                    setCurrentError: (error: number) => void)=>{
    let form=document.getElementById("form")
    if(!isInputAvailable){
        setInputAvailable(true)
        form!.style.opacity="1"
        setCurrentError(0)
        // form.firstChild.focus()
        setLetter(0)
        setAllText(alphabet)
    }
}
export default handlerClick
