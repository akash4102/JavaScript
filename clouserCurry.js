function add(x){
    return function(y){
        console.log(x+y);
    }
}
let addWith2=add(2);
addWith2(3);