let person1={
    name: 'adam',
    age: '25'

}

let showDetails=function(city,state){
    console.log(this.name+ " "+ this.age+city+state);
}
// let shoedEtbind=showDetails.bind(person1);
// shoedEtbind();

Function.prototype.myBind=function(...args){
    let obj=this;
    params=args.slice(1);
    return function(...args2){

        obj.apply(args[0],[...params, ...args2]);
    }
}
let showDetailsBind=showDetails.myBind(person1,"noide");
showDetailsBind('up');