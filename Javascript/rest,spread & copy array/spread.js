console.log("THIS IS THE START OF SPREAD")

function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

//!Description
//? Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
//? In the above example, the defined function takes x, y, and z as arguments and returns the sum of these values. An array value is also defined.
//? When we invoke the function, we pass it all the values in the array using the spread syntax and the array name — ...numbers.
//? If the array contained more than three numbers, e.g. [1, 2, 3, 4], 
//? then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function, e.g.:

//! function sum(x,y,z,n){x + y + z + n;}

//? The above example is somewhat rigid; 
//? the real value in spread syntax is that it works with the same value, no matter how many elements are contained in the object, array, etc.

//? It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. 
// ?A very simple version of this kind of action could look like so:

let storeNumber = [0,1,2];
let newNumber = 12;
storeNumber = [...storeNumber, newNumber];
console.log(storeNumber)

//!Syntax
//?For function calls:
//!myFunction(...iterableObj); 
// pass all elements of iterableObj as arguments to function myFunction

//?For array literals or strings:
//![...iterableObj, '4', 'five', 6]; 
// combine two arrays by inserting all elements from iterableObj

//?For object literals (new in ECMAScript 2018):
//!let objClone = { ...obj }; 
// pass all key:value pairs from an object 

//!Rest syntax (parameters)
//?Rest syntax looks exactly like spread syntax. 
//?In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, 
//?while rest syntax collects multiple elements and "condenses" them into a single element.

//!Examples
//?Spread in function calls
//!Replace apply()
//?It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.

function myFunction(x,y,z){}
let args=[0,1,2];
//!myFunction.apply(null,args);
//?With spread syntax the above can be written as:
myFunction(...args);

//?Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.
//!function myFunction(v, w, x, y, z) { }
//!let args = [0, 1];
//!myFunction(-1, ...args, 2, ...[3]);


//!Apply for new operator
//? When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]). 
//? However, an array can be easily used with new thanks to spread syntax:
let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);

//?To use new with an array of parameters without spread syntax, you would have to do it indirectly through partial application:

function applyAndNew(constructor, args){
    function partial () {
        return constructor.apply(this, args);
    };
    if (typeof constructor.prototype === "object"){
        partial.prototype = Object.create(constructor.prototype);
    }
    return partial;
}

function myConstructor(){
    console.log("argument.length "+ arguments.length);
    console.log(arguments);
    this.prop1="val1";
    this.prop2="val2";
};

let myArguments = ["hi", "how", "are", "you", null];
let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}