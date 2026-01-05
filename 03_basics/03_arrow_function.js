const users = {
  name: "dhruv",
  age: 22,
  sayHello: function () {
    console.log(`hello ${this.name}`);
  },
};

users.sayHello();
users.name = "tushar";
users.sayHello();

// const sayhii = () => {
//     console.log('heyy');
// }

const sayhii = () => console.log("heyy");

// sayhii()
console.log(sayhii());
