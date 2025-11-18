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
/* E O SCROLL LA MAIS LENTO QUANDO VOCE CLICA */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const start = window.scrollY;
        const end = element.offsetTop;
        const distance = end - start;
        const duration = 1200; /* AQUI E SE VC QUISER MUDAR O TEMPO, TA EM MILISEGUNDOS */
        let startTime = null;

        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = easeInOutQuad(progress);
          const newScroll = start + distance * ease;
          window.scrollTo(0, newScroll);
          
          if (progress < 1) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }
  });
});

