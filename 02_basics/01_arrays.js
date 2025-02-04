// Array 

const myArr = [0,1,2,3,4,5,]
// console.log(myArr);

const myArrOne = new Array(1,2,3,4,5)
// console.log(myArrOne);


// Array methods 
myArrOne.push(6)        //Push the element in the end of the array
// console.log(myArrOne);

myArrOne.pop()          //Pop the element from the end of the array
// console.log(myArrOne);

myArrOne.unshift(9)    //add the element in the start of the array
// console.log(myArrOne);

myArrOne.shift()       //remove the element from the start of the array
// console.log(myArrOne);

const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

// console.log(typeof newArr)
// console.log(typeof myArr)



// Slice and Splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // it will not remove the element from the arrayx
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)  // it will remove the element from the array and return the removed element
console.log("C",myArr);         
console.log(myn2);
