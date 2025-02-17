// ********** Menu Icon *************
const menuIcon = document.getElementById('menu-icon');
const menubox = document.getElementById('menubox');
// Toggle submenu visibility on menu click
menuIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the window
    menubox.classList.toggle("show-menubox");
});

// Hide submenu when clicking anywhere else
window.addEventListener("click", () => {
    menubox.classList.remove("show-menubox");
});

// Prevent submenu clicks from hiding it
menubox.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click from propagating to window
});


// *************** Header Pop Up ************
function NotAvlblPopupHeader(msg) {
    event.preventDefault();
    document.getElementById("popup-container").style.display = 'flex';
    document.getElementById("pop-header").innerText = "Feature Not Available";
    document.getElementById("pop-text").innerText = msg;
}

// Scroll to about
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const about = urlParams.get("scrollTo");
    if (about) {
        const targetabout = document.getElementById(about);
        if (targetabout) {
            targetabout.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});
// Scroll to contact
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const contact = urlParams.get("scrollTo");
    if (contact) {
        const targetcontact = document.getElementById(contact);
        if (targetcontact) {
            targetcontact.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});