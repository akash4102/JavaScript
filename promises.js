let fs=require("fs");
console.log("before");
// fs.readFile("f1.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
let promise=fs.promises.readFile("f1.txt");
console.log(promise);
//promise
promise.then(function(data){
    console.log(data);
})
promise.catch(function(err){
    console.log(err);
})
console.log("after");