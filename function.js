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