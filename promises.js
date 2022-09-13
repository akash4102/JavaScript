let fs=require("fs");
// console.log("before");
// fs.readFile("f1.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
// let promise=fs.promises.readFile("f1.txt");
// console.log(promise);
// //promise
// promise.then(function(data){
//     console.log(data);
// })
// promise.catch(function(err){
//     console.log(err);
// })
// console.log("after");


function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink=='coffee'){
            resolve('order placed');
        }
        else{
             reject("sorry we only serve coffee")
        }
    })
}
function processOrder(order){
    return new Promise((resolve,reject) => {
        let flag=false;
        if(flag){
            console.log("order is being processed");
            resolve(`coffee served for the ${order}`);
        }
        else{
            reject(`due to teachnical issue we can't compelete your order`);
        }
    })
}

//seneiro with promises 
// placeOrder("coffee").then(function(orderFromCusotmer){
//     console.log("Request Received");
//     let orderIsProcessed=processOrder(orderFromCusotmer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// }).catch(function(err){
//     console.log(err);
// })

//sync~await
async function serverOrder(){
    try {
        const orderReceived= await  placeOrder('coffee');
        console.log(orderReceived);
        const processedOrder= await processOrder(orderReceived);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
}
serverOrder();