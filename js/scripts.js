$(document).ready(function() {

    function displayTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        const clockDiv = $('.clock');
        clockDiv.text(hours + ":" + minutes + ":" + seconds);
    }

    displayTime();
    setInterval(displayTime, 1000);

});

