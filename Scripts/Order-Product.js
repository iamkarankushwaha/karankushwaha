document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get("id"));

    const item = itemsDatabase.find(i => i.id === itemId);
    if (item) {
        document.title=item.title;
        document.getElementById("itemimg").setAttribute("src", item.imgSrc);
        document.getElementById("itemimg").setAttribute("alt", item.title);
        document.getElementById("item-title").innerText=item.title;
        document.getElementById("item-price").innerText=item.priceActive;
        document.getElementById("droped-price").innerText=item.priceNonActive;
        document.getElementById("description").innerHTML=item.description;

        document.getElementById("bookname").value=item.title;
        document.getElementById("bookprice").value=item.priceActive;
    } else {
        document.getElementById("quickview-container").innerHTML = `<p>Item not found.</p>`;
    }
});


// ---------------------------------------
// ************* toggle description
const readmorebtn = document.getElementById("readmore");
readmorebtn.addEventListener("click", description)
function description(){
    const description = document.getElementById("description");
    description.classList.toggle("toggleheight");

    if(readmorebtn.innerText === "....read more."){
        readmorebtn.innerText="....read less.";
    }
    else{
        readmorebtn.innerText="....read more.";
    }
}

// ********** Order Item ************
const order_scriptURL = 'https://script.google.com/macros/s/AKfycbwESw3BD6hihwhaA_8QdDw3Q4meqkkTVQG6NZ0Of4q0vuLBntKO-f2TH0Yi3C4pdx2KxA/exec';
const order_form = document.forms['OrderForm'];
const order_spinner = document.getElementById('spinner-order-form'); // Spinner element
const order_popup = document.getElementById('popup-order-form'); // Popup element
const order_okButton = document.getElementById('ok-button-order-form'); // OK button

order_form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Show the spinner while the form is being submitted
    order_spinner.style.display = 'flex';

    fetch(order_scriptURL, { method: 'POST', body: new FormData(order_form) })
        .then((response) => {
            // Hide the spinner and show the popup
            order_spinner.style.display = 'none';
            order_popup.style.display = 'flex';
        })
        .catch((error) => {
            console.error('Error!', error.message);
            alert('An error occurred while submitting the form. Please try again.');
            order_spinner.style.display = 'none'; // Hide the spinner in case of error
        });
});

// Redirect after popup confirmation
order_okButton.addEventListener('click', () => {
    // Clear the form fields
    order_form.reset();

    // Hide the popup
    order_popup.style.display = 'none';

    window.location.href="Store-Page.html";
});


function cancel_order() {
    order_form.reset();
    document.querySelector(".AppContainer").scrollTo({
        top: 0
    });
}
