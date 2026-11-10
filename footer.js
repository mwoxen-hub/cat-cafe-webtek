const footerHTML =
    "<div class='footer-group'>" +
    "<h3> Visit us</h3>" +
    "<p>Haakons gate 255B, 7030 Trondheim</p>" +
    "<p> Opening Hours: </p> " +
    "<p> Mon-Fri: 08:00 - 18:00 </p>" +
    "<p>Sat-Sun: 10:00 - 17:00</p>" +
    "</div>" +
    "<div class='footer-group'>" +
    "<h3>Contact</h3>" +
    "<p>Email: <a href='mailto:purrandpourcatcafetrondheim@gmail.com'>purrandpourcatcafetrondheim@gmail.com</a></p>" +
    "<p> Phone number: +47 000 00 000</p>" +
    "</div>" +
    "<div class='footer-group'>" +
    "<h3>Follow us</h3>" +
    "<p>Instagram: <a href='https://www.instagram.com/purrandpourcatcafetrondheim/'>@purrandpourcatcafetrondheim</a></p>" +
    "<p>Facebook: <a href='https://www.facebook.com/profile.php?id=61596114607447'>Purr and Pour Cat Cafe</a></p>" +
    "<p> X: <a href='https://x.com/PurrAndPourTRD'>@PurrAndPourTRD</a></p>" +
    "</div>" +
    "<p> Dana, Elena, Lea og Marie </p>";

function buildFooter() {
    const footer = document.getElementById("site-footer");
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}

document.addEventListener("DOMContentLoaded", buildFooter)