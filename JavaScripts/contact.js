const scriptURL = 'https://script.google.com/macros/s/AKfycbxeTxnZhqDkV8fR5rswYCmwhDSVAedkdAc9Ex9pa1YJwd2pCYuWjF6j0UgTeqXb9sQ_Lw/exec';
const form = document.forms['Contact-Form'];

const spinner = document.createElement("div");
spinner.innerHTML = `
    <div class="spinnerbox flexbox"><i class="fa-solid fa-spinner"></i></div>
`;
spinner.classList.add("spinner-container", "flexbox");

const popup = document.createElement("div");
popup.innerHTML = `
    <div class="popupwrapper">
        <div class="popupheader">
            <h2 class="popupheaderc">Message Recieved!</h2>
        </div>
        <div class="popupcontent flexbox">
            <p id="PopupText">Thank you for your message. I will get back to you at the earliest opportunity.</p>
            <img src="Img-Assets/other_assets/messagesent.jpg" alt="message sent doodle" class="popupdoodlec">
        </div>
        <button class="closebtnc flexbox ctabtns" onclick="ClosePopup()">Okay</button>
    </div>
`;
popup.classList.add("popupcontainer", "flexbox");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show the spinner while the form is being submitted
    document.body.appendChild(spinner);

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            spinner.remove();
            document.body.appendChild(popup);
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert('An error occurred while submitting the form. Please try again.');
            spinner.remove();
        });
});

function ClosePopup() {
    form.reset();

    // Hide the popup
    if (popup.parentElement) {
        popup.remove();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}