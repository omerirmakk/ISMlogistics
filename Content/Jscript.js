window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar_main");

    if (window.pageYOffset > 0) {
        navbar.classList.add("bg-nav");
    };
})


const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.clientWidth / 3;
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
