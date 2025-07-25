document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("footer").innerHTML = `
    <div class="footer-container flexbox">
                <div class="footer-logo">
                    <a href="#" class="logo">
                        <img src="Img-Assets/main_logo_whiteBg.png" alt="">
                    </a>
                    <p class="footer-text">Portfolio website of Karan Kushwaha to represent him and his professional presence.</p>
                </div>
                
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html?#experience">Experience</a></li>
                        <li><a href="profile.html?#projects">Projects</a></li>
                        <li><a href="profile.html">Professional Profile</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a onclick="DownloadResume()">Resume</a></li>
                        <li><a href="library.html">Free Resources</a></li>
                        <li><a href="profile.html?#projects">Templates</a></li>
                        <li><a href="index.html?#socialmedia">Videos/Blogs</a></li>
                    </ul>
                </div>
            </div>
        
            <div class="footer-bottom flexbox">
                <p>&copy; 2025 karankushwaha.in | All rights reserved.</p>
                <div class="ctalinks flexbox">
                        <a href="mailto:karankushwaha.in@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/karankushwaha" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://youtube.com/@karan_kushwaha09?si=UCfHJmEtm0ATgaMZ" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                        <a href="tel:+919315540041" target="_blank"><i class="fa-solid fa-phone"></i></a>
                        <a href="https://wa.me/919315540041" target="_blank"><i class="fa-brands fa-solid fa-whatsapp"></i></a>
                </div>
            </div>
    `;
});