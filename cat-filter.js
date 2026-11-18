// Filters the cats on cats.html by status: all cats, available for adoption, or café residents.
// Based on the menu filter in filter.js.   
const buttons = document.querySelectorAll(".cat-filter button");
const sections = document.querySelectorAll(".cat-card");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const chosen = button.dataset.filter;
        buttons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");
        sections.forEach((section) => {
            const show = chosen === "all" || section.dataset.status === chosen;
            section.style.display = show ? "" : "none";
        })
    })
})