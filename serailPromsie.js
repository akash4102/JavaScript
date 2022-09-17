// const fs=require('fs').promises;
// let fileread1=fs.readFile('./f1.txt');
// let fileread2=fs.readFile('./f2.txt');
// let fileread3=fs.readFile('./f3.txt');

// fileread1.then((data)=>{
//     console.log(""+data);
//     fileread2.then((data)=>{
//         console.log(""+data);
//         fileread3.then((data)=>{
//             console.log(""+data);
//         })
//     })
// })


const fs=require('fs').promises;

let arr=['./f1.txt','./f2.txt','./f3.txt'];
let fileReadPromsie=fs.readFile(arr[0]);
for(let i=1;i<arr.length;i++ ){
    fileReadPromsie=fileReadPromsie.then((data)=>{
        console.log("content"+data);
        return fs.readFile(arr[i])
    })
}
fileReadPromsie.then((data)=>{
    console.log("content"+data);
})

