document.querySelector('.next-2' ).onclick = function () {
    var password = document.querySelector('.password').value,
        confirmPassword = document.querySelector('.confirm-password').value;
    if (password === ''){
        alert("Field cannot be empty.");
    }
    else if (password !== confirmPassword){
        alert("Password didn`t match.");
        return false;
    }
    password = document.getElementById('pass')
    if (password.length < 8){

        alert('Password should contain at least 8 symbols')
        document.getElementById('password').value = ''
        document.getElementById('conf-password').value = ''
        return false;
    }


}