const str = "Helloworld"

const convertedtext =  str.replace(/[A-za-z]/g , (match)=>{
    
    if(match === match.toLowerCase()){
    return match.toUpperCase()
    }
    else{
    return match.toLowerCase()
    }
})

     console.log(
       convertedtext
     )