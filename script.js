// Track slide positions separately for photos and videos
let currentIndex = {
  photo: 0,
  video: 0
};

function moveSlide(type, direction) {

  const track = document.getElementById(type + "-track");
  const slides = track.children;
  const totalSlides = slides.length;

  currentIndex[type] += direction;

  if (currentIndex[type] < 0) {
    currentIndex[type] = totalSlides - 1;
  }

  if (currentIndex[type] >= totalSlides) {
    currentIndex[type] = 0;
  }

  track.style.transform =
    "translateX(-" + (currentIndex[type] * 100) + "%)";
}