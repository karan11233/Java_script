class User {
    constructor(userName,email,password){
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return ` ${this.userName.toUpperCase()}`
    }
}

const user1 = new User('karan','karan@gmail.com',123)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


