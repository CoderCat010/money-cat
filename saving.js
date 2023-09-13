document.getElementById('save-btn').addEventListener('click', function(){

const totalBalanceElement = document.getElementById('balance-calculation')
const totalBalanceElementString = totalBalanceElement.innerText;
const totalBalanceAmount = parseFloat(totalBalanceElementString)


const saverField = document.getElementById('saver-field')
const savingValueString = saverField.value;
const savingValue = parseFloat(savingValueString)

const totalSavingAmount = (totalBalanceAmount * savingValue) / 100;

const savingElement = document.getElementById('saving-element')
savingElement.innerText = totalSavingAmount;

const totalRemainingAmount = totalBalanceAmount - savingValue
const totalRemaining = document.getElementById('balance-remain')
totalRemaining.innerText = totalRemainingAmount;

})