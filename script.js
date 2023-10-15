document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('nav');
    const navigationLinks = navBar.querySelectorAll('li');
    const hamburgerCheckbox = navBar.querySelector('.peer');

    // Hamburger navigation

    navigationLinks.forEach(navigationLink => {
      navigationLink.addEventListener('click', () => {
        document.body.classList.remove('overflow-hidden');
        hamburgerCheckbox.checked = false;
      });
    });

    // Navbar appears on scroll down and hides on scroll up

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        window.scrollY - lastScrollY > 0 ? hideNavBar() : showNavBar();
        lastScrollY = window.scrollY;
    });

    function hideNavBar() {
        navBar.classList.add('-translate-y-full');
        navBar.classList.remove('translate-y-0');
    }

    function showNavBar() {
        navBar.classList.add('translate-y-0');
        navBar.classList.remove('-translate-y-full');
    }

    // Disable scrolling when navigation menu is visible

    hamburgerCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('overflow-hidden');
        }
    });
});
