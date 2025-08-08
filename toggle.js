// Button Function Clicking

document.getElementById('sendMoneyButton').addEventListener('click', function (even) {
    even.preventDefault();
    hiddenButton("sendMoneySection");
    toggleButton("sendMoneyButton");
  

    // console.log("You are clicking");
})
document.getElementById('cashOutButton').addEventListener('click', function () {
    hiddenButton("cashOutSection");
    toggleButton("cashOutButton");
})
document.getElementById('transactionButton').addEventListener('click', function () {
    hiddenButton("transactionId");
     toggleButton("transactionButton");
})