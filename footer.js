const footerHTML =
"<p> Dana, Elena, Lea og Marie </p>";
"<p> Email: purrandpourcatcafetrondheim@gmail.com </p>";
"<p> Phone number: +47 000 00 000</p>";
"<p> Opening Hours: Mon-Fri: 08:00 - 18:00m Sat-Sun: 10:00 - 17:00</p>";

function buildFooter (){
    const footer = document.getElementById("site-footer");
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}

document.addEventListener("DOMContentLoaded", buildFooter)