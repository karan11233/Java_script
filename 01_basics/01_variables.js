const accountId = 123;
let accountEmail = "karan@Google.com";
var accountPassword = "121345"
accountCity = "surat"
let accountState;


// accountId = 123     // you can not change the value of const variable 
accountEmail = "karan.com"
AccountPassword = "1211"
accountCity = "vadodara"



/*
Prefer not to use var 
because of the issue in block scope and functional scope. 
*/

// console.log(accountEmail);
// console.log(AccountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])