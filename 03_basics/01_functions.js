function sayMyName(){     // Function Declaration
     console.log('My name is: ' + 'Karan Chavda');
}
sayMyName(); // My name is: Karan Chavda



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

const massage = loginUserMessage(); // Karan Chavda just logged in
console.log(massage);

