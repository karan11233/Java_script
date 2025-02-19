function setUserName(username){
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser('karan','karan@1233',1234)
console.log(chai);
// console.log(chai[setUserName])
