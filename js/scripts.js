$(document).ready(function() {

    function displayTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();

        const clockDiv = $('.clock');
        clockDiv.text(hours + ":" + minutes + ":" + seconds);
    }

    displayTime();
    setInterval(displayTime, 1000);

});

