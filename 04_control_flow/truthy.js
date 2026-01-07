// const userEmail = "dhruv@gmail.com";
const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//falsy values

// false, 0, -0, "", null, undefined, NAN

//truthy values

// true, 1, "false", " ", [], {}, function(){},

let data = [];

if (data.length === 0) {
  console.log("data is empty");
}

let users = {};

if (Object.keys(users).length === 0) {
  console.log("Object is empty");
}

//terniary operator

// condition ? true : false

const icePrice = 80;

icePrice > 50 ? console.log("greater 50") : console.log("less 50");
