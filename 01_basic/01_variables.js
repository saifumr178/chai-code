const accountId = 4321
let accoutEmail ="noor@gmail.com"
var accountPassword = "1234656" 
accountCity = "Delhi"
let accountState;

//accountId = 2  //not allowed

accoutEmail = "hd@gmail.com"
accountPassword = "2121212121"
accountCity = "Jaipur"

console.log(accountId)

/*
prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accoutEmail,accountPassword,accountCity,accountState])