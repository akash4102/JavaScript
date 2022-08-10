// console.log(global);
// console.log(this)

// console.log("a is",a);
// var a;
// console.log("a is",a);
// a=10;
// console.log("a is",a);
// fn();
// function fn(){
//     console.log("i can be called vefore my declaration")
// }
// fn();

console.log("var name",varname);
var varname;
console.log("varname",varname);
varname="captain america";
console.log("varname",varname)
fn()
function fn(){
    console.log("hello from fn");
}
fn();

// fncontainer();
var fncontainer=function(){
    console.log("i am an epxression")
}
fncontainer();