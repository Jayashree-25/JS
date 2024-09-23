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
const fs = require("fs"); //filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){ //(err,data) = frist get the error arguement
    console.log(data);
})
console.log("hi"); //it will run first 