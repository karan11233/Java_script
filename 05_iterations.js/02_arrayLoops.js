// for of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}


const string = "hii my name is karan"
for (const Char of string) {
    // console.log(Char);
}


const objectArr = [{1:"one",2:"two"}, {3:"three",4:"four"}, {5:"Five",6:"six"}]
for (const object of objectArr) {
    // console.log(object);    
}



// Map //

const map = new Map()   // map is not iterable
map.set("a",1)
map.set("b",2)
map.set("b",2)
//console.log(map);

for (const [key, value] of map) {
    // console.log(key);
    // console.log(value);
}



const myObj = {
    "js" : "java script",
    "py" : "python",
    "rb" : "ruby"
}


for (const key in myObj) {
    //console.log(`${key} is shortcut of ${myObj[key]}`);    
}


let program = ["java", "python"]
for (const key in program) {
    //console.log(program[key]);
}


// For each loop.
// const coding = ["js", "cpp", "java", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )


// const number = [1,2,3] 
// let sum = 0
// number.forEach( (num) => {
//      sum += num 
// })
// console.log(`the sum of the array is ${sum}`);

// let multiplication = 1
// number.forEach( (num, index, arr) => {
//     console.log(num, index, arr);
//     multiplication *= num
// })
// console.log(multiplication);


const myCoding = [
    {
        languageName : "java",
        extension  : "java"
    },
    {
        languageName : "python",
        extension  : "py"
    },
    {
        languageName : "c++",
        extension  : "cpp"
    }
] 

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.extension);
} )


