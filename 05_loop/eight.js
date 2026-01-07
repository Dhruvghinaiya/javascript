const nums = [1, 2, 3, 4, 5];

// const myTotal = nums.reduce((acc, currval) => {
//   console.log(`acc:${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = nums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "mobile",
    price: 14850,
  },
  {
    itemName: "laptop",
    price: 22745,
  },
  {
    itemName: "charger",
    price: 1245,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Payable: ${priceToPay}`);
