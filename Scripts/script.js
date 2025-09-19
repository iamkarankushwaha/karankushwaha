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
    const navcontainer = document.getElementById('navcontainer');
    navcontainer.classList.add('openMenu');
}
function closeMenu(){
    const navcontainer = document.getElementById('navcontainer');
    navcontainer.classList.remove('openMenu');
}
const navcontainer = document.getElementById('navcontainer');
navcontainer.addEventListener('click', closeMenu);
