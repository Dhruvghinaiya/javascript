const coding = ["php", "java", "javascipt", "react", "c++"];

coding.forEach(function (item) {
  //pass the forEach function callback function and callback function not define name
  console.log(item);
});

coding.forEach((val) => {
  console.log(val);
});

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

let myCoding = [
  {
    languageName: "php",
    fileName: ".php",
  },
  {
    languageName: "javascript",
    fileName: ".js",
  },

  {
    languageName: "python",
    fileName: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.languageName}  :  ${item.fileName}`);
});
