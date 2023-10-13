const mynums = [1,2,3];

// const mytotal=mynums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// using arrow function

const mytotal = mynums.reduce( (acc, currval) => acc+currval , 0)

console.log(mytotal);