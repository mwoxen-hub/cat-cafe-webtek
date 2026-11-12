
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

    // Legg til 30 minutter
    now.setMinutes(now.getMinutes() + 30);

    // Rund opp til nærmeste kvarter
    let minutes = Math.ceil(
        (now.getMinutes() + now.getSeconds() / 60) / 15
    ) * 15;

    now.setMinutes(minutes, 0, 0);

    let hours = String(now.getHours()).padStart(2, "0");
    let mins = String(now.getMinutes()).padStart(2, "0");

    let minTime = `${hours}:${mins}`;

    // Gjelder bare når brukeren velger dagens dato
    if (dateInput.value === currentDate) {
        timeInput.min = minTime > "16:00" ? minTime : "16:00";
    } else {
        timeInput.min = "16:00";
    }
}

dateInput.addEventListener("change", updateTime);

updateTime();
