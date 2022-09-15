function car(brand,model,color){
    this.brand=brand;
    this.model=model;
    this.color=color;
    
    this.drive=function(){
        console.log(this.model + "i am driving");
    }
}

let car1=new car('bmw','xy','white'); //this -> empty object;
let car2=new car('mercedes','xw','black');

console.log(car1);
console.log(car2);

car1.drive();
car2.drive();