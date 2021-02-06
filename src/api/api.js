import axios from "axios";

const instance=axios.create({
    baseURL:"https://random-word-api.herokuapp.com/",
})

export const  inputAPI={
getNewText(){
return instance.get(`word`)
    .then(response=>{
    return (response.data)
    })
}
}


