// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number    => number
//        String    => string
//        Boolean   => boolean
//        null      => object
//        undefined => undefined
//        Symbol    => symbol
//        BigInt    => bigint

// 2) Non-primitive Datatypes
//        Arrays    => object
//        Function  => function
//        Object    => object


// Primitive 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 7
const scoreValue = 7.5
const isLoggedIn = false
const outSideTemp = null
let userEmail;


const id = Symbol('1234')
const anotherId = Symbol('1234')
//console.log(id === anotherId);

//console.log(id);
//console.log(anotherId);



// Non-primitive or reference 
// Array, Objects, Functions

const heros = ["saktiman", "nagraj", "doga"]
let myobj = {
    name:"Karan",
    age:22,
     
}
//console.log(myobj.name);

const myfunction = function(){
    console.log("hello World");
}


