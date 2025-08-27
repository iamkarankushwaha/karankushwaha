document.addEventListener("DOMContentLoaded", function () {
    // ------- Header Element Injection -------
    document.getElementById("header").innerHTML = `
    <div class="container bg-primary border-dark shadow">
            <div class="flex justify-between items-center pt-2 pb-2">
                <div class="flex p-4 pt-2 pb-2">
                    <a href="index.html" style="width: 3rem; height: 3rem;">
                        <img src="Img-Assets/main_logo.svg" alt="Logo-Karan-Kushwaha" style="width: 3rem; height: 3rem;">
                    </a>
                </div>
                <nav class="w-full p-4 pt-2 pb-2 z-50 transition-all" id="navbar">
                    <div class="nav-wrapper flex justify-between items-center gap-12 bg-primary">
                        <ul class="w-full flex justify-center nav flex-wrap gap-2">
                            <button class="btn-close z-50" role="button" style="display:none; ;" onclick="closeMenu()"><i class="fi fi-rr-cross"></i></button>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html?#experience">Experience</a></li>
                            <li><a href="profile.html?projects">Projects</a></li>
                            <li><a href="library.html">Library</a></li>
                            <li><a href="index.html?#contact">Contact</a></li>
                        </ul>
                        <ul class="flex nav w-full">
                            <li><a href="library.html" id="ctabag" onclick="event.preventDefault(); OpenBag()"
                                    class="btn btn-primary header-main-btn"><i class="fi fi-rr-backpack"></i><span
                                        class="p-2" style="padding-right: 0px;">Back Pack</span>
                                </a>
                            </li>
                            <!-- <li><a href="https://wa.me/9315540041?text=Hello Karan, I visited your website and checked some of your books and notes on library page. I wanted to know more about [ *WRITE HERE YOUR QUERY* ]" target="_blank" id="ctawtsp"><i class="fi fi-brands-whatsapp"></i></a></li> -->
                        </ul>
                    </div>
                </nav>
                <div class="menu-btn-box flex p-4 pt-2 pb-2 hidden">
                    <button class="p-0 bg-transparant" role="menu" onclick="openMenu()" style="
    background: transparent;
    color: var(--text-primary); border: 0;"><i class="fi fi-rr-menu-burger text-base"></i></button>
                </div>
            </div>
        </div>
    `;
    // ------- End Header Injection -------

    // ------- Mobile Menu Toggle ------
})
function openMenu(){
    document.getElementById("navbar").classList.add("mobileMenu");
}
function closeMenu(){
    document.getElementById("navbar").classList.remove("mobileMenu");

}


