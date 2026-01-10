class User {
  constructor(name, age, city, password) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.password = password;
  }

   encPassword  () {
    return `${this.password}abc`;
  }


   abc(){
    
  }

  this.abc   = () =>{}

}

let obj = new User("dhruv", 23, "amreli", 1234);

console.log(obj.encPassword());
