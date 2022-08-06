//object group of key value pair

//key: value->properties
//key:function->method
let cap={
    name: "steve",
    lastNmae:"rogers",
    address: {
        city: "manhaton",
        state: "newyork"
    },
    age: 35,
    isAvange:true,
    moveis:["firstavenader","windetsolider","civilwar"],
    sAyHii: function(){
        console.log("cap say's hii");
    }
};
//get krne ka way
// console.log(cap.name);
// console.log(cap.lastNmae);
// console.log(cap.age);
// console.log(cap.address.city);
// console.log(cap.address.state);
// console.log(cap.isAvange);
// console.log(cap.moveis[1]);
// cap.sAyHii();
// console.log(cap.sAyHii());

//set/update
// console.log("cap ",cap);
// cap.age=36;
// cap.isAvange=false;
// cap.friends=["Tony","bruce","peter"]
// console.log("cap ",cap);
// console.table(cap.moveis);
// //delete

// delete cap.address
// console.log(cap);

// for (let key in cap){
//     console.log(key," : ",cap[key]);
// }

// let property ="age";
// console.log(cap[property]);

// console.log(cap.syz);