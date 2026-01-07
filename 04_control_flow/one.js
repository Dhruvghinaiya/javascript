if (2 !== "3") {
  console.log("executed");
}

let temperature = 30;

if (temperature <= 30) {
  console.log("temperature less than 30");
} else if (temperature > 30) {
  console.log("temperature greater than 30");
} else {
  console.log("please enter valid temperature number");
}

const score = 178;
if (score > 100) {
  let power = "fly";
  console.log(`User Power:${power}`);
}

const userLoginIn = true;
const debitCard = false;
const userloggendFromGoogle = true;
const loggedFromEmail = false;
if (userLoginIn && debitCard) {
  console.log("Allow to buy  course");
}

if (userloggendFromGoogle || loggedFromEmail) {
  console.log("user logged in ");
}
