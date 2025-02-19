const user = {
    name: 'Karan',
    Id: 324,
    isAvailable: true,
    chai: function(){
        console.log('kam nahi bana');
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(user,'Id'));
// console.log(user)
Object.defineProperty(user,'Id',{
    writable: false,   // after applying this you can not change the value 
    enumerable: false,  // it will hide the data 

})
// console.log(Object.getOwnPropertyDescriptor(user,'Id'));

// user.Id = 456
// console.log(user)


// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

// Object.defineProperties(Math,"PI",{
//     writable : true
// })


// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))


for(let [key,value] of Object.entries(user)){
    if (typeof value != 'function'){
        console.log(`${key} and ${value}`);
    }
}