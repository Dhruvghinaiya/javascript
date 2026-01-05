let name = "Dhruv";
let city = "vadodara";

console.log(`hello my name is ${name} and i am from ${city}`);

let fullName = new String("Dhruv Ghinaiya");

// console.log(fullName.);
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.trim());
console.log(fullName.charAt(0));
console.log(fullName.slice(0, 5));
console.log(fullName.substring(0, 5));
console.log(fullName.replace("Dhruv", "Tushar"));
console.log(fullName.includes("Dhruv"));
console.log(fullName.indexOf("a"));
let skills = "javascipt,react,php,laravel";
console.log(skills.split(","));

// let practice = "  Dhruv Patel  ";
// console.log(practice.trim().toUpperCase());
// console.log(practice.includes('Patel'));
// console.log(practice.trim().slice(0,5));

let email = "dhruv@gmail.com";
console.log(email.includes("@"));
let lang = "I love JavaScript";
console.log(lang.slice(6));
console.log(lang.substring(6));
let sentence = "I like PHP";
console.log(sentence.replace("PHP", "javascipt"));

let str = "Dhruv";
let rev = "";

for (let a = str.length - 1; a >= 0; a--) {
  rev += str.charAt(a);
}

console.log(rev);

let text = "I am learning JavaScript";
let words = text.split(" ");
console.log(words.length);

let otherName = "  Dhruv Patel  ";

// Output: dhruv_patel

console.log(otherName.trim().replace(" ", "_"));

if (email.includes("@")) {
  console.log("valid Email");
} else {
  console.log("invalid email");
}

let mobile = "9876543210";
let result = "";

for (let a = 0; a < mobile.length; a++) {
  if (a < mobile.length-4) {
    result += "*";
  } else {
    result += mobile.charAt(a);
  }
}

console.log(result);

// let firstCharacterCapital = city.charAt(0).toUpperCase() + city.substring(1);
let firstCharacterCapital = city.charAt(0).toLowerCase() + city.substring(1,7).toUpperCase()+city.slice(7).toLowerCase();

console.log(firstCharacterCapital);
