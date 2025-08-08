document.getElementById('loginBtn').addEventListener('click', function (even) {
    even.preventDefault();
    const getAmount = getMoneyById('inputAmount');
    const getPass = getMoneyById('passwordID');
    // console.log(getAmount , getPass);

    if(!isNaN(getAmount) && getPass === 1234 && getAmount !== ""){
        
        window.location.href = "index.html";

    }else{
        alert("Please Provide Right Input")
    }

})