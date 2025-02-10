const errorName = document.querySelector('.error-name');
const errorNumber = document.querySelector('.error-phone');
const errorEmail = document.querySelector('.error-email');
const errorMessage = document.querySelector('.error-message');
const button = document.getElementById('btn');
const submitError = document.querySelector('.submit-error')

function validateName(){
    var fullname = document.getElementById('contact-name').value;

    if(fullname.length == 0){
        errorName.innerHTML = "Name is required"
        return false;
    }
    if(!fullname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        errorName.innerHTML = "please write full name"
        return false;
    }
    errorName.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateNumber(){
    var number = document.getElementById('contact-phone').value;

    if(number.length == 0){
        errorNumber.innerHTML = "Number is required"
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        errorNumber.innerHTML = "please write correct number"
        return false;
    }
    errorNumber.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        errorEmail.innerHTML = "Email is required"
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,}$/)){
        errorEmail.innerHTML = "please write correct email"
        return false;
    }
    errorEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateMessage(){
    var msg = document.getElementById('contact-message').value;

    if(msg.length == 0){
        errorMessage.innerHTML = "Message is required"
        return false;
    }
    if(msg.length < 20){
        errorMessage.innerHTML = "please write 20 words"
        return false;
    }
    errorMessage.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function submit(){
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMessage()){
        submitError.innerHTML = 'please fix the error';
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000)
        return false;
    }
}

button.addEventListener('click', ()=>{
    submit()
    window.open('http://127.0.0.1:5500/form%20validation/abc.html')
})


