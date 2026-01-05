// const tinderApp = new Object();
const tinderApp = {};
tinderApp.name = 'dhruv'
tinderApp.age = 22
console.log(tinderApp);


const userData = {
    email:'abc@gmail.com',
    fullName:{
        userName:{
            firstName:'Dhruv',
            lastName:'ghinaiya'
        }
    }
}

console.log(userData.fullName.userName.firstName);


const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };
const obj3 = { 5: "E", 6: "F" };

// const obj4 = { obj1, obj2 };
// const obj4 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
console.log(obj4);

console.log(Object.keys(tinderApp));
console.log(Object.values(tinderApp));
console.log(Object.entries(tinderApp));

const {email} = userData;

console.log(email);
