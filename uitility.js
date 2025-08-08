
function getMoneyById(id){
    const getId = document.getElementById(id).value;
    return parseFloat(getId);
}

function getPassById(){
    const getPass= document.getElementById(id).innerText;
    return parseFloat(getPass);
}

function hiddenButton(id){
    document.getElementById('sendMoneySection').classList.add('hidden');
    document.getElementById('cashOutSection').classList.add('hidden');
    document.getElementById('transactionId').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function toggleButton(id){
    document.getElementById('sendMoneyButton').classList.remove('bg-green-500', 'text-white');
    document.getElementById('cashOutButton').classList.remove('bg-green-500', 'text-white');
    document.getElementById('transactionButton').classList.remove('bg-green-500', 'text-white');

     document.getElementById(id).classList.add('bg-green-500', 'text-white');
}

