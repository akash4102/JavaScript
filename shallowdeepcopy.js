// let arr=[1,2,3,4];
// let copyArr=arr;
// copyArr[1]=4;
// console.log(arr);
// console.log(copyArr);


// spread operator method //shallow copies

// let sports=['cricket','football','swimming',{a:'hockery',b:'tennis'}];
// let copySport=[...sports];
// copySport[1]='baseball';
// copySport[3]['a']='basketball';
// console.log(sports);
// console.log(copySport);


//deep copies
// let sports=['cricket','football','swimming',{a:'hockery',b:'tennis'}];
// let copySport=JSON.parse(JSON.stringify(sports));
// copySport[1]='baseball';
// copySport[3]['a']='basketball';
// console.log(sports);
// console.log(copySport);

// let obj={
//     name:'adam',
//     age:25
// }
// let newobj={...obj};
// newobj.name='steve';
// console.log(obj);
// console.log(newobj);


let person={
    name:'mrinal',
    age:22,
    hobbies:['sporsts','coding','musin']
}
let newperson=JSON.parse(JSON.stringify(person));
newperson.age=35;
newperson.hobbies[0]='coding';
console.log(person);
console.log(newperson);