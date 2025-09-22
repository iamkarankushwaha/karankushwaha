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


// Onload open to work Model
window.onload = function () {
    const workModel = document.createElement('div');
    workModel.id = 'workModel';
    workModel.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'p-4');
    workModel.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        z-index: 500;
    `;
    workModel.innerHTML = `
        <div class="p-4 rounded-4 shadow-lg w-100 max-w-50" style="background-color: var(--bg-primary);">
            <div class="mb-3 text-center border-bottom pb-3">
                <h1 class="modal-title fs-4 fw-bold text-center" id="workModelLabel" style="color: var(--text-primary);">Welcome to My Portfolio!</h1>
            </div>
            <div class="modal-body">
                <p class="my-2 text-center"><i class="fa-solid fa-briefcase px-4 py-4 rounded-circle" style="font-size: 2rem; background-color: var(--blue-100); color: var(--text-tertiary);"></i></p>
                <p style="font-size: 1rem; color: var(--text-secondary);" class="text-center mb-5">Excited to share - <strong>I'm open to CA Articleship opportunities.</strong></p>
            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="btn primary-btn" onclick="closeWorkModel()"><i class="fa-solid fa-thumbs-up me-2"></i>Let's Explore!</button>
            </div>
        </div>
    `;
    // document.body.appendChild(workModel);
}
function closeWorkModel() {
    const workModel = document.getElementById('workModel');
    workModel.remove();
}



// Resume Download
function ResumeModel() {
    const resumeModel = document.createElement('div');
    resumeModel.id = 'resumeModel';
    resumeModel.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'p-4');
    resumeModel.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        z-index: 500;
    `;
    resumeModel.innerHTML = `
        <div class="p-4 rounded-4 shadow-lg w-100 max-w-50" style="background-color: var(--bg-primary);">
            <div class="mb-3 text-center border-bottom pb-3">
                <h1 class="modal-title fs-4 fw-bold text-center" id="resumeModelLabel" style="color: var(--text-primary);">Thank you for your interest!</h1>
            </div>
            <div class="modal-body">
                <p class="my-2 text-center"><i class="fa-solid fa-file-pdf px-4 py-4 rounded-circle" style="font-size: 2rem; background-color: var(--blue-100); color: var(--text-tertiary);"></i></p>
                <p style="font-size: 1rem; color: var(--text-secondary);" class="text-center mb-5">Download my resume for your perusal.</p>
            </div>
            <div class="modal-footer d-flex justify-content-center gap-4 flex-wrap">
                <button type="button" class="btn primary-btn" onclick="DownloadResume()"><i class="fa-solid fa-download me-2"></i>Download Pdf</button>
                <button type="button" class="btn secondary-btn" onclick="closeresumeModel()">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(resumeModel);
}
function closeresumeModel() {
    const resumeModel = document.getElementById('resumeModel');
    resumeModel.remove();
}

function DownloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeresumeModel();
}


// Contact Form
const form = document.getElementById("contactForm");
const popupOverlay = document.getElementById("popupOverlay");

const popupContent = document.getElementById("popupContent");

// Replace with your Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyg4aK8mjbOYpkJ4diuyjyAPBRAvavFc3Q6LYK3rHhmFg6KjEmuGsHNTYOO44W9BSdiBQ/exec";

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop normal redirect

  // Collect form data
  const formData = new FormData(form);

  // Show popup with spinner
  popupOverlay.style.display = "flex";
  popupContent.innerHTML = `<div class="loader"></div><p>Sending...</p>`;


  // Send via fetch
  fetch(SCRIPT_URL, { method: "POST", body: formData })
  .then(res => {
    if (res.ok) return res.text(); // or just return "OK"
    throw new Error("Network response not ok");
  })
  .then(() => {
    popupContent.innerHTML = `<div class="success">✔</div><p>Message Sent!</p>`;
    form.reset();
    setTimeout(() => { popupOverlay.style.display = "none"; }, 2000);
  })
//   .catch(err => {
//     popupContent.innerHTML = `<p style="color:red;">Error! Try again.</p>`;
//     console.error(err);
//   });

});