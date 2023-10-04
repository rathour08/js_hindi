const marvel_heros = ["thor", "ironman"];
const dc_heros = ["superman", "flash"];
// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);// combines two arrays and return a new array.
const all_new_heros = [...marvel_heros, ...dc_heros];// do the same thing as concat
console.log(Array.isArray("sahil")); // array.isarray() checks if it is array or not
console.log(Array.from("sahil"));// will make array form sahil


console.log(Array.from({name:"sahil"})) // intresting 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3)); // make array of all the variables

