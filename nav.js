const navLinks = [
    { text: "Home", url: "P1_requirements_7.html" },
    { text: "Menu", url: "menu.html" },
    { text: "Cats", url: "Cats.html" },
    { text: "About", url: "about.html" },
    { text: "Contact", url: "contact.html" },
    { text: "Booking", url: "booking.html" }
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
        '  <button class="nav-toggle" aria-expanded="false" aria-controls = "nav-list" aria-label="Open menu">=</button>' +
        '  <nav aria-label="Main navigation">'+
        '    <ul class="nav-grid" id="nav-list">' + items + "</ul>" + // her er listas id
        "  </nav>" +
        '<h1 class = "site-title">Purr &amp; Pour </h1>' +
        '</div>' + 
        '<div class="info">'+
            '<p>Authors: Marie, Lea, Dana and Elena</p>' +
            '<p>Client: Cathrine Cat</p>'+
            '<p>Date: 18 September 2026</p>'+
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


