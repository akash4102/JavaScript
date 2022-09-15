class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    showDetails(){
        return this.name;
    }
}
class personChild extends Person{
    constructor(){
        super('steve');
    }
}
// let person1=new Person('akash',25);
let person1=new personChild();
console.log(person1);
console.log(person1.showDetails())
console.log(person1)