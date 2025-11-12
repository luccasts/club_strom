/*CAROUSEL */
var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "center",
  contain: true,
  autoPlay: true,
});

/*MENU HAMBURGER */
const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("nav-bar");
const backgroundToggle = document.getElementById("background-menu-toggle");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navBar.classList.toggle("active");
  backgroundToggle.classList.toggle("active");
});

document.querySelectorAll("#nav-bar a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navBar.classList.remove("active");
    backgroundToggle.classList.remove("active");
  });
});
