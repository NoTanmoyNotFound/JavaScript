var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
    } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (!/^\d+$/.test(phone)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    
    if (!email.match(/^[A-Za-z._0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more charecters required';
        return true;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>'
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Submit Your Details';
        setTimeout(function () {
            submitError.style.display = 'none'; 
        }, 3000);
        return false;
    }
}



