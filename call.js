let person1={
    name:'akash',
    age:25,
    showDetails: function(){
        console.log(this.name + 'is '+ this.age+"years old");
    }
}
let person2={
    name:'steve',
    age:20,
}
let showDetails= function(city ,car){
    console.log(`${this.name} is ${this.age} year old ,he lives in ${city} and he drives ${car}`);
}
// person1.showDetails.call(person2);
let showdetbind=showDetails.bind(person2,'dheradun','bike');
showDetails.apply(person1,['delhi','bmw']);
showDetails.call(person1,"delhi",'mercedes');
showdetbind();
// person1.showDetails();
// person2.showDetails();

