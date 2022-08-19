//objects
// key : value 
//string,number: valid type

// let object ={
//     name: "jasbir",
//     lastName: "singh",
//     sayhi: function(){
//         console.log("jsabir say's hii");
//     }
// }
// console.log(object);

//loops 
// for(let key in object){
//     console.log(key," ",object[key]);
// }
// object.sayhi();

//arrays
// let arr=[1,2,3,4,5];
// arr.myprop="hello";
// arr.Print=function(){
//     console.log("hello from arr");
// }
// arr[95]=100;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[23]);
// for(let key in arr){
//     console.log(key," ",arr[key]);
// }
// console.log(arr);

//function

function fn(){
    console.log("hello form fn");
}
fn.prop="property of function";
fn.myfn=function fn(){
    console.log("i am a method of a function");
}

console.log(fn);
fn();
fn.myfn();
console.log(fn.prop);

// function is object key value property and code property that can be executed when you invoke that call

// js-> primitive or Object
//everything object -> dates,errors,modules
//6 type primitive -> number,string,boolean,undefined,null,symbol
