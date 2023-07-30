var nameError = document.getElementById("name-error");
var mobileError = document.getElementById("mobile-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById("user-name").value;

    if(name.length == 0){
        nameError.innerHTML ='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNumber(){
    var number = document.getElementById("user-number").value;

    if(number.length == 0){
        mobileError.innerHTML = 'Mobile number is required';
        return false;
    }
    if(number.length !== 10){
        mobileError.innerHTML ='Mobile number should be 10digits';
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = 'Mobile number is required';
        return false;
    }
    mobileError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("user-email").value;

    if(email.length == 0){
        emailError.innerHTML = 'Email ID is required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML ='Email ID invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMsg(){
    var msg = document.getElementById("user-msg").value;
    var required = 30;
    var left = required - msg.length;

    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if( !validateName() || !validateNumber() || !validateEmail() || !validateMsg()){
        submitError.style.display ='block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display ='none';}, 3000);
        return false;
    }

}