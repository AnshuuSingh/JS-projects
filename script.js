const notification = document.querySelector('.notification')
const successBtn = document.getElementById('btn1')
const errorBtn = document.getElementById('btn2')
const invalidBtn = document.getElementById('btn3')

function showNotification(message){
    const msg = document.createElement('div')
    msg.className = "msgpopup"
    msg.innerHTML = message
    notification.appendChild(msg);

    setTimeout(()=>{
        msg.remove()
    }, 6000)

    if(message.includes('successfully')){
        msg.classList.add('success')
    }
    if(message.includes('error')){
        msg.classList.add('error')
    }
    if(message.includes('Invalid')){
        msg.classList.add('invalid')
    }
}

successBtn.addEventListener('click', ()=>{
    showNotification('<i class="fa-solid fa-circle-check"></i>successfully submitted')
})
errorBtn.addEventListener('click', ()=>{
    showNotification('<i class="fa-solid fa-circle-xmark"></i>Please fix the error!')
})
invalidBtn.addEventListener('click', ()=>{
    showNotification('<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again')
})
