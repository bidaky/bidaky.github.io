const requestURL = 'http://127.0.0.1:5000/user'

const {form} = document.forms;
let values
function retrieveFormValue(event) {
    event.preventDefault();
    let response;

    const {firstname, lastname, email, phoneNumber, password, date, user} = form;

    values = {
        firstname: firstname.value,
        lastname: lastname.value,
        email : email.value,
        phoneNumber : phoneNumber.value,
        password : password.value,
        birthDate : date.value,
        role : user.value
    };

    fetch(requestURL, {
        method:'POST',
        headers:{
            'Content-type' : 'application/json'},
        body: JSON.stringify(values)

    })  .then((data) => {
        console.log(data.status);
        if (data.status === 201 ) {
            localStorage.setItem('user', JSON.stringify(data));
        }
        else if (data.status === 200 ) {
            localStorage.setItem('user', JSON.stringify(data));
        }
        else if (data.status ===403) {
            alert('This user is already registred');
            document.getElementById('form').reset();
            location.reload()
        }
        else {
            alert('Error try again');
        }
    })

}
form.addEventListener('submit', retrieveFormValue)

