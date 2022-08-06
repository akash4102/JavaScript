let singleQuote='   single quoes ki sting     ';
let doubleQuote="double quotes ki string";
// console.log(singleQuote)
// console.log(doubleQuote)
// let char=singleQuote.charAt(4);
// let char1=singleQuote.charCodeAt(4);
// let substr=singleQuote.substring(2,5);
// console.log(char)
// console.log(char1)
// console.log(substr)

//split or split words on the basis of what character you given    join words on the basis of what you given function trim function for remove spaces
singleQuote= singleQuote.trim()
console.log(singleQuote)
let arrstr=singleQuote.split("i");
let arrstr1=singleQuote.split(" ");
console.log(arrstr)
console.log(arrstr1)
let str = arrstr.join("$")
let str2=arrstr1.join("###");
console.log(str)
console.log(str2)
 
