function sayHello() {
  console.log("Hello Dhruv");
}

function sum(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}
sayHello();
sum(4, 5);
sum();


function calculatePrice(...num){ // rest operator
    return num
}
console.log(calculatePrice(140,70,100))

function data(obj,arr){
    console.log(`Object: ${obj.name} Array:${arr[0]}`);
}

data({
    name:'dhruv',
    age:32
},[4,5,3,2])