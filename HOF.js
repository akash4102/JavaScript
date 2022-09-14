//map, filter, reduce
//map
let myArr=[1,2,3,4,5];
let newArr=myArr.map(function(x){
    return x*x;
})
console.log(myArr);
console.log(newArr);
//filter
let filterArr=newArr.filter(function(x){
    return x%2==0;
})
console.log(filterArr);

let sumArr=newArr.reduce(function(sum,x){
    return sum+x;
},0);
console.log(sumArr);