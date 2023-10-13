const useremail = "h@gmail.com"

if(useremail){
    console.log("got useremail");
}
else {
    console.log("not got");
}

// flasy values

// false,0,-0, bigint, '', null, undefined, nan

//truthy values
//rest all, "0", "false", " ", [], {}, function(){} empty function,

// const user = [];

// if(user.length === 0){
//     console.log("array is empty");
// }

// const emptyobj = {};

// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;

//val1 = 5 ?? 10

//val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 

console.log(val1);