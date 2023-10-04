// objects literals

const mysym = Symbol("key1");

const jsuser = {
    name: "sahil",
    "full name": "sahil rathour",
    age: 24,
    [mysym]: "mykey1",
    location: "Shimla",
    email: "sahilrathour101@gmail.com",
    isloggedin: false,
    lastloggedin: ["monday", "sunday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);//if we want to use mysym as a symbol we need to write it in square bracket [mysym]

jsuser.age = 18; // to change value

// Object.freeze(jsuser); // properties will not change now

// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());