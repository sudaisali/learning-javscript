

const extractString = (msg ,value)=>{
    let substring='';
    for(i=0 ; i<=value ;i++){
        substring += msg[i]
    }
    return substring
}

console.log(extractString("sudais ali",4))