const promiseOne = new Promise(function (resolve, reject) {
    // do an asyn task
    // db calls, network calls

    setTimeout(() => {

        console.log("async task is completed")
        resolve();
        
    }, 1000);
    
});

promiseOne.then(function(){
    console.log("promise consumed")

});

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("promise done")
        resolve();
        
    }, 1000);

}).then(function(){
    console.log("promise is kept");

})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userneme:"sahil", lastname: "rathour"})
        
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user.userneme);

})


const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "sahil", email: "sahil@124"})
        }
        else{
            reject("something went wrong")
        }

    },1000)
})

promisefour.then(function(user){
    console.log(user);
    return user.username;

}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejected")
})


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"sahil", lastname:"rathour"})
        }
        else{
            reject("something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promisefive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response =  await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// in .then() and .catch() format
// fetch ka return type promise hota hai
fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json();


})
.then((data) => console.log(data) )
.catch((error) => console.log(error) )


