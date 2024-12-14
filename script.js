const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlideIndex = 0;

function updateSlidePosition(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

nextButton.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlidePosition(currentSlideIndex);
});

prevButton.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlidePosition(currentSlideIndex);
});

window.addEventListener("resize", () => {
  updateSlidePosition(currentSlideIndex);
});
