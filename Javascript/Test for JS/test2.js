//iife practice
// (function (){}())
(function(){
    var counter = 0;
    function add(a,b) {
        return a + b;
    }
    console.log(add(20,10));
}());

(function(){
    
    function multi(b,d){
        return b*d;
    }
    console.log(multi(5,4))
}());

(function(){

    function subtract(e,f){
        return e-f;
    }
    console.log(subtract(1000,500));
}());

(function(){
    function love(){
        return "I love sofea";

    }
    console.log(love());
}());

(function(){
    function adam(){
        return "love sofea"
    }
    console.log("Adam " + adam())
}());

//exercise
let txt = "I only love sofea all day";
let x = txt.slice(6,17); 
//text slice let you slice your text from any position number given
console.log(x); //love sofea

let waifu = "adam only eat chocolate";
// String method to replace the word "Hello" with the word "Welcome".
let y = waifu.replace ("chocolate", "banana");
console.log(y);

//Convert the value of txt to upper case
let anime = "letter change to upper case";
let change = anime.toUpperCase();
console.log(change);

//Convert the value of txt to lower case
let kokoro = "LETTER CHANGE TO LOWER CASE";
let changeNow = kokoro.toLowerCase();
console.log (changeNow);

//Get the value "Volvo" from the cars array.
var cars = ["Saab", "Volvo", "BMW"];
var xy = cars[1];
console.log(xy);

//Get the value "Volvo" from the cars array.
var cars2 = ["Volvo", "Jeep", "Mercedes"];
cars2[0] = "Ford";
console.log(cars2);

//Alert the number of items in an array, using the correct Array property.
var cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// Array method to remove the last item of the fruits array.
var fruits = ["smart", "sweet", "sexy"];
fruits.pop(1);
console.log(fruits);

//Array method to add "Kiwi" to the fruits array.
var fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
console.log(fruits);

// splice() method to remove "Orange" and "Apple" from fruits.
var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1,2);
console.log(fruits);

//Array method to sort the fruits array alphabetically.
var fruits =  ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
console.log(fruits);


// creating a Date object and show the current date and time.
let date = new Date();
console.log(date);

//Use the correct Date method to extract the year (four digits) out of a date object.
var date2 = new Date();
year = date2.getFullYear();
console.log(year);
// /correct Date method to get the month (0-11) out of a date object.
month = date2.getMonth();
console.log(month);
//correct Date method to set the year of a date object to 2020.
date2.setFullYear(2020);
console.log(date2);

//Create a loop that runs from 0 to 9.
var i;
for (i = 0;i <10;i++) {
  console.log(i);
}

//Create a loop that runs through each item in the fruits array.
var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits){
  console.log(x);
}

//Create a loop that runs as long as i is less than 10.
var i = 0;
while (i< 10) {
  console.log(i);
  i++
}