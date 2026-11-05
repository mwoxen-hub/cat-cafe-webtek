const elementToBeUpdated = document.getElementById("previousEventsNumber");
const rangeElement = document.getElementById("previousTotalEvents");
rangeElement.addEventListener("input", function(event){
    elementToBeUpdated.innerHTML = event.target.value;
})