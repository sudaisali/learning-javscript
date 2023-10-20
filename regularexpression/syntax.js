const self = "My name is sudais bin and is  sohail"

const regexp = new RegExp("name")
const regexp2 = /is/

console.log(regexp.test(self))
console.log(regexp2.test(regexp2)) // return true and false
console.log(regexp2.exec(regexp2)) // return specified value if present else null

//match search replace and split support regular experression