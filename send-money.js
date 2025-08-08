

// Add Money
document.getElementById("sendMoney").addEventListener('click', function (even) {
    even.preventDefault();
    const getSendMoney = getMoneyById("sendMoneyId");
    const getSendMoneyPass = getMoneyById("sendMoneyPassId");
    const mainBalance = document.getElementById("mainBalanceId").innerText;

    if (!isNaN(getSendMoney) && getSendMoney !== "" && getSendMoneyPass === 1234 && mainBalance > getSendMoney) {

        let updateMoney = parseFloat(mainBalance) - getSendMoney;
        // console.log(money);
        document.getElementById('mainBalanceId').innerText = updateMoney;

        document.getElementById("my_modal_3").showModal();
        document.getElementById("infoOfSendMoney").innerText = "Transaction Successful!";
        document.getElementById("infoOfSendMoney").innerText = `You sent ${getSendMoney}Tk. Remaining balance: ${updateMoney}Tk.`;


        document.getElementById('sendMoneyId').value = "";
        document.getElementById('sendMoneyPassId').value = "";

        const p = document.createElement("p");
        p.innerText = `Send Money: ${getSendMoney}Tk. Update Money ${updateMoney}Tk.`
        document.getElementById("transactionId").appendChild(p);



    } else {
        alert("Please Input Right Value");
    }

})

// Cash Out

document.getElementById('cashOutMoney').addEventListener('click', function (even) {
    even.preventDefault();
    // console.log("You are working")
    const getCashMoney = getMoneyById("CashOutMoneyId");
    const getCashMoneyPass = getMoneyById("cashOutMoneyPassId");
    const mainBalance = document.getElementById("mainBalanceId").innerText;

    if (!isNaN(getCashMoney) && getCashMoney !== "" && getCashMoneyPass === 1234 && mainBalance > getCashMoney) {

        let updateCashMoney = parseFloat(mainBalance) - getCashMoney;
        // console.log(money);
        document.getElementById('mainBalanceId').innerText = updateCashMoney;

        document.getElementById("my_modal_3").showModal();
        document.getElementById("infoOfSendMoney").innerText = "Transaction Successful!";
        document.getElementById("infoOfSendMoney").innerText = `You sent ${getCashMoney}Tk. Remaining balance: ${updateCashMoney}Tk.`;

        const p = document.createElement("p");
        p.innerText = `Send Money: ${getCashMoney}Tk. Update Money ${updateCashMoney}Tk.`
        document.getElementById("transactionId").appendChild(p);

    } else {
        alert("Please Input Right Value");
    }

})

