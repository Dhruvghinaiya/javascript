//get only array original propertys

Array.prototype.extraProperty = "dhruv";

const myArr = [1, 2, 3, 4, 5];

for (const i in myArr) {
  if (myArr.hasOwnProperty(i)) {
    console.log(i);
  }
}
