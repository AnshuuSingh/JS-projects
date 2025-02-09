let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "~!@#$%^&*()"
let allchars = uppercase + lowercase + numbers + symbols;

let length = 12;

const passwordBox = document.getElementById('password-box')
const button = document.getElementById('btn')
const copybtn = document.getElementById('copy')

function generatePassword(){
    //here we treat "Math.floor(Math.random() * uppercase.length)" as random index
    let password = ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }
    return password;
}
//console.log(result);

button.addEventListener('click', ()=>{
    const result = generatePassword();
    passwordBox.value = result
})

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

copybtn.addEventListener('click', ()=>{
    copyPassword()
})
