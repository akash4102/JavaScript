// let arr=[1,2,3,34,5];

// let person={
//     name: 'steav',
//     age: 25,
//     showdetails: function(){
//         console.log(this.name + " "+ this.age);
//     }
// }

let person1={
    name: 'steav',
    age: 25,
    showdetails: function(){
        console.log(this.name + " " + this.age);
    }
}
person1.showdetails();

let person2={
    name: 'steakfjasklf',
}
person2.__proto__=person1;
console.log(person2.age);
person2.showdetails();