document.getElementById("subButton").addEventListener("click", function (event) {
    validateName();
    validateNumber();
    validateCard();
    validateMonth();
    validateYear();
    validateCVC();
});

function validateName() {
    let cardName = document.getElementById("cardName");
    if (cardName.value === "") {
        alert("Enter your name as it appears on the card");
        cardName.focus();
        event.preventDefault();
    }
}

function validateNumber() {
    let cNum = document.getElementById("cardNumber");
    if (cNum.value === "") {
        alert("Enter your card number");
        cNum.focus();
        event.preventDefault();
    } else if (!luhn(cNum.value)) {
        alert("Enter a legitimate card number");
        cNum.focus();
        event.preventDefault();
    }
}

function validateMonth() {
    let month = document.getElementById("expMonth");
    if (month.selectedIndex === 0) {
        alert("Select the expiration month");
        month.focus();
        event.preventDefault();
    }
}

function validateYear() {
    let year = document.getElementById("expYear");
    if (year.selectedIndex === 0) {
        alert("Select the expiration year");
        year.focus();
        event.preventDefault();
    }
}

function validateCVC() {
    let card = document.querySelector('input[name="credit"]:checked').value;
    let cvc = document.getElementById("cvc");
    if (cvc.value === "") {
        alert("Enter your CVC number");
        cvc.focus();
        event.preventDefault();
    } else if ((card === "amex") && !(/^\d{4}$/.test(cvc.value))) {
        alert("Enter a 4-digit number");
        cvc.focus();
        event.preventDefault();
    } else if ((card !== "amex") && !(/^\d{3}$/.test(cvc.value))) {
        alert("Enter a 3-digit number");
        cvc.focus();
        event.preventDefault();
    }
}

// Luhn Algorithm used for Validating Credit Card Numbers
function luhn(idNum) {
    let string1 = "";
    let string2 = "";
    
    for (let i = idNum.length - 1; i >= 0; i -= 2) {
        string1 += idNum.charAt(i);
    }
    for (let i = idNum.length - 2; i >= 0; i -= 2) {
        string2 += 2 * idNum.charAt(i);
    }
    
    return sumDigits(string1 + string2) % 10 === 0;
    
    function sumDigits(numStr) {
        let digitTotal = 0;
        for (let i = 0; i < numStr.length; i++) {
            digitTotal += parseInt(numStr.charAt(i));
        }
        return digitTotal;
    }
}
