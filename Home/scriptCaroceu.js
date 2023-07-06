var carouselSlide = document.querySelector(".carousel-slide");
var carouselItems = document.querySelectorAll(".carousel-item");
var prevBtn = document.querySelector(".carousel-prev");
var nextBtn = document.querySelector(".carousel-next");
var slideWidth = carouselItems[0].clientWidth;
var slideIndex = 0;

function updateSlidePosition() {
  carouselSlide.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = carouselItems.length - 1;
  }
  updateSlidePosition();
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= carouselItems.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
}

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);