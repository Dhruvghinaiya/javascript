class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
     this._password  = value
    }
}

let obj = new User('dhruv@gmail.com','ABCD');
console.log(obj.password);
