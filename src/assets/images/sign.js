const {signform} = document.forms;

function retrieveFormValue(event){
    event.preventDefault();

    const {email, password} = signform;
    const values = {
        email : email.value,
        password : password.value
    };

    const signUrl = 'http://127.0.0.1:5000/user/login?email='+email.value+'&password='+password.value;
    console.log(signUrl)
    fetch(signUrl,{method : "GET"} ).then(function(response) {
        if(response.ok) {
            response.json().then(function(json) {
                let data = json;
                localStorage.setItem('user',  JSON.stringify(data.user))
                localStorage.setItem('token',data.basicAuthToken)
                alert('Success')
                document.location.replace('profile.html')
            });
        } else {
            alert('Wrong username or password');
        }
    })}

signform.addEventListener('submit', retrieveFormValue);
// var userdata = localStorage.getItem('user')
// var auth = localStorage.getItem('token')
// console.log(JSON.parse(userdata), auth);