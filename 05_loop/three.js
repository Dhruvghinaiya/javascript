// for loop

let arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greeting = "hello mr dhruv";
for (let greet of greeting) {
  if (greet === " ") {
    continue;
  }
  console.log(greet);
}

//maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");

console.log(map);

for(let [key,value] of map){
    console.log(key, ':-', value);
    
}