const displayTime = document.getElementById('display');
const restart = document.getElementById('restart')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
let timer = null;

let [hours, minutes, seconds] = [0,0,0];

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? `0${hours}`: `${hours}`;
    let m = minutes < 10 ? `0${minutes}`: `${minutes}`;
    let s = seconds < 10 ? `0${seconds}`: `${seconds}`;
    displayTime.innerHTML = `${h}:${m}:${s}`
}

play.addEventListener('click', ()=>{
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopWatch, 1000)
    play.style.color = "green"
})
pause.addEventListener('click', ()=>{
    clearInterval(timer)
    play.style.color = "orange"
})
restart.addEventListener('click', ()=>{
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayTime.innerHTML = "00:00:00"
    play.style.color = "orange"
})
