// Header Switches
window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    if(window.scrollY>80){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
})


// menu works
function openMenu(){
    const navbar = document.getElementById('navbar');
    navbar.classList.add('openMenu');
}
function closeMenu(){
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('openMenu');
}
const navbar = document.getElementById('navbar');
navbar.addEventListener('click', closeMenu);
