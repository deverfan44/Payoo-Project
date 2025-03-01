const userDetails = [
    {'number': '01315077224', 'pin': '1234'},
    {'number': '01705323117', 'pin': '5555'},
    {'number': '01315077224', 'pin': '9876'},
]

// Add Money
const addMoney = document.getElementById('addMoney');
const balance = document.getElementById('balance');
addMoney.addEventListener('click', function(event){
    event.preventDefault();
    const acNumber = document.getElementById('accountNumber').value;
    const pinNumber = document.getElementById('pinNumber').value;
    const amount = document.getElementById('amount').value;

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
            const newBalance = Number(balance.innerText) + Number(amount);
            balance.innerText = newBalance;
        }
        else {
            alert("Your info is invalid");
        }
    }
})




// Caseout 
const caseOutSection = document.getElementById('caseOutSection');
caseOutSection.style.display = 'none';
const addMoneySection = document.getElementById('addMoneySection');
const addMoneyBtn = document.getElementById('addMoneyBtn');
const caseOutBtn = document.getElementById('caseOutBtn');

addMoneyBtn.addEventListener('click', function() {
    caseOutSection.style.display = "none";
    addMoneySection.style.display = "block";
})
caseOutBtn.addEventListener('click', function() {
    caseOutSection.style.display = "block";
    addMoneySection.style.display = "none";
})