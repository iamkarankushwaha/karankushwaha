// ============= Onn Off Menu=============
let btn = document.getElementById("hamicon");
let menusection = document.getElementById("menusection");
btn.onclick = function () {
  menusection.classList.remove("menuoff")
  menusection.classList.toggle("menuon")
}

let btnx = document.getElementById("cross");
btnx.onclick = function () {
  menusection.classList.remove("menuon")
  menusection.classList.toggle("menuoff")
}

const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalImages = 3; // Number of images in the slider
function slideImages() {
  currentIndex = (currentIndex + 1) % totalImages;
  slides.style.transform = `translateX(-${currentIndex * 98}vw)`;
}
setInterval(slideImages, 6000);




// =============== Toggle Book or Class Racks
// Get elements
const booksCheckbox = document.getElementById('books');
const classCheckbox = document.getElementById('class');
const classRack = document.getElementById('classrack');
const bookRack = document.getElementById('bookrack');

// Function to toggle visibility
function toggleVisibility() {
  if (booksCheckbox.checked) {
    classRack.style.display = 'none';  // Hide class rack
  } else {
    classRack.style.display = 'flex'; // Show class rack
  }

  if (classCheckbox.checked) {
    bookRack.style.display = 'none';   // Hide book rack
  } else {
    bookRack.style.display = 'flex';  // Show book rack
  }
}

// Event listeners
booksCheckbox.addEventListener('change', toggleVisibility);
classCheckbox.addEventListener('change', toggleVisibility);

// Initial check on page load
toggleVisibility();



// --------------Popup are here------------------//
// ============= PopUp Privacy=============
// Get elements
const openPopupPrivacy = document.getElementById("privacybtn");
const popupPrivacy = document.getElementById("popupprivacy");
const closePopupprivacy = document.getElementById("closePopupprivacy");

// Open the popup when button is clicked
openPopupPrivacy.addEventListener("click", () => {
  popupPrivacy.style.display = "flex";
});

// Close the popup when 'X' is clicked
closePopupprivacy.addEventListener("click", () => {
  popupPrivacy.style.display = "none";
});

// Close the popup when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === popupPrivacy) {
    popupPrivacy.style.display = "none";
  }
});

// ============= PopUp T&C=============
// Get elements
const openPopuptnc = document.getElementById("tncbtn");
const popuptnc = document.getElementById("popuptnc");
const closePopuptnc = document.getElementById("closePopuptnc");

// Open the popup when button is clicked
openPopuptnc.addEventListener("click", () => {
  popuptnc.style.display = "flex";
});

// Close the popup when 'X' is clicked
closePopuptnc.addEventListener("click", () => {
  popuptnc.style.display = "none";
});

// Close the popup when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === popuptnc) {
    popuptnc.style.display = "none";
  }
});

// ============= PopUp Refund=============
// Get elements
const openPopuprefund = document.getElementById("refundbtn");
const popuprefund = document.getElementById("popuprefund");
const closePopuprefund = document.getElementById("closePopuprefund");

// Open the popup when button is clicked
openPopuprefund.addEventListener("click", () => {
  popuprefund.style.display = "flex";
});

// Close the popup when 'X' is clicked
closePopuprefund.addEventListener("click", () => {
  popuprefund.style.display = "none";
});

// Close the popup when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === popuprefund) {
    popuprefund.style.display = "none";
  }
});
// --------------Popup Ends here------------------//