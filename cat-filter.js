const buttons = document.querySelectorAll(".cat-filter button");
const sections = document.querySelectorAll(".cat-card");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const chosen = button.dataset.filter;
        buttons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        sections.forEach((section) => {
            const show = chosen === "all" || section.dataset.status === chosen;
            section.style.display = show ? "" : "none";
        })
    })
})