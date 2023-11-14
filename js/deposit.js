document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputFild = document.getElementById('deposit-input-fild');
    const newDepositAmount = depositInputFild.value;
    const depositAmount = parseFloat(newDepositAmount);

    const totalNewDeposit = document.getElementById('total-new-deposit');
    const newDeposit = totalNewDeposit.innerText;
    const newDepositNumber = parseFloat(newDeposit);
    totalNewDeposit.innerText = depositAmount + newDepositNumber;

    depositInputFild.value = '';

    // blance section//

    const blance = document.getElementById('blance');
    const tBlance = blance.innerText;
    const tBlanceNumber = parseFloat(tBlance);
    const totaBalance = tBlanceNumber + depositAmount;
    blance.innerText = totaBalance;
});