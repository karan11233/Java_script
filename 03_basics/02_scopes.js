
if(true){
    var a = 2  // var is a global scope
    let b = 3  // let is not global scope
    const c = 4
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username =  "Karan"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website);
    two()    
} 
//one()


function addOne(num){
    return num += 1
}
console.log(addOne(5))

const addTwo = function(num){
    return num += 2
}
console.log(addTwo(5))