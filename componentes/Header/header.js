document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      document.querySelector(".menu-container").classList.toggle("show");
    });
  }

  // Agregar efecto al hacer scroll solo si existe el header
});

const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
