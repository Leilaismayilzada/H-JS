
"use strict";

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
let count=0
    if (username && password) {
        const userData = {
            username: username,
            password: password,
        };
count++
        localStorage.setItem('userLoginData', JSON.stringify(userData));
        alert('User data saved!');
    } else {
        alert('Please fill in both fields.');
    }
});



