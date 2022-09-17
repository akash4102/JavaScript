let p1=new Promise(function(resolve,reject){
    resolve("promise 1 is resolved");
})
let p2=new Promise(function(resolve,reject){
    reject("promise 2 is resolved");
})
let p3=new Promise(function(resolve,reject){
    resolve("promise 3 is resolved");
})
let promiseAll=Promise.all([p1,p2,p3]);
console.log(promiseAll);
promiseAll.then((PromiseArr)=>{
    console.log(PromiseArr);
}).catch((err)=>{
    console.log(err);
})