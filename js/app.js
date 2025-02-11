let moshPit = 100;
let upperChair = 200;

/* while(lowerChair != 0){
        
} */


function order(){
    let chosenTicket = document.getElementById('ticket-type');
    let quantity = parseInt(document.getElementById('qtd').value);

    if(chosenTicket.value == 'lower'){
        orderLower(quantity);
    }
    if(chosenTicket.value == 'upper'){
        orderUpper(quantity);
    }
    if(chosenTicket.value == 'moshpit'){
        orderMoshpit(quantity);
    }

};

function orderLower(qtty){
    let lowerChair = parseInt(document.getElementById('lower-chair').textContent);
    if( qtty > lowerChair) {
        alert('Quantity is higher than the available lower chair tickets.')
    } else{
        lowerChair = lowerChair - qtty;
        document.getElementById('lower-chair').textContent = lowerChair;
        alert('Successfully purchase!');
    }
};

function orderUpper(qtty){
    let upperChair = parseInt(document.getElementById('upper-chair').textContent);
    if( qtty > upperChair) {
        alert('Quantity is higher than the available upper chair tickets.')
    } else{
        upperChair = upperChair - qtty;
        document.getElementById('upper-chair').textContent = upperChair;
        alert('Successfully purchase!');
    }
};

function orderMoshpit(qtty){
    let moshPit = parseInt(document.getElementById('mosh-pit').textContent);
    if( qtty > moshPit) {
        alert('Quantity is higher than the available lower chair tickets.')
    } else{
        moshPit = moshPit - qtty;
        document.getElementById('mosh-pit').textContent = moshPit;
        alert('Successfully purchase!');
    }
};