

function validateName() {

var name = document.getElementById('name');
var nameSpan = document.getElementById('nameError');

    if (name.value.trim() == "") {
        nameSpan.style.display = "block";
        return false;
    } else {
        nameSpan.style.display = "none";
    }
}


function validateMessage() {

var message = document.getElementById('subject');
var messageSpan = document.getElementById('messageError');  

    if (message.value.trim() == "") {
        messageSpan.style.display = "block";
        return false;
    } else {
        messageSpan.style.display = "none";
    }
}


function validateEmail() {

var email = document.getElementById('email');
var emailSpan = document.getElementById('emailError');

    if (/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
        emailSpan.style.display = "none";
        return true;
    } else {
        emailSpan.style.display = "block";
    }
}