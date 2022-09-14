//inpure function

// let a=9;

// function addNum(b){
//     console.log("the sum is ",a+b);
// }

// addNum(2);
// addNum(2);

//pure function

function addNUm(a,b){
    // console.log("the sum is ",a+b); //side effect
    return a+b;
}
console.log("the sum is ",addNUm(2,5));