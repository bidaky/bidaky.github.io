

const {editform} = document.forms;
let values;
let userData = localStorage.getItem('user');
let firstname = JSON.parse(userData).firstname;
let lastname = JSON.parse(userData).lastname
let phoneNumber = JSON.parse(userData).phoneNumber;
let userEmail = JSON.parse(userData).email;
let pass = JSON.parse(userData).password;
document.getElementById('firstname').value = firstname
document.getElementById('lastname').value = lastname
document.getElementById('phoneNumber').value = phoneNumber

function editUser(event){
    event.preventDefault();
    const {firstname, lastname, phoneNumber, password} = editform;
    let nopass = password.value
    if(password.value === ''){
        nopass = pass
    }

    values = {
        firstname: firstname.value,
        lastname: lastname.value,
        phoneNumber : phoneNumber.value,
        password : nopass,
    };

    const editUrl = 'http://127.0.0.1:5000/user/' + userEmail;
    console.log(editUrl);
    fetch(editUrl, {
        method : 'PUT',
        headers:{
            'Content-type' : 'application/json'},
        body: JSON.stringify(values)
    })

}
editform.addEventListener('submit', editUser)