function pomodoro(minutes, seconds) {
    window.oseconds = seconds;
    window.ominutes = minutes;
    window.paused = false;
    let timer_tag = document.getElementById('time');
    let title = document.querySelector('title');
    if (window.interval) {
        clearInterval(window.interval)
    }
    let sec = seconds; 
    let min = minutes;
    window.interval = setInterval(function() {
        if (!window.paused) {
            if (sec >= 10) {
                timer_tag.innerHTML = sec;
            }
            else {
                timer_tag.innerHTML = '0' + sec;
            }
            if (min >= 10) {
                timer_tag.innerHTML = min + ':' + timer_tag.innerHTML;
            }
            else {
                timer_tag.innerHTML = '0' + min + ':' + timer_tag.innerHTML;
            }

            title.innerHTML = timer_tag.innerHTML;

            sec -= 1;
            if (sec < 0 && min === 0) {
                clearInterval(interval);
                window.interval = null;
                title.innerHTML = 'Pomodoro Timer';
                alert('DONE!!!')
            }
            else if (sec < 0) {
                min -= 1;
                sec = 59;
            }
    }}, 1000);

}

function short_break() {
    if (window.interval) {
        clearInterval(window.interval);
        pomodoro(5, 0);
    }
}

function pause () {
    window.paused = !window.paused;    
    if (window.paused) {
        this.innerHTML = 'Play';
    } 
    else {
        this.innerHTML = 'Pause'
    }
}

function reset () {
    if (window.interval) {
        pomodoro(window.ominutes, window.oseconds);
    }
}

function clear () {
    if (window.interval) {
        clearInterval(window.interval);
    }
    let title = document.querySelector('title');
    let timer_tag = document.getElementById('time');
    timer_tag.innerHTML = '00:00';
    title.innerHTML = 'Pomodoro Timer';
}

document.addEventListener('DOMContentLoaded', function (event) {
    let pomBut = document.getElementById('pomodoro');
    pomBut.addEventListener('click', () => pomodoro(25, 0))    
    let shortBut = document.getElementById('short');
    shortBut.addEventListener('click', () => pomodoro(5, 0))    
    let longBut = document.getElementById('long');
    longBut.addEventListener('click', () => pomodoro(10, 0))    
    let pauseBut = document.getElementById('pause');
    pauseBut.addEventListener('click', pause);
    let resetBut = document.getElementById('reset');
    resetBut.addEventListener('click', reset);
    let clearBut = document.getElementById('clear');
    clearBut.addEventListener('click', clear);
});
