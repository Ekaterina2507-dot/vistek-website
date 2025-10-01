// Cookie Management Functions
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let c of ca) {
        c = c.trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Show cookie banner if no choice made
window.onload = function() {
    if (!getCookie("cookie_consent")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
};

// Accept cookies
document.getElementById("accept-cookies").onclick = function() {
    setCookie("cookie_consent", "accepted", 365);
    document.getElementById("cookie-banner").style.display = "none";
};

// Decline cookies
document.getElementById("decline-cookies").onclick = function() {
    setCookie("cookie_consent", "declined", 365);
    document.getElementById("cookie-banner").style.display = "none";
};