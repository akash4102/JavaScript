// console.log("hello js")


// //declare a variable

// let a;
// var b;
// console.log(a);
// console.log(b);

// a="hello i am a string";
// a='hello i am also a string'
// a=10.2;
// console.log(a);
// a=null;
// console.log("varialbe contains" ,a);
//varaible type: primitive types: number,string,boolean,null;


//javascript is --> java, c++,c;

// let number=10;
// for(let i=1;i<=number;i++){
//     console.log("number is ", i)
// }

//isprime
let number=23;
let flag=true;
for(let div=2;div<number;div++){
    if(number%div==0){
        flag=false;
        break;
    }
}
if(flag)console.log(number , " is pirme");
else console.log(number,"is not prime");