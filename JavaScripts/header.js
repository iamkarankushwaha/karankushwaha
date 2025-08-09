document.addEventListener("DOMContentLoaded", function () {
    // ------- Header Element Injection -------
    document.getElementById("header").innerHTML = `
    <div class="padcontainer">
        <div class="headerwrapper flexbox">
            <div class="logobox flexbox">
                <a href="index.html">
                    <img src="Img-Assets/main_logo.svg" alt="Logo Karan Kushwaha">
                </a>
            </div>
            <div id="menucontainer">
                <div id="menuwrapper" class="flexbox">
                    <ul class="menubox flexbox">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html?#experience">Experience</a></li>
                        <li><a href="profile.html?projects">Projects</a></li>
                        <li class="p-profile-li flexbox" id="profileli"><a href="profile.html">Professional Profile</a></li>
                        <li><a href="library.html">Library</a></li>
                        <li><a href="index.html?#contact">Contact</a></li>
                    </ul>
                    <div class="ctabox flexbox">
                        <ul class="ctawrapper flexbox">
                            <li><a href="library.html" id="ctabag"><i class="fa-solid fa-bag-shopping"></i></a></li>
                            <li><a href="https://wa.me/9315540041?text=Hello Karan, I visited your website and checked some of your books and notes on library page. I wanted to know more about [ *WRITE HERE YOUR QUERY* ]" target="_blank" id="ctawtsp"><i class="fa-brands fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="menuicon" class="flexbox"><i class="fa-solid fa-bars"></i></div>
        </div>
    </div>`;
    // ------- End Header Injection -------

    // ------- Mobile Menu Toggle -------
    const menuIcon = document.getElementById("menuicon");
    const menucontainer = document.getElementById("menucontainer");

    menuIcon.addEventListener("click", function (event) {
        menucontainer.classList.toggle("openmenu");
        event.stopPropagation();  // Prevent immediate closure
    });

    document.addEventListener("click", function (event) {
        // Close menu only if clicked outside of menu elements
        if (!menucontainer.contains(event.target) && event.target !== menuIcon) {
            menucontainer.classList.remove("openmenu");
        }
    });
    // ------- End Mobile Menu -------

});
// Opening and closing the tooltip
// window.addEventListener("DOMContentLoaded", function () {
//     const tooltip = document.getElementById("profiletooltip");
//     const profilelink = document.getElementById("profileli")

//     if (window.innerWidth>650) {
//         // Show on load
//         tooltip.style.visibility = "visible";
//         tooltip.style.opacity = "1";
    
//         // hide after 4 sec
//         setTimeout(() => {
//             tooltip.style.visibility = "hidden";
//             tooltip.style.opacity = "0";
//         }, 2000);
    
//         // HOver effect
//         profilelink.addEventListener("mouseenter", () => {
//             tooltip.style.visibility = "visible";
//             tooltip.style.opacity = "1";
//         })
//         profilelink.addEventListener("mouseleave", () => {
//             tooltip.style.visibility = "hidden";
//             tooltip.style.opacity = "0";
//         })
        
//     } else {
//         tooltip.style.visibility = "visible";
//             tooltip.style.opacity = "1";
//     }
// })