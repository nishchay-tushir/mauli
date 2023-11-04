
    document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const overlay = document.querySelector('.overlay');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });

    burgerMenu.addEventListener('click', function () {
        dropdownMenu.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        dropdownMenu.classList.remove('active');
    });
});
