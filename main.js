const timer_el=document.querySelector(".timer")
const start_btn = document.getElementById("start")
const stop_btn = document.getElementById("stop")
const reset_btn = document.getElementById("reset")

let seconds =0;
let interval = null;
start_btn.addEventListener("click",start)
stop_btn.addEventListener("click",stop)
reset_btn.addEventListener("click",reset)

function updateTimer() {
    seconds++;
    let hrs = Math.floor(seconds /3600);
    let mins=Math.floor((seconds-(hrs*3600))/60);
    let secs = seconds % 60
    if(secs < 10 )secs = "0" + secs
    if(mins < 10 )mins = "0" + mins
    if(hrs < 10 )hrs = "0" + hrs
    timer_el.innerText =`${hrs}:${mins}:${secs}`
}

function start() {
    if(interval){
        return
    }
    interval = setInterval(updateTimer, 1000)
}

function stop() {
    clearInterval(interval);
    interval = null
}

function reset() {
    stop()
    seconds = 0;
    timer_el.innerText="00:00:00"
}