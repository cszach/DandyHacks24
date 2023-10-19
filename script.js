document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const navBar = document.querySelector('nav');
    const navigationLinks = navBar.querySelectorAll('li');
    const hamburgerCheckbox = navBar.querySelector('.peer');

    // Hamburger navigation

    navigationLinks.forEach(navigationLink => {
        navigationLink.addEventListener('click', () => {
            hamburgerCheckbox.checked = false;
        });
    });

    // Navbar appears on scroll down and hides on scroll up

    let lastScrollY = wrapper.scrollTop;

    wrapper.addEventListener('scroll', () => {
        wrapper.scrollTop - lastScrollY > 0 ? hideNavBar() : showNavBar();
        lastScrollY = wrapper.scrollTop;
    });

    function hideNavBar() {
        navBar.classList.add('-translate-y-full');
        navBar.classList.remove('translate-y-0');
    }

    function showNavBar() {
        navBar.classList.add('translate-y-0');
        navBar.classList.remove('-translate-y-full');
    }

    // Close navigation menu when the dark overlay is clicked on

    const darkOverlay = navBar.querySelector('.bg-black');

    darkOverlay.addEventListener('click', () => {
        hamburgerCheckbox.checked = false;
    });

    // particles.js

    particlesJS.load('particles-js', 'assets/particlesjs-config.json');
});
