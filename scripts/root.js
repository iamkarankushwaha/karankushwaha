// Header Switches
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})


// menu works
function openMenu() {
    const navcontainer = document.getElementById('navcontainer');
    navcontainer.classList.add('openMenu');
}
function closeMenu() {
    const navcontainer = document.getElementById('navcontainer');
    navcontainer.classList.remove('openMenu');
}
const navcontainer = document.getElementById('navcontainer');
navcontainer.addEventListener('click', closeMenu);


// Typing Animation with Multiple Lines
const texts = [
    "Welcome to My Portfolio Website",
    "Hunting - Articleship",
    "ITT - OC Completed",
    "B.Com. Graduate* | CA - WIP",
    "Tech Savvy - Coded this Website",
    "Driven By Ethics &",
    "Long Horizon Thinking."
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("welcometext");

const typingSpeed = 70;
const erasingSpeed = 20;
const holdAfterType = 2500;
const holdAfterErase = 30;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, holdAfterType);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, holdAfterErase);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});