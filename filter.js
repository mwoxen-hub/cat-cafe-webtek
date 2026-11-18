
const buttons = document.querySelectorAll(".menu-filter button");
const sections = document.querySelectorAll(".menu-category");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const chosen = button.dataset.filter;
        buttons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");
        sections.forEach((section) => {
            const show = chosen === "all" || section.dataset.category === chosen;
            section.style.display = show ? "" : "none";
        })

        })
})