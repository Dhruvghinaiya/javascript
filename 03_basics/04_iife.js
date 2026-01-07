// Immediately Invoked Function Expressions (IIFE)

(function hello() {
  console.log("hello js");
})();

((name) => {
  console.log(`DB CONNECTED ${name}`);
})('By Dhruv');
