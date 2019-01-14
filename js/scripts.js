$(document).ready(function() {

    function displayTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let meridiem = "AM";

        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }

        if (hours === 0) {
            hours = 12;    
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        const clockDiv = $('.clock');
        clockDiv.text(hours + ":" + minutes + ":" + seconds + " " + meridiem);
    }

    displayTime();
    setInterval(displayTime, 1000);

});

