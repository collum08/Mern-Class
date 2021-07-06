//Function
//Performing a task
function greet(names, lastName){ //names is a parameter , function can have a multiple parameter
    console.log('Hello ' + names + ' ' + lastName); //the body of the function
}
//the line below is an argument due to defining the actual value
greet('Shah Rukh' , 'Khan' ); 
greet('Catherine', 'Angela');

//calculating a value
function square(number){
    return number * number; //to return back the value
}

console.log(square(2))

//anonymous function
let anonymous = function(){
    return "hahaha";
}

console.log(anonymous())

//or

let anonymous2 = function (g){
    return g;
}

console.log(anonymous2("hahahhahahahaaha"))


//ecma script 6

//fate arrow function syntax
let ecma6 = ()=>{
    return " HI! I am ECMA 6! and this is a fate arrow function syntax"
}
console.log(ecma6())

//IIFE (immediately invoked function expression syntax)
//wanting the value to respond without calling it
// (function(){
//     display(" HI! I am ECMA 6! and this is IIFE (immediately invoked function expression syntax)");
// })(); //look into the class at 8 june

var userName = "Bill";

(function (name) {

    function display(name)
    {
        alert("MyScript2.js: " + name);
    }

    display(name);
})(userName);