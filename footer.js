const footerHTML =
"<p> Dana, Elena, Lea og Marie </p>";

function buildFooter (){
    const footer = document.getElementById("site-footer");
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}

document.addEventListener("DOMContentLoaded", buildFooter)