let button = document.querySelector('#btn');
const qrBox = document.querySelector('#qr');
const text = document.querySelector('#text');

function showQR(){
    qrBox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    qrBox.classList.add('qrimg')
}

button.addEventListener('click', ()=>{
    showQR()
})
