const whereNewRow = (separator:number) => {
    return(el:unknown, index:number, arr:Array<string>)=>{
    if (index%separator===(separator-1)) {
        let step
        for (step=0;step!==arr.length;step++) {
            if(arr[index+step+1]===" ") {
                let slice=arr.slice(index+step+1,arr.length)
                arr[index + step+1 ] = "/n"
                break
            }
        }
    }
    return true
}
}
export default whereNewRow