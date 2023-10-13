// factory function to create objects

// let reactangle = {
//     length: 1,
//     breadth: 2,
//     draw: function(){
//         console.log("draw");
//     }
// }

// function factory(length, breadth){
//     let reactangle ={
//         length: length,
//         breadth: breadth

//     }
//     return reactangle;

// }
// this is known as factory function
// let myreactangle = factory(10,20);

// console.log(myreactangle);

// Constructor function
// initialize the property/method of object

// function Rectangle(len, brd){
//     this.length=len;
//     this.breadth=brd;
//     this.draw= function(){
//         console.log("draw");
//     }

// }
// object creation using constructor function

// new keyworld in javascript return the empty object

// let rectangleobject = new Rectangle(4,6);

// console.log(rectangleobject);

// this refers to current object

// rectangleobject.color="yellow";
// delete rectangleobject.draw;
// console.log(rectangleobject);


// functions are also objects in java script

// primitive are copied by their values

// reference are copied by their address/reference

// let rectangle = {
//     length: 1,
//     breadth: 2
// }
// for (const key in rectangle) {
//     console.log(key, '-', rectangle[key]);
    
// }

// for-of sirf iterables pr lg skta hai iterables mtlb arrays map string objects pr for of nahi lg skta
// for-in sb p lgta objects pr lg skta


// to find that property exist in object we can do

// if("length" in rectangle){
//     console.log(true);
// }

// object cloning

// three ways:
// iteration
// Assign 
// spread

// iteration
 let src = {value:10};
// let dest = {};
// for (const key in src) {
//     dest[key] = src[key];

// }
// console.log(dest);

//assign

// let dest = Object.assign({}, src);

// console.log(dest);

// spread

// let dest = {...src};

// console.log(dest);

//Garbage Collection:

// ase variables or const joo use m nahi h in ke memory ko deallocate kr deta hai memory free kr deta hai we have no controll over garbage collector it runs in background.

