const elementToBeUpdated = document.getElementById("previousEventsNumber");
const rangeElement = document.getElementById("previousTotalEvents");
rangeElement.addEventListener("input", function(event){
    elementToBeUpdated.innerHTML = event.target.value;
})

const form = document.querySelector("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    alert("Thank you for your application and wanting to adopt!")
    form.reset()
})