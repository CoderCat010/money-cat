document.getElementById('calculator-field').addEventListener('click', function(){

    const incomeField = document.getElementById('income-field')
    const newIncomeAmountString = incomeField.value;
    const newIncomeAmount = parseFloat(newIncomeAmountString)
    console.log(newIncomeAmount);


    const expensesField = document.getElementById('expenses-field')
    const newExpensesAmountString = expensesField.value;
    const newExpensesAmount = parseFloat(newExpensesAmountString)
    console.log(newExpensesAmount);

    
    const rentField = document.getElementById('rent-field')
    const newRentAmountString = rentField.value;
    const newRentAmount = parseFloat(newRentAmountString)
    console.log(newRentAmount);


    const clotheField = document.getElementById('clothes-filed')
    const newClotheAmountString = clotheField.value;
    const newClotheAmount = parseFloat(newClotheAmountString)
    console.log(newClotheAmount);

})
