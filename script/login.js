// Valid User
const userDetails = [
    {'number': '01315077224', 'pin': '1234'},
    {'number': '01705323117', 'pin': '5555'},
    {'number': '01315077224', 'pin': '9876'},
]

const loginBtn = document.getElementById('login-btn');
const loginNumber = document.getElementById('number');
const loginPin = document.getElementById('pin');

loginBtn.addEventListener('click', function(event){
    const userNumber = loginNumber.value;
    const userPin = loginPin.value;
    
    if(userNumber.length !== 11 || userPin.length !== 4) {
        alert("Enter Valid Info");
    }
    else {
        let isValid = false;
        oneloop:
        for(const user of userDetails) {
            console.log(user.number);
            console.log(user.pin);
            if(user.number === userNumber && user.pin === userPin) {
                isValid = true;
                break oneloop;
            }
        }

        if(isValid){
            window.location.href = "./main.html";
        }
        else {
            alert("Your info is invalid");
        }
    }
    event.preventDefault();
    // loginNumber.value = "";
    // loginPin.value = "";
})



