let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(typeof mydate);
let mycreateddate = new Date(2023 , 0, 23);
// console.log(mycreateddate.toString());
// let mycreated = new Date("08-15-1999");
// console.log(mycreated.toLocaleString());
// time stamp
let mytimestamp = Date.now();
// console.log(mytimestamp); //mili second value form 1 jan 1970
// console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));


