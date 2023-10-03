// primitive data types
// 7 types: these are call by value 
// string, number, boolean, null, undefined, symbol, bigint

// java script is dynamically typed language
 const score = 100 // Number
 const scorevalue = 100.3 // number
 const isloggedin = false // Boolean
 let username; // undefined

 const id = Symbol('123')
 const bignumber = 2349579379375n



// reference (Non premitive)
// Arrays, Objects, Functions
const heros = ["shaktiman", "doga"];
const myfuction = function(){
    console.log("Hello Sahil");
}
//+++++++++++++++++++++++++
//Memory
//stack(Primitive), Heap(Non-Primitive)
let myname = "sahil";
let anothername = myname
anothername="sahilrathour"
console.log(anothername);
console.log(myname);


let userone = {
    email: "user@",
    upi: "user@ybl"
}
let usertwo = userone
usertwo.email ="sahil"
console.log(userone.email);
console.log(usertwo.email)
