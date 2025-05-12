// Importing the required Header and Menu CSS
document.addEventListener("DOMContentLoaded", function () {
    LoadHeader(); // call your function

    // before header element
    // Define the function to show/hide #beforeheader
    function toggleBeforeHeader() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const header = document.getElementById("beforeheader");

        if (scrollTop < 60) {
            header.style.display = "none";
        } else {
            header.style.display = "block";
        }
    }

    // Run the function once immediately on load
    toggleBeforeHeader();

    // Run the function every time user scrolls
    window.addEventListener("scroll", toggleBeforeHeader);


    // ********** Menu Icon *************
    const menuIcon = document.getElementById('menu-icon');
    const menubox = document.getElementById('menubox');
    // Toggle submenu visibility on menu click
    menuIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the window
        menubox.classList.toggle("show-menubox");
    });

    // Hide submenu when clicking anywhere else
    window.addEventListener("click", () => {
        menubox.classList.remove("show-menubox");
    });

    // Prevent submenu clicks from hiding it
    menubox.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from propagating to window
    });

    // Footer is here
    LoadFooter();
});

function LoadHeader() {
    document.getElementById("header").innerHTML = `
    <div class="logo">
            <a href="index.html">
                <img src="Img-Assets/main_logo.svg" alt="Logo Karan Kushwaha">
            </a>
        </div>
        <div id="menubox">
            <ul class="menu">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="library.html">Library</a>
                </li>
                <li>
                    <a href="services.html">Services</a>
                </li>
                <li>
                    <a href="projects.html">Projects</a>
                </li>
                <li>
                    <a href="index.html?#about">About-Me</a>
                </li>
                <li>
                    <a href="index.html?#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="right-header">
            <ul>
                <li id="cart">
                    <a href="library.html">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/9315540041?text=Hello Karan, I visited your website and checked some of your books and notes on library page. I wanted to know more about [ *Write here your query..* ]" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </li>
            </ul>
        </div>
        <div id="menu-icon"><i class="fa-solid fa-bars"></i></div>
    `;
}

function LoadFooter() {
    document.getElementById("footer").innerHTML =`
    <div class="row1footer">
            <div class="footer-logo">
                <a href="index.html"><img src="Img-Assets/main_logo.svg" loading="lazy"
                        alt="Logo Karan Kushwaha"></a>
                        <img src="Img-Assets/karan kushwaha.jpg" alt="karan kushwaha" loading="lazy">
            </div>
            <div class="about-website">
                <div class="textbox">
                    <p>This website has been meticulously designed and developed by Karan Kushwaha as a part of
                        his heartfelt dream project. With unwavering dedication and passion, Karan has created
                        this platform to empower and support students from commerce backgrounds. This initiative
                        aims to provide invaluable resources, guidance, and opportunities that will benefit
                        countless aspiring learners on their educational journey.</p>
                </div>
            </div>
        </div>
        <div class="row2footer">
            <div class="social-links">
                <a href="https://www.linkedin.com/in/karankushwaha" target="_blank"><i
                        class="fa-brands fa-linkedin"></i></a>
                <a href="https://youtube.com/@karan_kushwaha09?si=UCfHJmEtm0ATgaMZ" target="_blank"><i
                        class="fa-brands fa-youtube"></i></a>
                <a href="https://x.com/KaranKushwaha_" target="_blank"><i
                        class="fa-brands fa-square-x-twitter"></i></a>
            </div>
        </div>
        <div class="row3footer">
            <p>Karan Kushwaha. &copy; 2025, All Rights Reserved.</p>
            <p>Created and Maintained by Karan Kushwaha.</p>
        </div>
    `;
}