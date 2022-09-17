function updateAccount(product ,cb){
    setTimeout(()=>{
        console.log(product + 'purchased');
        cb();
        cb();
        cb();
    },2000)
}
function promsieUpdateAccount(product){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}
module.exports={
    promsieUpdateAccount:promsieUpdateAccount,
    updateAccount:updateAccount
}