const menuEmail = document.querySelector(".navbar-email");
const desktoMenu = document.querySelector(".desktop-menu");
const menuBurguerIcon = document.querySelector(".menu");
const menuBurguer = document.querySelector(".mobile-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurguerIcon.addEventListener("click", toggleBurguer);


function toggleDesktopMenu() {
  desktoMenu.classList.toggle("inactive");
}
function toggleBurguer() {
  menuBurguer.classList.toggle("inactive");
}
