let score = 33

console.log(typeof(score));


/*conversion rule and notes

int conversion
String value     Int value         Type

"33"                33              integer
"33abc"             -               NaN (Not a number)
true                1               integer
false               0               integer

*/

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/* For boolean conversion 

value     Boolean value         Type
1           true                Boolean
0           false               Boolean
""          false               Boolean
"a"         true                Boolean
Nan         false
null        false
undefined   false
*/

let sumNumber = 33

let stringNumber = String(sumNumber)
console.log(typeof(stringNumber))
