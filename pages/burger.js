const openMenu = document.querySelector('.hamburger__open');
const closeMenuBurger = document.querySelector('.hamburger__close');
const shadow = document.querySelector('.shadow');
const burgerMenu = document.querySelector('.burger__menu');
const navLink = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

openMenu.addEventListener('click', () => {
  burgerMenu.classList.add('burger__menu_open');
  shadow.classList.add('shadow_open');
  body.classList.add('scroll');
});

closeMenuBurger.addEventListener('click', closeMenu);
shadow.addEventListener('click', closeMenu);
navLink.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  burgerMenu.classList.remove('burger__menu_open');
  shadow.classList.remove('shadow_open');
  body.classList.remove('scroll');
}
