/* ---------- Spinner element ---------- */
const contactSpinner = document.createElement("div");
contactSpinner.id = "contactSpinner";
contactSpinner.classList.add("d-flex", "justify-content-center", "flex-column", "align-items-center", "fixed-top", "w-100", "h-100");
contactSpinner.style.cssText = `
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1000;
  top: 0;
  left: 0;
`;
contactSpinner.innerHTML = `
  <div class="loaderbox border-0 d-flex justify-content-center align-items-center" role="status" style="color: var(--slate-800);">
    <div style="width: 50px; height: 50px; border: solid 5px var(--slate-200); border-top: solid 5px var(--text-primary); border-left: solid 5px var(--text-primary); border-radius: 100%;"></div>
  </div>
  <h4 class="fw-bolder fs-4 mt-3" style="color: var(--slate-800);">Sending...</h4>
  <style>
    .loaderbox { animation: spin 1s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  </style>
`;

/* ---------- Success modal element ---------- */
const contactModel = document.createElement("div");
contactModel.id = 'contactModel';
contactModel.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'p-4');
contactModel.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1001;
  padding: 2rem;
  box-sizing: border-box;
`;
contactModel.innerHTML = `
  <div class="p-4 rounded-4 shadow-lg w-100" style="max-width:520px; background-color: var(--bg-primary);">
    <div class="mb-3 text-center border-bottom pb-3">
      <h1 class="modal-title fs-4 fw-bold text-center" style="color: var(--text-primary);">Thank you for your interest!</h1>
    </div>
    <div class="modal-body">
      <p class="my-3 text-center"><i class="fa-solid fa-circle-check px-4 py-4 rounded-circle" style="font-size: 2rem; background-color: var(--green-100); color: var(--green-600);"></i></p>
      <p style="font-size: 1rem; color: var(--text-secondary);" class="text-center mb-5">Your message has been received successfully.</p>
    </div>
    <div class="modal-footer d-flex justify-content-center gap-4 flex-wrap">
      <button type="button" class="btn primary-btn rounded-3" id="contactOkBtn"><i class="fa-solid fa-thumbs-up me-2"></i>Okay</button>
    </div>
  </div>
`;

/* ---------- DOM hooks ---------- */
const form = document.getElementById("contactForm");
if (!form) throw new Error("contactForm not found - ensure form has id='contactForm'");

/* ---------- Submit handler using no-cors (fire-and-forget) ---------- */
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // optimistic UX: show spinner
  document.body.appendChild(contactSpinner);

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd_IX0ve1OzvHlWPVDJK6nbgv6rXk_NJwfpNFwD7cWPvOZKng/formResponse";

  try {
    // send without custom headers to avoid preflight; use no-cors so request goes out
    await fetch(formUrl, {
      method: "POST",
      body: new FormData(form),
      mode: "no-cors"
    });

    // With mode:'no-cors' we cannot inspect the response object.
    // Assume success and show modal (optimistic UX).
    contactSpinner.remove();
    document.body.appendChild(contactModel);

    // attach modal button handler
    const okBtn = document.getElementById("contactOkBtn");
    if (okBtn) {
      okBtn.addEventListener("click", CloseContactModel);
    }

    // reset the form, but give user a moment to see the modal
    form.reset();

  } catch (error) {
    // network errors (DNS, offline) still surface here
    contactSpinner.remove();
    console.error("Network or fetch error:", error);
    alert("⚠️ Network error. Try again later.");
  }
});

/* ---------- Close modal + reset form ---------- */
function CloseContactModel() {
  if (contactModel && contactModel.parentElement) contactModel.remove();
}

/* Close modal when clicking outside the modal content (reliable) */
contactModel.addEventListener('click', (e) => {
  if (e.target === contactModel) CloseContactModel();
});
