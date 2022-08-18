// Menu
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if(window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};