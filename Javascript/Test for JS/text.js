// JS START NOW
//Primitives / Values type
let name= "Adam"; //string literal
let age= 29; // number literal
let isApproved= false; //boolean literal
let firstName= undefined; //undefined is a type but is also value
let selectedColor = null; //the type is an object

//Dynamic Typing - variables can be change at runtime
// let name = 'adam' is a string
// let name = 1 is a number

//Reference Types
//Object
let person = { //the curly bracket is the object literal
 name:'Sofea', age:26
}; 
console.log(person)

//do notation
person.name='mimie';

console.log(person.name)

 //bracket notation
 let selection='name';
 person[selection] = 'mary';
 console.log(person.name)

 //Arrays
 let selectedColors = 
 ['red','blue','pink']; //the square bracket is the array literal
selectedColors[3] = 1; //addition value to array can be a number
selectedColors[4] = 'wine';
 console.log(selectedColors)
 // ["red", "blue", "pink", 1, "wine"]
// Queue Number above will be starting from 0, 0=red, 1=blue...etc
 

//Function
//Performing a task
function greet(names, lastName){ //names is a parameter , function can have a multiple parameter
    console.log(names); //the body of the function
    console.log('Hello ' + names + ' ' + lastName)
}
//the line below is an argument due to defining the actual value
greet('Shah Rukh' , 'Khan' ); 
greet('Catherine', 'Angela');

//calculating a value
function square(number){
    return number * number; //to return back the value
}

console.log(square(2))

