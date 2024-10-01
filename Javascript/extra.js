// //question1 - Create a counter in JavaScript, It should go up as time goes by in intervals of 1 second
function myProgram1(){
    setTimeout(function(){
        console.log(("heyyy babyy"))
    });
}
function myProgram2(){
    setTimeout(function(){
        console.log("hello")
    });
}
setInterval(myProgram1,1000);
setInterval(myProgram2,1000);

//question2 Counter without setInterval
function case1(){
    setTimeout(function(){
        console.log("good morning")
    },1000)
}
function case2(){
    setTimeout(function(){
        console.log("good evening")
    },1000)
}
case1();
case2();

//question3 Reading the contents of a file,Write code to read contents of a file and print it to the console
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data);
})

//question4 Write to a file, Using the fs library again, try to write to the contents of a file.You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");
function readWriteFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        data = data + "Namasteee";
        fs.writeFile("a.txt", data, function(err){
            if(err){
                console.error("Error writing file:", err);
            return;
            }
            cb();
        })
    })
}
readWriteFile(function(){
    console.log("updated");
});

// question5 
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman







