function findIndexOf(str, target) {
        console.log("Original String:", str);
        console.log("Index:", str.indexOf(target));
      }
      findIndexOf("Hello World", "Hello");

//getSlice
function getSlice(str, start,end){
    console.log("Original string:", str);
    console.log("After slice:", str.slice(start,end));
}
getSlice("Jayashree Das", 1, 6);

const value = "Jayashree Das";
let ans = value.slice(2,5);
let ans2 = value.substr(2,5);
console.log(ans);
console.log(ans2);

//replace
const str = "Hello World";
console.log(str.replace("World", "Jayashree"));

//to put strings in an array
const value1 = "hi,my,name,is,Jayashree";
const words = value1.split(",");
console.log(words);

//to trim
const value2 = "  hi my name is Jayashree  ";
const Words = value2.trim();
console.log(Words);

//parseInt
console.log(parseInt("42"));
console.log(parseInt("4p2x"));
console.log(parseInt("3.14"));

//push,pop,shift,unshift
const initialArray = [1,2,3];
initialArray.push(2);
initialArray.pop();
initialArray.shift(0); //pop from starting
initialArray.unshift(4); //puts something at the beginning
console.log(initialArray);

// //merge 2 arrays
const initialArray2 = [1,2,3];
const secondArray = [4,5,6];
console.log(initialArray2.concat(secondArray));

// //forEach
const initialArray3= [1,2,3,4,5];
for(let i=1; i<=initialArray3.length; i++){
    console.log(i);
}
function xyz(str){
   console.log(str);
 }
 initialArray3.forEach(xyz);

//EXTRA 
function log1(){
    console.log("Hello world 1");
}
function log2(){
    console.log("Hello world 2");
}
function logWhatPresent(x){
    x();
}
logWhatPresent(log1);

//classes
const dog = {
    name: "doggy",
    leg: 4,
    speaks: "bhow bhow",
}
console.log("animal" + " " + dog["name"] + " " + dog["speaks"])

class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log("hi there " + this.speaks);
    }
}
let dog2 = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");
dog2.speak();

//function date time month day etc methods
function dateMethods() {
      const currentDate = new Date();
      console.log("Current Date:", currentDate);

    //Getting various components of the date
      console.log("Date:", currentDate.getDate());
      console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
      console.log("Year:", currentDate.getFullYear());
      console.log("Hours:", currentDate.getHours());
      console.log("Minutes:", currentDate.getMinutes());
      console.log("Seconds:", currentDate.getSeconds());
    }

    const currentDate = new Date();

console.log("Time in miliseconds since 1970: ", currentDate.getTime());

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum(1000000000);
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);

function currentTimePrint(){
  console.log(new Data().getTime());

}
setInterval(currentTimePrint, 1000);

//JSON 

const users = '{"name": "Jayashree", "age": 19, "gender": "female"}'
const user = JSON.parse(users) //string will pass to object
console.log(user["gender"]);

const user2 = {
  name: "Jayashree",
  gender: "female",
}
user2["name"]
const finalString = JSON.stringify(user2)
console.log(finalString["name"]) //undefined will show as it is in object form

//synchronous function
function findSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(findSum(10));

//asynchronous function
function findSum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}
function findSumTill10(){
    console.log(findSum(10));
}
setTimeout (findSumTill10, 1000); //find the sum after 1000 millisec = 1sec
console.log("hello world");

//a.txt
const fs = require("fs"); //open the file

fs.readFile("a.txt", "utf-8", function(err, data){ //here it checks all the words from the file is going well or not
    console.log(data);
})
console.log("done"); //while it reads the file, done is printed first

//callback functions
console.log("I'm first");

setTimeout(function(){
    console.log("me second")
}, 5000);

setTimeout(function(){
    console.log("me third")
}, 10000);

let a = 0; 
for(let i =0; i<10; i++){
    a = a+1;
}
console.log(a);

//promises
const fs = require("fs"); 
function readAndWriteToFile(cb){
fs.readFile("a.txt", "utf-8", function(err, data){
    data = data + "jayashree here";
    fs.writeFile("a.txt",data, function(err){
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        cb();
    });
});
}
readAndWriteToFile(function(){
    console.log("updated")
});

//using promises
function promisifiedMyOwnSetTimeOut(duration){ 
    //when promises are declared there should be a return of promises
    const p = new Promise(function(resolve){ //This line creates a new promise and stores it in the variable p
        setTimeout(function(){
            resolve(); //After the time is up, this line calls the resolve function
        },duration);
    });
    return p;
}
//async await syntax, promise chaining => callback hell
const a1 = promisifiedMyOwnSetTimeOut(3000);
a1.then(function(){ //The .then() method is used to specify what should happen when the promise is fulfilled
    console.log("am done")
})

//..<->..//
function someSync1(){
    console.log("I am first");
}
function someSync2(){
    console.log("I am second");
}
setTimeout(function(){
    someSync2();
},1000)
someSync1();
//using promise
function promisefiedMyOwnSetTimeOut(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    })
    return p;
}
//async await
promisefiedMyOwnSetTimeOut(1000).then(function(){
    console.log("am first");
    promisefiedMyOwnSetTimeOut(1000).then(function(){
        console.log("am second"); 
    });
})

// .......... map,filter,arrow fnc ..........
//arrow function 
function sum(a,b){
    return a + b;
}
//this above function can be written as: 
const sum = (a,b) =>{
    return a+b;
}

//given an array, give me back a new array in which every value is multiplied by 2
const input = [1,2,3,4,5];
//without map
const newArr = [];
for(let i = 0; i<input.length; i++){
    newArr.push(input[i]*3);
} 
console.log(newArr);
//using map
function transform(i){
    return i * 2;
}
const sol = input.map(transform);
console.log(sol);

//other method
const ans1 = input.map(function(i){
    return i * 2;
});
console.log(ans1);

//create a map function that takes 2 inputs
//an array and a transform callback function and 
//transforms the array into a new using the 
//transformation function
const map = (arr, transform) => {
    const transformedArr = [];
    for(let i = 0; i<arr.length; i++){
        transformedArr.push(transform(arr[i]));
    }
    return transformedArr;
}
const numbers = [1,2,3];
const results = map(numbers, (num) => num*2);
console.log(results);

// ---------- filter ----------
// Q-> given an input array, give me back all the even values from it

const arr = [1,2,3,4,5];
const newArr1 = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        newArr1.push(arr[i]);
    }
}
console.log(newArr1);
//using filter
const array = [1, 2, 3, 4, 5];

const result = array.filter(function (n){
    if(n% 2 == 0){
        return true;
    }else {
    return false;
}
});
console.log(result);