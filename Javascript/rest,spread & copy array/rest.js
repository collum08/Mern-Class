console.log("THIS IS THE START OF REST")

//?The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
//?providing a way to represent variadic functions in JavaScript.
//?syntax for rest:function f(a, b, ...theArgs) {...}
//?A function definition can have only one ...restParam.

function sum(...arguments) {
    return arguments.reduce((previous, current)=> {
        return previous + current;}
    );
}

console.log(sum(1,2,3));
// expected output: 6

console.log(sum(1,2,3,4,));
//expected output: 10

//?Description
//?A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), 
//?which will cause all remaining (user supplied) parameters to be placed within a "standard" JavaScript array.. 
//?Only the last parameter in a function definition can be a rest parameter.

function test(a,b, ...manyMore){
    console.log("a", a)
    console.log("b", b)
    console.log("manyMore", manyMore) //this is an array
}

test("one","two","three","four","five","six") 
// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

function test2(c,d,...extendArgument){
    console.log("c", c)
    console.log("d", d)
    console.log("extendArgument", extendArgument) //this is an array
}

test2("one","two","three","four","five","six") 
// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array

//?Below, even though there is just one value, the last argument still gets put into an array.
//? using the same function definition from example above

test2("one", "two", "three")
// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- notice it's an array, even though there's just one value

//?Below, the third argument isn't provided, but manyMoreArgs is still an array (albeit an empty one).
//? using the same function definition from example above

test2("one", "two")
// a, "one"
// b, "two"
// manyMoreArgs, [] <-- yip, still an array

//?Argument length
//?Since theArgs is an array, a count of its elements is given by the length property:
function fun1(...theArgument){
    console.log(theArgument.length)
}
fun1() //0
fun1(5) //1
fun1(5,6,7) //3

//?Using rest parameters in combination with ordinary parameters
//?In the next example, a rest parameter is used to collect all parameters after the first parameter into an array. 
//?Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:
function multiply(multi, ...argument1){
    return argument1.map(element => {
        return multi*element
    })
}

let arr = multiply(2,15,25,42)
console.log(arr) //[30,50,84]

//?Rest parameters are real arrays; the arguments object is not.
//?Array methods can be used on rest parameters, but not on the arguments object:
function sortArr(...argumentAgain){
    let sortedtArgument = argumentAgain.sort ()
    return sortedtArgument

}

console.log(sortArr(5,3,7,1)) //1,3,5,7

function newArgument(){
    let sortedArgument = argument1.sort()
    return sortedArgument //this will never happen
}

//!console.log(newArgument(5,3,7,1)) 
// throws a TypeError (arguments.sort is not a function)

//?To use Array methods on the arguments object, it must be converted to a real array first.
function newArg(){
    let argument = Array.from(arguments)
    let sortedArg = argument.sort()
    return sortedArg
}

console.log(sortArr(5,3,7,1)) //1,3,5,7