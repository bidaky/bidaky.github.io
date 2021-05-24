fetch('http://127.0.0.1:5000/user', {
    method:'POST',
    headers:{
        'Content-type' : 'application/json'}
    ,
    body : JSON.stringify({
        firstname: 'useruserrr',
        lastname: 'userlastnamerr',
        email : 'emale@ukrr',
        phoneNumber : '0686675559',
        password : '12345678',
        birthDate : null,
        role : 'Admin'
    })

}).then(res => {
    console.log(body);
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))


// const requestURL = 'http://127.0.0.1:5000/user'
//
// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers,
//         mode: 'no-cors'
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//
//         return response.json().then(error => {
//             const e = new Error('ERROR')
//             e.data = error
//             throw e
//         })
//     })
// }
// const body= {
//     firstname: 'useruser',
//     lastname: 'userlastname',
//     email : 'emal@ukr',
//     phoneNumber : '0686675789',
//     password : '12345678',
//     birthDate : '30.01.2002',
//     role : 'Admin'
// };
//
// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
//
//
// // const sendData = async (url, data) =>{
// //     const response = await fetch(url, {
// //         method: 'POST',
// //         body: JSON.stringify(data)
// //     });
// //     if (!response.ok){
// //         throw new Error("Error,  ${response}")
// //     }
// //     return await response.json();
// // };
// //
// // const sendUser = () => {
// //     const userForm = document.querySelector('.reg-form');
// //     userForm.addEventListener('submit', e => {
// //         e.preventDefault();
// //         const formData = new FormData(userForm);
// //         console.log(formData)
// //         const cartList = JSON.stringify(formData)
// //
// //         sendData('http://127.0.0.1:5000/user', cartList)
// //             .then(() => {
// //             userForm.reset();
// //             })
// //             .catch((err) => {
// //             console.log(err)
// //         })
// //     });
// // }
// // sendUser();
//
//
// const {form} = document.forms;
// function retrieveFormValue(event){
//     event.preventDefault();
//     const {firstname, lastname, email, phoneNumber, password, date, user} = form;
//     const values = {
//         firstname: firstname.value,
//         lastname: lastname.value,
//         email : email.value,
//         phoneNumber : phoneNumber.value,
//         password : password.value,
//         birthDate : date.value,
//         role : user.value
//     };
//     console.log(values)
//     sendData('http://127.0.0.1:5000/user', values)
//         .then(() => {
//             form.reset();
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//
// }
// form.addEventListener('submit', retrieveFormValue);
