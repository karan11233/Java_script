const User = {
    _email : 'k@gmaol.com',
    _password: 123,

    get email(){
        return this._email
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password
    },
    set password(value){
        this._password = value
    }
}

const tea = Object.create(User)
console.log(tea.email)