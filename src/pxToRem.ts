const htmlFontSize = (window as any).getComputedStyle(document.body).fontSize.split("px")[0]
const pxToRem=(size:number)=>{
return (`${(size / htmlFontSize)}rem`)
}
export default pxToRem;