
const str = "my name is sudais bin sohail"
const capitalWordletter = (str)=>{
    const arr = str.split(" ")
    const newval = arr.map((value)=>value.charAt(0).toUpperCase()+value.slice(1))
    const newstr = newval.join(" ")
    return newstr
}

console.log(capitalWordletter(str))
