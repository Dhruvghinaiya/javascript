// var a = 10; //local scope
// var a = 11;
// a = 12;

// let b = 20; // block scope
// b = 22;

// const c = 30; // block scope

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Dhruv"
    function two(){
        const age = 22;
        console.log(username);
        console.log(age);
    }
    // console.log(age);
    two()    
}

one()


