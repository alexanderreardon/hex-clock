var clock = document.getElementById('clock');
var hexcode = document.getElementById('hexcode');

function hexClock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours > 12) {
        hours = (hours % 12).toString();
    }

    hours.length < 2 ? hours = '0' + hours : hours;
    minutes.length < 2 ? minutes = '0' + minutes : minutes;
    seconds.length < 2 ? seconds = '0' + seconds : seconds;

    clock.textContent = (hours + ' : ' + minutes + ' . ' + seconds); 
    hexcode.textContent = ('#' + hours + minutes + seconds);
    document.body.style.backgroundColor = ('#' + hours + minutes + seconds);
}

hexClock();
setInterval(hexClock, 50);