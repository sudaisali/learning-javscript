

const abrivateName = (msg)=>{
    const arr = msg.split(" ")
    const abbName = "MR "+ arr[0] + " " +arr[1].charAt(0)
    console.log(arr)
    console.log(abbName)
}


abrivateName("sudais Ali")