function updatePhoneNumber(isIncrerase) {
    const phoneNumberString = document.getElementById("phone_number_field").value;
    const PreviousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrerase === true) {
        newPhoneNumber = PreviousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = PreviousPhoneNumber - 1;
    }
    document.getElementById("phone_number_field").value = newPhoneNumber;
    return newPhoneNumber;

}
function updatePhonePrice(newPhoneNumber) {
    const newPrice = newPhoneNumber * 1219;
    document.getElementById("phone_price").innerText = newPrice;
}



document.getElementById("btn_phone_plus").addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);

    // calculate total
    calculateSubTotal()






})
document.getElementById("btn_phone_minus").addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal()
})