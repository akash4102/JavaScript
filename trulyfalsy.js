//== double equals
// let check=2=='2';
// console.log(check);


// //=== triple equals
// let check2=2==='2';
// console.log(check2);


// let a=2;
// if(a){
//     console.log("yes equal")
// }
// else{
//     console.log("no not equal");
// }

function testTruthyFalsy(val){
    return val?console.log('truthy'):console.log('falsy');
}
testTruthyFalsy(new Boolean(false));