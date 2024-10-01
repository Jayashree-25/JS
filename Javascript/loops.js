let sum = 0;
for(let i = 1; i<=50; i++){
    sum = sum+i
}
console.log(sum);

//functions
function findSum(n){
    let ans =0;
    for(let i=1; i<=n; i++){
        ans= ans+i;
    }
    return ans;
}
let ans = findSum(50);
console.log(ans);
let ans2 = findSum(100);
console.log(ans2);

//callbacks
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSquare(a,b){
    const val1 = square(a);
    const val2 = square(b);
    return val1 + val2;
}
console.log(sumOfSquare(2,3));

function sumOfCube(a,b){
    const val1 = cube(a);
    const val2 = cube(b);
    return val1 + val2;
}
console.log(sumOfCube(2,3));

//another method
function square(n){
    return n*n;
}
function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}
console.log(sumOfSomething(2,5,square));

//anonymous function
function sumSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}
console.log(sumSomething(2, 2, function(a){
    return a * a;
}))