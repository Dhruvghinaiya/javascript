//for

for (let a = 1; a <= 5; a++) {
  console.log(a);
}

// for (let i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

let names = ["dhruv", "tushar", "ajay", "darshan"];

for (let a = 0; a < names.length; a++) {
  console.log(names[a]);
}


// break  and continue

for(let i = 1;i<=10;i++){
    if(i==5){
        // console.log(i);
        // break
        continue
    }
    console.log(i);
    
}