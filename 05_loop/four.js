const data = {
  name: "dhruv",
  surname: "ghinaiya",
  age: 21,
  address: "vadodara",
  isLogged: true,
};

for (const key in data) {
  console.log(`${key} : ${data[key]}`);
}

let arr = [1, 2, 3, 4, 5];

for (const key in arr) {
  console.log(arr[key]);
}
