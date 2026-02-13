const form = document.getElementById("contactForm");
if (!form) throw new Error("contactForm not found - ensure form has id='contactForm'");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // show spinner
    document.getElementById("SpinnerBox").classList.remove("d-none");
    document.getElementById("SpinnerBox").classList.add("d-flex");

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd_IX0ve1OzvHlWPVDJK6nbgv6rXk_NJwfpNFwD7cWPvOZKng/formResponse";
    try {
        await fetch(formUrl, {
            method: "POST",
            body: new FormData(form),
            mode: "no-cors"
        });

        // Assume success and show modal (optimistic UX).
        document.getElementById("SpinnerBox").classList.add("d-none");
        document.getElementById("SpinnerBox").classList.remove("d-flex");
        const modalElement = document.getElementById("ContactModel");
        const contactModal = new bootstrap.Modal(modalElement);
        contactModal.show();


        // reset the form, but give user a moment to see the modal
        form.reset();

    } catch (error) {
        // network errors (DNS, offline) still surface here
        contactSpinner.remove();
        console.error("Network or fetch error:", error);
        alert("⚠️ Network error. Try again later.");
    }
});