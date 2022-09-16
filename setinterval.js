let counter=0;
let intervalId;

function sayHii(){
    counter++;
    console.log("hii");
    if(counter>=2){
        clearInterval(intervalId);
    }
}

intervalId=setInterval(sayHii,2000);



