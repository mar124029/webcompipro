document.addEventListener("DOMContentLoaded", function () {
  function initializeCarousel() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) {
      console.warn("No se encontraron slides. Reintentando...");
      setTimeout(initializeCarousel, 100); // Reintentar en 100ms
      return;
    }

    let currentIndex = 0;

    function showNextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
  }

  // Llamar a la función cuando los elementos estén disponibles
  setTimeout(initializeCarousel, 100);
});
