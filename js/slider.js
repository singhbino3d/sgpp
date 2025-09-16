const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

// Show the first slide on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});
