const whereNewRow = (separator) => {
    return(el, index, arr)=>{
    if (index%separator===(separator-1)) {
        let step
        for (step=0;arr[index+step]!==" ";step++) {
            if(arr[index+step+1]===" ") {
                arr[index + step + 1] = "/n"
                break
            }
        }
    }
    return el
}
}
export default whereNewRow