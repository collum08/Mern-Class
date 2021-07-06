//sync code example

function otherFunction(){
    console.log("We are in another function");
    console.log("Do some stuff");
}

console.log("Start");

otherFunction();

console.log("End");

//async code sample

console.log("Start");
setTimeout(() =>{
    console.log("We are in Time Out");
}, 3000); //message will display in 3 second

console.log("The setTimeout will appear in 3 second below");


//
const items = [1,2,3,4,5]
items.forEach(item =>{
  console.log(item);  
})

console.log("End");

//l1
console.log(' Synchronous 1');
//l2
setTimeout(() => console.log ('Time Out'), 0); //the promise will apppear first due to the priority of the micro task
//l3
Promise.resolve().then(() => console.log('Promise') );
//l4
console.log('Synchronous 4');

async function myFunction(){
  return "hello";
}
//is the same as
async function myFunction(){
  return Promise.resolve("Hello");
}
//here is how to use the Promise
myFunction().then(
  function(value) {/*code if successful*/},
  function(error) {/*code if error*/}
);

//etc
//########################## TEST 1 ###############
function title(some) {
  document.getElementById("demo").innerHTML = some;
}

async function newFunction(){
  return "ASYNC REFEREFENCES STUDY"
}

newFunction().then(
  function(value){title(value);},
  function(error){title(error);}
  );


  //or simpler, since you expect a normal value(a normal response, nor an error):
  //########################## TEST 2 ###############
  function display2(some){
    document.getElementById('list1').innerHTML = some;
  }

  async function anFunction(){
    return "This is test function #2."
  }

  anFunction().then(
    function(value) {display2(value);}
  );

//await Syntax
 //The keyword await before a function makes the function wait for a promise:
 //let value = await promise;
 //The await keyword can only be used inside an async function.
 //Let's go slowly and learn how to use it
 //########################## TEST 3 ###############
 //Basic Syntax
 async function display3(){
   let myPromise = new Promise(function(resolve,reject){
     resolve("This is Function #3")
   });
   document.getElementById("list2").innerHTML = await myPromise;
 }
display3();

//########################## TEST 4 ###############
//Waiting for a Timeout
 async function display4() {
   let newPromise = new Promise(function(resolve,reject){
     setTimeout(function(){
       resolve("This is Function #4"
      );}, 4000);
   });
   document.getElementById('list3').innerHTML = await newPromise;
 }

 display4();

//########################## TEST 5 ###############
// Waiting for a File
//need to review more
async function getFile(){
  let otherPromise = new Promise (function(resolve,reject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else{
        resolve("File not found")
      }
    };
  });
  document.getElementById('list4').innerHTML = await otherPromise;
}

getFile();