const score = 100 // one way to declare the number
// it will create a variable and assign the value in it
// console.log(typeof score);
// console.log(score);


const balance = new Number(120) // another way to declare number 
// it will create an object
// console.log(typeof balance);
// console.log(balance);



// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // used to set fixed number after decimal 


const otherNumber = 23.37345
// console.log(otherNumber.toPrecision(2));

const number = 10000000
// console.log(number.toLocaleString('en-IN'));

// ******************* // Math // ********************** //


// console.log(Math.abs(-4));
// console.log(Math.round(4.6545)); // it will round of the value                 // Ex:- 3.4456 => 3
                                                                                //or:- 3.5454 => 4


// console.log(Math.ceil(4.6545));  // it will round if the value in upper value  // Ex:- 3.4456 => 3
// console.log(Math.floor(4.6545)); // it will round of the value in lower value  // Ex:- 3.4456 => 4


console.log(Math.random());
console.log(Math.round((Math.random()*10)))




// ----- Maths in JS ----
// Maths library comes along with JS

// Methods ----
// 1. Math.abs() // Converts +ve / -ve integer values to positive
// 2. Math.round(4.3) // Output - 4
// 3. Math.round(4.6) // Output - 5
// 4. Math.ceil(4.2) // Output - 5 (gives top value)
// 5. Math.floor(4.9) // Output - 4 (gives bottom value)
// 6. Math.min(4,3,6,8) // Output - 3
// 7. Math.max(4,3,6,8) // Output - 8
// 8. Math.random() // Gives random value between 0 & 1 in decimals

// Math.random() tricks -----
// Math.random()*10
// Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
// (Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

// ---- Trick to randomize value between range ----
// const min = 10
// const max = 20
// const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)



