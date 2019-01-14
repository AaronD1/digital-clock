const daysOfTheWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

$(document).ready(function() {

    function displayDay() {
        let newDay = new Date();
        let dayIndex = newDay.getDay();
        let day = daysOfTheWeek[dayIndex];
        const dayDiv = $('.day');
        dayDiv.text(day);

    }

    function displayDate() {
        // Get month
        let newMonth = new Date();
        let monthIndex = newMonth.getMonth();
        let month = months[monthIndex];
        // Get day
        let newDate = new Date();
        let day = newDate.getDate();
        // Get year
        let newYear = new Date();
        let year = newYear.getFullYear();
        let dateDiv = $('.date');
        // Update html with month, day, year
        dateDiv.text(month.toUpperCase() + " " + day + " " + year)
    }

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

        const timeDiv = $('.time');
        timeDiv.text(hours + ":" + minutes + ":" + seconds + " " + meridiem);
    }

    displayDay();
    displayTime();
    setInterval(function() {
        displayDay();
        displayDate();
        displayTime();
    }, 1000);

});

