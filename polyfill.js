//Array.prototype
//custom function

// let myArr=[1,2,3,4,5];

// let squaredArr=myArr.map(function(x){
//     return x*x;
// });
// console.log(myArr);
// console.log(squaredArr);

//custom map function
// function myPolyfillMap(arr,cb){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(cb(arr[i]));
//     }
//     return newArr;
// }
// function square(x){
//     return x*x;
// }
// console.log(myArr);
// console.log(myPolyfillMap(myArr,square));


// let fArr=[2,4,6,7,9,23,12,13];

// function myPolyfillFilter(arr,cb){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(cb(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// function evenAndOdd(x){
//     return x%2==0;
// }
// console.log(fArr);
// console.log(myPolyfillFilter(fArr,evenAndOdd));


let reduceArr=[1,2,3,4,5,25,38,7];
function myPolyfillReduce(arr,cb,sum){
    for(let i=0;i<arr.length;i++){
        sum=cb(sum,arr[i]);
    }
    return sum;
}
function sumOfAll(x,sum){
    return x+sum;
}
console.log(myPolyfillReduce(reduceArr,sumOfAll,0));


