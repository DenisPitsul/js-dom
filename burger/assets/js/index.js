const burgerMenu = document.querySelector('.burgerMenuContainer');
const burgerMenuBtn = document.querySelector('.burgerMenuBtn');
const screenOverlay = document.querySelector(".fullScreenOverlay");

burgerMenuBtn.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('burgerMenuContainerHide');
    burgerMenu.classList.toggle('burgerMenuContainerActive');
});

screenOverlay.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('burgerMenuContainerHide');
    burgerMenu.classList.toggle('burgerMenuContainerActive');
});