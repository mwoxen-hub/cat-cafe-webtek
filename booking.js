// Booking form: blocks past dates, limits the time to opening hours (different on weekdays and weekends), 
// It also shows a confirmation when the form is sent.
let dateInput = document.getElementById("bookDate");
let timeInput = document.getElementById("time");

let today = new Date();

let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");

let currentDate = `${year}-${month}-${day}`;

dateInput.min = currentDate;



function updateTime() {
    let now = new Date();

    // Add 30 minutes
    now.setMinutes(now.getMinutes() + 30);

    // Round up to the nearest quarter hour
    let minutes = Math.ceil(
        (now.getMinutes() + now.getSeconds() / 60) / 15
    ) * 15;

    now.setMinutes(minutes, 0, 0);

    let hours = String(now.getHours()).padStart(2, "0");
    let mins = String(now.getMinutes()).padStart(2, "0");

    let minTime = `${hours}:${mins}`;
    let chosenDay = new Date(dateInput.value).getDay();
    let isWeekend = chosenDay === 0 || chosenDay === 6;
    let openTime = isWeekend ? "11:00" : "10:00";
    let lastBooking = isWeekend ? "16:30" : "17:30";
    // Only applies when the user chooses today's date
    if (dateInput.value === currentDate) {
        timeInput.min = minTime > openTime ? minTime : openTime;
    } else {
        timeInput.min = openTime;
    }
    timeInput.max = lastBooking;
}

dateInput.addEventListener("change", updateTime);

updateTime();

const form = document.querySelector(".booking-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let date = dateInput.value;
    let time = timeInput.value;
    let people = document.getElementById("people").value;

    alert(`Thank you, ${firstName}! Your table for ${people} is booked on ${date} at ${time}.`);

    form.reset();
});