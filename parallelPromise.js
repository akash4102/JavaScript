// const fs=require('fs');
// let fileread1=fs.promises.readFile('./f1.txt');
// let fileread2=fs.promises.readFile('./f2.txt');
// let fileread3=fs.promises.readFile('./f3.txt');

// fileread1.then((data)=>{
//     console.log(""+data);
// })
// fileread2.then((data)=>{
//     console.log(""+data);
// })
// fileread3.then((data)=>{
//     console.log(""+data);
// })


const fs=require('fs').promises;

let arr=['./f1.txt','./f2.txt','./f3.txt'];
for(let i=0;i<arr.length;i++ ){
    let fileReadPromsie=fs.readFile(arr[i]);
    fileReadPromsie.then(cb)
}
function cb(data){
    console.log("content->" +data);
}