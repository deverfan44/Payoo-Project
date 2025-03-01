const caseOut = document.getElementById('caseOut');

caseOut.addEventListener('click', function(event){
    event.preventDefault();

    const acNumber = document.getElementById('accountNumbercase').value;
    const pinNumber = document.getElementById('pinNumbercase').value;
    const amount = document.getElementById('amountcase').value;

    if(acNumber.length !== 11 || pinNumber.length !== 4) {
        alert("Enter Valid Info");
    }
    else {
        let isValid = false;
        oneloop:
        for(const user of userDetails) {
            console.log(user.number);
            console.log(user.pin);
            if(user.number === acNumber && user.pin === pinNumber) {
                isValid = true;
                break oneloop;
            }
        }

        if(isValid){
            const newBalance = Number(balance.innerText) - Number(amount);
            balance.innerText = newBalance;
        }
        else {
            alert("Your info is invalid");
        }
    }
})