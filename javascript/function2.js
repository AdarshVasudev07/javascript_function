//  function statement
 
// var b = function(){
//     console.log("hello world")
// }
// b();

//  function sayhi(){
//     console.log("hello")
//     console.log("hii")
// }
// sayhi()

// // function expression

function a(){
    console.log("hello");
}

function higherorder(a){
    console.log(a);
    
    a()
    
}
higherorder(a);

function b(){
    console.log("world");
    
}
function higherorder(b){
    console.log(b);
    
    b()
    

}
higherorder(b);

// case2

function higherorder(){
    return function inner(){
        console.log("this is inner function");
        
    }
}
let innerfunc = higherorder()
console.log(innerfunc);
innerfunc()


// first class function

// function greet(){
//     return function(){
//         console.log("hello");
        
//     }
// }
// const sayhello=greet();
// sayhello();


// arrow function

const greet=()=> console.log("helloooo");

greet()
let greets=()=>6+6
console.log(greets());


var arrow=()=>10+10
console.log(arrow());


console.log(sample);
var sample="adarsh"



