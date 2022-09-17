function test(){
    var a=1+1;
    return new Promise(function(resolve,reject){
        if(a==2){
            resolve('promsie resolved Yess');
        }
        else{
            reject('promise rejected yess');
        }
    })
}
test().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('experiment completed');
})