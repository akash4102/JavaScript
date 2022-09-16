//set interval ka polyfil

function createSetInterval(){
    let intervalID=0;
    let intervalMap={};
    function setIntervalpolyfill(callback,delay=0,...args){
        var id=intervalID++;
        function repeat(){
            intervalMap[id]=setTimeout(() => {
                callback(...args);
                if(intervalMap[id]){
                    repeat();
                }
            }, delay);
        }
        repeat();
        return id;
    }
    function clearIntervalpolyfill(intervalID){
        clearTimeout(intervalMap[intervalID]);
        delete intervalMap[intervalID];
    }
    return {
        setIntervalpolyfill,
        clearIntervalpolyfill
    }
}
const{
    setIntervalpolyfill,
    clearIntervalpolyfill
}=createSetInterval();


let counter=0;
let intervalid;

function sayHii(){
    counter++;
    console.log("hii");
    if(counter>=2){
        clearIntervalpolyfill(intervalid);
    }
}

intervalid=setIntervalpolyfill(sayHii,2000);