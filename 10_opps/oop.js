const user = {
    name: 'karan',
    logInCount: 8,
    signedIn : true,

    getUserDetail : function(){
        console.log('get user data from database');
        
    }
}

// console.log(user['signedIn']);

function User(username,logInCount,isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    return this
}

const user1 =  User('karan',3,false)
const user2 =  new User('karan1',30,true)

console.log(user1)
