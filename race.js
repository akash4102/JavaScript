
// Promise.race([p1,p2,p3]).then((val)=>{
//     console.log(val)
// }).catch((err)=>{
//     console.log(err);
// })

// let p1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('promise 1 is resovled')
//     }, 2000);
// })
// let p2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve('promise 22 is resovled')
//     }, 1000);
// })
// Promise.race([p1,p2]).then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// })