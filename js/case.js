function updateCaseNumber(isIncrerase) {
    const caseNumberString = document.getElementById("case_number_field").value;
    const PreviouscaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrerase === true) {
        newCaseNumber = PreviouscaseNumber + 1;
    }
    else {
        newCaseNumber = PreviouscaseNumber - 1;
    }
    document.getElementById("case_number_field").value = newCaseNumber;
    return newCaseNumber;

}
function updateCasePrice(newCaseNumber) {
    const newPrice = newCaseNumber * 59;
    document.getElementById("case_price").innerText = newPrice;
}


document.getElementById("btn_case_plus").addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
    calculateSubTotal()




})
document.getElementById("btn_case_minus").addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();
})