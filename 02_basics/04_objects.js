const instaUser = new Object();

instaUser.id = "01abc";
instaUser.name = "Karan";
instaUser.isLoggedin = false;

// console.log(instaUser);

const result = {
    maths:{
        practical:{
            internal: 29,
            external: 78,
        },
        thory : {
            internal: 28,
            external: 70,
        }
    },
    physics:{
        practical:{
            internal: 29,
            external: 78,
        },
        thory : {
            internal: 28,
            external: 70,
        }
    },
    chemistry:{
        practical:{
            internal: 29,
            external: 78,
        },
        thory : {
            internal: 28,
            external: 70,
        }
    }
}
//console.log(result.maths);



const obj1 = {1: "one", 2: "two"}
const obj2 = {3: "three", 4: "four"}
const obj3 =  Object.assign({}, obj1, obj2) // if you don't provide {} then it will assign in the obj1 
// console.log(obj3);                               and change the value of obj1 
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const obj4 = {...obj1, ...obj2} // you can also merge two objects by using spread operator
// console.log(obj4);



console.log(Object.keys(result)); // it will return the keys of the object
console.log(Object.values(result.maths)); // it will return the values of the object
console.log(Object.entries(result)); // it will return the keys and values of the object

console.log(result.hasOwnProperty("maths")); // it will return the boolean value if the object has the key or not
