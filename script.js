function calculateLoan() {
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);

    var monthlyInterestRate = interestRate / 100 / 12;
    var numberOfPayments = loanTerm * 12;

    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    var totalPayment = monthlyPayment * numberOfPayments;

    document.getElementById('result').innerHTML = "Monthly Payment: frw " + monthlyPayment.toFixed(2) + "<br>Total Payment: frw " + totalPayment.toFixed(2);
}
