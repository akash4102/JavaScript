const person1={
    name:'Adam',
    Age:25
};
// const person2=Object.assign({},person1);
const person2={...person1};
person2.name='Steve';
console.log(person1);
console.log(person2);