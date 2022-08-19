function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}




function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById("phone_price");
    const currentCaseTotal = getTextElementValueById("case_price");
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    document.getElementById("subtotal").innerText = currentSubTotal;



    // calculate tax
    const tax = currentSubTotal * 0.10;
    const taxAmountString = tax.toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    document.getElementById("tax").innerText = taxAmount;
    const final = (taxAmount + currentSubTotal).toFixed(2);
    const finalTotal = parseFloat(final);
    document.getElementById("total").innerText = finalTotal;
}

