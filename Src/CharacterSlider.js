// Slider Logic
const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initiliaseSlider);

function initiliaseSlider() {
    slides [slideIndex].classList.add("displaySlide");
    
}
function showSlide(index) {}
function prevSlide() {}
function nextSlide() {}