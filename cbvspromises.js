const lib=require('./lib');

let amount=2000;
let tocut=200;

function chargeDebitCard(){
    amount=amount-tocut;
    console.log(`remaining amount is ${amount}`)
}
lib.updateAccount('Tv',chargeDebitCard);

lib.promsieUpdateAccount('tv',chargeDebitCard);