// // let slideIndex = 0;
// // const slides = document.querySelector('.carousel-slide');
// // const images = document.querySelectorAll('.carousel-slide img');
// // const totalSlides = images.length;
// // const nextButton = document.querySelector('.next');
// // const prevButton = document.querySelector('.prev');
// // let autoSlideInterval;

// // // Initialize carousel
// // function initCarousel() {
// //   updateSlide();
// //   updateButtons();
// // //   startAutoSlide();
// // }

// // function startAutoSlide() {
// //   autoSlideInterval = setInterval(() => {
// //     if (slideIndex < totalSlides - 1) {
// //       slideIndex++;
// //       updateSlide();
// //       updateButtons();
// //     } else {
// //       clearInterval(autoSlideInterval);
// //     }
// //   }, 5000);
// // }

// // function updateSlide() {
// //   slides.style.transform = `translateX(-${slideIndex * 100}%)`;
// // }

// // function updateButtons() {
// //   // Disable prev button on first slide
// //   if (slideIndex === 0) {
// //     prevButton.disabled = true;
// //     prevButton.style.opacity = '0.5';
// //     prevButton.style.cursor = 'default';
// //   } else {
// //     prevButton.disabled = false;
// //     prevButton.style.opacity = '0.7';
// //     prevButton.style.cursor = 'pointer';
// //   }

// //   // Disable next button on last slide
// //   if (slideIndex === totalSlides - 1) {
// //     nextButton.disabled = true;
// //     nextButton.style.opacity = '0.5';
// //     nextButton.style.cursor = 'default';
// //     clearInterval(autoSlideInterval);
// //   } else {
// //     nextButton.disabled = false;
// //     nextButton.style.opacity = '0.7';
// //     nextButton.style.cursor = 'pointer';
// //     // Restart auto-slide if not already running
// //     if (!autoSlideInterval) {
// //       startAutoSlide();
// //     }
// //   }
// // }

// // nextButton.addEventListener('click', () => {
// //   if (slideIndex < totalSlides - 1) {
// //     slideIndex++;
// //     updateSlide();
// //     updateButtons();
// //   }
// // });

// // prevButton.addEventListener('click', () => {
// //   if (slideIndex > 0) {
// //     slideIndex--;
// //     updateSlide();
// //     updateButtons();
// //   }
// // });

// // // Initialize the carousel on page load
// // document.addEventListener('DOMContentLoaded', initCarousel);


// const slidesContainer = document.querySelector('.carousel-slide');
// const nextButton = document.querySelector('.next');
// const prevButton = document.querySelector('.prev');

// let slideWidth = slidesContainer.querySelector('img').clientWidth;
// let isAnimating = false;

// // Move forward
// nextButton.addEventListener('click', () => {
//   if (isAnimating) return;
//   isAnimating = true;

//   slidesContainer.style.transition = 'transform 0.5s ease-in-out';
//   slidesContainer.style.transform = `translateX(-${slideWidth}px)`;

//   slidesContainer.addEventListener('transitionend', function handler() {
//     slidesContainer.appendChild(slidesContainer.firstElementChild); // move first image to end
//     slidesContainer.style.transition = 'none';
//     slidesContainer.style.transform = 'translateX(0)';
//     isAnimating = false;
//     slidesContainer.removeEventListener('transitionend', handler);
//   });
// });

// // Move backward
// prevButton.addEventListener('click', () => {
//   if (isAnimating) return;
//   isAnimating = true;

//   // Move last image to start
//   slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild);
//   slidesContainer.style.transition = 'none';
//   slidesContainer.style.transform = `translateX(-${slideWidth}px)`;

//   // Animate to 0
//   setTimeout(() => {
//     slidesContainer.style.transition = 'transform 0.5s ease-in-out';
//     slidesContainer.style.transform = 'translateX(0)';
//   }, 20);

//   slidesContainer.addEventListener('transitionend', function handler() {
//     isAnimating = false;
//     slidesContainer.removeEventListener('transitionend', handler);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelector(".carousel-slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    const totalSlides = dots.length;
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
  }

  window.currentSlide = function (n) {
    showSlide(n);
  };

  showSlide(0);
});
