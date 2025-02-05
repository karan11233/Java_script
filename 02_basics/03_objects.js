const mySym = Symbol(); // Symbol is a new data type in ES6

const JsUser = {
    name: {
        firstName: "Karan",
        lastName: "Chavda"
    },
    [mySym]: "This is a symbol",  // you can also use symbol as a key
    age: 21,
    location: "Vadodara",
    email: "karan@google.com",
    isLoggedIn: false
}

//how to access the object 

// console.log(JsUser["name"]["firstName"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(mySym === JsUser[mySym]);

JsUser.age = 22
// console.log(JsUser);


//Object.freeze(JsUser) // it will freeze the object and you can't change the value of the object
JsUser.age = 22
// console.log(JsUser["age"]);



// JsUser.greeting = function(){         // js will automatically add the function in the object
//     console.log(`Hello, I am Karan ${this.name}`); // this will refer to the object  o/p:- Hello, I am Karan [object Object] 
// }


JsUser.greeting = function(){         // js will automatically add the function in the object
    console.log(`Hello, I am ${this.name.firstName} ${this.name.lastName}`); // this will refer to the object  o/p:- Hello, I am Karan [object Object] 
}



JsUser.greeting() // you can also add the function in the object
console.log(JsUser.greeting); // it will return the function reference
// console.log(JsUser);





