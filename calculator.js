document.getElementById('calculator-field').addEventListener('click', function(){

    const incomeField = document.getElementById('income-field')
    const newIncomeAmountString = incomeField.value;
    const newIncomeAmount = parseFloat(newIncomeAmountString)


    const expensesField = document.getElementById('expenses-field')
    const newExpensesAmountString = expensesField.value;
    const newExpensesAmount = parseFloat(newExpensesAmountString)

    
    const rentField = document.getElementById('rent-field')
    const newRentAmountString = rentField.value;
    const newRentAmount = parseFloat(newRentAmountString)


    const clotheField = document.getElementById('clothes-filed')
    const newClotheAmountString = clotheField.value;
    const newClotheAmount = parseFloat(newClotheAmountString)


    const expensesTotalAmount = newExpensesAmount + newRentAmount + newClotheAmount;


    document.getElementById('total-expenses').innerText = expensesTotalAmount;

    const totalBalanceAmount = newIncomeAmount - expensesTotalAmount;
    document.getElementById('balance-calculation').innerText = totalBalanceAmount;


})
