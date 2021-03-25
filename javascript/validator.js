document.querySelector('.next-2').onclick = function () {
    var password = document.querySelector('.password').value,
        confirmPassword = document.querySelector('.confirm-password').value;
    if (password == ''){
        alert("Field cannot be empty.");
    }
    else if (password != confirmPassword){
        alert("Password didn`t match.");
        return false;
    }


}