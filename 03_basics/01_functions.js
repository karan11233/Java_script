function sayMyName(){     // Function Declaration
     console.log('My name is: ' + 'Karan Chavda');
}
// sayMyName(); // My name is: Karan Chavda



function AddTwoNumbers(number1,number2){
    return (number1 + number2);
}
// console.log(AddTwoNumbers(10,20)); // 30

const result = AddTwoNumbers(10,20); // Sum of two numbers is: 30
// console.log(result); // undefined



function loginUserMessage(userName){
    if(!userName){
        console.log('Please provide a valid username');
        return 
    }
    else{
        return `${userName} just logged in`;
    }
}

// const massage = loginUserMessage(); // Karan Chavda just logged in
// console.log(massage);

function calculateCartPrice(...num1){
    return num1;
}

function anotherCalculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(10,20,30,40,50)); 
// console.log(anotherCalculateCartPrice(10,20,30,40,50)); 


const user = {
    name: 'Karan',
    age: 25,
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`);
}
// handleObject(user); // user name is Karan and age is 25


const myArr = [20,30,40]

function returnSecondValue(arr){
    return arr[1];
}


console.log(returnSecondValue(myArr));
