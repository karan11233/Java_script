const promiseOne = new Promise((resolve,reject)=> {
    // Do an async task
    // DB calls, network call , cryptography
    setTimeout(()=>{
        // console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(()=> {
    // console.log('promise consumed');
}) // then directly connect to resolve




new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log('async task 2');
        resolve()
    },1000)
}).then(()=>{
    // console.log('async 2 resolved');
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve({username : 'karan',email: 'karan@gmail.com'})
    },1000)
})

promiseThree.then((user)=>{
    // console.log(user);
    
})

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error) {
//             resolve({username: 'karan', Password:'123'})
//         }else{
//             reject('ERROR : something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user) => { 
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log('The promise is either resolve or rejected'))

// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout( () => {
//         let error = false
//         if(!error){
//             resolve({username:'javaScript',Password:'123'})
//         }else{
//             console.log('Error : Js went wrong');
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive()


const testPromise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({name: 'karan',id: 21})
        }else{
            reject('Error: test not working')
        }
    })
})

testPromise.then((information)=>{
    console.log(information);
    
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('run sucsusfully');
})



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error:',error);
        
//     }    
// }
// getAllUsers()


 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{
    // console.log(data);
    return data[0].name
 })
 .then((name)=>{
    console.log(name);
    // console.log(name.name);
 })
 .catch((error)=>{
    console.log(error);
    
 })
