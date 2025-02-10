const submitBtn = document.getElementById('btn')
const okBtn = document.getElementById('btn1')
const card = document.querySelector('.card')

submitBtn.addEventListener('click', ()=>{
    card.style.display = "block";
    submitBtn.style.display = "none";
})

okBtn.addEventListener('click', ()=>{
    card.style.display = "none"
    submitBtn.style.display = "block"
})
