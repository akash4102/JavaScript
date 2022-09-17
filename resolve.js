let p1=Promise.resolve('promsie resolved').then((val)=>{
    console.log(val);
});
let p2=Promise.reject('promsie rejected').catch((val)=>{
    console.log(val);
});