let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const totalSlides = images.length;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let autoSlideInterval;

// Initialize carousel
function initCarousel() {
  updateSlide();
  updateButtons();
//   startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (slideIndex < totalSlides - 1) {
      slideIndex++;
      updateSlide();
      updateButtons();
    } else {
      clearInterval(autoSlideInterval);
    }
  }, 5000);
}

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function updateButtons() {
  // Disable prev button on first slide
  if (slideIndex === 0) {
    prevButton.disabled = true;
    prevButton.style.opacity = '0.5';
    prevButton.style.cursor = 'default';
  } else {
    prevButton.disabled = false;
    prevButton.style.opacity = '0.7';
    prevButton.style.cursor = 'pointer';
  }

  // Disable next button on last slide
  if (slideIndex === totalSlides - 1) {
    nextButton.disabled = true;
    nextButton.style.opacity = '0.5';
    nextButton.style.cursor = 'default';
    clearInterval(autoSlideInterval);
  } else {
    nextButton.disabled = false;
    nextButton.style.opacity = '0.7';
    nextButton.style.cursor = 'pointer';
    // Restart auto-slide if not already running
    if (!autoSlideInterval) {
      startAutoSlide();
    }
  }
}

nextButton.addEventListener('click', () => {
  if (slideIndex < totalSlides - 1) {
    slideIndex++;
    updateSlide();
    updateButtons();
  }
});

prevButton.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlide();
    updateButtons();
  }
});

// Initialize the carousel on page load
document.addEventListener('DOMContentLoaded', initCarousel);