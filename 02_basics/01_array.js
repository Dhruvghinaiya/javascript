let myArr = [1, 4, 3, 8, 6];

console.log(myArr);

let myHeors = ["shaktiman", "naagraj"];

console.log(myHeors);

let myArr2 = new Array(7, 9, 2, 6);

console.log(myArr2);

//Array Methods
myArr.push(0); // add last value
console.log(myArr);

myArr.pop(); // remove last value
console.log(myArr);

myArr.unshift(5); // add first value
console.log(myArr);

myArr.shift(); // remove last value
console.log(myArr);

console.log(myArr.length); // return length of array

console.log(myArr.reverse()); // reverse array

console.log(myArr.indexOf(3));
console.log(myArr.includes(3));

// let stringArray = myArr.join()  // array to string

// console.log(myArr);
// console.log(stringArray);
// console.log(typeof stringArray);

console.log("a ", myArr);
let myn1 = myArr.slice(1, 3); // slice
console.log(myn1);
console.log("b ", myArr);

let myn2 = myArr.splice(1, 3); // splice    add last index and original array remove this value 
console.log(myn2);
console.log("c ", myArr);

