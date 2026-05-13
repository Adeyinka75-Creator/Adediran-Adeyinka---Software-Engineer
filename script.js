// SELECT ELEMENTS

const menu = document.getElementById("menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.getElementById("closeMenu");

// OPEN MENU

menu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// CLOSE MENU

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
