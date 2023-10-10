// function myname(){
//     console.log("sahil");
// }
// myname();

// function addtwonum(num1, num2){
//     console.log(num1+num2)
// }

// addtwonum(5,5); //in java script we need not to pass the variable type in the function this can create a problem like if some no is like this 5+"a" or 5+"3"


// const addtwonum(num1,num2){
//     let result = num1+num2;
//     return result;
// }
// const result = addtwonum(5,5); 

function loginusermessage(username){

    if(username === undefined){
        console.log("please enter a user name");
        return // function will return from here and below return will not execute
    }
    return `${username} just logged in`
}
//console.log(loginusermessage("sahil"));

//console.log(loginusermessage());// if we do not pass anything it will return undefined

// when we dont know how much arguments we will get

function calculatecartprice(val1, val2,  ...num){
    return num
}

console.log(calculatecartprice(200, 400, 500, 600)) // it will only give first value we can get all these values in array using ...num in the function this ... is known as rest operator first two items will go to val1 and val2 and rest to num


// how to pass objects to function

const user ={
    username: "sahil",
    price: 199
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handelobject(user);

// we can directly pass objects

handelobject(
    {
        username: "sahil",
        price: 199
    }
)

// passing array to function

const marr = [200, 400, 100, 600]

function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(marr));

