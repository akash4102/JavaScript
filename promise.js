const PENDING=0;
const FULFILLED=1;  
const REJECTED=2;

function customPromise(executor){
    let state=PENDING;
    let value=null;
    let handlers=[];
    let catchers=[];

    function resolve(result){
        if(state!==PENDING) return;
        state=FULFILLED;
        value=result;
        handlers.forEach((h)=>h(value));
    }
    function reject(err){
        if(state!==PENDING)return;
        state=REJECTED;
        value=err;
        catchers.forEach((c)=>c(value));
    }
    this.then=function(Successcallback){
        if(state===FULFILLED){
            Successcallback(value);
        }
        else{
            handlers.push(Successcallback);
        }
    }
    this.catch=function(failurecallback){
        if(state===REJECTED){
            failurecallback(value);
        }
        else{
            catchers.push(failurecallback);
        }
    }

executor(resolve,reject);
}

const doWork=(res,rej) =>{
    if(2==1){
        setTimeout(() => {
            res('promise resolved')
        }, 1000);
    }
    else{
        setTimeout(() => {
            rej('promise rejected')
        }, 1000);
    }
}

let greetMsg=new customPromise(doWork);
greetMsg.then(value=>{
    console.log(value);
})
greetMsg.catch(value=>{
    console.log(value);
})