//const tinderuser = new Object();

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name ="sahil"
tinderuser.isloggedin = false

//console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sahil",
            lastname: "rathour"
        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));


//destructring objects

const course ={
    coursename: "js in hindi",
    price: "999",
    courseinst: "sahil"
}

course.price // we can excess from this also from this

const {price} = course;
console.log(price);

const {courseinst: instructor} = course;
console.log(instructor); // this is known is destructing of object

// {
//     "name": "sahil",
//     "id": "1234"
// }// this is jason jason is simple object without name api se jo data aata hai

