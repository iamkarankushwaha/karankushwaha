const projectWrappers = document.querySelectorAll('.project-wrapper');
const closeProjButtons = document.querySelectorAll('#closeproj');
let currentlyOpen = null; // Track the currently open project

// Function to close a project
function closeProject(proj) {
    if (!proj) return;
    proj.classList.remove('openprojdesc');
    proj.style.height = '0px';
    const closeBtn = proj.closest('.project-wrapper').querySelector('#closeproj');
    closeBtn.style.transform = 'rotate(0deg)';
    currentlyOpen = null;
}

// Function to open a project
function openProject(proj) {
    if (currentlyOpen && currentlyOpen !== proj) {
        closeProject(currentlyOpen); // Close the previously open project
    }
    proj.classList.add('openprojdesc');
    proj.style.height = 'fit-content';
    const closeBtn = proj.closest('.project-wrapper').querySelector('#closeproj');
    closeBtn.style.transform = 'rotate(180deg)';
    currentlyOpen = proj;
}

// Toggle project on clicking project-wrapper or closeproj
projectWrappers.forEach((wrapper) => {
    const projDesc = wrapper.querySelector('.proj-desc');
    const closeBtn = wrapper.querySelector('#closeproj');

    wrapper.addEventListener('click', (e) => {
        // Prevent double-triggering if clicking the button inside
        if (e.target === closeBtn) return;

        if (projDesc.classList.contains('openprojdesc')) {
            closeProject(projDesc);
        } else {
            openProject(projDesc);
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent wrapper click from triggering
        if (projDesc.classList.contains('openprojdesc')) {
            closeProject(projDesc);
        } else {
            openProject(projDesc);
        }
    });
});