// Array.prototype.myFunction=function(){
//     console.log(this);
// }
// let arr=[1,3,4,5];
// arr.myFunction();

Array.prototype.myMap=function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}
Array.prototype.myFilter=function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
Array.prototype.myReduce=function(cb,sum){
    for(let i=0;i<this.length;i++){
        sum=cb(this[i],sum);
    }
    return sum
}
function add(x,sum) {
    return x+sum;
}
function check(x){
    return x%2==0;
}
function square(x){
    return x*x;
}

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.myMap(square));
console.log(arr.myFilter(check));
console.log(arr.myReduce(add,25));