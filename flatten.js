let obj={
    name:'adam',
    age:20,
    address:{
        city:'noida',
        pincode:201301
    }
}

function flattenObj(obj,parent,res={}){
    for(let key in obj){
        let propName=parent?parent+'_'+key:key;
        if(typeof(obj[key]==Object)){
            flattenObj(obj[key],propName)
        }
    }
}