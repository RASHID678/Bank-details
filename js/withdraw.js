document.getElementById('withdraw').addEventListener('click', function(){
    const withdrawFild = document.getElementById('withdraw-fild');
    const WithdrawAmount = withdrawFild.value;
    const WithdrawAmountNumber = parseFloat(WithdrawAmount);

    withdrawFild.value = '';

    if(isNaN(WithdrawAmountNumber)){
        alert('Please provide a valid number')
        return;
    }


    const oldWithdraw = document.getElementById('old-withdraw');
    const old = oldWithdraw.innerText;
    const oldWithdrawNumber = parseFloat(old);
    
    const withdraw = oldWithdrawNumber + WithdrawAmountNumber;
    
    
    const blance = document.getElementById('blance');
    const oldTotal = blance.textContent;
    const oldTotaBlance = parseFloat(oldTotal);
    const newTotalBlance = oldTotaBlance - WithdrawAmountNumber;
    
    if(WithdrawAmountNumber > oldTotaBlance){
        alert('You do not have supisient balance');
        return;
    }
    oldWithdraw.innerText = withdraw;

    blance.innerText = newTotalBlance;

})