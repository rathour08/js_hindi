// array

const myarr = [0,1,2,3,4,5];
const myheros = ["shaktiman", "naagraj"];
const myarr2 = new Array(1,2,3,4);
// myarr.push(6); // push element in array
// console.log(myarr);
// myarr.pop(); // del last element
// myarr.unshift(9);
// console.log(myarr);
const newarr = myarr.join();
console.log(myarr);
console.log( newarr); // join converts to string
// slice, splice
console.log("A ", myarr);
const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B ", myarr);
//splice
const myn2 = myarr.splice(1,3);
console.log(myn2);
console.log("C ", myarr);

