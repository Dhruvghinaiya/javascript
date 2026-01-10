class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

}

class Admin extends User {
  constructor(name, city, password) {
    super(name)
    this.city = city;
    this.password = password;
  }

  getUser(){
    console.log(`hello mr ${this.name}`);
    
  }
}


let Obj1 = new Admin("Dhruv",'amreli',1234);
// let obj2 = new  User();

console.log(Obj1.city);
console.log(Obj1.password);
// console.log(obj1.name);
Obj1.getUser()



