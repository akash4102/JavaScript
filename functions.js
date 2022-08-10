//non primitive => array,objects,function


// //function defination
// function SayHi(param){
//     console.log("hello form say hii");
//     console.log("param recied ",param);
//     let rval=Math.random()>0.5?true:"less then 0.5";
//     return rval;
// }
// //function call
// SayHi(10);
// SayHi("hii");
// let rval=SayHi([1,2,3,4,5]);
// console.log(rval)


//funciton expression
// let fncontiner=function (){
//     console.log("i am expression")
//     console.log("i am anonymous function")
// }
// fncontiner();

//ifee function -> Immediatley invoke function expression
// (function fn(){
//     console.log("i am ifee")
//     console.log("i will run on my own")
// })();

//arrow function -> syntax,react,this

// let fn=(num)=>{
//     return num*num
// }
// work as same above
// let km=num=>num*num;

// console.log(fn(5));
// console.log(km(25));

//first class citizen
// funcitons are treaated as a variable
// 1. assignment -> fn expression
// 2. variable can be passed as a parameter

// function sayHello(param){
//     console.log("hello",param);
//     return "dkfjalkj";
// }
// function smaller(){
//     console.log("hello ia m smaller");
// }
// sayHello([1,2,3,4,5]);
// let rval=sayHello(smaller);
// console.log(rval);


//clouser

function outer(){
    console.log("i am outer returning inner");
    return function inner(){
        console.log("i am inner function");
    }
}
let rval=outer();
console.log(rval)
rval();