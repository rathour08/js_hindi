const user = {
    username: "sahil",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


//user.username = "sam";
//user.welcomemessage();

// this reperesents the current context or current variables of an object


//console.log(this); // when we run this code and comment above log we get an empty object means current context is empty in node environment but in browser we get windows object


// function chai(){
//     console.log(this);
// }

//chai() // when we run this funtion this has some thing in it

// function chai(){
//     let user = "sahil"
//     console.log(this.user)
// }

// when we run this function we get undefined we can not use this inside function it is used in objects

// how to declare function using arrow function

// const chai = () => {
//     let username= "sahil"
//     console.log(username);
// }

// chai()  // when we display this value inside arrow function we get empty object in node env

// arrow function syntax

//() => {}

// we can hold this inside a variable

// const addthree = (num) => {
//     return num + 3;

// }

// console.log(addthree(5));

// we can also do this

// const addthree = (num) => num + 3;

// console.log(addthree(5));// we need not to write return keyworld

// we can also do this

// const addthree = (num) => (num + 3);

// console.log(addthree(5));   // agr curly braces me hai to return keyworld likhna pdta hai agr () in braces me hai to return keyworld nahi likhna pdta  this is known as implicit return explicit return is when we use curly braces

// object ko return krne k liye curly braces ka istamal krna pdta hai

const addtwo = (num1 , num2) => ({username: "sahil"})

console.log(addtwo(2,4));












