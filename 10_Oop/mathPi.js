const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const obj = {
  name: "dhruv",
  age: 22,
  city: "vadodara",
};

Object.defineProperty(obj, "name", {
  writable: false,
  enumerable: false,
});


console.log(Object.getOwnPropertyDescriptor(obj, "name"));
