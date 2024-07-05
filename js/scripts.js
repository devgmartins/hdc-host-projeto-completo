const menuMobileBtn = document.querySelector(".hamburguer");
const mobileMenu = document.querySelector(".mobile-links");

const toggleMenu = () => {
  mobileMenu.classList.toggle("hide");
};

menuMobileBtn.addEventListener("click", toggleMenu);
