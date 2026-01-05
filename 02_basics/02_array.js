let herros1 = ["thor", "ironman", "spiderman"];
let herros2 = ["superman", "flash", "batman"];

// herros1.push(herros2)
// console.log(herros1);

let allHerros = herros1.concat(herros2);
console.log(allHerros);

let = all_new_heros = [...herros1, ...herros2]; //spread operator

const nums = [1, 2, 3, [4, 5], 6, [7, 8, 9, [4, 7, 3]]];

let realArrya = nums.flat(Infinity);

console.log(realArrya);

console.log(Array.isArray("dhruv"));
console.log(Array.from("dhruv"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

