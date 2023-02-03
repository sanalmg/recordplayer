/* Global variables */
const menuButton = document.querySelector('.menu-btn');
const menuCloseButton = document.querySelector('.menu-close-btn')
const sidebarMenu = document.querySelector('.collections')


/* Sidebar menu function */

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!sidebarMenu.classList.contains('on')) {
        sidebarMenu.classList.add('on');
    }
});
menuCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (sidebarMenu.classList.contains('on')) {
        sidebarMenu.classList.remove('on');
    }
});