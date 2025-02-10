const number = [1,2,3,4,5,6,7]

// const nweNums = number.map( (num)=> num += 10)
// console.log(nweNums);


// chaining in js

const newNums = number.map((num)=> num*= 10).map( (num)=> num+= 10).filter( (num)=> num > 40)
console.log(newNums);
