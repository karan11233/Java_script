const name = "karan " // one way to declare string
const gameName = new String("Karan-Game") // another way to declare string
const repoCount = 50 

//console.log(name + repoCount + " value"); // not preferable 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} and my game name is ${gameName}`);
// console.log(gameName);


// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

//console.log(gameName.indexOf('K')); 

const newString = gameName.substring(0,6)  // to get substring
// console.log(newString);
 
const anotherString = gameName.slice(-10,3) // to get substring but you can track string by negative number
// console.log(anotherString);

const newStringOne = "    Karan    " // trim remove the space 
// console.log(newStringOne);
// console.log(newStringOne.trim());  


const anotherNewString = "     Hii my name is karan chavda   "
// console.log(anotherNewString);
// console.log(anotherNewString.trim()); // it only remove space which is in starting and in the end of the string


const url = "https://karan.com/katan%23chavda34"  // to replace any word of char in string with other one 
const newUrl = url.replace('%23' , '-')
// console.log(newUrl);
// console.log(url.includes('karan'));

const fullName = "hi my name is karan chavda"
const nameArray = fullName.split(' ')
console.log(nameArray);







