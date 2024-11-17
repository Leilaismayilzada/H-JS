
"use strict";

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        const userData = {
            username: username,
            password: password,
            expiration: new Date().getTime() + 24 * 60 * 60 * 1000 
        };
        
        localStorage.setItem('userLoginData', JSON.stringify(userData));
        alert('User data saved!');
    } else {
        alert('Please fill in both fields.');
    }
});

// Check for expiration on page load
document.addEventListener('DOMContentLoaded', function () {
    const storedData = localStorage.getItem('userLoginData');

});
