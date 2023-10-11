// Immediately Invoked Function Expression(IIFE)

// we use when we do not need pollution from the global variable inside the function so we create a scope 
// when we want our file to immediately connected to database when open then we use iife

(function chai(){
    // this is named iife
    console.log(`DB CONNECTED`);
})(); //WE NEED TO PUT A SEMICOLON IIFE DOSE NOT KNOW WHERE TO END THE EXECUTION

// Syntax ()()
// we can write this function in arrow function

// ( () => {
    //this is unnamed iife
//     console.log(`DB CONNECTED TWO`);
// })() // bina name ka function 

((name) => {
    console.log(`hy ${name}`);
})("sahil")