let initialPrice = document.querySelector('#initial-price');
let stockQuantity = document.querySelector('#stock-quantity');
let currentPrice = document.querySelector('#current-price');
let checkBtn = document.querySelector('#check-btn');
let outputBox = document.querySelector('#output-box');


function calculateProfitAndLoss(initial,quantity,current) {
    if (Number(initial)>Number(current)){
       
        let loss = Number(initial - current) * quantity;
        let lossPercentage = Number((loss/(initial*quantity)) * 100).toFixed(2);
        
        showOutput(`Loss of Rs ${loss} and Loss Percentage ${lossPercentage} %`); 
    }
    else if (Number(initial)<Number(current)){
        let profit = Number(current - initial) * quantity;
        let profitPercentage = Number((profit/(initial*quantity)) * 100).toFixed(2);
     

        showOutput(`Profit of Rs ${profit} and Profit Percentage ${profitPercentage} %`); 
    }
    else{
        
        showOutput('No Pain No Gain , No Gain No Pain'); 
    }
}

function submitHandler (){
    let ip = initialPrice.value;
    
    let qty = stockQuantity.value;
    let curr = currentPrice.value;
    if(ip&&qty&&curr){
        calculateProfitAndLoss(ip,qty,curr);
    }
    else{
        showOutput('Enter All Fields');
    }

    
}

function showOutput(message){
    outputBox.innerHTML = message; 
}
checkBtn.addEventListener('click',submitHandler);