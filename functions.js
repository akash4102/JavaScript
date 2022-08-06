//non primitive => array,objects,function


//function defination
function SayHi(param){
    console.log("hello form say hii");
    console.log("param recied ",param);
    let rval=Math.random()>0.5?true:"less then 0.5";
    return rval;
}
//function call
SayHi(10);
SayHi("hii");
let rval=SayHi([1,2,3,4,5]);
console.log(rval)
