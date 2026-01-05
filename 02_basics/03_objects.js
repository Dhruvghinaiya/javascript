let score = Symbol("47")

const jsUser = {
  name: "dhruv",
  email: "dhruv@gmail.com",
  age: 22,
  location: "vadodara",
  isLoging: true,
  lastLoginDays: ["monday", "sunday"],
  "first salary ": 12000,
  [score] : "52"
};

//two way to accept object value
console.log(jsUser.name);
console.log(jsUser["name"]);

console.log(jsUser["first salary "]);
console.log(jsUser[score]);

// jsUser.name = "tushar"

//not chnage any value after object freexe
// Object.freeze(jsUser)

jsUser.name = "tushar"
console.log(jsUser);

jsUser.greeting  = function (){
    console.log(`hello js ${this.name}`)
}

jsUser.greeting()





