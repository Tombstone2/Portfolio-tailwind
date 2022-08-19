const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

// Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
    if(e.target != menu && e.target != navMenu) {
        menu.classList.remove('menu-active');
        navMenu.classList.add('hidden');
    }
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Dark Mode
const darkMode = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkMode.addEventListener('click', function() {
    if(darkMode.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Position toggle Dark Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.checked = true;
  } else {
    darkMode.checked = false;
  }