const userData = {
  name: "dhruv",
  email: "dhruv@gmail.com",
  age: 23,
  city: "vadodara",
  getUserDetail: function () {
    // console.log(`get user detail ${this.name}`);
    // console.log(`get user detail ${this}`);
  },
};

console.log(userData.name);
console.log(userData["city"]);
userData.getUserDetail();


function user(name,age,city){
    this.name = name
    this.age = age
    this.city = city
    return this
}


const userOne = new user('dhruv',22,'amreli')
const usertwo = new user('tushar',28,'amreli')
console.log(userOne);
console.log(usertwo);
