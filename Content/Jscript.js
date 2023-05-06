const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const slideWidth = slider.clientWidth / 3; // adjust based on the maximum number of slides to display
let currentIndex = 0;

function goToSlide(index) {
    if (index < 0 || index >= slides.children.length) return;

    slides.style.left = -(slideWidth * index) + "px";
    currentIndex = index;
}

function goToNextSlide() {
    if (currentIndex < slides.children.length - 3) {
        goToSlide(currentIndex + 1);
    }
}

function goToPrevSlide() {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    }
}

document.querySelector(".prev").addEventListener("click", goToPrevSlide);
document.querySelector(".next").addEventListener("click", goToNextSlide);
