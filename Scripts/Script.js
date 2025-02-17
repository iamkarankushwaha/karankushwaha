// ********App Pop-Up**********
// Show the popup when the page loads
window.onload = function () {
    setTimeout(function () {
        const AppPopup = document.getElementById('app-pop');
        // Show the popup after 1 sec
        // AppPopup.style.visibility = 'visible';
        AppPopup.style.opacity = '1'; // Fade in effect
    }, 800); // 1000 milliseconds = 1 second
};

// Close the popup when the user clicks "OK"
document.getElementById('app-close-popup').onclick = function () {
    const AppPopup = document.getElementById('app-pop');
    AppPopup.style.opacity = '0'; // Fade in effect
    AppPopup.style.visibility = 'hidden'; // Hide the popup
};

//----------------------------------------------------------------


// ********** Review Slider ***************
let currentIndexR = 0;
const totalReviews = document.querySelectorAll('.reviewbox').length; // Get total number of review boxes

function slideReviews() {
    const mainslider = document.querySelector('.mainslider');
    const reviewboxes = document.querySelectorAll('.reviewbox');
    const Rslides = document.querySelector('.reviewslides');

    if (!mainslider || reviewboxes.length === 0 || !Rslides) {
        console.error("Elements not found!");
        return;
    }

    let mainsliderwidth = mainslider.getBoundingClientRect().width; // More reliable way to get width

    // Set width of each review box
    reviewboxes.forEach(box => {
        box.style.width = `${mainsliderwidth}px`;
    });

    // Ensure .reviewslides is wide enough to hold all review boxes
    Rslides.style.width = `${mainsliderwidth * totalReviews}px`;

    // Move slides
    currentIndexR = (currentIndexR + 1) % totalReviews;
    Rslides.style.transform = `translateX(-${currentIndexR * mainsliderwidth}px)`;
}

// Run once initially to set the widths before sliding
slideReviews();

// Auto-slide every 5 seconds
setInterval(slideReviews, 8000);


// ------------------------------------------------

// **************** Contact Form **********************
const scriptURL = 'https://script.google.com/macros/s/AKfycbxeTxnZhqDkV8fR5rswYCmwhDSVAedkdAc9Ex9pa1YJwd2pCYuWjF6j0UgTeqXb9sQ_Lw/exec';
const form = document.forms['Contact-Form'];
const spinner = document.getElementById('spinner-contact-form'); // Spinner element
const popup = document.getElementById('popup-contact-form'); // Popup element
const okButton = document.getElementById('ok-button-contact-form'); // OK button

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Show the spinner while the form is being submitted
    spinner.style.display = 'flex';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            // Hide the spinner and show the popup
            spinner.style.display = 'none';
            popup.style.display = 'flex';
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert('An error occurred while submitting the form. Please try again.');
            spinner.style.display = 'none'; // Hide the spinner in case of error
        });
});

// Redirect after popup confirmation
okButton.addEventListener('click', () => {
    // Clear the form fields
    form.reset();

    // Hide the popup
    popup.style.display = 'none';
    document.querySelector(".AppContainer").scrollTo({
        top: 0
    });
});