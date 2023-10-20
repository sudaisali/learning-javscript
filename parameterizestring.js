const str = "Hello Pakistan."

const paramstr = (str)=>{
 const newStr  = str.trim().replace(/\s/,"-").toLowerCase().replace(/[^a-zA-Z0-9 -]/,"")
 return newStr
}

console.log(paramstr(str))