const navLinks = [
    { text: "Home", url: "index.html" },
    { text: "About", url: "about.html" },
    { text: "Cats", url: "cats.html" },
    { text: "Menu", url: "menu.html" },
    { text: "Booking", url: "booking.html" },
    { text: "Contact", url: "contact.html" }
];

function currentPage(){
    const page = window.location.pathname.split("/").pop();
    return page == "" ? "default.html" : page;
}

function buildNavbar(){
    const current = currentPage();

    const items = navLinks
        .map(function (link){
            const active = link.url === current ? 'aria-current="page"' :"";
            return '<li><a href="' + link.url + '"' + active + ">" + link.text + "</a></li>";
        })
        .join("");

return (
    '<div class="meny">' +
    '<h1 class = "site-title">Purr &amp; Pour </h1>' +
    '  <button class="nav-toggle" aria-expanded="false" aria-controls="nav-list" aria-label="Open menu">=</button>' +
    '  <nav aria-label="Main navigation">'+
    '    <ul class="nav-grid" id="nav-list">' + items + "</ul>" +
    "  </nav>" +
    '</div>'
);

}
//this is what makes the burger-menu on phones
function setupToggle (){
    const button = document.querySelector(".nav-toggle");
    const list = document.getElementById("nav-list");
    if (!button || !list) {
        console.log("mangler nav-toggle eller nav-list");
        return;
    }

    button.addEventListener("click",function (){
        const isOpen =list.classList.toggle("open");

        button.setAttribute("aria-expanded",isOpen);
        button.setAttribute("aria-label",isOpen? "Close menu" : "Open menu")
    });

}

document.addEventListener("DOMContentLoaded",function(){
    const header = document.getElementById("site-header");
    if (!header) return; // hvis siden ikke har "site-header", gjør ingenting
    header.innerHTML = buildNavbar();
    setupToggle();
});


