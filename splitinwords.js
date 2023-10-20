

const splitinWords = (msg ,symbol)=>{

    let arr =[]
    let substring=''
    for(i=0 ; i<msg.length ; i++){
        if(msg[i] == symbol){
            arr.push(substring)
            console.log(arr)
            substring = ''
        }else{
            substring += msg[i]
            console.log(substring)
        }
    }
    arr.push(substring)
    return arr
}


console.log(splitinWords("sudais is my name", " "))