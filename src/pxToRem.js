const fontSize = 14
const htmlFontSize = 16
const coef = fontSize / 14;
const pxToRem=(size)=>{
return (`${(size / htmlFontSize) * coef}rem`)
}
export default pxToRem;