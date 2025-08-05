function DownloadResume() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("popupcontainer", "flexbox");
    document.body.appendChild(newDiv);
    newDiv.innerHTML =
        `
            <div class="popupwrapper">
                <button class="closebtn flexbox" onclick="ClosePopupresume()">✖️</button>
                <div class="popupheader flexbox">
                    <h2>Download Resume</h2>
                </div>
                <div class="popupcontent flxbox">
                    <p id="popupStatusText"></p>
                    <img src="Img-Assets/other_assets/resumedoodle.png" alt="resume doodle" class="popupdoodle">
                    <a href="" id="resumeDownloadBtn" target="_blank" class="ctabtns popupactionbtns" download>Download <i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        `;

    // You can toggle this based on your status
    const activelyLooking = false;  // Set to true when you're job-seeking
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
    const popupContainer = document.querySelector(".popupcontainer");
    if (popupContainer) {
        popupContainer.remove();
    }
}


// Example: Show the popup automatically or via button click
// Uncomment this to auto-show on page load
// DownloadResume();