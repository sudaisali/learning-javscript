const email = "sudaisali@gmail.com"

const emailprot = (email)=>{
     split = email.split("@")
     myname = split[0]
     ext = split[1]
     avg = split[0].length /2
     part1 = myname.substring(0 , avg)
     newemail = part1+"...@"+ext
    return newemail
    
}

console.log(emailprot(email))