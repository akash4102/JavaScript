// function calculate(a,b){
//     let result=a+b;
//     return result;
// }
// console.log(calculate(2,5));

function add(){
    let a=4;
    function addchild(){
        console.log(a+5);
    }
    return addchild;
}
let catchAdd=add();
console.log(catchAdd);
catchAdd();