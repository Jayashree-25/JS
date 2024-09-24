//Promises
const fs = require('fs');
   //my own asynchronous function
function JayashreeReadFile(){
    //1. console.log("inside the file");
    return new Promise(function(resolve){
        //2. console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function(err, data){
            //3. console.log("before resolove")
            resolve(data);
        });
    })
}
//callback func
function onDone(data){
    console.log(data)
}
JayashreeReadFile().then(onDone);

//==> pending, resolved, rejected
var d = new Promise(function(onDone){
    onDone();
;})

function callback(){
    console.log(d);
}
d.then(callback); //output: Promise {underdefinded}

//Async await
function jayashreeAsyncFunction(){
    let p = new Promise(function(resolove){
        setTimeout(function(){
            resolove("hi there")
        },1000)
    });
    return p;
}

async function main(){ //await is only valid in async function and the top level bodies of module
    let value = await jayashreeAsyncFunction()
    console.log(value);
}
main();
