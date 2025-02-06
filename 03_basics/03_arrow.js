const user= {
    username: "karan",
    price: 99,

    welcomeMassage: function(){
        console.log(`welcome to website, ${this.username}`);
        console.log(this);
        
        
    }
}
// user.welcomeMassage()

// **********************************Interesting*****************************
// console.log(this);
// this.add = 199  
// console.log(this);

// function samosa(){
//     let userName = "Karan"
//     console.log(this.userName);
    
// }
// samosa()



//////////////////////////////////////// Arrow function ///////////////////////////////////


const samosa = () => {
    let userName = "Karan"
    console.log(this.userName);
    
}
// samosa()


// const addTwo = (num1, num2) => {
//     return (num1+num2)
// }
const addTwo = (num1, num2) => (num1+num2)  // this is called implicate return 


console.log(addTwo(5,6));

