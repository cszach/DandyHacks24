document.addEventListener('DOMContentLoaded', e => {
    // Hamburger navigation

    let navigationLinks = document.querySelectorAll('nav li');
    let hamburgerCheckbox = document.querySelector('nav .peer');

    navigationLinks.forEach(navigationLink => {
      navigationLink.addEventListener('click', e => {
        hamburgerCheckbox.checked = false;
      });
    });
});
