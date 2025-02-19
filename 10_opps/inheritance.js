class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`${this.userName}`);
        
    }
}

const user1 = new User('karan')
// user1.logMe()


class Teacher extends User {
    constructor(userName,email,password){
        super(userName)
        this.email = email
        this.password = password
        // console.log(this)
    }

    addCourses(){
        console.log(`new course was added by ${this.userName}`);        
    }

    

}

const chai = new Teacher('karan','karan@gmail.com',123)
chai.addCourses()



