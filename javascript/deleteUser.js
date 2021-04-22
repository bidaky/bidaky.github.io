
const {delform} = document.forms;
function deleteUser(event){
    event.preventDefault();
    var userData = localStorage.getItem('user')
    var userEmail = JSON.parse(userData).email
    const deleteUrl = 'http://127.0.0.1:5000/user/' + userEmail;
    console.log(deleteUrl);
    fetch(deleteUrl, {
        method : 'DELETE'
    }).then((data) => {
        console.log(data.status);
        if (data.status === 200){
            localStorage.clear();
            alert('success')
            document.location.replace('index.html')
        }
    if (data.status === 404){
        alert("User with that address not found")
        return false;
    }})

}
