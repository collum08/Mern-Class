console.log("This is Copy Array")

//!Spread in array literals
//?A more powerful array literal
//?Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient 
//?and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]

//?Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

//!Copy an array
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

//?A better way to concatenate arrays
//Array.prototype.concat() is often used to concatenate an array to the end of an existing array. 
//Without spread syntax, this is done as:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);

//?With spread syntax this becomes:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
// Note: Not to use const otherwise, it will give TypeError (invalid assignment)