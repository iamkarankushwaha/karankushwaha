function DownloadResume() {
    const newDiv = document.createElement("div");
    newDiv.className = "popup-container position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center";
    document.body.appendChild(newDiv);
    newDiv.innerHTML =
        `
            <div class="popupwrapper shadow-lg rounded-3 bg-white p-4 pb-0">
                <div class="bag-header d-flex justify-content-between align-items-center border-bottom pb-2">
                    <h2 class="text-center">Download Resume</h2>
                    <button class="btn btn-close" onclick="ClosePopupresume()"></button>
                </div>
                <div class="popupbody text-muted overflow-auto" style="min-height: 20vh;">
                    <p id="popupStatusText" class="text-muted fw-medium my-3"></p>
                    <img src="Img-Assets/other_assets/resumedoodle.png" alt="resume doodle" class="img-fluid mb-3" style="max-width: 60%; height: auto; display: block; margin: 0 auto;">
                    <a href="" id="resumeDownloadBtn" target="_blank" class="btn btn-primary m-auto p-md shadow my-4" style="width: fit-content;" download>Download <i class="bi bi-download px-1"></i></a>
                </div>
            </div>
        `;

    // You can toggle this based on your status
    const activelyLooking = true;  // Set to true when you're job-seeking
    const statusText = document.getElementById("popupStatusText");
    const downloadBtn = document.getElementById("resumeDownloadBtn");

    // Toggle based on job-seeking status
    if (activelyLooking) {
        statusText.textContent = "Currently open to opportunities for CA Articleship. Full resume is available.";
        downloadBtn.href = "PDF Assets/karan_resume_recruiter.pdf";  // Full resume
    } else {
        statusText.textContent = "Not actively seeking for roles. Sharing a public version for now.";
        downloadBtn.href = "PDF Assets/karan_resume_public.pdf";  // Redacted resume
    }
}

function ClosePopupresume() {
    const popupContainer = document.querySelector(".popup-container");
    if (popupContainer) {
        popupContainer.remove();
    }
}

// DownloadResume();